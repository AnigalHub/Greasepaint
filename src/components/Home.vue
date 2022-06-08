<template>
    <div id="Home">
        <b-container>
            <b-row>
                <b-col>
                    <h1>Качественный грим - эффектное выступление в соревновательном бодибилдинге.</h1>
                    <p>Мы команда гримеров  #polyakovsteam.</p>
                    <p>Наша цель - ваш идеально красивый путь к победе.</p>
                    <button>Подробнее...</button>
                </b-col>
                <b-col cols="6">
                    <img src="../../public/e.png">
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>
    img{
        padding-top: 7%;
        width: 100%;
        height: 100%;
        background: radial-gradient( #293655, #1a2238, #0a0f18, #0a0f18);
    }
    h1{
        padding: 25% 0 5%;
        font-weight: 300;
        font-size: 1.8rem;
        color: #8e9aaf;
        font-family: 'Inter', sans-serif;
        text-shadow: #293655 3px 0 120px;
    }
    p{
        font-size: 1.4rem;
        font-family: 'Inter', sans-serif;
        line-height: 2rem;
        font-weight: 300;margin-bottom: 6%;
    }
    button{
        border: 2px solid #8792a5;
        font-size: 1.5rem;
        font-family: 'Inter', sans-serif;
        color: #8e9aaf;;font-weight: 300;
        border-radius: 7px;
        margin-top: 2%;
        padding: 1%;
        background: transparent;
    }
</style>