<template>
    <div>
        <section class="word-display">
            <p class="box box--red" v-if="error">{{errorMessage}}</p>
            <v-button :class="'button--large'" @click.native="getRandomWords(10)">
                <loading-spinner v-show="buttonLoading" title="Loading..." />
                <div v-show="!words">Get Random Words</div>
                <div v-show="words">Randomise Again!</div>
            </v-button>
            <div v-if="words">
                <span v-for="(word, index) in words" :key="index">
                    <word-span :text="word" @click.native="searchForWord(word)" />
                </span>
            </div>
            <span v-else>
                <p v-html="startMessage"></p>
            </span>
        </section>
        <results />
    </div>
</template>

<script>
import Button from '@/components/ui/Button.vue';
import WordSpan from '@/components/ui/WordSpan.vue';
import Spinner from '@/components/ui/Spinner.vue';
import Results from '@/components/queries/Results.vue';

export default {
    name: 'Words',
    components: {
        'word-span': WordSpan,
        'v-button': Button,
        'loading-spinner': Spinner,
        results: Results
    },
    data() {
        return {
            words: '',
            buttonLoading: false,
            resultsLoading: false,
            error: false,
            definition: ''
        };
    },
    computed: {
        errorMessage: function errorMessage() {
            return `:( Something went wrong. Try again.`;
        },
        startMessage: function startMessage() {
            return `Click the <b>Randomise</b> button to start!`;
        }
    },
    methods: {
        async getRandomWords(wordAmount = 10) {
            try {
                this.buttonLoading = true;
                const url = `https://random-word-api.herokuapp.com/word?number=${wordAmount}`;
                const res = await fetch(url);
                const data = await res.json();
                this.words = data;
            } catch (error) {
                this.buttonLoading = false;
                this.error = true;
                console.error(`getRandomWords has failed!`);
                console.error(error.response.status);
            }
            this.buttonLoading = false;
        },

        async searchForWord(word) {
            try {
                const url = `https://owlbot.info/api/v4/dictionary/${word}`;
                const config = {
                    headers: {
                        authorization: `Token ${process.env.VUE_APP_OWL_API_KEY}`
                    }
                };
                const res = await fetch(url, config);
                const data = await res.json();
                this.definition = data;
                alert(word);
            } catch (error) {
                this.error = true;
                console.error(`searchForWord has failed!`);
                console.error(error.response.status);
            }
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