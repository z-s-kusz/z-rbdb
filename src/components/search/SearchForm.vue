<script setup lang="ts">
import { ref } from 'vue';

interface Props {
    isLoading: boolean;
}
const props = defineProps<Props>();
const emit = defineEmits(['search']);
const searchString = ref('');

const handleSearch = () => {
    if (searchString.value.trim() === '' || props.isLoading) return;

    emit('search', searchString.value);
};

</script>

<template>
    <v-card class="search-card">
        <v-form @submit.prevent="handleSearch" class="flex">
            <v-text-field label="Search" variant="outlined" placeholder="Song | Artist" hide-details single-line clearable
                :loading="props.isLoading" v-model="searchString">
            </v-text-field>
            <v-btn color="primary" type="submit">Search</v-btn>
        </v-form>
    </v-card>
</template>

<style lang="scss" scoped>
.search-card {
    padding: 0.25rem;
}

.flex {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}
</style>