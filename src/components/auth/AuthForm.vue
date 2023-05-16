<script setup lang="ts">
import { reactive } from 'vue';

interface Props {
    formName: 'signup' | 'login';
    submitText: string;
    errorMessage: string;
}
const props = defineProps<Props>();

const emit = defineEmits(['formSubmit']);
const form = reactive({
    email: '',
    password: '',
    confirmPassword: '',
});

const handleSubmit = () => {
    emit('formSubmit', form);
};
</script>

<template>
    <v-card class="card">
        <v-form class="form" @submit.prevent="handleSubmit" :disabled="props.formName === 'signup'">
            <v-text-field v-model="form.email" label="Email" type="email"></v-text-field>
            <v-text-field v-model="form.password" label="Password" type="password"></v-text-field>
            <v-text-field v-if="props.formName === 'signup'" v-model="form.confirmPassword" label="Confirm Password"
                type="password"></v-text-field>
            <p class="error" v-show="errorMessage">{{ errorMessage }}</p>
            <div class="btns">
                <RouterLink to="/">
                    <v-btn type="button">Cancel</v-btn>
                </RouterLink>
                <v-btn type="submit" color="primary">{{ props.submitText }}</v-btn>
            </div>
        </v-form>
    </v-card>
</template>

<style lang="scss" scoped>
.card {
    padding: 1rem;
}

.form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
    margin-right: auto;
    margin-left: auto;
    max-width: 560px;
}

.btns {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.error {
    padding-bottom: 0.5rem;
    color: red;
    font-weight: bolder;
}
</style>