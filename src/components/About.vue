<template>
    <div id="About">
        <b-container>
            <b-row>
                <b-col cols="5">
                    <img src="../../public/componentsImg/about.png">
                    <div class="imgBg"></div>
                </b-col>
                <b-col>
                    <h2>О нас</h2>
                    <p>Команда гримеров <span>#polyakovsteam</span> - официальная команда по гриму на всех соревнованиях федерации <span>NBC</span>.</p>
                    <p>На соревнованиях по бодибилдингу и фитнесу мы организовываем нанесение грима, включающее: </p>
                    <ul class="text">
                        <li v-for="(greasepaint,index) in Greasepaint" :key="index">{{greasepaint}}</li>
                    </ul>
                    <p>В своей работе мы используем самые лучшие средства, подчеркивающие все достоинства тела спортсменов на соревнованиях. </p>
                    <p>Наша команда сотрудничает c известными брендами грима:</p>
                    <b-row class="products">
                        <b-col cols="3" v-for="(img,index) in Products" :key="index">
                            <img class="imgProducts" :src="img.src" :alt="img.alt">
                        </b-col>
                    </b-row>
                    <p>Под яркими софитами грим выделяет мышцы и подчеркивает рельеф тела, тело смотрится более выигрышно.</p>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import information from '../../public/documents/information.json';
    export default {
        name: "About",
        data(){
            return{
                name:information.name_company,
                Greasepaint:[
                    'нанесение двух слоев грима;',
                    'масла;',
                    'корректировка во время выступления;',
                    'одноразовый комплект.'
                ],
                Products:[
                    {
                        src:'./componentsImg/fitnessFormula.png',
                        alt:'fitnessFormula'
                    },
                    {
                        src:'./componentsImg/jantana.png',
                        alt:'jantana'
                    }
                ]
            }
        }
    }
</script>

<style scoped lang="scss">

</style>