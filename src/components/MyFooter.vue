<template>
    <div id="MyFooter">
        <b-container>
            <div class="flex-container">
                <div v-for="information in ContactsRow" :key="information.text">
                    <a :href="information.href" :target="information.target">
                        <component :is="information.svg"/>
                        <p>{{information.http}}</p>
                    </a>
                </div>
            </div>
        </b-container>
    </div>
</template>

<script>
    import Instagram_svg from "./svg/svg_contacts/instagram_svg";
    import information from '../../public/documents/information.json';
    import Telephone_svg from "@/components/svg/svg_contacts/telephone_svg";
    import Email_svg from "@/components/svg/svg_contacts/email_svg";
    export default {
        name: "MyFooter",
        data(){
            return{
                ContactsRow:[
                    {
                        svg:Telephone_svg,
                        href:'tel:' + information.phone,
                        target:'_self',
                        http:information.phone
                    },
                    {
                        svg:Email_svg,
                        href:'mailto:' + information.mail,
                        target:'_self',
                        http:information.mail
                    },
                    {
                        svg:Instagram_svg,
                        href:information.instagram_address,
                        target:'_blank',
                        http:information.instagram,
                    },
                ]
            }
        }
    }
</script>

<style scoped lang="scss">

</style>
