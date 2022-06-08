<template>
    <div id="FormEntry">
        <b-container>
            <b-row>
                <b-col>
                <form>
                    <input type="text" placeholder="ФИО">
                    <input type="text" placeholder="Телефон">
                    <input type="text" placeholder="Email">
                    <input type="text" placeholder="Выберите турнир">
                    <button>Записаться на грим</button>
                </form>
                </b-col>
                <b-col cols="5">
                    <img src="../../public/1.png">
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: "FormEntry"
    }
</script>

<style scoped lang="scss">
    form{
        padding-top: 12%;
        width: 80%;
        margin: 0 auto;
    input{
        margin-top: 1%;
        border-top: none !important;
        border-left: none !important;
        border-right: none !important;
        width: 100%;
        font-size: 1.45rem !important;
        font-family: 'Forum', cursive !important;
        background: transparent;
        padding: 14px 0 15px 7px;
        color: #959DAD;
        border-bottom: 1px solid #1767aa;
    }
    button{
        margin-top: 8%;
        width: 100%;
        border: none !important;
        height: 50px;
        background: #071935;
        font-size: 1.5rem !important;
        font-family: 'Forum', cursive!important;
        border-radius: 8px;
        color: #FFFFFF;
        text-align: center;
    }
    input,button{
        font-size: 1.6rem;
        line-height: 21px;

        font-family: 'Forum', cursive;
    }
    }
    col{
        padding: 7% 0 0;
    }

    img{
        width: 100%;
        height: 100%;
        background: radial-gradient( #293655, #1a2238, #0a0f18, #0a0f18);
    }
    h1{
        padding: 20% 0 5%;
        font-weight: 400;
        font-size: 2rem;
    }
    p{
        font-size: 1.6rem;
        font-family: 'Forum', cursive;
        line-height: 2rem;
        font-weight: 300;margin-bottom: 6%;
    }
    button{
        border: 2px solid #8792a5;
        font-size: 1.6rem;
        color: #8792a5;
        border-radius: 7px;
        margin-top: 2%;
        padding: 1%;  font-family: 'Forum', cursive;
        background: transparent;
    }
</style>