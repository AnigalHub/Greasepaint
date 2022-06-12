<template>
    <div id="About">
        <b-container>
            <b-row>
                <b-col cols="5">
                    <img src="../../public/ww.png">
                </b-col>
                <b-col class="about">
                    <p>Наша команда помогает спортсменам демонстрировать свое тело более выигрышно и становиться чемпионами!</p>
                    <p>Под яркими софитами грим выделяет мышцы и подчеркивает рельеф тела. Наша цель - ваш идеально красивый путь к победе!</p>
                    <b-row>
                        <b-col cols="2">
                            <img src="../../public/nbc.png">
                        </b-col>
                        <b-col>
                            <p>Гримеры обладают только высшей квалификацией и регулярно проходят курсы по её повышению.</p>
                            <p>На соревнованиях мы ни раз получали награды и благодарности от руководства федерации NBC.</p>
                        </b-col>
                    </b-row>
                    <p>В своей работе мы используем самые лучшие средства, подчеркивающие все достоинства тела на соревнованиях. </p>
                    <p>Команда #polyakovsteam сотрудничает c известными брендами грима: Jan Tana и Fitness Formula</p>
                    <img class="imgLast" src="../../public/fitnessFormula.png">
                    <img class="imgLast" src="../../public/jantana.png">
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: "About"
    }
</script>

<style scoped lang="scss">
.imgLast{
    width: 130px;
    filter: brightness(80%);
    float: left;
    margin: 0 10px;
    padding: 5px;
    border: 2px solid rgba(118, 123, 134, 0.67);
    background: rgba(255, 255, 255, 0.03);
    box-shadow: 0 1px 5px rgb(78 106 159 / 40%);
    border-radius: 8px;
}
.about .col-4 img{
  width: 50%;
    height: 50%;
    margin-bottom: 3%;
}
    .about .col-2 img{
        width: 120%;
        margin-top: 15%;
    }
</style>