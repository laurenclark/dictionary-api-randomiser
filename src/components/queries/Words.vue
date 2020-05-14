<template>
    <section class="word-display">
        <word-span :text="'Word'" />
    </section>
</template>

<script>
import WordSpan from '../WordSpan.vue';
export default {
    name: 'Words',
    components: {
        'word-span': WordSpan
    },
    props: {
        class: String
    }
};
</script>

<style scoped>
</style>