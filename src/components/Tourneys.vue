<template>
    <div id="Tourneys">
        <b-container>
            <h2>Ближайшие турниры федерации NBC:</h2>
            <b-row>
                <b-col>
                    <img src="../../public/qw.jpg">
                    <p>29 октября 2022 <br>
                        GRAND PRIX MOSCOW<br>
                        Москва,
                        Ленинский проспект, 49 стр. 3.<br>
                        STUDIO HALL
                    </p>
                </b-col>
                <b-col>
                    <img src="../../public/qe.jpg">
                    <p>13 ноября 2022<br>
                        GRAND PRIX NBC 7<br>
                        Москва,
                        Орджоникидзе, д. 11 стр.
                        ГЛАВCLUB</p>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: "Tourneys"
    }
</script>

<style scoped lang="scss">
    img{
        width: 220px;
        margin: 4% auto;
        display: block;
    }
    h2{
        font-weight: 300;
    }
    p{
        text-align: center;
        font-size: 1.4rem;
        font-family: 'Inter', sans-serif;
        line-height: 2rem;
        font-weight: 300;
    }
</style>