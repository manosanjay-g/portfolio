<script setup>
const props = defineProps(["imageSrc", "name"]);
</script>

<template>
  <div
    id="skill_component"
    class="flex-row border-2 shadow-lg text-center mt-4 cursor-default lg:max-w-xs dark:bg-gray-800 dark:border rounded-lg py-6 px-9 hover:scale-105 ease-in duration-300"
  >
    <img
      :src="props.imageSrc"
      class="w-40 h-40 justify-center mx-auto my-3 rounded-md"
    />
    <div>
      <h2 class="font-bold text-2xl mb-3">{{ props.name }}</h2>
    </div>
  </div>
</template>
