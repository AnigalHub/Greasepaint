<template>
    <div id="MyFooter">
        <b-container>
            <div class="text">
                <component :is="copyright"/>
                <span>2022 #polyakovsteam</span>
            </div>
            <a href="https://instagram.com/polyakovs_team?igshid=YmMyMTA2M2Y=">
                <component :is="svg"/>
            </a>
        </b-container>
    </div>
</template>

<script>
    import Copyright_svg from "./svg_contacts/copyright_svg";
    import Instagram_svg from "./svg_contacts/instagram_svg";
    export default {
        name: "MyFooter",
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
