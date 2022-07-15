<template>
    <div id="Preparation">
        <b-container>
            <b-row>
                <b-col class="preparation">
                    <p> До нанесения грима, чтобы получился красивый финальный результат необходимо кожу подготовить к гриму:</p>
                    <ol>
                        <li v-for="(preparation,index) in Preparation" :key="index">{{preparation}}</li>
                    </ol>
                </b-col>
                <b-col cols="5">
                    <img src="../../public/tt.png">
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