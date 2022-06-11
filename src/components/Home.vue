<template>
    <div id="Home">
        <b-container>
            <div class="grid">
                <div>
                    <p>Мы команда <br/> #polyakovsteam
                    <p>Профессиональные гримеры спортсменов NBC перед выступлениями</p>
<!--                    <p><b>Качественный грим </b> - это залог эффектного выступления в соревнованиях по бодибилдингу и фитнесу.-->
<!--                    Под яркими софитами грим выделяет мышцы и подчеркивает рельеф тела.-->
<!--                    </p>-->
<!--                    <p>Наша цель - ваш идеально красивый путь к победе.</p>-->
                    <button class="floating-button">Узнать больше</button>
                </div>
                <div>
                    <img src="../../public/99.png">
                </div>
            </div>
        </b-container>
    </div>
</template>

<script>
    import AirBrush_svg from "./svg_home/airbrush";
    export default {
        name: "Home",
        data(){
            return{
                svg:AirBrush_svg
            }
        }
    }
</script>

<style scoped lang="scss">
img{
    padding-top: 4%;
    width: 102%;
    margin: 0 auto;
}
</style>