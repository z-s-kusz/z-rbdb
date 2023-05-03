<script setup lang="ts">
import SongList from './SongList.vue';

</script>

<template>
    <v-card>
        <section class="big-about">
            <p>Do we have the song you want to play?</p>
            <p>Use the search bar at the top or scroll, scroll through what we do have below.</p>
        </section>
    </v-card>

    <v-card>
        <SongList />
    </v-card>
</template>

<style lang="scss">
.big-about {
    // line-height: 2rem;
    font-size: 2.3rem;
    font-weight: bold;
    color: rgb(173, 33, 173);
}
</style>