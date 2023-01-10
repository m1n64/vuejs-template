<script setup lang="ts">
import EmojiTimer from "@/components/EmojiTimer.vue";
import BottomLine from "@/components/BottomLine.vue";
import {ref} from "vue";
import {useTextColorState} from "@/stores/textcolor";

const mainText: string = "u r very cute";
const printedText = ref<string>("");

const textColorState = useTextColorState();

let index = 0;
const interval = setInterval(() => {
  printedText.value += mainText[index];

  if (printedText.value.length === mainText.length) clearInterval(interval);

  index++;
}, 150);

</script>

<template>
  <main class="h-screen bg-black relative">
    <div class="text-center">
      <h1 :class="textColorState.color" class="text-2xl pt-[40vh] md:text-6xl">
        <span class="uppercase font-bold main-text">
          {{ printedText }}
          <EmojiTimer v-show="printedText.length === mainText.length"/>
        </span>
        <BottomLine/>
      </h1>
    </div>

    <div class="absolute bottom-3 w-full" v-show="printedText.length === mainText.length">
      <div class="flex justify-around">
        <button v-for="(color, key) in textColorState.colorsList" :key="key" :class="color.class"
                class="px-3 py-2 border-2 rounded-lg cursor-pointer blur-[1px] hover:blur-none border-white"
                @click="textColorState.setColor(color.class)">{{ color.name }}
        </button>
      </div>
    </div>
  </main>
</template>

<style>
.main-text {
  font-family: 'JetBrains Mono', monospace;
}
</style>