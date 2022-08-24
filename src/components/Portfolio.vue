<template>
    <div id="Portfolio">
        <b-container>
            <h2>Портфолио</h2>
            <div class="flex-container">
                <a v-for="(work, index) in Portfolio" :key="index" :href="work.link" target="_blank">
                    <img :src="work.src" :alt="work.alt"/>
                </a>

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
                    {src: "./11.jpg", alt: "MUSCLE_BATTLE_КАСТИНГ",link:'https://nbcpro.ru/events/muscle-battle-kasting/'},
                    {src: "./12.jpg", alt: "GRAND_PRIX NBC_6",link:'https://nbcpro.ru/events/grand-prix-nbc-6/'},
                    {src: "./13.jpg", alt: "Гран-При_Евпатия_3",link:'https://nbcpro.ru/events/gran-pri-evpatiya-kolovrata-i-avdoti-ryazanochki-30-04-22/'},
                    {src: "./14.jpg", alt: "GRAND_PRIX_NBC_5",link:'https://nbcpro.ru/events/grand-prix-nbc-5/'},
                    {src: "./15.jpg", alt: "Grand_Prix_Golden_Ring",link:'https://nbcpro.ru/events/grand-prix-golden-ring-13-11-2021/'},
                    {src: "./16.jpg", alt: "GRAND_PRIX_SN_PRO",link:'https://nbcpro.ru/events/grand-prix-sn-pro/'},
                    {src: "./17.jpg", alt: "GRAND_PRIX_NBC_4",link:'https://nbcpro.ru/events/grand-prix-nbc-4/'},
                    {src: "./18.jpg", alt: "Гран-При_Евпатия_2",link:'https://nbcpro.ru/events/gran-pri-evpatiya-kolovrata-i-avdoti-ryazanochki-15-05-21/'},
                    {src: "./19.jpg", alt: "Grand_Prix_Russia_3",link:'https://nbcpro.ru/events/grand-prix-russia-3-5-12-2020/'},
                    {src: "./20.jpg", alt: "Grand_Prix_TULA",link:'https://nbcpro.ru/events/grand-prix-tula/'},
                    {src: "./21.jpg", alt: "Grand_Prix_Russia_2",link:'https://nbcpro.ru/events/grand-prix-russia-2/'},
                    {src: "./22.jpg", alt: "Grand_Prix_KremLin",link:'https://nbcpro.ru/events/grand-prix-kremlin/'},
                    {src: "./23.jpg", alt: "Grand_Prix_Russia",link:'https://nbcpro.ru/events/grand-prix-russia/'},
                    {src: "./24.jpg", alt: "Гран-При_Евпатия",link:'https://nbcpro.ru/events/gran-pri-evpatiya-kolovrata-i-avdoti-ryazanochki/'},
                ],
            }
        }
    }
</script>

<style scoped lang="scss">

</style>