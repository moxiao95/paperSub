<template>
    <div class="announcement">
        <header class="announcement-head">通告中心</header>
        <ul class="announcement-list">
            <li
                v-for="item in announcementList"
                :key="item.id"
                @click="enterAnnouncementInfo(item)"
            >
                <span>{{item.date}}</span>
                <span>{{item.time}}</span>
                <div>{{item.title}}</div>
                <p>{{item.info}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            announcementList: [
                {
                    id: 23123,
                    date: '2020-12-12',
                    time: '13:29:22',
                    title: '答辩时间通知',
                    info: '短期内忘掉驱动器位当前',
                },
                {
                    id: 23123,
                    date: '2020-12-12',
                    time: '13:29:22',
                    title: '答辩时间通知',
                    info: '短期内忘掉驱动器位当前',
                },
                {
                    id: 23123,
                    date: '2020-12-12',
                    time: '13:29:22',
                    title: '答辩时间通知',
                    info: '短期内忘掉驱动器位当前',
                },
                {
                    id: 23123,
                    date: '2020-12-12',
                    time: '13:29:22',
                    title: '答辩时间通知',
                    info: '短期内忘掉驱动器位当前',
                },
            ],
        };
    },

    methods: {
        enterAnnouncementInfo({id}) {
            console.log(id);
        },
    },
}
</script>

<style lang="scss">
    .announcement {
        width: 1000px;
        margin-left: 160px;
        padding: 0 300px;

        .announcement-head {
            height: 200px;
            text-align: center;
            font: bold 40px/200px "微软雅黑";
            letter-spacing: 5px;
            color: #fff;
        }

        .announcement-list {
            height: 550px;
            padding: 10px 50px;
            background: #fff;
            overflow: auto;
            border-radius: 3px;

            li {
                height: 150px;
                background: rgb(221, 221, 221);
                border-radius: 5px;
                margin: 15px 0;
                cursor: pointer;

                span {
                    font: 14px/30px "微软雅黑";
                    color: rgb(156, 156, 156);
                    margin: 0 10px;
                }

                div {
                    height: 50px;
                    font: bold 18px/50px "微软雅黑";
                    margin: 5px 0;
                    text-indent: 10px;
                }

                p {
                    height: 70px;
                    font: 14px/30px "微软雅黑";
                    color: rgb(156, 156, 156);
                    text-indent: 10px;
                }
            }

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
        }
    }
</style>