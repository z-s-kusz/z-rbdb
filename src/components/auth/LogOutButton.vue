<script setup lang="ts">
import { auth } from '@/firebase';
import { signOut } from 'firebase/auth';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const loading = ref(false);

const signout = () => {
    loading.value = true;

    signOut(auth)
        .then((response) => {
            router.push({ name: 'home' });
        })
        .catch((error) => {
            console.error('error logging out', error);
        })
        .finally(() => {
            loading.value = false;
        });
};
</script>

<template>
    <v-btn color="secondary" @click="signout" :disabled="loading">Sign Out</v-btn>
</template>
