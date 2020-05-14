

<template>
    <main class="main">
        <header-bar />
        <router-view />
    </main>
</template>

<script>
import Header from './components/layout/Header.vue';
export default {
    name: 'App',
    components: {
        'header-bar': Header
    }
};
</script>

<style lang="scss">
@import 'sass/global';
.main {
    text-align: center;
    padding: 5vh 5vw;
    max-width: 1200px;
    margin: 0 auto;
}
</style>
