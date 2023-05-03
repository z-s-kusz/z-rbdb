<script setup lang="ts">
const search = () => {
    console.log('search clicked');
};
</script>

<template>
    <v-form @submit.prevent="search">
        <v-text-field label="Search" variant="outlined" append-inner-icon="mdi-search"
            @click:append-inner="search"></v-text-field>
    </v-form>
</template>
