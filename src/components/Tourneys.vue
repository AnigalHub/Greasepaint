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
                            <div>29 октября 2022 <hr>
                                GRAND PRIX MOSCOW<hr>
                                Москва,
                                Ленинский проспект, 49 стр. 3.
                                ГЛАВCLUB
                            </div>
                        </b-col>
                    </b-row>
                </b-col>
                <b-col>
                    <b-row>
                        <b-col cols="5">
                            <img src="../../public/qe.jpg">
                        </b-col>
                        <b-col>
                            <div>13 ноября 2022 <hr>
                                GRAND PRIX NBC 7<hr>
                                Москва,
                                Орджоникидзе, д. 11 стр. 1.
                                STUDIO HALL
                            </div>
                        </b-col>
                    </b-row>
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
    #Tourneys{
        padding-bottom: 2%;
    }
    img{
        filter: brightness(80%);
    }
    h2{
        font-size: 1.8rem;
        text-shadow: #293655 3px 0 120px;
        font-family: 'Forum', cursive;
        margin-bottom: 3%;
        color: #8e9aaf;
    }
    .col .row{
        background: rgba(66, 74, 90, 0.25);
        color: #8e9aaf;
        margin-right: 2%;
        box-shadow: 0px 1px 8px 1px #071935;
    }
    .col .col-5, .col .col-4{
        padding: 4px;
    }
    .col .col{
        text-align: center;
        padding: 6% 3% 3%;
    }
    p, .col div{
        font-size: 1.5rem;
        font-family: 'Forum', cursive;
        line-height: 1.8rem;
        font-weight: 300;
    }
    hr{
        margin: .5rem 0;
        border-top: 1px solid #8e9aaf;
    }
</style>