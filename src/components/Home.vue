<template>
    <div id="Home">
        <b-container>
            <b-row>
                <b-col cols="4">
                    <h1 class="css-typing">Мы команда <br/>{{name}}</h1>
                    <p class="text-typing" >Профессиональные гримеры спортсменов NBC перед выступлениями</p>
                    <div class="allButton text-typing">
                        <b-button><a @click="scrollToId" href="#FormEntry">Запись на грим</a></b-button>
                        <b-button><a @click="scrollToId" href="#About">Узнать больше</a></b-button>
                    </div>
                </b-col>
                <b-col>
                    <img src="../../public/componentsImg/home.png" :alt="name">
                    <div class="imgBg"></div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import information from '../../public/documents/information.json';
    import {scroll} from "@/mixins/scroll";
    export default {
        name: "Home",
        mixins:[scroll],
        data(){
            return{
                name:information.name_company
            }
        }
    }
</script>

<style scoped lang="scss">

</style>