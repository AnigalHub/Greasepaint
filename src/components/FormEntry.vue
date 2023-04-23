<template>
    <div id="FormEntry">
        <b-container>
            <b-row>
                <b-col cols="5">
                    <img src="../../public/componentsImg/formEntry.png" alt="Запись на грим">
                    <div class="imgBg"></div>
                </b-col>
                <b-col>
                    <form>
                        <h2>Запись на грим</h2>
                        <b-form-input autocomplete="off" v-model="formEntry.name" type="text" placeholder="Введите ваше имя"/>
                        <b-form-input autocomplete="off" v-model="formEntry.phone" type="tel" v-mask="'+7 (###) ###-##-##'" placeholder="Введите ваш телефон"/>
                        <b-form-select v-model="formEntry.tournament" :options="Tournaments" value-field="id" text-field="name">
                            <template #first>
                                <b-form-select-option :value="null" disabled>Выберите турнир</b-form-select-option>
                            </template>
                        </b-form-select>
                        <button>Записаться</button>
                        <p class="aboutMoney">Предварительная стоимость:<span class="money">2500 руб.</span></p>
                    </form>
                    <hr/>
                    <p class="desc">Напоминаем, что на грим надо записываться уже сейчас!
                        Не подводите себя и других спортсменов, не оставляйте на последний день.</p>
                    <hr/>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import information from "../../public/documents/information.json";
    export default {
        name: "FormEntry",
        data(){
            return {
                formEntry:{
                    name: '',
                    phone: '',
                    tournament: null,
                },
                Tournaments:information.Tournaments,
            }
        },
    }
</script>

<style scoped>

</style>