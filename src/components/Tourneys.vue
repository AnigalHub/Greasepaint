<template>
    <div id="Tourneys">
        <b-container>
            <h2>Ближайшие турниры федерации NBC:</h2>
            <b-row class="tourney">
                <b-col v-for="tourney in Tourneys">
                    <b-row>
                        <b-col cols="4">
                            <img :src="tourney.src" :alt="tourney.name">
                        </b-col>
                        <b-col>
                            <p>{{tourney.date}}</p><hr>
                            <p>{{tourney.name}}</p><hr>
                            <p> {{tourney.address}}</p>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: "Tourneys",
        data(){
            return{
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
        }
    }
</script>

<style scoped lang="scss">

</style>