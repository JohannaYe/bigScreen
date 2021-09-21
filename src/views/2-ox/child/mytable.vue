<template>
    <div style="width: 100%;height: 100%;overflow-y: scroll" >
    <a-table  :columns="columns" :data-source="data"  >
        <a slot="date" slot-scope="text">{{ text }}</a>
    </a-table>
    </div>
</template>
<script>
    const columns = [
        {
            title: '发病日期',
            dataIndex: 'date',
            key: 'date',
            scopedSlots: { customRender: 'date' },
        },
        {
            title: '疾病类型',
            dataIndex: 'type',
            key: 'type',
            width: 80,
        },
        {
            title: '疾病名称',
            dataIndex: 'name',
            key: 'name',
            ellipsis: true,
        },
        {
            title: '治疗时间',
            dataIndex: 'time',
            key: 'time',
            ellipsis: true,
        },
        {
            title: '治疗结果',
            dataIndex: 'result',
            key: 'result',
            ellipsis: true,
        },
        {
            title: '主治兽医',
            dataIndex: 'doctor',
            key: 'doctor',
            ellipsis: true,
        },

    ];

    const data = [
        {
            key: '1',
            date: '2020.1.2',
            type: '药物治疗',
            name: '肿瘤',
            time:'2month',
            result:'成功',
            doctor:'安凯隆'
            // tags: ['nice', 'developer'],
        },
        {
            key: '2',
            date: '2020.1.2',
            type: '手术',
            name: '肿瘤',
            time:'2month',
            result:'成功',
            doctor:'张伟'
            // tags: ['nice', 'developer'],
        },
        {
            key: '3',
            date: '2020.1.2',
            type: '化学治疗',
            name: '肿瘤',
            time:'2month',
            result:'成功',
            doctor:'王泽龙'
            // tags: ['nice', 'developer'],
        },
        {
            key: '4',
            date: '2020.1.2',
            type: '药物治疗',
            name: '肿瘤',
            time:'2month',
            result:'成功',
            doctor:'安凯隆'
            // tags: ['nice', 'developer'],
        },
        {
            key: '5',
            date: '2020.1.2',
            type: '手术',
            name: '肿瘤',
            time:'2month',
            result:'成功',
            doctor:'张伟'
            // tags: ['nice', 'developer'],
        },
        {
            key: '6',
            date: '2020.1.2',
            type: '化学治疗',
            name: '肿瘤',
            time:'2month',
            result:'成功',
            doctor:'王泽龙'
            // tags: ['nice', 'developer'],
        },
        {
            key: '7',
            date: '2020.1.2',
            type: '药物治疗',
            name: '肿瘤',
            time:'2month',
            result:'成功',
            doctor:'安凯隆'
            // tags: ['nice', 'developer'],
        },
        {
            key: '8',
            date: '2020.1.2',
            type: '手术',
            name: '肿瘤',
            time:'2month',
            result:'成功',
            doctor:'张伟'
            // tags: ['nice', 'developer'],
        },
        {
            key: '9',
            date: '2020.1.2',
            type: '药物治疗',
            name: '肿瘤',
            time:'2month',
            result:'成功',
            doctor:'安凯隆'
            // tags: ['nice', 'developer'],
        },
        {
            key: '10',
            date: '2020.1.2',
            type: '手术',
            name: '肿瘤',
            time:'2month',
            result:'成功',
            doctor:'张伟'
            // tags: ['nice', 'developer'],
        },
        {
            key: '11',
            date: '2020.1.2',
            type: '化学治疗',
            name: '肿瘤',
            time:'2month',
            result:'成功',
            doctor:'王泽龙'
            // tags: ['nice', 'developer'],
        },
    ];

    export default {
        data() {
            return {
                data,
                columns,
            };
        },
        // created() {
        //     this.$nextTick(() => {
        //         const m =document.getElementsByClassName("ant-table-tbody")[0];
        //         const n =new Object(document.getElementsByClassName("ant-table-row"));
        //         const d=document.createElement("div")
        //         n.forEach(item=>{
        //             d.appendChild(item)
        //         })
        //         for (let i=m.childNodes.length-1 ; i >=0;i--){
        //             m.removeChild(m.childNodes[i])
        //         }
        //         m.appendChild(d)
        //         // console.log(m.childNodes)
        //         // m.removeChild(n)
        //         // d.appendChild(n)
        //         d.setAttribute("style","width:706px;height:172px;")
        //
        //         console.log(m)
        //         console.log(n)
        //     });
        // },
    };
</script>

<style lang="scss">
    .ant-table-thead>tr{
        line-height: 0.7rem;
        font-size: 0.7rem;
    }
    .ant-table-tbody>tr{
        line-height: 0.5rem;
        font-size: 0.7rem;
    }
    .ant-table-thead >tr>th{
       color: hotpink!important;
        background-color: #16ebff!important;

    }
    .ant-table-tbody{

        background-color: #07417a!important;
        color: darkkhaki!important;
    }

</style>

