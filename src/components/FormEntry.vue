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
                        <b-form-select v-model="selected" :options="Times2" size="sm" value-field="id" text-field="name">
                            <template #first >
                                    <b-form-select-option :value="null" disabled>Выберите время</b-form-select-option>
                            </template>
                        </b-form-select>
<!--                        <date-picker v-model="formEntry.time" type="time" format="HH:mm" :time-picker-options="Times" placeholder="Выберите время"></date-picker>-->
<!--                        -->
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
    import information from "../../public/documents/information.json";
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
                Times2: this.getTime('10:00', '20:00', 15),
                formEntry:{
                    name: '',
                    phone: '',
                    time: '',
                },
                Tournaments:information.Tournaments,
            }
        },
        methods:{
            getDateFromHours(time) {
                time = time.split(':');
                let now = new Date();
                return new Date(now.getFullYear(), now.getMonth(), now.getDate(), ...time);
            },
            getTime(start, end, step){
                let companyX = this.getDateFromHours(start);
                let companyY = this.getDateFromHours(end);
                let times = [];
                let j = 0;
                for (let i = companyX.getTime(); i <= companyY.getTime(); i=i+60000*step) {
                    let minutes;

                    if(new Date(i).getMinutes() === 0){
                        minutes = '00'
                    }
                    else{
                        minutes = String(new Date(i).getMinutes())
                    }
                    let time = String(new Date(i).getHours()) + ':' + minutes
                    times[j] ={
                        name: time
                    }
                    j++;
                }
                console.log(times);
                return times;
            }
        },
    }
</script>

<style scoped>

</style>