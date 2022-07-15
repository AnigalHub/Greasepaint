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
                        <h2>Запись на грим</h2>
                        <form>
                            <input v-model="formEntry.name" type="text" placeholder="ФИО">
                            <input v-model="formEntry.phone" type="tel" placeholder="Телефон">
                            <input v-model="formEntry.email" type="email" placeholder="Email">
                            <input v-model="formEntry.tourney" type="text" placeholder="Выберите турнир">
                            <input v-model="formEntry.time" type="time" placeholder="Выберите время">
                        </form>
                        <button>Записаться</button>
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
                formEntry:{
                    name: '',
                    phone: '',
                    email: '',
                    tourney: '',
                    time: '',
                }
            }
        },
    }
</script>

<style scoped>

</style>