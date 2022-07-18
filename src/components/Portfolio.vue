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

</style>