<template>
    <div id="About">
        <b-container>
            <b-row>
                <b-col cols="5">
                    <img src="../../public/about.png">
                </b-col>
                <b-col class="about">
                    <p>Наша команда помогает спортсменам демонстрировать свое тело более выигрышно и становиться чемпионами! </p>
                    <p>В своей работе мы используем самые лучшие средства, подбираем идеальный тон под тип кожи, подчеркивающий все достоинства тела на чемпионате. Наши мастера обладают только высшей квалификацией.</p>
                    <p>Команда #polyakovsteam сотрудничает c известными брендами грима:</p>
                    <ul>
                       <li>Jan Tana</li>
                        <li>Pro Tan</li>
                        <li>Cos-World</li>
                        <li>Dream Tan</li>
                    </ul>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: "About"
    }
</script>

<style scoped>
    .about{
        padding: 5% 0 0 10px!important;
    }

    .col-5 img{
        width: 100%;
        height: 100%;
        background: radial-gradient( #293655, #1a2238, #0a0f18, #0a0f18);
    }
    .r img{
        width: 130px;
        background: transparent;
    }
    h1{
        padding: 20% 0 5%;
        font-weight: 400;
        font-size: 2rem;
    }
    p,li{
        font-size: 1.7rem;
        font-family: 'Forum', cursive;
        line-height: 1.8rem;
        font-weight: 300;
    }
    p{
        margin-bottom: 6%;
    }
</style>