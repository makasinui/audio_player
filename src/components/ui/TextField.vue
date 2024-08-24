<template>
    <v-text-field 
        clearable
        :label="label"
        :rules="rules"
        variant="outlined"
        :placeholder="placeholder"
        @click:clear="emit('clear')"
        @input="updateValue"
        :type="type"
        :prepend-inner-icon="icon"
    />
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
    modelValue: String,
    label: String,
    placeholder: String,
    type: String,
    icon: String,
    rules: Array
});

const emit = defineEmits(['update:modelValue', 'clear']);

const updateValue = (e) => emit('update:modelValue', e.target.value)
</script>

<style lang="scss">
</style>