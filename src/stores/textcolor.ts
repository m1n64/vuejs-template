import {ref, computed} from 'vue';
import {defineStore} from 'pinia';

interface ColorsListInterface {
    class: string,
    name: string,
}

export const useTextColorState = defineStore('textColor', () => {
    const color = ref<string>(localStorage.getItem("color") || "text-white");

    const colorsList: ColorsListInterface[] = [
        {
            class: "text-white",
            name: "White"
        },
        {
            class: "text-green-500",
            name: "Green"
        },
        {
            class: "text-blue-500",
            name: "Blue"
        },
        {
            class: "text-red-400",
            name: "Red"
        }
        ];

    const setColor = (newColor: string) => {
        color.value = newColor;
        localStorage.setItem("color", color.value);
    };

    return { color, colorsList, setColor };
});