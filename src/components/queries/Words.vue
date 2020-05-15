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

// TODO:
// - Loop through defintion data to get
//    * {definition}, {example}, {word}, {type}, {image}, {emoji} {pronunciation}
// - Store these in their own objects with .map()
// - Loop through them in the display
// - Create dynamic sorting/filtering by utilising .sort() and .filter()
// - Pass this down to results and results children to render, or add to store
// - Persist search terms in localStorage
// - OR set up a graphQL server with a mutation to store and cache them
// - Handle words not found if there is a 404 response, get {message} and display it

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
            definitionsData: {}
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
                this.definitionsData = data;
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