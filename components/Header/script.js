export default {
    name: 'Header',
    // setup() {

    //     const getLoadingStatus = () => {
    //         // console.log(this.$store.getters.isLoadingStarted);
    //         // console.log(this.$store.getters.isLoadingCompleted);
    //         console.log(this);
    //     }

    //     return {
    //         getLoadingStatus
    //     }
    // },
    methods: {
        getLoadingStatus() {
            // console.log(this.$store);
            console.log(this.$store.getters['preloader/isLoadingCompleted']);
            // console.log(this.$store.getters.isLoadingCompleted);
        }
    }
}