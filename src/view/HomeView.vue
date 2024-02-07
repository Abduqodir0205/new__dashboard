<template >
    <div class="view">
        <SiteBar/>
        <div class="main">
            <navbar/>
            <span>
                <router-view></router-view>
            </span>
        </div>
    </div>
</template>
<script>
import navbar from '../components/navbar.vue';
import SiteBar from '../components/SiteBar.vue';
export default {
    data() {
        return {
            
        }
    },
    components:{
        navbar,
        SiteBar,
    }
}
</script>
<style lang="scss">
    // .view{
    //     display: grid;
    //     grid-template-areas: 
    //     'bar nav nav nav'
    //     'bar main main main'
    //     'bar main main main'
    //     'bar main main main'
    //     ;
    //     SiteBar{
    //         grid-area: bar;
    //     }
    //     navbar{
    //         grid-area: nav;
    //     }
    // }

    .view{
        display: flex;
        // align-items: ;
        min-height: 100vh;
        background: linear-gradient(to right, rgba(246, 250, 253, 0.9) 0 70%,  rgba(238, 246, 251, 0.9) 70% 100%);
    }
    navbar{
        width: 100vw;
    }
    .main{
        span{
            padding: 1rem;
        }
        width: 100%;
        display: flex;
        flex-direction: column;
    }
</style>