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
            <li
                v-for="item in topicInfoList"
                :key="item.info"
            >
                <span>{{item.title}}：</span>
                <p>{{item.info}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            topicInfoList: [
                {
                    title: '学习中心',
                    info: '驻马店汉',
                },
                {
                    title: '专业',
                    info: '计算机',
                },
                {
                    title: '学生姓名',
                    info: '为',
                },
                {
                    title: '通信地址',
                    info: '实打实大所多',
                },
                {
                    title: '学生姓名',
                    info: '为',
                },
                {
                    title: '通信地址',
                    info: '实打实大所多',
                },
                {
                    title: '学生姓名',
                    info: '为',
                },
                {
                    title: '通信地址',
                    info: '实打实大所多',
                },
                {
                    title: '学生姓名',
                    info: '为',
                },
                {
                    title: '学生姓名',
                    info: '为',
                },
                {
                    title: '通信地址',
                    info: '实打实大所多',
                },
                {
                    title: '学生姓名',
                    info: '为',
                },
                {
                    title: '学生姓名',
                    info: '为',
                },
                {
                    title: '通信地址',
                    info: '实打实大所多',
                },
                {
                    title: '学生姓名',
                    info: '为',
                },
                {
                    title: '学生姓名',
                    info: '为',
                },
                {
                    title: '通信地址',
                    info: '实打实大所多',
                },
                {
                    title: '学生姓名',
                    info: '为',
                },
                {
                    title: '学生姓名',
                    info: '为',
                },
                {
                    title: '通信地址',
                    info: '实打实大所多',
                },
                {
                    title: '学生姓名',
                    info: '为',
                },
                {
                    title: '通信地址',
                    info: '实打实大所多',
                },
                {
                    title: '学生姓名',
                    info: '为',
                },
                {
                    title: '通信地址',
                    info: '实打实大所多',
                },
            ],
        };
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
        height: 700px;
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

        .topic-info {
            padding: 5px 20px;
            height: 635px;
            overflow: auto;

            &::-webkit-scrollbar {
				width: 3px;
			}
			&::-webkit-scrollbar-thumb {
				background: #d8d8d8;
				border-radius: 10px;
			}
			&::-webkit-scrollbar-track-piece {
				background: transparent;
			}

            li {
                height: 50px;
                margin: 10px 0;
                border-radius: 3px;

                span {
                    float: left;
                    width: 30%;
                    height: 50px;
                    text-align: right;
                }

                p {
                    float: right;
                    width: 65%;
                    height: 50px;
                    margin: 0;
                }
            }
        }
    }
</style>