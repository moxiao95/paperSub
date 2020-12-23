<template>
    <ul class="first">
        <li class="first-teacher-info">
            <header>
                <i></i>
                <span>{{firstInfo.title}}</span>
            </header>
            <div>
                <dl>
                    <dt>姓名：</dt>
                    <dd>{{firstInfo.name}}</dd>
                </dl>
                <dl>
                    <dt>性别：</dt>
                    <dd>{{firstInfo.gender}}</dd>
                </dl>
                <dl>
                    <dt>职称：</dt>
                    <dd>{{firstInfo.occupation}}</dd>
                </dl>
                <dl>
                    <dt>邮箱：</dt>
                    <dd>{{firstInfo.email}}</dd>
                </dl>
                <dl>{{firstInfo.more}}</dl>
            </div>
        </li>
        <li
            v-for="(item,index) in dataList"
            :key="index"
        >
            <header>
                <i>{{index + 1}}</i>
                <span>{{titleList[index].title}}</span>
                <b
                    v-if="titleList[index].see"
                    @click="enterInfo(titleList[index].title)"
                ></b>
            </header>
            <div>
                <dl>
                    <dt>开始时间：</dt>
                    <dd>{{item.start}}</dd>
                </dl>
                <dl>
                    <dt>结束时间：</dt>
                    <dd>{{item.end}}</dd>
                </dl>
                <dl>{{item.state === 0 ? "未完成" : "已通过"}}</dl>
            </div>
            <img :src="titleList[index].img" alt="">
        </li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            firstInfo: {
                title: '指导老师信息',
                name: '随机',
                gender: '男',
                occupation: '大学教师',
                email: '121121121@121.com',
                more: '如需更多请于学习中心联系',
            },
            titleList: [
                {
                    title: '申请开题',
                    see: false,
                    img: require('../image/page/1.png'),
                },
                {
                    title: '确定选题',
                    see: true,
                    img: require('../image/page/2.png'),
                },
                {
                    title: '初稿提交',
                    see: true,
                    img: require('../image/page/3.png'),
                },
                {
                    title: '终稿提交',
                    see: true,
                    img: require('../image/page/4.png'),
                },
                {
                    title: '论文查重',
                    see: true,
                    img: require('../image/page/5.png'),
                },
                {
                    title: '完成终稿',
                    see: false,
                    img: require('../image/page/6.png'),
                },
                {
                    title: '答辩安排',
                    see: false,
                    img: require('../image/page/7.png'),
                },
            ],
            dataList: [
                {
                    start: '2020-09-03',
                    end: '2020-09-03',
                    state: 1,
                },
                {
                    start: '2020-09-03',
                    end: '2020-09-03',
                    state: 1,
                },
                {
                    start: '2020-09-03',
                    end: '2020-09-03',
                    state: 1,
                },
                {
                    start: '2020-09-03',
                    end: '2020-09-03',
                    state: 1,
                },
                {
                    start: '2020-09-03',
                    end: '2020-09-03',
                    state: 1,
                },
                {
                    start: '2020-09-03',
                    end: '2020-09-03',
                    state: 1,
                },
                {
                    start: '2020-09-03',
                    end: '2020-09-03',
                    state: 0,
                },
            ],
        };
    },
    
    methods: {
        enterInfo(data) {
            switch (data) {
                case '确定选题':
                    this.$router.push({path: '/topic'});
                    break;
                case '初稿提交':
                    this.$router.push({path: '/fpaper'});
                    break;
                case '终稿提交': 
                    this.$router.push({path: '/lpaper'});
                    break;
                case '论文查重':
                    this.$router.push({path: '/repeat'});
                    break;
                case '答辩安排':
                    this.$router.push({path: '/defence'});
                    break;
                default:
                    break;
            };
        },
    },
};
</script>

<style lang="scss">
    ul,
    dl,
    dt,
    dd {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .first {
        position: absolute;
        top: 15%;
        right: 13%;
        bottom: 15%;
        left: 13%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-content: space-around;
        color: #fff;

        li {
            position: relative;
            width: 330px;
            height: 260px;
            background: #07af51;
            border-radius: 6px;
            color: #fff;

            header {
                height: 26px;
                padding: 27px 0 10px 0;

                i {
                    float: left;
                    width: 26px;
                    height: 26px;
                    border-radius: 50%;
                    margin: 0 10px 0 20px;
                    background: #fff;
                    font: bold 14px/26px "微软雅黑";
                    font-style: normal;
                    text-align: center;
                    color: #07af51;
                }

                span {
                    float: left;
                    height: 26px;
                    font: bold 20px/26px "微软雅黑";
                }

                b {
                    float: right;
                    width: 95px;
                    height: 26px;
                    margin-right: 15px;
                    background: url(../image/page/lsjl.png) no-repeat center;
                    cursor: pointer;
                }
            }

            div {

                dl {
                    height: 34px;
                    padding-left: 20px;
                    font: 16px/34px "微软雅黑";

                    dt {
                        float: left;
                        height: 34px;
                    }

                    dd {
                        float: left;
                        height: 34px;
                    }
                }
            }

            img {
                position: absolute;
                right: 10px;
                bottom: 10px;
                width: 106px;
                height: 102px;
            }
        }

        .first-teacher-info {
            background: #f5a612;
            color: #fff;

            header {

                i {
                    border-radius: 0;
                    background: url(../image/page/head.png) no-repeat center;
                }
            }
        }
    }
</style>