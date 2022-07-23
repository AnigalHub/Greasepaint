<template>
    <div id="Myfooter">
        <b-container>
            <div class="text">
                <component :is="copyright"/> 2022 #polyakovsteam
            </div>
            <component :is="svg"/>
        </b-container>
    </div>
</template>

<script>
    import Copyright_svg from "./svg_contacts/copyright_svg";
    import Instagram_svg from "./svg_contacts/instagram_svg";
    export default {
        name: "Myfooter",
        data(){
            return{
                copyright:Copyright_svg,
                svg:Instagram_svg,
            }
        }
    }
</script>

<style scoped lang="scss">
    svg{
        fill:#8e9aaf;
        width: 40px;
        height: 35px;
        float: right;
    }
    .text{
        font-size: 1.7rem;
        font-family: 'Forum', cursive;
        line-height: 1.8rem;
        font-weight: 600;
        float: left;
        svg{float: left;}
    }
    #Myfooter{
        padding: 1.5% 0 3.5%;
        background: black;
    }
</style>
