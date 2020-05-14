<template>
    <div class="queries">
        <word-display />
        <results />
    </div>
</template>

<script>
import Words from '@/components/queries/Words.vue';
import Results from '@/components/queries/Results.vue';
export default {
    name: 'Queries',
    components: {
        'word-display': Words,
        results: Results
    }
};
</script>


<style scoped lang="scss">
.word-display,
.queries {
    margin-top: 5vh;
}
</style>
