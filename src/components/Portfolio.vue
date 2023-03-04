<template>
    <div id="Portfolio">
        <b-container>
            <h2>Портфолио</h2>
            <div class="flex-container">
                <a v-for="(work, index) in Portfolio" :key="index" :href="work.link" target="_blank">
                    <img :src="work.src" :alt="work.alt"/>
                </a>
            </div>
        </b-container>
    </div>
</template>

<script>
    import information from '../../public/documents/information.json';
    export default {
        name: "Portfolio",
        data(){
            return{
                Portfolio: information.Portfolio,
            }
        }
    }
</script>

<style scoped lang="scss">

</style>