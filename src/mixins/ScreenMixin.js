import store from '@/store/'
import { mapActions, mapGetters } from 'vuex'
import VueStorage from 'vue-ls'
import Vue from 'vue'

export default {
    name: 'ScreenMixin',
    data() {
        return {
            screenSocket: null,
            lockReconnect: false,
            wsClose: false,
            timer: null,
            msg: {
                topic: 'center',
                params: {
                    tenant_id: '',
                    pastureId: '1'
                }
            }
        }
    },
    computed: {
        ...mapGetters(['getScreenData'])
    },
    created() {
        this.initScreenSocket();
    },
    beforeDestroy() {
        // 离开页面生命周期函数
        this.normalClose();
        // this.setScreenData({})
        console.log('此为destory')
    },

    methods: {
        ...mapActions(['setScreenData']),
        onPause() {
            if (this.timer == null) {
                this.initTimer();
            } else {
                this.destroyTimer();
            }
        },

        initTimer() {
            this.timer = setInterval(() => {
                const json = JSON.stringify(this.msg);
                this.websocketSend(json);
                console.log('已发送一次心跳包')
            }, 2000)
        },

        // 销毁心跳包发送
        destroyTimer() {
            clearInterval(this.timer);
            this.timer = null;
        },

        // 初始化连接时调用
        initScreenSocket() {
            // const userId = store.getters.userInfo.id;
            // const url = process.env.VUE_APP_API_BASE_URL + '/bigscreen/' + 'userId';
            // 获取租户id和用户名
            const tenant_id = this.$route.query.tenant_id || Vue.ls.get("TenantId");
            const user_name = this.$route.query.user_name || Vue.ls.get("UserName");
            const tenant_name = this.$route.query.tenantname || Vue.ls.get("tenantname");
            !Vue.ls.get("TenantId") && Vue.ls.set("TenantId", tenant_id);
            !Vue.ls.get("UserName") && Vue.ls.set("UserName", user_name);
            !Vue.ls.get("tenantname") && Vue.ls.set("tenantname", tenant_name);
            console.log(tenant_id, user_name, tenant_name);

            this.msg.params.tenant_id = tenant_id;
            const url = 'ws://192.168.1.135:8080/jeecg-boot/bigscreen/' + user_name;
            console.log(url);
            this.screenSocket = new WebSocket(url);
            this.screenSocket.onopen = this.websocketOnopen;
            this.screenSocket.onerror = this.websocketOnerror;
            this.screenSocket.onmessage = this.websocketOnmessage;
            this.screenSocket.onclose = this.websocketOnclose;
            console.log('ScreenSocket初始化成功');
        },

        // 正常关闭连接
        normalClose() {
            this.wsClose = true;
            this.screenSocket.close();
            setTimeout(() => {
                if (this.screenSocket.readyState === 3) {
                    this.screenSocket = null;
                    console.log('正常关闭时ws状态', this.screenSocket)
                }
            });
        },

        // 成功连接后调用
        websocketOnopen() {
            console.log('ScreenSocket连接已建立');

            this.initTimer();
        },

        // 接收到数据后调用
        websocketOnmessage(e) {
            // 将接收到的数据写入vuex
            const res = JSON.parse(e.data);
            this.setScreenData(res)
            console.log('收到数据，引用方法this.getScreenData');
            if (this.msg.topic == 'center' || this.msg.topic == 'ox' || this.msg.topic == 'divide') {
                this.$store.commit('setData3', this.getScreenData)
            }
            if (this.msg.topic == 'pasture') {
                this.$store.commit('setData4', this.getScreenData)
                // console.log(this.$store.state.screen2);
            }
            console.log(this.$store.state.screen);
        },

        // 发生异常时调用
        websocketOnerror(e) {
            console.log('ScreenSocket连接发生错误', e);

            // 重新连接
            this.reconnect();
        },

        // 连接关闭时调用
        websocketOnclose() {
            clearInterval(this.timer);
            this.timer = null;
            if (!this.wsClose) {
                this.reconnect();
            }
        },

        // 主动向服务器发送数据接口
        websocketSend(text) {
            // 数据发送
            try {
                this.screenSocket.send(text);
            } catch (err) {
                console.log('send failed (' + err.code + ')');
            }

        },

        // 重连方法
        reconnect() {
            var that = this;
            if (that.lockReconnect) return;
            that.lockReconnect = true;
            // 没连接上会一直重连，设置延迟避免请求过多
            setTimeout(function () {
                console.info('重连中...');
                that.initScreenSocket();
                that.lockReconnect = false;
            }, 5000);
        },
    }
}
