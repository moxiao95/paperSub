<template>
    <div id="login">
        <div class="login-top"></div>
        <div class="login-contnet">
            <div class="content-left"></div>
            <div class="content-right">
                
            </div>
        </div>
        <div class="login-bottom"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {

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