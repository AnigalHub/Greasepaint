<template>
    <div id="Tourneys" v-if="tourneysToShow.length > 0">
        <b-container>
            <h2>Ближайшие турниры федерации NBC:</h2>
            <div class="flex-container">
                <div v-for="tourney in tourneysToShow" >
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
                dateTourneys:false,
                Tourneys:[
                    {
                        src: "./qw.jpg",
                        date:"29 октября 2022",
                        name:"GRAND PRIX MOSCOW",
                        address:"Москва, Ленинский проспект, 49 стр. 3. ГЛАВCLUB",
                    },
                    {
                        src: "./qe.jpg",
                        date:"13 декабря 2022",
                        name:"GRAND PRIX NBC 7",
                        address:"Москва, Орджоникидзе, д. 11 стр. 1. STUDIO HALL"
                    },
                ],
            }
        },
        computed:{
            tourneysToShow(){
                let tournaments = []

                for (let i =0; i < this.Tourneys.length; i++){
                    let date = this.Tourneys[i].date;
                    console.log('date', date)
                    let day = date.substr(0, 2)
                    let year = (date.substring(date.length - 4));
                    let month = this.SearchForTheNumberOfTheMonth(date,day,year);
                    console.log(day,month,year)
                    const dataTourney = new Date(Number(year),month,Number( day));

                    let dm = this.today - dataTourney;
                    console.log('dm', dm)
                    const ONE_DAY_IN_MS = 86400000;
                    if ( dm < ONE_DAY_IN_MS ){
                        tournaments.push(this.Tourneys[i])
                    }

                }
                return tournaments;
            },



        },
        methods:{
            SearchForTheNumberOfTheMonth(date,day,year){
                const arrayMonths =  [
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
                ]
                //удаление числа
                var newstr = date.replace(day, "");
                //удаление года
                newstr = newstr.replace(year, "")
                //удаление пробелов
                newstr = newstr.split(' ').join('')
                let month = arrayMonths.indexOf(newstr);
                return month;
            }
        }
    }
</script>

<style scoped lang="scss">

</style>