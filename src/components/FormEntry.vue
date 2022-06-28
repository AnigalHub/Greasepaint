<template>
    <div id="FormEntry">
        <b-container>
            <div class="block">
                <h2>Запись на грим</h2>
                <p>Напоминаем, что на грим надо записываться уже сейчас!
                    Не подводите себя и других спортсменов, не оставляйте на последний день.</p>
                <b-row>
                    <b-col cols="5">
                        <img src="../../public/ww.png">
                    </b-col>
                    <b-col>

                        <form>
                            <input type="text" placeholder="ФИО">
                            <input type="text" placeholder="Телефон">
                            <input type="text" placeholder="Email">
                            <input type="text" placeholder="Выберите турнир">
                            <input type="text" placeholder="Выберите время">
                            <button>Записаться</button>
                        </form>
                    </b-col>

                </b-row>
            </div>

        </b-container>
    </div>
</template>

<script>
    export default {
        name: "FormEntry"
    }
</script>

<style scoped>

</style>