<template>
    <div id="Tourneys">
        <b-container>
            <h2>Ближайшие турниры федерации NBC:</h2>
            <div class="flex-container" >
                <div v-for="tourney in Tourneys" class="tou">
                    <p class="date">{{tourney.date}}</p>
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
.date{
    background: rgba(24, 57, 80, 0.3);
    padding: 2% 4%;
    color: #3c88b5;
    margin-bottom: 0 !important;
}
.flex-container > div {
    width: 45%;
    margin: 0 1.5% 2.5% 1.5% !important;
    background: rgba(24, 57, 80, 0.3);
    border: 2px solid rgba(67, 103, 167, 0.21);
    border-radius: 8px;
}
</style>