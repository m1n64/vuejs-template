<script setup lang="ts">
const props = defineProps({
  symbol: {
    type: String,
    default: "_",
    required: false,
  }
});
</script>

<template>
  <span ref="line" class="ml-2 line">{{ props.symbol }}</span>
</template>

<style>
.line {
  animation: 1s infinite cursor cubic-bezier(1,0,0,1);
}

@keyframes cursor {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>