<template>
    <div>
        <nav class="menu">
            <li>
                <router-link to="/statisitcs">Statistics</router-link>
            </li>
            <li>
                <router-link to="/">Queries</router-link>
            </li>
            <li>
                <router-link to="/statisitcs">History</router-link>
            </li>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'header-bar'
};
</script>

<style lang="scss" scoped>
nav {
    li {
        list-style: none;
        display: inline-block;

        a {
            font-size: 2rem;
        }
    }
}
</style>