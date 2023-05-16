<script setup lang="ts">
import { rbGenres } from '@/types/genres';
const decadeOptions = [
    "1960s",
    "1970s",
    "1980s",
    "1990s",
    "2000s",
    "2010s",
    "2020s"
];
const genreOptions = rbGenres;
</script>

<template>
    <div class="center-column">
        <v-card class="card">
            <v-card-title>Decades</v-card-title>
            <section class="card-content">
                <router-link v-for="decade in decadeOptions" :to="`/explore/decade/${encodeURIComponent(decade)}`">
                    <v-chip size="x-large" class="decade-chip" color="orange">{{ decade }}</v-chip>
                </router-link>
            </section>
        </v-card>

        <v-card class="card">
            <v-card-title>Genres (According to Rock Band)</v-card-title>
            <section class="card-content">
                <router-link v-for="genre in genreOptions" :to="`/explore/genre/${encodeURIComponent(genre)}`">
                    <v-chip size="large" class="decade-chip">{{ genre }}</v-chip>
                </router-link>
            </section>
        </v-card>
    </div>
</template>

<style lang="scss" scoped>
.card {
    margin: 1rem;
}

.card-content {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 1rem;
}

.decade-chip {
    margin: 0.5rem;
    flex: 1 0 1;
}
</style>