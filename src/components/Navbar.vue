<template>
    <b-navbar id="Nav" class="navbar-expand-xl sticky-top" toggleable>
        <b-container>
            <b-navbar-brand href="#Home" @click="scrollToId">
                <component :is="svg"/>
                <div class="name_company">{{name}}</div>
            </b-navbar-brand>
            <b-navbar-toggle target="navbar-toggle-collapse">
                <template v-slot:default="{ expanded }">
                    <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
                    <b-icon v-else icon="chevron-bar-down"></b-icon>
                </template>
            </b-navbar-toggle>
            <b-collapse id="navbar-toggle-collapse" class="justify-content-end" is-nav v-model="isExpanded">
                <b-navbar-nav>
                    <b-nav-item @click="scrollToId" href="#About">О нас</b-nav-item>
                    <b-nav-item @click="scrollToId" href="#Preparation">Подготовка</b-nav-item>
                    <b-nav-item @click="scrollToId" href="#FormEntry">Запись на грим</b-nav-item>
                    <b-nav-item @click="scrollToId" v-if="tournamentsToShow.length > 0" href="#Tournaments">Турниры</b-nav-item>
                    <b-nav-item @click="scrollToId" href="#Portfolio">Портфолио</b-nav-item>
                    <b-nav-item @click="scrollToId" href="#MyFooter">Контакты</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-container>
    </b-navbar>
</template>

<script>
    import logo from './svg/logo_svg';
    import information from '../../public/documents/information.json';
    import { scroll } from '@/mixins/scroll';
    import { tournamentsToShow } from '@/mixins/tournamentsToShow';

    export default {
        name: "navbar",
        mixins:[scroll, tournamentsToShow],
        data(){
            return{
                svg:logo,
                name:information.name_company
            }
        }
    }
</script>

<style scoped lang="scss">
    .name_company{
        font-size: 1.3rem ;
    }
    /*текст при раскрытом меню в мобильном варианте*/
    .navbar-light .navbar-toggler {
        color: #266c8c;
    }
    /*блок под логотип(картинка, название компании, что за компания(производственная))*/
    .navbar-brand{
        padding-top: 0 !important;
        padding-bottom: 0 !important;
    }
    /*меню на всех экранах (которое будет и складываться на маленьких экранах и раскрываться на больших)*/
    .navbar{
        background:rgb(10 15 24 / 80%);
        background-size:cover;
        padding: 5px 0
    }
    /*все кнопки в меню*/
    .nav-link{
        color: #266c8c !important;
        padding-right: 1rem !important;
        padding-left: 1rem !important;
        font-family: 'Charis SIL', serif;
        font-size: 1.2rem ;
    }
    /*АДАПТИВНОСТЬ*/
    @media screen and (max-width: 768px) {
        /*все кнопки в меню*/
        .nav-link {
            padding: 0.35rem 1rem !important;
        }
    }
    @media screen and (max-width: 1200px) {
        /*меню на всех экранах (которое будет и складываться на маленьких экранах и раскрываться на больших)*/
        .navbar{
            background:rgb(10 15 24 / 98%);
        }
    }
</style>