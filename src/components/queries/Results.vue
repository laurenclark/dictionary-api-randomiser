<template>
    <section class="results">
        <filters />
        <defintions />
    </section>
</template>

<script>
import Definitions from './Definitions.vue';
import Filters from './Filters.vue';
export default {
    name: 'Results',
    components: {
        defintions: Definitions,
        filters: Filters
    }
};
</script>

<style lang="scss" scoped>
.results {
    display: grid;
    grid-template-areas: 'side content';
    grid-template-columns: 500 1fr;
    grid-template-rows: auto;
    grid-gap: 10px;
    height: 100vh;
    margin-top: 5vh;
    position: relative;
}
</style>