<template>
    <div id="Contacts">
        <b-container>
            <b-row>
                <b-col>
                    <p>К каждому клиенту мы подходим индивидуально, делаем всё возможное, чтобы Вы остались довольны результатом нашего грима.</p>
                    <p>Задать любой интересующий Вас вопрос можно удобным для вас способом и мы ответим Вам в ближайшее время!</p>
                    <p>До встречи на соревнованиях! </p>
                </b-col>
                <b-col cols="5">
                    <div class="flex-container">
                        <div v-for="information in ContactsRow" :key="information.text">
                            <a :href="information.href" :target="information.target">
                                <component :is="information.svg"/>
                                <p class="text"><span>{{information.name}}</span> {{information.http}}</p>
                            </a>
                        </div>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import information from '../../public/documents/information.json';
    import Telephone_svg from "./svg_contacts/telephone_svg";
    import Email_svg from "./svg_contacts/email_svg";
    import Instagram_svg from "./svg_contacts/instagram_svg";
    export default {
        name: "Contacts",
        data(){
            return{
                ContactsRow:[
                    {
                        svg:Telephone_svg,
                        href:'tel:' + information.phone,
                        target:'_self',
                        name:'Телефон:',
                        http:information.phone
                    },
                    {
                        svg:Email_svg,
                        href:'mailto:' + information.mail,
                        target:'_self',
                        name:'Почта:',
                        http:information.mail
                    },
                    {
                        svg:Instagram_svg,
                        href:information.instagram_address,
                        target:'_blank',
                        name:'Инстаграм:',
                        http:information.instagram,
                    },
                ]
            }
        }
    }
</script>

<style scoped lang="scss">

</style>