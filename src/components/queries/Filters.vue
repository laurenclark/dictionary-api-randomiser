<template>
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
</template>

<script>
import Button from '@/components/ui/Button.vue';
export default {
    name: 'Filters',
    components: {
        'v-button': Button
    }
};
</script>

<style lang="scss" scoped>
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
</style>