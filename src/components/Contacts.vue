<template>
    <div id="Contacts">
        <b-container>
            <b-row>
                <b-col>
                    <p>К каждому клиенту мы подходим индивидуально, делаем всё возможное,
                        чтобы Вы остались довольны результатом нашего грима.
                    </p>
                    <p>
                        Задать любой интересующий Вас вопрос можно
                        удобным для вас способом и мы ответим Вам в ближайшее время!
                    </p>
                    <p>До встречи на соревнованиях! </p>
                </b-col>
                <b-col cols="5">
                    <div class="flex-container">
                        <div>Телефон</div>
                        <div>Email</div>
                        <div>Instagram</div>
                    </div>
                </b-col>
            </b-row>


        </b-container>
    </div>
</template>

<script>
    export default {
        name: "Contacts"
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
        padding: 3% 0 0 ;
    }
    /*блоки с картинками*/
    .flex-container > div {
        background: #071935;
        font-size: 1.5rem !important;
        font-family: 'Forum', cursive!important;
        border-radius: 8px;
        padding: .8%;
        text-align: center;
        width: 100%;
        height: 100%;
        margin: 0 1% 4% 1% !important;
    /*при наведении*/
    &:hover{
         box-shadow: 0px 1px 8px 1px #293655;
     }
    }
</style>