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
                <b-col cols="5">
                    <img src="../../public/1.png">
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
    col{
        padding: 7% 0 0;
    }
</style>