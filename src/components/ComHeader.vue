<template>
    <header class="com-warpper">
        <div class="com-header flex flex-pack-justify flex-align-center">
            <div class="com-header-l">
                <div class="header-logo"><img src="//img-cdn.vlightv.com/tools/image/icon.png" alt=""></div>
                <h3>微光</h3>
            </div>
            <!-- <div class="com-header-r">
                <div><img src="//img-cdn.vlightv.com/app/user_avatar_default.jpg" alt=""></div>
            </div> -->
        </div>
    </header>
    <!-- "@vue/standard" 关闭 eslint 验证 -->
</template>

<style lang="scss" rel="stylesheet/scss" scoped>
.com-warpper {
    width: 100%;
    height: 79px;
    background: #070707;
    margin: 0 auto;
    .com-header {
        width: 1000px;
        height: 100%;
        // background: pink;
        .com-header-l {
            display: inline-block;
            vertical-align: middle;
            // float: left;
            .header-logo {
                width: 44px;
                height: 44px;
                display: inline-block;
                vertical-align: middle;
                margin-right:16px;
                img {
                    width: 100%;
                    height: 100%;
                    min-width: 100%;
                }
            }
            h3 {
                display: inline-block;
                vertical-align: middle;
                font-weight: normal;
                // font-family: Microsoft Yahei;
                font-size: 32px;
                color: #fff;
            }
        }
        .com-header-r {
            float: right;
            a {
                color: #9f9fa3;
                font-size: 13px;
            }
        }
    }
}
</style>
