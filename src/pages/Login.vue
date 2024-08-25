<template>
    <AuthLayout page="Авторизация" :leftNavigation="false">
        <v-form @submit.prevent="handleSubmit" ref="form" class="register">
            <TextField
                icon="email"
                v-model="email"
                placeholder="user@mail.ru"
                :rules="[rules('required'), rules('email')]"
                label="Почта"
            />
            <TextField
                icon="lock"
                v-model="password"
                placeholder="********"
                label="Пароль"
                type="password"
                :rules="[rules('min', 8)]"
            />
            <router-link class="login-btn" to="/login">
                Зарегистрироваться</router-link
            >
            <Button>Авторизация</Button>
        </v-form>
        <v-snackbar :timeout="3000" color="red" v-model="error">{{
            errorText
        }}</v-snackbar>
    </AuthLayout>
</template>
<script setup>
import AuthLayout from "@/components/auth/AuthLayout.vue";
import TextField from "@/components/ui/TextField.vue";
import Button from "@/components/ui/Button.vue";
import { rules } from "@/helpers";
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const email = ref();
const password = ref();

const store = useStore();
const router = useRouter();

const error = ref(false);
const errorText = ref();

const form = ref(null);
const handleSubmit = async () => {
    const { valid } = await form.value?.validate();

    if (valid) {
        try {
            const data = await store.dispatch("login", {
                email: email.value,
                password: password.value,
            });
            store.commit("setToken", data.token);
            router.push("/");
        } catch (err) {
            console.log(err);
            if (err?.response?.data?.message) {
                error.value = true;
                errorText.value = err?.response?.data?.message;
            } else {
                error.value = false;
            }
        }
    }
};
</script>
<style lang="scss">
@import "@/styles/variables.scss";
.register {
    width: 100%;

    .login-btn {
        display: flex;
        justify-content: end;
        font-size: 14px;

        &:hover {
            transition: $transition;
            color: $hover-color;
        }
    }
}
</style>
