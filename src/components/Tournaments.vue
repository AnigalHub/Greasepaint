<template>
    <div id="Tournaments" v-if="tournamentsToShow.length > 0">
        <b-container>
            <h2>Ближайшие турниры федерации NBC</h2>
            <div class="flex-container">
                <div v-for="tournament in tournamentsToShow" class="tournament">
                    <p class="name_tournament">{{tournament.name}}</p>
                    <b-row>
                        <b-col cols="5">
                            <img :src="tournament.src" :alt="tournament.name">
                        </b-col>
                        <b-col>
                            <div>
                                <p class="date">{{tournament.date}}</p>
                                <hr>
                                <p>{{tournament.city}}</p><hr>
                                <p class="address">{{tournament.address}}</p>
                                <b-button><a :href="tournament.link" target="_blank">Узнать подробнее</a></b-button>
                            </div>
                        </b-col>
                    </b-row>
                </div>
            </div>
        </b-container>
    </div>
</template>

<script>
    import { tournamentsToShow} from '@/mixins/tournamentsToShow';
    export default {
        name: "Tournaments",
        mixins:[tournamentsToShow],
    }
</script>

<style scoped lang="scss">

</style>