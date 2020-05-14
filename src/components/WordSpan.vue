<template>
    <span class="badge badge-large">{{text}}</span>
</template>

<script>
export default {
    name: 'WordSpan',
    props: {
        text: { type: String },
        id: { type: Number }
    }
};
</script>

<style lang="scss" scoped>
</style>