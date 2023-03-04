<template>
    <b-navbar id="Nav" class="navbar-expand-xl sticky-top" toggleable>
        <b-container>
            <b-navbar-brand href="#Home" @click="scrollToId">
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
                    <b-nav-item @click="scrollToId" href="#FormEntry">Запись на грим</b-nav-item>
                    <b-nav-item @click="scrollToId" href="#Tournaments">Турниры</b-nav-item>
                    <b-nav-item @click="scrollToId" href="#Portfolio">Портфолио</b-nav-item>
                    <b-nav-item @click="scrollToId" href="#Contacts">Контакты</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-container>
    </b-navbar>
</template>

<script>
    import information from '../../public/documents/information.json';
    import { scroll } from '@/mixins/scroll';
    export default {
        name: "navbar",
        mixins:[scroll],
        data(){
            return{
                name:information.name_company
            }
        }
    }
</script>

<style scoped lang="scss">
    .navbar-light .navbar-toggler {
        color: #3798c5;
    }
    /*блок под логотип(картинка, название компании, что за компания(производственная))*/
    .navbar-brand{
        padding-top: 0.2rem !important;
        padding-bottom: 0.2rem !important;
    }
    /*меню на всех экранах (которое будет и складываться на маленьких экранах и раскрываться на больших)*/
    .navbar{
        background: #0f151f;
        background-size:cover;
        border-bottom: 5px #8792a5 !important;
        padding: 0 !important;
        box-shadow: 7px 7px 7px -7px rgb(34 60 80 / 90%)
    }
    /*все кнопки в меню*/
    .nav-link{
        color: #3798c5 !important;
        padding-right: 1rem !important;
        padding-left: 1rem !important;
        font-family: 'Forum', cursive;
        font-size: 1.5rem !important;
    }
    /*надпись "производственная компания" в логотипе*/
    .description_name{
        font-size: 0.65rem;
        margin-top: -6%;
        color: #8792a5;
        font-weight: 600;
        text-shadow: 0.025rem 0.025rem 0.025rem #8792a5;
    }
    @media screen and (max-width: 768px) {
        /*все кнопки в меню*/
        .nav-link {
            font-size: 1rem !important;
            padding: 0.35rem 1rem !important;
        }
    }
</style>