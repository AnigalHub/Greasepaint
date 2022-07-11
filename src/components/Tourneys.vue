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
        name: "Tourneys"
    }
</script>

<style scoped lang="scss">
    img{
        filter: brightness(89%);
    }
    .col .row{
        background: rgba(24, 57, 80, 0.3);
        border: 2px solid rgba(67, 103, 167, 0.21);
        color: #8e9aaf;
        margin-right: 2%;
        border-radius: 8px;
    }
    .col-5{
        padding: 4px;
    }
    .col .col{
        text-align: center;
        padding: 6% 3% 3%;
    }
    hr{
        margin: .5rem 0;
        border-top: 1px solid #8e9aaf;
    }
</style>