<script setup lang="ts">
import { computed } from 'vue';

interface Icon {
    icon: string;
    color: string;
}

interface Props {
    rating: number;
}
const props = defineProps<Props>();

let icons = computed(() => {
    let iconsArray: Icon[] = [];
    for (let i = 0; i < 5; i++) {
        if (props.rating === 6) {
            iconsArray.push({ icon: 'mdi-emoticon-devil-outline', color: 'red' });
        } else if (props.rating === -1) {
            iconsArray.push({ icon: 'mdi-minus', color: 'purple' });
        } else if (props.rating > i) {
            iconsArray.push({ icon: 'mdi-star', color: 'orange' });
        } else {
            iconsArray.push({ icon: 'mdi-star-outline', color: 'purple' });
        }
    }
    return iconsArray;
});
</script>

<template>
    <span>
        <v-icon v-for="(icon, index) in icons" :icon="icon.icon" :color="icon.color" :key="index"></v-icon>
    </span>
</template>
