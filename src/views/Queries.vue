<template>
    <div class="queries">
        <v-button :class="'button--large'">Randomise!</v-button>
        <word-display />
        <results />
    </div>
</template>

<script>
import Button from '@/components/Button.vue';
import Words from '@/components/queries/Words.vue';
import Results from '@/components/queries/Results.vue';
export default {
    name: 'Queries',
    components: {
        'v-button': Button,
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
