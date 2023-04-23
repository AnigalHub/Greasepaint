<template>
    <div id="MyFooter">
        <b-container>
            <div class="text">
                <component :is="copyright"/>2023 <span>{{name}}</span>
            </div>
            <a target="_blank" href="https://instagram.com/polyakovs_team?igshid=YmMyMTA2M2Y=">
                <component :is="svg"/>
            </a>
        </b-container>
    </div>
</template>

<script>
    import Copyright_svg from "./svg/svg_contacts/copyright_svg";
    import Instagram_svg from "./svg/svg_contacts/instagram_svg";
    import information from '../../public/documents/information.json';
    export default {
        name: "MyFooter",
        data(){
            return{
                name:information.name_company,
                copyright:Copyright_svg,
                svg:Instagram_svg,
            }
        }
    }
</script>

<style scoped lang="scss">

</style>
