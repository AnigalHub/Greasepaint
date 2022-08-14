<template>
    <div id="Home">
        <b-container>
            <b-row>
                <b-col cols="4">
                    <h1>Мы команда #polyakovsteam</h1>
                    <p>Профессиональные гримеры спортсменов NBC перед выступлениями</p>
                    <div class="allButton">
                        <b-button><a @click="scrollToId" href="#FormEntry">Запись на грим</a></b-button>
                        <b-button><a @click="scrollToId" href="#About">Узнать больше</a></b-button>
                    </div>
                </b-col>
                <b-col>
                    <img src="../../public/99.png">
                    <div class="imgBg"></div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: "Home",
        data(){
            return {
                isExpanded: false,
            }
        },
        methods:{
            scrollToTop(){
                window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
            },
            scrollToId(event){
                let offsetY = 50;
                if(this.isExpanded){
                    let nav = document.getElementById(("Nav"));
                    let bounds =  nav.getBoundingClientRect();
                    offsetY = bounds.height;
                }
                let element = document.getElementById(event.target.hash.replace("#", ""));
                window.scrollTo({top: element.offsetTop - offsetY, left: 0, behavior: 'smooth'});
                event.preventDefault();
            }
        }
    }
</script>

<style scoped lang="scss">

</style>