<script setup>
import { ref } from "vue";
import { faMoon } from "@fortawesome/fontawesome-free";
const darkMode = ref("false");
const visibility = ref("false");
const toggleDarkMode = () => {
  darkMode.value = !darkMode.value;
};

window.onscroll = () => {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    visibility.value = false;
  } else {
    visibility.value = true;
  }
};

const openLink = (url) => {
  window.open(url, "_blank");
};

const downloadResume = () => {
  alert("IDHULA ONNUM ILLA,KEELA POTRU 🚶‍♂️");
};

// When the user clicks on the button, scroll to the top of the document
const goToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>

<template>
  <div :class="{ dark: darkMode }">
    <main
      class="bg-white px-10 md:px-20 lg:px-40 pb-8 dark:bg-gray-900 transition-colors duration-350 text-black dark:text-white"
    >
      <section class="">
        <!-- Navbar -->
        <nav class="py-10 flex justify-between items-center">
          <h1 class="text-xl font-semibold dark:text-white">
            <font-awesome-icon icon="fa-solid fa-laptop-code" class="mr-3" />
            manosanjay
          </h1>
          <ul class="flex items-center">
            <li
              @click="toggleDarkMode"
              class="cursor-pointer text-xl dark:text-white"
            >
              <font-awesome-icon icon="fa-solid fa-moon" />
            </li>
            <li>
              <h1
                class="text-xl bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 cursor-pointer"
                @click="downloadResume"
              >
                Resume
              </h1>
            </li>
          </ul>
        </nav>
        <!-- My Info -->
        <div class="text-center">
          <h2
            class="text-5xl py-2 text-teal-600 font-medium md:text-6xl dark:text-teal-400"
          >
            Mano Sanjay
          </h2>
          <h3 class="text-2xl py-2 md:text-3xl dark:text-white">
            <span class="text-teal-600 dark:text-teal-400">Full Stack</span>
            Developer and
            <span class="text-teal-600 dark:text-teal-400">UI</span>
            Designer
          </h3>
          <p
            id="typewriter"
            class="text-xl w-fit h-fit text-gray-600 flex justify-center items-center py-5 tracking-widest leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-400"
          >
            A machine that turns <br />coffee into<br />
            code.
          </p>
        </div>
        <div class="flex justify-center my-4">
          <img
            width="200"
            height="200"
            class="rounded-full border-teal-600 dark:border-teal-400 border-4"
            src="./assets/1657562739975.jpg"
            alt=""
            srcset=""
          />
        </div>
        <!-- Social -->
        <ul
          class="mt-9 text-xl flex justify-center gap-16 text-gray-600 dark:text-white"
        >
          <li
            class="cursor-pointer text-pink-500 hover:scale-150 hover:-rotate-45 transform-gpu ease-in duration-300"
          >
            <font-awesome-icon
              icon="fa-brands fa-instagram"
              @click="openLink('https://www.instagram.com/_manosanjay')"
            />
          </li>
          <li
            class="cursor-pointer text-blue-500 hover:scale-150 hover:-rotate-45 transform-gpu ease-in duration-300"
          >
            <font-awesome-icon
              icon="fa-brands fa-twitter"
              @click="openLink('https://twitter.com/_manosanjay')"
            />
          </li>
          <li
            class="cursor-pointer text-blue-900 dark:text-white hover:scale-150 hover:-rotate-45 transform-gpu ease-in duration-300"
          >
            <font-awesome-icon
              icon="fa-brands fa-linkedin"
              @click="openLink('https://www.linkedin.com/in/manosanjay/')"
            />
          </li>
          <li
            class="cursor-pointer hover:scale-150 hover:-rotate-45 transform-gpu ease-in duration-300"
          >
            <font-awesome-icon
              icon="fa-brands fa-github"
              @click="openLink('https://github.com/manosanjay-g')"
            />
          </li>
        </ul>
      </section>

      <section class="mt-12">
        <div>
          <h3 class="text-3xl text-center py-1 font-bold">Skills</h3>
          <div class="flex-wrap justify-center lg:flex gap-10 mt-4">
            <div
              class="flex-row border-4 text-center mt-4 cursor-default lg:max-w-xs dark:bg-gray-800 dark:border rounded-lg py-6 px-9 hover:scale-105 ease-in duration-300"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/174/174854.png"
                class="w-40 h-40 justify-center mx-auto my-3 rounded-md"
              />
              <div>
                <h2 class="font-bold text-2xl mb-3">HTML</h2>
                <div class="flex justify-center gap-1">
                  <font-awesome-icon icon="fa-solid fa-star" />
                  <font-awesome-icon icon="fa-solid fa-star" />
                  <font-awesome-icon icon="fa-solid fa-star" />
                  <font-awesome-icon icon="fa-solid fa-star" />
                  <font-awesome-icon icon="fa-solid fa-star" />
                </div>
              </div>
            </div>
            <div
              class="flex-row border-4 text-center mt-4 cursor-default lg:max-w-xs dark:bg-gray-800 dark:border rounded-lg py-6 px-9 hover:scale-105 ease-in duration-300"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png"
                class="w-40 h-40 justify-center mx-auto my-3 rounded-md"
              />
              <div>
                <h2 class="font-bold text-2xl mb-3">CSS</h2>
                <div class="flex justify-center gap-1">
                  <font-awesome-icon icon="fa-solid fa-star" />
                  <font-awesome-icon icon="fa-solid fa-star" />
                  <font-awesome-icon icon="fa-solid fa-star" />
                  <font-awesome-icon icon="fa-solid fa-star" />
                </div>
              </div>
            </div>
            <div
              class="flex-row border-4 text-center mt-4 cursor-default lg:max-w-xs dark:bg-gray-800 dark:border rounded-lg py-6 px-9 hover:scale-105 ease-in duration-300"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png"
                class="w-40 h-40 justify-center mx-auto my-3 rounded-md"
              />
              <div>
                <h2 class="font-bold text-2xl mb-3">Tailwind</h2>
                <div class="flex justify-center gap-1">
                  <font-awesome-icon icon="fa-solid fa-star" />
                  <font-awesome-icon icon="fa-solid fa-star" />
                  <font-awesome-icon icon="fa-solid fa-star" />
                  <font-awesome-icon icon="fa-solid fa-star" />
                </div>
              </div>
            </div>
            <div
              class="flex-row border-4 text-center mt-4 cursor-default lg:max-w-xs dark:bg-gray-800 dark:border rounded-lg py-6 px-9 hover:scale-105 ease-in duration-300"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                class="w-40 h-40 justify-center mx-auto my-3 rounded-md"
              />
              <div>
                <h2 class="font-bold text-2xl mb-3">JavaScript</h2>
                <div class="flex justify-center gap-1">
                  <font-awesome-icon icon="fa-solid fa-star" />
                  <font-awesome-icon icon="fa-solid fa-star" />
                  <font-awesome-icon icon="fa-solid fa-star" />
                  <font-awesome-icon icon="fa-solid fa-star" />
                </div>
              </div>
            </div>
            <div
              class="flex-row border-4 text-center mt-4 cursor-default lg:max-w-xs dark:bg-gray-800 dark:border rounded-lg py-6 px-9 hover:scale-105 ease-in duration-300"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png"
                class="w-40 h-40 justify-center mx-auto my-3 rounded-md"
              />
              <div>
                <h2 class="font-bold text-2xl mb-3">VueJS</h2>
                <div class="flex justify-center gap-1">
                  <font-awesome-icon icon="fa-solid fa-star" />
                  <font-awesome-icon icon="fa-solid fa-star" />
                  <font-awesome-icon icon="fa-solid fa-star" />
                  <font-awesome-icon icon="fa-solid fa-star" />
                </div>
              </div>
            </div>
            <div
              class="flex-row border-4 text-center mt-4 cursor-default lg:max-w-xs dark:bg-gray-800 dark:border rounded-lg py-6 px-9 hover:scale-105 ease-in duration-300"
            >
              <img
                src="https://cdn.iconscout.com/icon/free/png-256/node-js-3550841-2970426.png"
                class="w-40 h-40 justify-center mx-auto my-3 rounded-md"
              />
              <div>
                <h2 class="font-bold text-2xl mb-3">NodeJS</h2>
                <div class="flex justify-center gap-1">
                  <font-awesome-icon icon="fa-solid fa-star" />
                  <font-awesome-icon icon="fa-solid fa-star" />
                  <font-awesome-icon icon="fa-solid fa-star" />
                  <font-awesome-icon icon="fa-solid fa-star" />
                </div>
              </div>
            </div>
            <div
              class="flex-row border-4 text-center mt-4 cursor-default lg:max-w-xs dark:bg-gray-800 dark:border rounded-lg py-6 px-9 hover:scale-105 ease-in duration-300"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
                class="w-40 h-40 justify-center mx-auto my-3 rounded-md"
              />
              <div>
                <h2 class="font-bold text-2xl mb-3">Figma</h2>
                <div class="flex justify-center gap-1">
                  <font-awesome-icon icon="fa-solid fa-star" />
                  <font-awesome-icon icon="fa-solid fa-star" />
                  <font-awesome-icon icon="fa-solid fa-star" />
                </div>
              </div>
            </div>
            <div
              class="flex-row border-4 text-center mt-4 cursor-default lg:max-w-xs dark:bg-gray-800 dark:border rounded-lg py-6 px-9 hover:scale-105 ease-in duration-300"
            >
              <img
                src="https://cdn.iconscout.com/icon/free/png-256/flutter-3629369-3032362.png"
                class="w-40 h-40 justify-center mx-auto my-3 rounded-md"
              />
              <div>
                <h2 class="font-bold text-2xl mb-3">Flutter</h2>
                <div class="flex justify-center gap-1">
                  <font-awesome-icon icon="fa-solid fa-star" />
                  <font-awesome-icon icon="fa-solid fa-star" />
                  <font-awesome-icon icon="fa-solid fa-star" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="mt-16">
        <div class="text-center lg:flex lg:justify-around">
          <div>
            <h1 class="text-3xl mb-6 font-bold">Education</h1>
            <div
              class="border-4 dark:border rounded-lg dark:bg-gray-800 px-6 py-4 my-4 hover:scale-105 ease-in duration-300"
            >
              <h3 class="font-semibold my-2">
                B.E Computer Science and Engineering
              </h3>
              <h3 class="text-gray-700 dark:text-gray-400 my-2 font-medium">
                Rajalakshmi Engineering College
              </h3>
              <h3 class="my-2">2024 Batch</h3>
            </div>
            <div
              class="border-4 dark:border rounded-lg dark:bg-gray-800 px-6 py-4 my-4 hover:scale-105 ease-in duration-300"
            >
              <h3 class="font-semibold my-2">HSC and SSLC</h3>
              <h3 class="text-gray-700 dark:text-gray-400 my-2 font-medium">
                Kendriya Vidyalaya Ashok Nagar
              </h3>
              <h3 class="my-2">2020 Batch</h3>
            </div>
          </div>
          <div class="hidden">
            <h1 class="text-3xl mb-6 mt-12 md:mt-0 font-bold">Experience</h1>
            <div
              class="border-4 dark:border rounded-lg dark:bg-gray-800 px-6 py-4 my-4 hover:scale-105 ease-in duration-300"
            >
              <h3 class="font-semibold my-2">Social Media Designer</h3>
              <h3 class="text-gray-700 dark:text-gray-400 my-2 font-medium">
                YUVA club at REC
              </h3>
              <h3 class="my-2">2022 - Present</h3>
            </div>
          </div>
        </div>
      </section>
      <span :class="{ invisible: visibility }">
        <button
          id="to-top-button"
          @click="goToTop"
          title="Go To Top"
          class="fixed z-90 bottom-8 right-8 border-0 w-10 h-10 rounded-full drop-shadow-md animate-bounce bg-indigo-900 text-white text-xl font-bold"
        >
          <font-awesome-icon icon="fa-solid fa-arrow-up" />
        </button>
      </span>
    </main>
  </div>
</template>

<style scoped></style>
