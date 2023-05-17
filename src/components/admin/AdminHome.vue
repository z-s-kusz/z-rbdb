<script setup lang="ts">
import { globalUserRef } from '@/firebase';
</script>

<template>
    <header class="full-column text-center">
        <h1>Welcome, {{ globalUserRef.email }}</h1>
    </header>
    <section class="center-column">
        <v-card class="actions">
            <RouterLink to="/admin/add-song">
                <v-btn color="primary">Add Song</v-btn>
            </RouterLink>
        </v-card>
    </section>
</template>

<style lang="scss" scoped>
h1 {
    padding: 2rem;
}

.actions {
    padding: 1rem;
    display: flex;
    justify-content: center;
}
</style>
