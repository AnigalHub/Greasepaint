<template>
    <div id="FormEntry">
        <b-container>
            <b-row>
                <b-col cols="4">
                    <img src="../../public/componentsImg/formEntry.png" alt="Запись на грим">
                    <div class="imgBg"></div>
                </b-col>
                <b-col>
                    <form>
                        <h2>Запись на грим</h2>
                        <b-form-input autocomplete="off" v-model="formEntry.name" type="text" placeholder="Введите ваше имя"/>
                        <b-form-input autocomplete="off" v-model="formEntry.phone" type="tel" v-mask="'+7 (###) ###-##-##'" placeholder="Введите ваш телефон"/>
                        <b-form-select v-if="tournamentsToShow.length > 0" v-model="formEntry.tournament" :options="Tournaments" value-field="id" text-field="name">
                            <template #first>
                                <b-form-select-option :value="null" disabled>Выберите турнир</b-form-select-option>
                            </template>
                        </b-form-select>
                        <b-form-textarea
                                id="textarea"
                                v-model="formEntry.descr"
                                placeholder="Опишите свои пожелания гримеру"
                        ></b-form-textarea>
                        <button>Записаться</button>
                    </form>
                    <p class="aboutMoney">Предварительная стоимость:<span class="money"> 3000 руб.</span></p>
                    <hr/>
                    <p class="desc"><span>Н</span>апоминаем, что на грим надо записываться уже сейчас<span>!</span><br/>
                        Не подводите себя и других спортсменов<span>,</span> не оставляйте на последний день<span>!</span></p>
                    <hr/>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import information from "../../public/documents/information.json";
    import { tournamentsToShow} from '@/mixins/tournamentsToShow';
    export default {
        name: "FormEntry",
        mixins:[tournamentsToShow],
        data(){
            return {
                formEntry:{
                    name: '',
                    phone: '',
                    descr:'',
                    tournament: null,
                },
                Tournaments:information.Tournaments,
            }
        },
    }
</script>

<style scoped>

</style>