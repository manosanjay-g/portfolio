<script setup>
import { ref } from "vue";

const props = defineProps([
  "name",
  "desc",
  "githubLink",
  "techStack",
  "imageSrc",
]);

const imageURL = new URL(`../assets/${props.imageSrc}`, import.meta.url).href;
</script>

<template>
  <div id="project_component">
    <div
      class="flex-row shadow-lg border-2 text-center mt-4 cursor-default lg:max-w-xl dark:bg-gray-800 dark:border rounded-lg hover:scale-105 ease-in duration-300"
    >
      <img
        :src="imageURL"
        class="w-auto justify-center mx-auto mb-3 rounded-t-md"
      />
      <div class="py-2 px-9">
        <h2 class="font-bold text-2xl mb-3">{{ props.name }}</h2>
        <div class="flex justify-center gap-1 mb-4">
          <p>
            {{ props.desc }}
          </p>
        </div>
        <a
          :href="props.githubLink"
          class="border-2 transition-colors duration-300 border-teal-600 bg-white dark:bg-gray-800 hover:bg-teal-600 dark:hover:bg-teal-700 hover:text-white dark:border-teal-400 w-fit py-1 px-2 rounded-full"
        >
          Github
        </a>
        <div class="flex-row justify-center gap-1 mt-4">
          <h3 class="font-semibold text-lg">Tech Stack</h3>
          <ul class="flex flex-wrap mt-2 mb-3 justify-center gap-1">
            <li
              v-for="technology in props.techStack"
              :key="technology + props.name"
              class="border-2 transition-colors duration-300 border-teal-600 bg-white dark:bg-gray-800 hover:bg-teal-600 dark:hover:bg-teal-700 hover:text-white dark:border-teal-400 w-fit py-1 px-2 rounded-full"
            >
              {{ technology }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
