<template>
    <div id="FormEntry">
        <b-container>
            <b-row>
                <b-col cols="5">
                    <img src="../../public/ww.png">
                    <div class="imgBg"></div>
                </b-col>
                <b-col>
                    <form>
                        <h2>Запись на грим</h2>
                        <b-form-input v-model="formEntry.name" type="text" placeholder="Введите ваше имя"/>
                        <b-form-input v-model="formEntry.phone" type="tel" v-mask="'+7 (###) ###-##-##'" placeholder="Введите ваш телефон"/>
                        <b-form-select v-model="selected" :options="Tourneys" value-field="id" text-field="name">
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
                Tourneys:[
                    {
                        id: 1,
                        src: "./qw.jpg",
                        date:"29 октября 2022",
                        name:"GRAND PRIX MOSCOW",
                        address:"Москва, Ленинский проспект, 49 стр. 3. ГЛАВCLUB",
                    },
                    {
                        id: 2,
                        src: "./qe.jpg",
                        date:"13 декабря 2022",
                        name:"GRAND PRIX NBC 7",
                        address:"Москва, Орджоникидзе, д. 11 стр. 1. STUDIO HALL"
                    },
                ],
            }
        },
    }
</script>

<style scoped>

</style>