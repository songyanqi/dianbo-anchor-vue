<template>
    <ComHeader/>
    <div class="hall-warpper">
        <div class="hall-header flex flex-pack-justify flex-align-center">
            <p>我的放映厅</p>
            <p class="hall-know">厅主须知</p>
        </div>
        <div class="content">
            <h1>test count: {{count}}</h1>
            <div>count * 2 = {{doubleCount}}</div>
            <button @click="addBtn">add</button>
        </div>
    </div>
    <ComFooter/>
</template>
<script>
import ComHeader from '@/components/ComHeader.vue'
import ComFooter from '@/components/ComFooter.vue'
import { ref , computed , watch } from "vue";
export default {
    name: 'Hall',
    components: {
        ComHeader, ComFooter
    },
    setup () {
        const count = ref(0)
        const addBtn = ()=>{
            count.value ++ 
        }
        // 监听器 watch 同样是一个方法，它包含 2 个参数，2 个参数都是 function：
        // 第一个参数是监听的值，count.value 表示当 count.value 发生变化就会触发监听器的回调函数，即第二个参数，第二个参数可以执行监听时候的回调
        watch(() => count.value, val => {
            console.log(`count is ${val}`)
        })
        // 计算属性 computed 是一个方法，里面需要包含一个回调函数，当我们访问计算属性返回结果时，会自动获取回调函数的值：
        const doubleCount = computed(() => count.value * 2)
        return {
            count,
            addBtn,
            doubleCount
        }
    }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    .hall-warpper {
        width: 1000px;
        min-height: 760px;
        background: #fff;
        margin: 18px auto 0;
        border-radius: 4px;
        .hall-header {
            width: 960px;
            height: 50px;
            margin: 0 auto;
            border-bottom: #f5f5f5 1px solid;
            p {
                font-size: 14px;
                color: #666;
                font-weight: 900;
            }
            .hall-know {
                width: 76px;
                height: 24px;
                font-size: 0;
                background: url("~@/assets/img/know_normal@2x.png") no-repeat center;
                background-size: 100%;
            }
        }
    }
</style>
