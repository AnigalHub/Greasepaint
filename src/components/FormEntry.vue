<template>
    <div id="FormEntry">
        <b-container>
            <b-row>
                <b-col>
                    <form>
                        <input type="text" placeholder="ФИО">
                        <input type="text" placeholder="Телефон">
                        <input type="text" placeholder="Email">
                        <input type="text" placeholder="Выберите турнир">
                        <button>Записаться на грим</button>
                    </form>
                </b-col>
                <b-col cols="4">
                    <p>Напоминаем, что на грим надо записываться уже сейчас! Не подводите себя и других спортсменов, не оставляйте на последний день.</p>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: "FormEntry"
    }
</script>

<style scoped lang="scss">

</style>