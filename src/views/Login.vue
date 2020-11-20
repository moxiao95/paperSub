<template>
    <div
        id="login"
        v-loading="loadingState"
        element-loading-text="正在验证中"
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 0.8)"
    >
        <div class="login-top"></div>
        <div class="login-contnet">
            <div class="content-left"></div>
            <div class="content-right">
                <header class="conter-head">毕业论文与答辩管理系统</header>
                <div class="content-box">
                    <div class="content-user">
                        <span class="user-img"></span>
                        <el-input
                            v-model="userInput"
                            placeholder="请输入学号"
                            class="content-input"
                        ></el-input>
                    </div>
                    <div class="content-password">
                        <span class="password-img"></span>
                        <el-input
                            v-model="passwordInput"
                            placeholder="请输入密码"
                            show-password
                            class="content-input"
                        ></el-input>
                    </div>
                </div>
                <div class="content-btn">
                    <el-button
                        type="primary"
                        class="btn-login"
                        @click="toLogin"
                    >登录</el-button>
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
            userInput: '',
            passwordInput: '',
            loadingState: false,
        };
    },

    methods: {
        toLogin() {
            this.loadingState = true;
            if (this.userInput === '') {
                this.loadingState = false;
                this.$message.error('用户名不能为空');
                return;
            } else if (this.passwordInput === '') {
                this.loadingState = false;
                this.$message.error('密码不能为空');
                return;
            }
            localStorage.setItem('cookies', this.userInput);
            this.loadingState = false;
            this.$router.push('/');
        },
    },
};
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

                .content-box {
                    text-align: center;
                    padding-top: 50px;

                    .content-user,
                    .content-password {
                        height: 40px;
                        margin: 20px 0;

                        .user-img,
                        .password-img{
                            display: inline-block;
                            width: 36px;
                            height: 36px;
                            padding: 1px;
                            border: 1px solid rgba(206, 206, 206, .5);
                            vertical-align: top;
                            border-radius: 2px;
                        }

                        .user-img {
                            background: url(../image/login/yh.png) no-repeat center;
                        }

                        .password-img {
                            background: url(../image/login/mm.png) no-repeat center;
                        }

                        .content-input {
                            width: 200px;
                        }
                    }
                }

                .content-btn {
                    text-align: center;
                    padding-top: 20px;

                    .btn-login {
                        width: 240px;
                    }
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