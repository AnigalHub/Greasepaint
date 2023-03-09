<template>
    <div id="About">
        <b-container>
            <b-row>
                <b-col cols="5">
                    <img src="../../public/componentsImg/about.png">
                    <div class="imgBg"></div>
                </b-col>
                <b-col class="about">
                    <p>Команда помогает спортсменам демонстрировать свое тело более выигрышно и становиться чемпионами!</p>
                    <p>Под яркими софитами грим выделяет мышцы и подчеркивает рельеф тела. Наша цель - ваш идеально красивый путь к победе!</p>
                    <b-row class="important">
                        <b-col>
                            <p>На соревнованиях мы ни раз получали награды и благодарности от руководства федерации NBC.</p>
                        </b-col>
                        <b-col cols="2">
                            <img src="../../public/componentsImg/nbc.png" alt="О нас">
                        </b-col>
                    </b-row>
                    <p>Гримеры обладают только высшей квалификацией и регулярно проходят курсы по её повышению.</p>
                    <b-row class="products">
                        <b-col cols="3">
                            <img class="imgLast" src="../../public/componentsImg/fitnessFormula.png" alt="fitnessFormula">
                            <img class="imgLast" src="../../public/componentsImg/jantana.png" alt="jantana">
                        </b-col>
                        <b-col>
                            <p>В своей работе мы используем самые лучшие средства, подчеркивающие все достоинства тела на соревнованиях. </p>
                            <p>Команда {{name}} сотрудничает c известными брендами грима: Jan Tana и Fitness Formula.</p>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import information from '../../public/documents/information.json';
    export default {
        name: "About",
        data(){
            return{
                name:information.name_company
            }
        }
    }
</script>

<style scoped lang="scss">

</style>