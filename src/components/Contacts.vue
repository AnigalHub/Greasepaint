<template>
    <div id="Contacts">
        <b-container>
            <b-row>
                <b-col>
                    <p>К каждому клиенту мы подходим индивидуально, делаем всё возможное, чтобы Вы остались довольны результатом нашего грима.</p>
                    <p>Задать любой интересующий Вас вопрос можно удобным для вас способом и мы ответим Вам в ближайшее время!</p>
                    <p>До встречи на соревнованиях! </p>
                </b-col>
                <b-col cols="4">
                    <div class="flex-container">
                        <div v-for="information in ContactsRow" :key="information.text">
                            <a :href="information.href" :target="information.target">
                                <component :is="information.svg"/>
                                <div class="text">{{information.name}} {{information.http}}</div>
                            </a>
                        </div>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
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
                        href:'tel:' + '+7 968 824-80-96',
                        target:'_self',
                        name:'Телефон:',
                        http:'+7 968 824-80-96'
                    },
                    {
                        svg:Email_svg,
                        href:'mailto:' + 'polyakovsteam@mail.ru',
                        target:'_self',
                        name:'Почта:',
                        http:'polyakovsteam@mail.ru'
                    },
                    {
                        svg:Instagram_svg,
                        href:'',
                        target:'_blank',
                        name:'Инстаграм:',
                        http:'polyakovs_team',
                    },
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
    #Contacts{
        padding: 3% 0;
    }
    p{
        font-size: 1.7rem;
        font-family: 'Forum', cursive;
        line-height: 1.8rem;
        font-weight: 300;
        margin-bottom: 4%;
    }
    .flex-container{
        padding: 2% 0;

    }
    .col-5{
        padding: 0 0 0 ;
    }
    a{
       color:  #8e9aaf;
    }
    svg{
        fill:#8e9aaf;
        width: 35px;
        height: 35px;
        margin-right: 2%;
        float: left;
    }
    .text{
        margin-left: -4%;
    }
    .col-4{
        padding: 0 !important;
    }
    .flex-container > div {
        font-size: 1.5rem !important;
        font-family: 'Forum', cursive!important;
        border-radius: 8px;
        padding: .8% 2%;
        width: 100%;
        box-shadow: 0 1px 8px 1px #293655;
        height: 100%;
        margin: 0 1% 4% 1% !important;
    /*при наведении*/
    &:hover{

     }
    }
</style>