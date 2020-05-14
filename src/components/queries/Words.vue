<template>
    <section class="word-display">
        <v-button :class="'button--large'" @click.native="getRandomWords()">
            <div v-show="!words">Randomise!</div>
            <div v-show="words">Randomise Again!</div>
        </v-button>
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
import Button from '@/components/ui/Button.vue';
import WordSpan from '@/components/ui/WordSpan.vue';
export default {
    name: 'Words',
    components: {
        'word-span': WordSpan,
        'v-button': Button
    },
    data() {
        return {
            words: '',
            loading: false
        };
    },
    methods: {
        async getRandomWords(wordAmount = 10) {
            this.loading = true;
            try {
                const url = `https://random-word-api.herokuapp.com/word?number=${wordAmount}`;
                const res = await fetch(url);
                const data = await res.json();
                this.words = data;
            } catch (error) {
                console.error('getRandomWords has failed!');
                console.error(error.response.status);
            }
            this.loading = false;
        }
    }
};
</script>

<style scoped>
.word-display span {
    margin-top: 2rem;
    font-size: 0.8rem;
}
</style>