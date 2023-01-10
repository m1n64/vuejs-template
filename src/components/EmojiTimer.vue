<script setup lang="ts">
import {ref} from "vue";
import type EmojilistInterface from "@/interfaces/emojilist.interface";

const emojiList: EmojilistInterface[] = [
  {
    icon: "fa-solid fa-heart",
    class: "text-pink-400"
  },
  {
    icon: "fa-regular fa-face-grin-hearts",
    class: ""
  },
  {
    icon: "fa-regular fa-face-kiss-wink-heart",
    class: ""
  },
  {
    icon: "fa-solid fa-fire",
    class: "text-orange-400"
  },
];

const index = ref(0);

setInterval(() => {
  index.value = Math.round(Math.random() * (emojiList.length - 1));
}, 1000);

</script>

<template>
  <font-awesome-icon class="duration-200" :icon="emojiList[index].icon" :class="emojiList[index].class"/>
</template>
