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

</style>
