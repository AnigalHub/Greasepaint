<template>
    <div id="Preparation">
        <b-container>
            <b-row>
                <b-col>
                    <p>Очень важно подготовить кожу к гриму! От этого зависит, как ляжет краска и как будет смотреться после высыхания!</p>
                    <h2>Этапы подготовки кожи к гриму</h2>
                    <ol>
                        <li v-for="(preparation,index) in Preparation" :key="index">{{preparation}}</li>
                    </ol>
                </b-col>
                <b-col cols="5">
                    <img src="../../public/componentsImg/preparation.png" alt="Нанесение грима">
                    <div class="imgBg"></div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: "Preparation",
        data(){
            return{
                Preparation:[
                    'За 1-2 дня до соревнований удалите волосы со всего тела: от пяток до шеи.',
                    'Отскрабируйте кожу, желательно несколько процедур в течение недели.',
                    'За 1 сутки до соревнований перестаньте пользоваться любыми маслянистыми средствами.',
                    'Утром в день соревнований примите душ с обычным мылом и обязательно хорошо смойте его с кожи.'
                ],
            }
        }
    }
</script>

<style scoped>

</style>