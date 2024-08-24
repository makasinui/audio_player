<template>
    <AuthLayout page="Регистрация" :leftNavigation="false">
        <div class="register">
            <TextField 
                icon="email" 
                @click="handleSubmit" 
                v-model="email" 
                placeholder="user@mail.ru" 
                label="Почта" 
            />
            <TextField 
                icon="lock" 
                @click="handleSubmit" 
                v-model="email" 
                placeholder="********" 
                label="Пароль"
                type="password" 
            />
            <Button>Регистрация</Button>
        </div>
    </AuthLayout>
</template>
<script setup>
import AuthLayout from '@/components/auth/AuthLayout.vue';
import TextField from '@/components/ui/TextField.vue';
import Button from '@/components/ui/Button.vue';
import { ref } from 'vue';

const email = ref();
const handleSubmit = () => {
    console.log(email.value)
}
</script>
<style lang="scss">
.register {
    width: 100%;
}
</style>