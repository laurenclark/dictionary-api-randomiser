<template>
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
    </section>
</template>

<script>
export default {
    name: 'Definitons'
};
</script>

<style lang="scss" scoped>
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
</style>