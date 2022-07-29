<template>
    <div id="FormEntry">
        <b-container>
            <div class="block">
                <b-row>
                    <b-col cols="5">
                        <img src="../../public/ww.png">
                        <div class="imgBg"></div>
                    </b-col>
                    <b-col>
                        <form>
                            <h2>Запись на грим</h2>
                            <b-form-input v-model="formEntry.name" type="text" placeholder="ФИО"/>
                            <b-form-input v-model="formEntry.phone" type="tel" placeholder="Телефон"/>
                            <b-form-select v-model="selected" :options="Tourneys" placeholder="Выберите турнир"/>
                            <b-form-input v-model="formEntry.time" type="time" placeholder="Выберите время"/>
                            <button>Записаться</button>
                        </form>
                        <p class="aboutMoney">Предварительная стоимость:
                            <span class="money">2500 руб.</span></p>
                        <p>Напоминаем, что на грим надо записываться уже сейчас!
                            Не подводите себя и других спортсменов, не оставляйте на последний день.</p>
                    </b-col>
                </b-row>
            </div>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: "FormEntry",
        data(){
            return {
                selected:null,
                formEntry:{
                    name: '',
                    phone: '',
                    time: '',
                },
                Tourneys:[
                    { value: null, text: 'GRAND PRIX MOSCOW' },
                    { value: null, text: 'GRAND PRIX NBC 7' },
                ]
            }
        },
    }
</script>

<style scoped>

</style>