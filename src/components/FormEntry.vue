<template>
    <div id="FormEntry">
        <b-container>
            <b-row>
                <b-col>

<!--                <form>-->
<!--                    <input type="text" placeholder="ФИО">-->
<!--                    <input type="text" placeholder="Телефон">-->
<!--                    <input type="text" placeholder="Email">-->
<!--                    <input type="text" placeholder="Выберите турнир">-->
<!--                    <button>Записаться на грим</button>-->
<!--                </form>-->
<!--                    <p>Напоминаем, что на грим надо записываться уже сейчас! Не подводите себя и других спортсменов, не оставляйте на последний день.</p>-->
<!--                -->

                    <p>Наши мастера обладают только высшей квалификацией и регулярно проходят курсы по её повышению.</p>
                    <b-row>
                        <b-col cols="2">
                            <img src="../../public/78.png">
                        </b-col>
                        <b-col>
                            <p>
                                На соревнованиях мы ни раз получали награды и благодарности от руководства федерации NBC.</p>
                        </b-col>

                    </b-row>

                            <p>
                                В своей работе мы используем самые лучшие средства, подчеркивающие все достоинства тела на соревнованиях. </p>
                    <p> Команда #polyakovsteam сотрудничает c известными брендами грима: Jan Tana и Фитнес формула</p>

                            <img class="imgLast" src="../../public/fitnessFormula.png">
                            <img class="imgLast" src="../../public/jantana.png">


                </b-col>
                <b-col cols="4">
                    <img src="../../public/about.png">
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
    .imgLast{
        width: 20%;
        float: left;
        filter: brightness(70%);
    }
    .row{
        margin-bottom: 2%;
    }
    p:first-child{
        padding-top: 10% !important;
    }
</style>