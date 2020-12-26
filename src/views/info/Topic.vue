<template>
    <div class="topic">
        <header class="topic-head">
            <span class="topic-title">选题信息</span>
            <span
                class="topic-close"
                @click="closeTopicPage"
            ></span>
        </header>
        <ul class="topic-info">
            <li>
                <span>1</span>
                <p>2</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },

    methods: {
        // 关闭当前选题页面
        closeTopicPage() {
            this.$router.go(-1);
        },
    },
}
</script>

<style lang="scss">
    .topic {
        width: 70%;
        margin: 2% 15% 0;
        height: 90%;
        border-radius: 5px;
        background: rgb(255, 255, 255);
        box-shadow: 3px 3px 3px rgb(170, 169, 169);

        .topic-head {
            height: 50px;
            background: rgb(247, 247, 247);
            border-bottom: 1px solid rgb(230, 230, 230);

            .topic-title {
                float: left;
                height: 50px;
                margin-left: 10px;
                font: 14px/50px "微软雅黑";
            }

            .topic-close {
                float: right;
                width: 50px;
                height: 50px;
                background: url(../../image/page/close.png) no-repeat center;
                background-size: 50%;
                cursor: pointer;
            }
        }

        .topic-list {
            padding: 5px 20px;

            li {
                height: 50px;
                margin: 5px 0;
                border-radius: 3px;
            }
        }
    }
</style>