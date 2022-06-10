<script setup lang="ts">
import figlet from "figlet";
// @ts-ignore
import font from "figlet/importable-fonts/Star Wars";
import { onMounted, ref, reactive } from "vue";

figlet.parseFont("Star Wars", font);

const emit = defineEmits(["ssi:finish"]);

const banner = ref<string>("");
const timer = reactive({
  text: "",
  index: 0,
  typingSpeed: 40, // 40
  waitTime: 400, // 400
  areas: [
    "Hello world, I'm Sami Salih Ibrahimbas.",
    "And this is a terminal.",
    "With this terminal you can execute commands and see the output.",
    "For see all the commands, type '--help' and click enter button on your keyboard.",
    "You're welcome.",
    "",
    "Sami Salih Ibrahimbas",
    "",
  ],
});

const typeText = (text: string) => {
  if (timer.index < text.length) {
    timer.text += text[timer.index];
    timer.index++;
    setTimeout(() => {
      typeText(text);
    }, timer.typingSpeed);
  }
};

const writer = () => {
  const text = timer.areas.shift();
  if (timer.text.length > 0) {
    timer.text += "<br/>";
    timer.index = 0;
  }
  if (typeof text === "string") {
    typeText(text);
    setTimeout(writer, timer.typingSpeed * text.length + timer.waitTime);
  }
  if (timer.areas.length === 0) {
    setTimeout(() => {
      emit("ssi:finish");
    }, timer.waitTime + timer.typingSpeed * (!!text ? text.length : 1));
  }
};

onMounted(() => {
  figlet.text(
    "SSI CLI",
    {
      font: "Star Wars",
    },
    function (err, data) {
      if (data) {
        banner.value = data;
      }
    }
  );
  setTimeout(() => {
    writer();
  }, timer.waitTime / 2);
});
</script>

<template>
  <pre>
  {{ banner }}
  </pre>
  <span v-html="timer.text"></span>
</template>

<style lang="scss" scoped>
pre {
  color: var(--color-text);
}
span {
  color: var(--color-heading);
}
</style>
