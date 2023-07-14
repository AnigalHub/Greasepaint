<template>
    <div id="Home">
        <b-container>
            <b-row>
                <b-col cols="2">
                    <b-row>
                        <b-col>
                            <h1><span>Подчеркни рельеф своего тела!</span></h1>
                            <p><span>Профессиональный грим спортсменов на соревнованиях National Bodybuilding Community по бодибилдингу и фитнесу</span></p>
                            <b-button><a @click="scrollToId" href="#FormEntry">Запись на грим</a></b-button>
                        </b-col>
                    </b-row>
                </b-col>
                <b-col>
                    <img src="../../public/componentsImg/home.png" alt="Главная">
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import {scroll} from "@/mixins/scroll";
    export default {
        name: "Home",
        mixins:[scroll],
    }
</script>

<style scoped lang="scss">

</style>