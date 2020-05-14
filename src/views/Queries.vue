<template>
    <div class="queries">
        <h1>Word Randomiser</h1>
        <v-button>Randomise!</v-button>
        <section class="word-display">
            <word-span :text="'shkhfksdhfkshd'" />
            <word-span :text="'Word'" />
            <word-span :text="'adfs'" />
            <word-span :text="'dhkjfskjdhfkjshdf'" />
            <word-span :text="'sjflsdjf sdjfksd'" />
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
.queries {
    max-width: 1200px;
    margin: 0 auto;
}

.word-display {
    margin-top: 5vh;
}
</style>
