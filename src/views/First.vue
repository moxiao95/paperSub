<template>
    <ul class="first">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
    </ul>
</template>

<script>
export default {
    data() {
        return {

        };
    },

};
</script>

<style lang="scss">
    .first {
        position: absolute;
        top: 10%;
        right: 10%;
        bottom: 10%;
        left: 10%;
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-content: space-around;

        li {
            width: 330px;
            height: 260px;
            background: #fcf7e8;
            border-radius: 6px;
        }
    }
</style>