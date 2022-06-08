<template>
    <div id="About">
        <b-container>
            <b-row>
                <b-col cols="5">
                    <img src="../../public/n.png">
                </b-col>
                <b-col>
                    <p>Наша команда занимается гримированием спортсменов перед выступлением, что
                        помогает им демонстрировать свое тело более выигрышно и становиться чемпионами! </p>
                    <p>
                        В своей работе мы используем самые лучшие средства, подбираем идеальный тон под тип кожи,
                        подчеркивающий все достоинства тела на чемпионате. Наши мастера обладают только высшей квалификацией.
                    </p>
                    <p>Команда #polyakovsteam сотрудничает:</p>
                    <div class="r">
                        <img src="../../public/2.png">
                        <img src="../../public/3.png">
                    </div>
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
    col{
        padding: 7% 0 0;
    }

    img{
        width: 100%;
        height: 100%;
        background: radial-gradient( #293655, #1a2238, #0a0f18, #0a0f18);
    }
    .r img{
        width: 160px;
        background: transparent;
    }
    h1{
        padding: 20% 0 5%;
        font-weight: 400;
        font-size: 2rem;
    }
    p{
        font-size: 1.4rem;
        font-family: 'Inter', sans-serif;
        line-height: 2rem;
        font-weight: 300;margin-bottom: 6%;
    }
    button{
        border: 2px solid #8792a5;
        font-size: 1.6rem;
        color: #8792a5;
        border-radius: 7px;
        margin-top: 2%;
        padding: 1%; font-family: 'Inter', sans-serif;
        background: transparent;
    }
</style>