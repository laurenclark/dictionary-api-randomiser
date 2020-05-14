<template>
    <span class="badge badge--large badge--rounded">{{text}}</span>
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
.badge {
    display: inline-block;
    margin: 20px;
    background: var(--color-blue--700);
    cursor: pointer;
    transition: all 0.5s ease-in-out;
}

.badge:hover {
    background: var(--color-blue--800);
}

.badge--rounded {
    border-radius: 10px;
    display: inline-block;
    margin: 5px;
}

.badge--large {
    font-weight: 200;
}
</style>