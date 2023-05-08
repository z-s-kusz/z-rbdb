<script setup lang="ts">
import Difficulty from '@/types/difficulty';
import RatingDisplay from './RatingDisplay.vue';

interface Props {
    difficulty: Difficulty;
}
const props = defineProps<Props>();
</script>

<template>
    <h3>
        <slot></slot>
    </h3>
    <table>
        <tbody>
            <tr>
                <td>Vocals:</td>
                <td>
                    <RatingDisplay :rating="props.difficulty.vocals" />
                </td>
            </tr>
            <tr>
                <td>Guitar:</td>
                <td>
                    <RatingDisplay :rating="props.difficulty.guitar" />
                </td>
            </tr>
            <tr>
                <td>Bass:</td>
                <td>
                    <RatingDisplay :rating="props.difficulty.bass" />
                </td>
            </tr>
            <tr>
                <td>Drums:</td>
                <td>
                    <RatingDisplay :rating="props.difficulty.drums" />
                </td>
            </tr>
        </tbody>
    </table>
</template>

<style lang="scss" scoped>
h3 {
    margin-top: 1rem;
}

table {
    margin-bottom: 1rem;
}

td:first-child {
    padding-right: 1rem;
}
</style>
