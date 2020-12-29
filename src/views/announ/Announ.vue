<template>
    <div class="announ">
        <header class="announ-head">通告中心</header>
        <div class="announ-content">
            <p class="announ-title">{{title}}</p>
            <div class="anoun-info">
                <span>日期：</span>
                <span>{{date}}</span>
                <span>{{time}}</span>
                <span>来源：</span>
                <span>{{text}}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: '关于答辩安排的变动通知',
            date: '2020-12-12',
            time: '19:22:21',
            from: '学院管理员',
            text: '卡时间段看姜思达索拉卡溜达阿喀琉斯的来看待拉达拉斯达拉斯的',
        };
    },
};
</script>

<style lang="scss">
    .announ {
        width: 1000px;
        margin-left: 160px;
        padding: 0 300px;

        .announ-head {
            height: 200px;
            text-align: center;
            font: bold 40px/200px "微软雅黑";
            letter-spacing: 5px;
            color: #fff;
        }

        .announ-content {
            height: 550px;
            padding: 10px 50px;
            background: #fff;
            overflow: auto;
            border-radius: 3px;
        }
    }
</style>