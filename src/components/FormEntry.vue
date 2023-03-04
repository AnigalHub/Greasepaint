<template>
    <div id="FormEntry">
        <b-container>
            <b-row>
                <b-col cols="5">
                    <img src="../../public/componentsImg/formEntry.png">
                    <div class="imgBg"></div>
                </b-col>
                <b-col>
                    <form>
                        <h2>Запись на грим</h2>
                        <b-form-input autocomplete="off" v-model="formEntry.name" type="text" placeholder="Введите ваше имя"/>
                        <b-form-input autocomplete="off" v-model="formEntry.phone" type="tel" v-mask="'+7 (###) ###-##-##'" placeholder="Введите ваш телефон"/>
                        <b-form-select v-model="selected" :options="Tournaments" value-field="id" text-field="name">
                            <template #first>
                                <b-form-select-option :value="null" disabled>Выберите турнир</b-form-select-option>
                            </template>
                        </b-form-select>
                        <date-picker v-model="formEntry.time" type="time" format="HH:mm" :time-picker-options="Times" placeholder="Выберите время"></date-picker>
                        <p class="aboutMoney">Предварительная стоимость:
                            <span class="money">2500 руб.</span></p>
                        <button>Записаться</button>
                    </form>
                    <p>Напоминаем, что на грим надо записываться уже сейчас!
                        Не подводите себя и других спортсменов, не оставляйте на последний день.</p>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import DatePicker from 'vue2-datepicker';
    import 'vue2-datepicker/index.css';
    export default {
        name: "FormEntry",
        components: { DatePicker },
        data(){
            return {
                selected:null,
                Times:{
                    start:'10:00',
                    step:'00:15',
                    end:'20:00'
                },
                formEntry:{
                    name: '',
                    phone: '',
                    time: '',
                },
                Tournaments:[
                    {
                        src: "./3.jpg",
                        date:"18 марта 2023",
                        name:"MUSCLE BATTLE 2. КАСТИНГ",
                        address:"Москва",
                    },
                    {
                        src: "./2.jpg",
                        date:"30 апреля 2023",
                        name:"ГРАН-ПРИ ЛЮБЕР-2023",
                        address:"Москва, Большая Новодмитровская, 36 с. 24. УРБАН"
                    },
                    {
                        src: "./1.jpg",
                        date:"13 мая 2023",
                        name:"GRAND PRIX NBC 8",
                        address:"Орджоникидзе, д. 11 стр. 1. ГЛАВCLUB"
                    },
                ],
            }
        },
    }
</script>

<style scoped>

</style>