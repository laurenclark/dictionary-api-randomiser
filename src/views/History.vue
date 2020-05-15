<template>
    <div>{{ $route.name }}</div>
</template>

<script>
// TODO:
// Store words clicked on and searched for next to the date/time
// Show how many times a word was searched for next to the word
// Show how many definitons it returned if any, if not show 0 or a "no results"
// Add this to the Store so that Statistics can access the data
// Persist this data with localStorage or GraphQL

export default {
    name: 'History'
};
</script>

<style scoped>
</style>