<template>
    <div id="About">
        <b-container>
            <b-row>
                <b-col cols="4">
                    <img src="../../public/componentsImg/about.png" alt="О нас">
                </b-col>
                <b-col>
                    <h2>О нас</h2>
                    <p><span>{{name}}</span> - официальная команда гримеров на всех турнирах федерации National Bodybuilding Community<span>.</span></p>
                    <p><span>Н</span>а соревнованиях по бодибилдингу и фитнесу мы организовываем нанесение грима<span>.</span> В услугу гримирования входит<span>:</span></p>
                    <ul class="n1">
                        <li>нанесение двух слоев грима<span>;</span></li>
                        <li>нанесение масла (по желанию)<span>;</span></li>
                        <li>корректировка во время выступления<span>;</span></li>
                        <li>одноразовый комплект одежды для покраски<span>.</span></li>
                    </ul>
                    <p><span>Н</span>аша команда знает все об основных техниках гримирования<span>,</span> а также проводит межсезонные мероприятия для особого уровня подготовки<span>.</span></p>
                    <p><span>В</span> своей работе мы используем самые лучшие средства известных брендов<span>:</span></p>
                    <b-row class="flex-container">
                        <div v-for="(img,index) in Products" :key="index">
                            <img :src="img.src" :alt="img.alt">
                        </div>
                    </b-row>
                    <p><span>Н</span>аш грим обладает универсальной адаптирующей системой <span>-</span> применяется для любого типа кожи<span>.</span></p>
                    <p><span>Г</span>рим не течет<span>,</span> быстро сохнет<span>,</span> не пачкает дорогостоящие костюмы спортсменов и придает коже приятный оттенок естественного загара<span>.</span></p>
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