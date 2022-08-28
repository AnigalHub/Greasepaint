<template>
    <div id="Tourneys" v-if="dateTouneys">
        <b-container>
            <h2>Ближайшие турниры федерации NBC:</h2>
            <div class="flex-container" v-show="dateСomparison">
                <div v-for="tourney in Tourneys">
                    <p class="date" >{{tourney.date}}</p>
                    <b-row>
                        <b-col cols="4">
                            <img :src="tourney.src" :alt="tourney.name">
                        </b-col>
                        <b-col>
                            <p>{{tourney.name}}</p>
                            <p> {{tourney.address}}</p>
                        </b-col>
                    </b-row>
                </div>
            </div>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: "Tourneys",
        data(){
            return{
                today: new Date(),
                arrayMonths :  [
                    'января',
                    'февраля',
                    'марта',
                    'апреля',
                    'мая',
                    'июня',
                    'июля',
                    'августа',
                    'сентября',
                    'октября',
                    'ноября',
                    'декабря'
                ],
                dateTouneys:true,
                Tourneys:[
                    {
                        src: "./qw.jpg",
                        date:"29 октября 2022",
                        name:"GRAND PRIX MOSCOW",
                        address:"Москва, Ленинский проспект, 49 стр. 3. ГЛАВCLUB"
                    },
                    {
                        src: "./qe.jpg",
                        date:"13 ноября 2022",
                        name:"GRAND PRIX NBC 7",
                        address:"Москва, Орджоникидзе, д. 11 стр. 1. STUDIO HALL"
                    },
                ],
            }
        },
        computed:{
            dateСomparison(){
                let date =  this.Tourneys[0].date
                console.log('date', this.Tourneys[0].date)
                let day = date.substr(0, 2)
                let year = (date.substring(date.length - 4));

                //удаление числа
                var newstr = date.replace(day, "");
                //удаление года
                newstr = newstr.replace(year, "")
                //удаление пробелов
                newstr = newstr.split(' ').join('')


                let month = this.arrayMonths.indexOf(newstr);


                const dataTourney = new Date(Number(year),month,Number( day));

                const dm = this.today - dataTourney;

                if ( dm > 86400000 ){
                    this.dateTouneys = false;
                    console.log('текущая дата больше даты турнира')
                }
                return this.dateTouneys;

            }

        }
    }
</script>

<style scoped lang="scss">

</style>