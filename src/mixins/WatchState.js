

const WatchState= {
    name: 'WatchState',
    data() {
        return {

        }
    },
    watch:{
        screen(){
            deep:true,
                this.drawChart()
        }
    },
    computed: {
        screen(){
            return this.$store.state.screen
        }
    }
}
export  default  WatchState
