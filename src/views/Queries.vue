<template>
    <div class="queries">
        <word-display />
    </div>
</template>

<script>
import Words from '@/components/queries/Words.vue';

export default {
    name: 'Queries',
    components: {
        'word-display': Words
    }
};
</script>


<style scoped lang="scss">
.word-display,
.queries {
    margin-top: 5vh;
}
</style>
