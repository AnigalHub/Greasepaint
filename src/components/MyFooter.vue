<template>
    <div id="Myfooter">
        <b-container>
            <div class="text">
                © 2022 #polyakovsteam
            </div>
            <div class="flex-container svgFooter">
                <div v-for="information in ContactsRow" :key="information.text">
                    <a :href="information.href" :target="information.target">

                    </a>
                </div>
            </div>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: "Myfooter",
        data(){
            return{
                ContactsRow:[
                    {
                        href:'tel:' + '+7 (903) 151-39-31',
                        target:'_self'
                    },
                    {
                        href:'mailto:' + 'annaignatova97@bk.ru',
                        target:'_self'
                    },
                ]
            }
        }
    }
</script>

<style scoped>
    .text{
        font-size: 1.7rem;
        font-family: 'Forum', cursive;
        line-height: 1.8rem;
        font-weight: 300;
    }
    #Myfooter{
        padding: 2% 0;
        background: black;
    }
</style>
