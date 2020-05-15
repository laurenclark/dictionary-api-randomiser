<template>
    <section class="word-display">
        <p class="box box--red" v-if="error">:( Something went wrong. Try again.</p>
        <v-button :class="'button--large'" @click.native="getRandomWords(20)">
            <loading-spinner v-show="loading" title="Loading..." />
            <div v-show="!words">Get Random Words</div>
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
import Spinner from '@/components/ui/Spinner.vue';
export default {
    name: 'Words',
    components: {
        'word-span': WordSpan,
        'v-button': Button,
        'loading-spinner': Spinner
    },
    data() {
        return {
            words: '',
            loading: false,
            error: false
        };
    },
    methods: {
        async getRandomWords(wordAmount = 10) {
            try {
                this.loading = true;
                const url = `https://random-word-api.herokuapp.com/word?number=${wordAmount}`;
                const res = await fetch(url);
                const data = await res.json();
                this.words = data;
            } catch (error) {
                this.loading = false;
                this.error = true;
                console.error(`getRandomWords has failed!`);
                console.error(error.response.status);
            }
            this.loading = false;
        }
    }
};
</script>

<style scoped>
.word-display span {
    margin-top: 1rem;
    font-size: 0.8rem;
}

.button--large {
    margin-bottom: 1em;
}
</style>