<script setup lang="ts">
import { ref } from 'vue';
import AuthForm from './AuthForm.vue';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '@/firebase';
import { useRouter } from 'vue-router';

const router = useRouter();
const errorMessage = ref('Sign Up Disabled. Site is 100% usable without logging in.');
const loading = ref(false);

const submit = (form) => {
    return; // disable signup

    if (loading.value) return;

    if (form.password !== form.confirmPassword) {
        return errorMessage.value = 'Passwords must match.';
    } else {
        errorMessage.value = '';
    }

    loading.value = true;
    createUserWithEmailAndPassword(auth, form.email, form.password)
        .then((userCredential) => {
            // Signed in 
            router.push({ name: 'admin' });
        })
        .catch((error) => {
            const message = error.message;
            console.error('error on sign up', error);
            errorMessage.value = message;
        }).finally(() => {
            loading.value = false;
        });
};

</script>

<template>
    <AuthForm submit-text="Sign Up" @form-submit="submit" :errorMessage="errorMessage" form-name="signup" />
</template>
