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
                    {src: "./11.jpg", alt: "Круглая_накладка_на_3_розетки",},
                    {src: "./12.jpg", alt: "Квадратная_накладка_на_3_выключателя",},
                    {src: "./13.jpg", alt: "Накладка_на_бревно",},
                    {src: "./14.jpg", alt: "Двойная_накладка_на_бревно",},
                    {src: "./15.jpg", alt: "Накладка_под_выключатель",},
                    {src: "./16.jpg", alt: "Накладка_со_скрытой_установкой",},
                    {src: "./17.jpg", alt: "Ретро_накладка",},
                    {src: "./18.jpg", alt: "Ретро_накладка_под_бревно",},
                    {src: "./19.jpg", alt: "Накладка_под_разные_розетки",},
                    {src: "./20.jpg", alt: "Накладка_под_разные_розетки",},
                    {src: "./21.jpg", alt: "Накладка_под_разные_розетки",},
                    {src: "./22.jpg", alt: "Накладка_под_разные_розетки",},
                    {src: "./23.jpg", alt: "Накладка_под_разные_розетки",},
                    {src: "./24.jpg", alt: "Накладка_под_разные_розетки",},
                ],
            }
        }
    }
</script>

<style scoped lang="scss">
    #Portfolio{
        padding: 2% 0;
    }
    h2{
        font-size: 1.8rem;text-shadow: #293655 3px 0 120px;
        font-family: 'Forum', cursive;
        text-align: center;
        margin-bottom: 3%;
        color: #8e9aaf;
    }
    /*блоки с картинками*/
    .flex-container > img {
        width: 16%;
        height: 100%;
        margin: 0 1.5% 2.2% 1.5% !important;
        box-shadow: 0px 1px 8px 1px #071935;
    /*при наведении*/
    &:hover{
        box-shadow: 0px 1px 8px 1px #293655;
     }
    }
</style>