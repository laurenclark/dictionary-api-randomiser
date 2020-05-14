<template>
    <section class="word-display">
        <div v-if="words">
            <span v-for="(word, index) in words" :key="index">
                <word-span :text="word" />
            </span>
        </div>
        <span v-else>
            <p>
                Click the
                <b>Randomise</b> button to start!
            </p>
        </span>
    </section>
</template>

<script>
import WordSpan from '../WordSpan.vue';
export default {
    name: 'Words',
    components: {
        'word-span': WordSpan
    },
    data() {
        return {
            words: ''
        };
    },
    mounted() {
        this.getRandomWords(10);
    },
    methods: {
        async getRandomWords(wordAmount = 10) {
            try {
                const url = `https://random-word-api.herokuapp.com/word?number=${wordAmount}`;
                const res = await fetch(url);
                const data = await res.json();
                this.words = data;
            } catch (error) {
                console.error('getRandomWords has failed!');
                console.error(error.response.status);
            }
        }
    }
};
</script>

<style scoped>
.word-display span {
    font-size: 0.8rem;
}
</style>