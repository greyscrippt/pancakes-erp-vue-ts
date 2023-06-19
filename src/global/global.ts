import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useThemeStore = defineStore('theme', () => {
  const primary = ref('#0000ff');
  const secondary = ref('#ff0000');
});
