<template>
    <div id="Tournaments" v-if="tournamentsToShow.length > 0">
        <b-container>
            <h2>Ближайшие турниры федерации NBC:</h2>
            <div class="flex-container">
                <div v-for="tournament in tournamentsToShow" >
                    <p class="date" >{{tournament.date}}</p>
                    <b-row>
                        <b-col cols="4">
                            <img :src="tournament.src" :alt="tournament.name">
                        </b-col>
                        <b-col>
                            <p>{{tournament.name}}</p>
                            <p> {{tournament.address}}</p>
                        </b-col>
                    </b-row>
                </div>
            </div>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: "Tournaments",
        data(){
            return{
                today: new Date(),
                Tournaments:[
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
            tournamentsToShow(){
                let tournaments = []


                for (let i =0; i < this.Tournaments.length; i++){
                    let date = (this.Tournaments[i].date).split(" ");

                    let day = date[0]
                    let year = date[2];
                    let month = this.SearchForTheNumberOfTheMonth(date[1]);

                    const dataTournament = new Date(Number(year),month,Number( day));

                    let dm = this.today - dataTournament;

                    const ONE_DAY_IN_MS = 86400000;
                    if ( dm < ONE_DAY_IN_MS ){
                        tournaments.push(this.Tournaments[i])
                    }
                }
                return tournaments;
            },
        },
        methods:{
            SearchForTheNumberOfTheMonth(newstr){
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
                let month = arrayMonths.indexOf(newstr);
                return month;
            }
        }
    }
</script>

<style scoped lang="scss">

</style>