<template>
    <div id="Portfolio">
        <b-container>
            <h2>Портфолио</h2>
            <div class="flex-container">
                <img v-for="(work, index) in Portfolio" :key="index" :src="work.src" :alt="work.alt"/>
            </div>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: "Portfolio",
        data(){
            return{
                Portfolio:[
                    {src: "./11.jpg", alt: "MUSCLE_BATTLE_КАСТИНГ",},
                    {src: "./12.jpg", alt: "GRAND_PRIX NBC_6",},
                    {src: "./13.jpg", alt: "Гран-При_Евпатия_3",},
                    {src: "./14.jpg", alt: "GRAND_PRIX_NBC_5",},
                    {src: "./15.jpg", alt: "Grand_Prix_Golden_Ring",},
                    {src: "./16.jpg", alt: "GRAND_PRIX_SN_PRO",},
                    {src: "./17.jpg", alt: "GRAND_PRIX_NBC_4",},
                    {src: "./18.jpg", alt: "Гран-При_Евпатия_2",},
                    {src: "./19.jpg", alt: "Grand_Prix_Russia_3",},
                    {src: "./20.jpg", alt: "Grand_Prix_TULA",},
                    {src: "./21.jpg", alt: "Grand_Prix_Russia_2",},
                    {src: "./22.jpg", alt: "Grand_Prix_KremLin",},
                    {src: "./23.jpg", alt: "Grand_Prix_Russia",},
                    {src: "./24.jpg", alt: "Гран-При_Евпатия",},
                ],
            }
        }
    }
</script>

<style scoped lang="scss">
    h2{
        font-size: 1.8rem;
        text-shadow: #293655 3px 0 120px;
        text-align: center;
        margin-bottom: 3%;
        color: #8e9aaf;
    }
    .flex-container{
        display: flex;
        flex-wrap: wrap;
    }
    /*блоки с картинками*/
    .flex-container > img {
        width: 16.5%;
        height: 100%;
        margin: 0 1.5% 2.5% 1.5% !important;
        box-shadow: 0 1px 8px 1px #071935;
    /*при наведении*/
    &:hover{
        box-shadow: 0 1px 8px 1px #293655;
     }
    }
</style>