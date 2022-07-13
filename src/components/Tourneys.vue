<template>
    <div id="Tourneys">
        <b-container>
            <h2>Ближайшие турниры федерации NBC:</h2>
            <b-row>
                <b-col>
                    <b-row>
                        <b-col cols="5">
                            <img src="../../public/qw.jpg">
                        </b-col>
                        <b-col>
                            <p> 29 октября 2022</p> <hr>
                            <p> GRAND PRIX MOSCOW</p>
                            <hr>
                            <p>   Москва,
                                Ленинский проспект, 49 стр. 3.
                                ГЛАВCLUB
                            </p>
                        </b-col>
                    </b-row>
                </b-col>
                <b-col>
                    <b-row>
                        <b-col cols="5">
                            <img src="../../public/qe.jpg">
                        </b-col>
                        <b-col>
                            <p>13 ноября 2022 </p><hr>
                            <p>GRAND PRIX NBC 7 </p><hr>
                            <p> Москва,
                                Орджоникидзе, д. 11 стр. 1.
                                STUDIO HALL
                            </p>
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
                        src: '../../public/qw.jpg',
                        date:'29 октября 2022',
                        name:'GRAND PRIX MOSCOW',
                        address:'Москва, Ленинский проспект, 49 стр. 3. ГЛАВCLUB'
                    },
                    {
                        src: '../../public/qe.jpg',
                        date:'13 ноября 2022',
                        name:'GRAND PRIX NBC 7',
                        address:'Москва, Орджоникидзе, д. 11 стр. 1. STUDIO HALL'
                    },
                ],
            }
        }
    }
</script>

<style scoped lang="scss">

</style>