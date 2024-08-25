<template>
    <v-text-field 
        clearable
        class="text-field"
        :label="label"
        :rules="rules"
        variant="outlined"
        :placeholder="placeholder"
        @click:clear="emit('clear')"
        v-model="localModelValue"
        :type="type"
        :prepend-inner-icon="icon"
    />
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    modelValue: String,
    label: String,
    placeholder: String,
    type: String,
    icon: String,
    rules: Array
});

const emit = defineEmits(['update:modelValue', 'clear']);

const localModelValue = computed({
    get() {
        return props.modelValue
    },
    set(val) {
        emit('update:modelValue', val)
    }
})
</script>

<style lang="scss">
.text-field {
    margin: 12px 0;
}
</style>