<template>
    <v-btn
        :disabled="disabled"
        :loading="loading"
        :color="color ?? 'success'"
        size="large"
        type="submit"
        block
    >
        <slot></slot>
    </v-btn>
</template>

<script setup>
const props = defineProps({
    disabled: Boolean,
    loading: Boolean,
    color: String
})
</script>