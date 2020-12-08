<template>
    <div class="com-footer flex flex-pack-justify flex-align-center">
        <div class="com-footer-l">
            <p>京ICP备17053787号</p>
            <p>北京清奇科技有限公司</p>
            <p>京网文〔2020〕0084-019号</p>
        </div>
<!-- 下载客户端 . 微博 . 厅主协议 . 厅主须知 . 用户协议 . 关于我们 -->
        <div class="com-footer-r">
            <span class="text" v-for="(item,index) in arrList.list" :key="index">
				{{item.name}}
				<em v-if="arrList.list.length-1 != index">.</em>
			</span>
        </div>
    </div>
</template>
<script>
import { ref } from 'vue'
export default {
	setup(){
		const arrList = ref({
			list:[{name:'下载客户端' },{name:'微博'},{name:'厅主协议' },{name:'厅主须知' },{name:'用户协议' },{name:'关于我们' }]
		})
		return {
			arrList
		}
	}
}
</script>
<style lang="scss" scoped>
.com-footer {
	width: 1000px;
	height: 120px;
	margin: 0 auto;
	.com-footer-l {
		font-size:13px;
		color: #9f9fa3;
		line-height: 20px;
		p {
			text-align: left;
		}
	}
    .com-footer-r {
		font-size: 0;
		color: #9f9fa3;
        // float: right;
        .text {
           color: #9f9fa3;
		   font-size: 13px;
	   }
	   em {
		   display: inline-block;
		   vertical-align: bottom;
		   font-size: 20px;
		   padding: 0 8px 0 5px;
	   }
    }
}
</style>
