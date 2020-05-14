<template>
    <div class="word-display">
        <h1>Word Randomiser</h1>
        <v-button>Randomise!</v-button>
        <section>
            <word-span :text="'Word'" />
            <word-span :text="'Word'" />
            <word-span :text="'Word'" />
            <word-span :text="'Word'" />
            <word-span :text="'Word'" />
            <word-span :text="'Word'" />
            <word-span :text="'Word'" />
            <word-span :text="'Word'" />
            <word-span :text="'Word'" />
            <word-span :text="'Word'" />
        </section>
    </div>
</template>

<script>
import Button from '@/components/Button.vue';
import WordSpan from '@/components/WordSpan.vue';
export default {
    name: 'Queries',
    components: {
        'v-button': Button,
        'word-span': WordSpan
    }
};
</script>


<style scoped lang="scss">
.word-display {
    max-width: 1200px;
    margin: 0 auto;
}
</style>
