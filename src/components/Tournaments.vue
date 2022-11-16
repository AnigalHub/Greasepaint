<template>
    <div id="Tournaments" v-if="tournamentsToShow.length > 0">
        <b-container>
            <h2>Ближайшие турниры федерации NBC:</h2>
            <div class="flex-container" >
                <div v-for="tournament in tournamentsToShow" :class="[tournamentsToShow.length === 1 ? 'oneTournament' : 'manyTournaments']" >
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
                let tournaments = [];

                this.Tournaments.forEach((tournament) =>{
                    let date = (tournament.date).split(" ");
                    let day = date[0];
                    let year = date[2];
                    let month = this.SearchForTheNumberOfTheMonth(date[1]);

                    const dateTournament = new Date(Number(year),month,Number( day));

                    let dateDifference = this.today - dateTournament;

                    const ONE_DAY_IN_MS = 86400000;
                    if ( dateDifference < ONE_DAY_IN_MS ){
                        tournaments.push(tournament)
                    }
                })
                return tournaments;
            },
        },
        methods:{
            SearchForTheNumberOfTheMonth: function (monthStr) {
                const months = {
                    января: 0,
                    февраля: 1,
                    марта: 2,
                    апреля: 3,
                    мая: 4,
                    июня: 5,
                    июля: 6,
                    августа: 7,
                    сентября: 8,
                    октября: 9,
                    ноября: 10,
                    декабря: 11
                }
                return months[monthStr];
            }
        }
    }
</script>

<style scoped lang="scss">

</style>