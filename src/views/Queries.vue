<template>
    <div class="queries">
        <v-button :class="'button--large'">Randomise!</v-button>
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
        <section class="results">
            <aside>
                <div class="control sort">
                    <h3>Sort</h3>
                    <v-button :class="'button button--secondary'">Type</v-button>
                    <v-button :class="'button button--secondary'">Definition</v-button>
                </div>
                <div class="control filters">
                    <h3>Filter</h3>
                    <v-button :class="'button button--secondary'">Type</v-button>
                    <v-button :class="'button button--secondary'">Definition</v-button>
                    <v-button :class="'button button--secondary'">Example</v-button>
                </div>
            </aside>
            <section class="definition">
                <h2 class="definition__header">Definitions</h2>
                <header>
                    <h3>Cupboard</h3>
                    <span>/ˈkəbərd/</span>
                </header>
                <article>
                    <header>
                        <em>noun</em>
                        <p>a recess or piece of furniture with a door and usually shelves, used for storage.</p>
                        <span>"a broom cupboard"</span>
                    </header>
                    <figure>
                        <img
                            src="https://media.owlbot.info/dictionary/images/aan.jpg.400x400_q85_box-0,0,225,225_crop_detail.jpg"
                            alt="word"
                        />
                    </figure>
                </article>
                <article>
                    <header>
                        <em>noun</em>
                        <p>a recess or piece of furniture with a door and usually shelves, used for storage.</p>
                        <span>"a broom cupboard"</span>
                    </header>
                    <figure>
                        <img
                            src="https://media.owlbot.info/dictionary/images/aan.jpg.400x400_q85_box-0,0,225,225_crop_detail.jpg"
                            alt="word"
                        />
                    </figure>
                </article>
                <article>
                    <header>
                        <em>noun</em>
                        <p>a recess or piece of furniture with a door and usually shelves, used for storage.</p>
                        <span>"a broom cupboard"</span>
                    </header>
                    <figure>
                        <img
                            src="https://media.owlbot.info/dictionary/images/aan.jpg.400x400_q85_box-0,0,225,225_crop_detail.jpg"
                            alt="word"
                        />
                    </figure>
                </article>
            </section>
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
    },
    props: {
        class: String
    }
};
</script>


<style scoped lang="scss">
.word-display,
.queries {
    margin-top: 5vh;
}

.results {
    display: grid;
    grid-template-areas: 'side content';
    grid-template-columns: 500 1fr;
    grid-template-rows: auto;
    grid-gap: 10px;
    height: 100vh;
    margin-top: 5vh;
    position: relative;

    aside {
        text-align: left;
        .button {
            margin: 0 5px;
        }
        .control {
            margin-bottom: 20px;
            border: 1px solid var(--color-mono--200);
            border-radius: 0 0 15px 15px;
            padding-bottom: 15px;
            h3 {
                margin-bottom: 10px;
                background: var(--color-mono--200);
                padding: 10px;
            }
        }
    }
    .definition {
        border: 2px solid var(--color-mono--300);
        border-radius: 5px;
        text-align: left;
        padding: 10px;
        font-size: 1rem;
        &__header {
            h2 {
                margin-bottom: 0;
            }
            position: absolute;
            padding: 0 5px;
            right: 20px;
            top: -15px;
            background: white;
            display: inline-block;
        }
        header {
            padding: 20px;
            h3 {
                margin-bottom: 15px;
            }
            border-bottom: 1px solid var(--color-mono--300);
        }
        img {
            width: 110px;
            max-width: 100%;
            border-radius: 55px;
            border: solid 1px #dedede;
        }
        article {
            & header {
                border-bottom: none;
            }
            display: grid;
            padding: 20px;
            grid-template-columns: 4fr 1fr;
            border-bottom: 1px solid var(--color-mono--300);
        }
    }
}
</style>
