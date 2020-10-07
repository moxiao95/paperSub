<template>
    <div id="login">
        <div class="login-top"></div>
        <div class="login-contnet">
            <div class="content-left"></div>
            <div class="content-right">
                <header class="conter-head">毕业论文与答辩管理系统</header>
                <div class="content-select">
                    <el-radio v-model="loginRadio" label="1">学生登录</el-radio>
                    <el-radio v-model="loginRadio" label="2">老师登录</el-radio>
                </div>
            </div>
        </div>
        <div class="login-bottom"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            loginRadio: '1',
        };
    },

    methods: {

    },
}
</script>

<style lang="scss">
    #login {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: url(../image/login/bg.png) no-repeat center;

        .login-top {
            height: 184px;
            background: url(../image/login/top.png) no-repeat center;
        }

        .login-contnet {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            width: 890px;
            height: 400px;
            background: #fff;
            border-radius: 10px;

            .content-left {
                float: left;
                width: 520px;
                height: 400px;
                background: url(../image/login/left.png) no-repeat center;
                border-radius: 10px 0 0 10px;
            }

            .content-right {
                float: left;
                width: 370px;
                height: 400px;

                .conter-head {
                    height: 70px;
                    font: bold 20px/70px "微软雅黑";
                    text-align: center;
                    background: #eee;
                    border-radius: 0 10px 0 0;
                    color: #1369d7;
                    border-bottom: 1px solid #dadada;
                }

                .content-select {
                    height: 40px;
                    text-align: center;
                    line-height: 40px;
                }
            }
        }

        .login-bottom {
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 184px;
            background: url(../image/login/bottom.png) no-repeat center;
        }
    }
</style>