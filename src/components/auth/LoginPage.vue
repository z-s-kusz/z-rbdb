<script setup lang="ts">
import AuthForm from './AuthForm.vue';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '@/firebase';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const errorMessage = ref('');
const loading = ref(false);

const submit = (form) => {
    if (loading.value) return;

    loading.value = true;
    console.log('submit with...', form);
    signInWithEmailAndPassword(auth, form.email, form.password)
        .then((userCredential) => {
            router.push({ name: 'admin' });
        })
        .catch((error) => {
            const message = error.message;
            console.error('error on log in', error);
            errorMessage.value = message;
        }).finally(() => {
            loading.value = false;
        });
};

</script>

<template>
    <AuthForm submit-text="Log In" @form-submit="submit" :error-message="errorMessage" form-name="login"></AuthForm>
</template>
