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
  <div id="wrapper" :class="{ dark: darkMode }">
    <div
      id="content"
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
            src="./assets/main_image.jpg"
            alt=""
            srcset=""
          />
        </div>
        <!-- Social -->
        <ul
          class="mt-9 text-xl flex flex-wrap justify-center gap-16 text-gray-600 dark:text-white"
        >
          <li
            class="cursor-pointer text-pink-500 hover:scale-150 hover:-rotate-45 transform-gpu ease-in duration-300"
          >
            <font-awesome-icon
              icon="fa-brands fa-instagram"
              @click="openLink('https://www.instagram.com/manosxnjay')"
            />
          </li>
          <li
            class="cursor-pointer text-blue-500 hover:scale-150 hover:-rotate-45 transform-gpu ease-in duration-300"
          >
            <font-awesome-icon
              icon="fa-brands fa-twitter"
              @click="openLink('https://twitter.com/manosxnjay')"
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
              class="flex-row border-4 text-center mt-4 cursor-default lg:max-w-xs dark:bg-gray-800 dark:border rounded-lg py-6 px-9 bg-gray-100 hover:scale-105 ease-in duration-300"
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
              class="flex-row border-4 text-center mt-4 cursor-default lg:max-w-xs dark:bg-gray-800 dark:border rounded-lg py-6 px-9 bg-gray-100 hover:scale-105 ease-in duration-300"
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
              class="flex-row border-4 text-center mt-4 cursor-default lg:max-w-xs dark:bg-gray-800 dark:border rounded-lg py-6 px-9 bg-gray-100 hover:scale-105 ease-in duration-300"
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
              class="flex-row border-4 text-center mt-4 cursor-default lg:max-w-xs dark:bg-gray-800 dark:border rounded-lg py-6 px-9 bg-gray-100 hover:scale-105 ease-in duration-300"
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
              class="flex-row border-4 text-center mt-4 cursor-default lg:max-w-xs dark:bg-gray-800 dark:border rounded-lg py-6 px-9 bg-gray-100 hover:scale-105 ease-in duration-300"
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
              class="flex-row border-4 text-center mt-4 cursor-default lg:max-w-xs dark:bg-gray-800 dark:border rounded-lg py-6 px-9 bg-gray-100 hover:scale-105 ease-in duration-300"
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
              class="flex-row border-4 text-center mt-4 cursor-default lg:max-w-xs dark:bg-gray-800 dark:border rounded-lg py-6 px-9 bg-gray-100 hover:scale-105 ease-in duration-300"
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
              class="flex-row border-4 text-center mt-4 cursor-default lg:max-w-xs dark:bg-gray-800 dark:border rounded-lg py-6 px-9 bg-gray-100 hover:scale-105 ease-in duration-300"
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
      <section class="mt-12">
        <div>
          <h3 class="text-3xl text-center py-1 font-bold">Projects</h3>
          <div class="flex-wrap justify-center lg:flex gap-10 mt-4">
            <div
              class="flex-row border-4 text-center mt-4 cursor-default lg:max-w-md dark:bg-gray-800 dark:border rounded-lg hover:scale-105 ease-in duration-300 bg-gray-100"
            >
              <img
                src="./assets/project-1.png"
                class="w-auto justify-center mx-auto mb-3 rounded-t-md"
              />
              <div class="py-2 px-9">
                <h2 class="font-bold text-2xl mb-3">Hall Booking</h2>
                <div class="flex justify-center gap-1 mb-4">
                  <p>
                    This website was designed for making the process of booking
                    halls for events easier.It uses a recommendation algorithm
                    for recommending the best hall for a given event.
                  </p>
                </div>
                <a
                  href="https://github.com/manosanjay-g/hallbooking-app"
                  class="border-2 border-teal-600 bg-white dark:bg-gray-800 hover:bg-teal-600 dark:hover:bg-teal-700 hover:text-white dark:border-teal-400 w-fit py-1 px-2 rounded-full"
                >
                  Github
                </a>
                <div class="flex-row justify-center gap-1 mt-4">
                  <h3 class="font-semibold text-lg">Tech Stack</h3>
                  <ul class="flex flex-wrap mt-2 mb-3 justify-center gap-1">
                    <li
                      class="border-2 border-teal-600 bg-white dark:bg-gray-800 hover:bg-teal-600 dark:hover:bg-teal-700 hover:text-white dark:border-teal-400 w-fit py-1 px-2 rounded-full"
                    >
                      VueJS
                    </li>
                    <li
                      class="border-2 border-teal-600 bg-white dark:bg-gray-800 hover:bg-teal-600 dark:hover:bg-teal-700 hover:text-white dark:border-teal-400 w-fit py-1 px-2 rounded-full"
                    >
                      NodeJS
                    </li>
                    <li
                      class="border-2 border-teal-600 bg-white dark:bg-gray-800 hover:bg-teal-600 dark:hover:bg-teal-700 hover:text-white dark:border-teal-400 w-fit py-1 px-2 rounded-full"
                    >
                      ExpressJS
                    </li>
                    <li
                      class="border-2 border-teal-600 bg-white dark:bg-gray-800 hover:bg-teal-600 dark:hover:bg-teal-700 hover:text-white dark:border-teal-400 w-fit py-1 px-2 rounded-full"
                    >
                      MongoDB
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              class="flex-row border-4 text-center mt-4 cursor-default lg:max-w-md dark:bg-gray-800 dark:border rounded-lg hover:scale-105 ease-in duration-300 bg-gray-100"
            >
              <img
                src="./assets/medirx.png"
                class="w-auto justify-center mx-auto mb-3 rounded-t-md"
              />
              <div class="py-2 px-9">
                <h2 class="font-bold text-2xl mb-3">
                  NFC Smart Health Card (Medirx)
                </h2>
                <div class="flex justify-center gap-1 mb-4">
                  <p>
                    This is a platform for hospitals and patients to store and
                    access their medical records with ease.It is achieved by
                    using a NFC smart card that is given by the hospitals to the
                    patient when they register through an hospital.
                  </p>
                </div>
                <a
                  href="https://github.com/manosanjay-g/nfc_smart_card"
                  class="border-2 border-teal-600 bg-white dark:bg-gray-800 hover:bg-teal-600 dark:hover:bg-teal-700 hover:text-white dark:border-teal-400 w-fit py-1 px-2 rounded-full"
                >
                  Github
                </a>
                <div class="flex-row justify-center gap-1 mt-4">
                  <h3 class="font-semibold text-lg">Tech Stack</h3>
                  <ul class="flex flex-wrap mt-2 mb-3 justify-center gap-1">
                    <li
                      class="border-2 border-teal-600 bg-white dark:bg-gray-800 hover:bg-teal-600 dark:hover:bg-teal-700 hover:text-white dark:border-teal-400 w-fit py-1 px-2 rounded-full"
                    >
                      VueJS
                    </li>
                    <li
                      class="border-2 border-teal-600 bg-white dark:bg-gray-800 hover:bg-teal-600 dark:hover:bg-teal-700 hover:text-white dark:border-teal-400 w-fit py-1 px-2 rounded-full"
                    >
                      NodeJS
                    </li>
                    <li
                      class="border-2 border-teal-600 bg-white dark:bg-gray-800 hover:bg-teal-600 dark:hover:bg-teal-700 hover:text-white dark:border-teal-400 w-fit py-1 px-2 rounded-full"
                    >
                      ExpressJS
                    </li>
                    <li
                      class="border-2 border-teal-600 bg-white dark:bg-gray-800 hover:bg-teal-600 dark:hover:bg-teal-700 hover:text-white dark:border-teal-400 w-fit py-1 px-2 rounded-full"
                    >
                      MongoDB
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              class="flex-row border-4 text-center mt-4 cursor-default lg:max-w-md dark:bg-gray-800 dark:border rounded-lg hover:scale-105 ease-in duration-300 bg-gray-100"
            >
              <img
                src="./assets/student_portal.png"
                class="w-auto justify-center mx-auto mb-3 rounded-t-md"
              />
              <div class="py-2 px-9">
                <h2 class="font-bold text-2xl mb-3">Student Portal</h2>
                <div class="flex justify-center gap-1 mb-4">
                  <p>
                    This website acts as a platform for students and colleges.It
                    provides academic and personal information about the student
                    Colleges can also release the result of the student.Students
                    can also view their attendance record in this portal.
                  </p>
                </div>
                <a
                  href="https://github.com/manosanjay-g/Student-Portal"
                  class="border-2 border-teal-600 bg-white dark:bg-gray-800 hover:bg-teal-600 dark:hover:bg-teal-700 hover:text-white dark:border-teal-400 w-fit py-1 px-2 rounded-full"
                >
                  Github
                </a>
                <div class="flex-row justify-center gap-1 mt-4">
                  <h3 class="font-semibold text-lg">Tech Stack</h3>
                  <ul class="flex flex-wrap mt-2 mb-3 justify-center gap-1">
                    <li
                      class="border-2 border-teal-600 bg-white dark:bg-gray-800 hover:bg-teal-600 dark:hover:bg-teal-700 hover:text-white dark:border-teal-400 w-fit py-1 px-2 rounded-full"
                    >
                      VueJS
                    </li>
                    <li
                      class="border-2 border-teal-600 bg-white dark:bg-gray-800 hover:bg-teal-600 dark:hover:bg-teal-700 hover:text-white dark:border-teal-400 w-fit py-1 px-2 rounded-full"
                    >
                      NodeJS
                    </li>
                    <li
                      class="border-2 border-teal-600 bg-white dark:bg-gray-800 hover:bg-teal-600 dark:hover:bg-teal-700 hover:text-white dark:border-teal-400 w-fit py-1 px-2 rounded-full"
                    >
                      ExpressJS
                    </li>
                    <li
                      class="border-2 border-teal-600 bg-white dark:bg-gray-800 hover:bg-teal-600 dark:hover:bg-teal-700 hover:text-white dark:border-teal-400 w-fit py-1 px-2 rounded-full"
                    >
                      MongoDB
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <!-- <div
              class="flex-row border-4 text-center mt-4 cursor-default lg:max-w-md dark:bg-gray-800 dark:border rounded-lg hover:scale-105 ease-in duration-300 bg-gray-100"
            >
              <img
                src="./assets/project-1.png"
                class="w-auto justify-center mx-auto mb-3 rounded-t-md"
              />
              <div class="py-2 px-9">
                <h2 class="font-bold text-2xl mb-3">
                  Grocery Management System
                </h2>
                <div class="flex justify-center gap-1 mb-4">
                  <p>
                    This is a website for grocery store owners.It helps the
                    owners to manage their groceries and their prices.Owners can
                    also add their employees to the system so that they can have
                    limited editing access
                  </p>
                </div>
                <a
                  href="https://github.com/manosanjay-g/grocery_system"
                  class="border-2 border-teal-600 bg-white dark:bg-gray-800 hover:bg-teal-600 dark:hover:bg-teal-700 hover:text-white dark:border-teal-400 w-fit py-1 px-2 rounded-full"
                >
                  Github
                </a>
                <div class="flex-row justify-center gap-1 mt-4">
                  <h3 class="font-semibold text-lg">Tech Stack</h3>
                  <ul class="flex flex-wrap mt-2 mb-3 justify-center gap-1">
                    <li
                      class="border-2 border-teal-600 bg-white dark:bg-gray-800 hover:bg-teal-600 dark:hover:bg-teal-700 hover:text-white dark:border-teal-400 w-fit py-1 px-2 rounded-full"
                    >
                      VueJS
                    </li>
                    <li
                      class="border-2 border-teal-600 bg-white dark:bg-gray-800 hover:bg-teal-600 dark:hover:bg-teal-700 hover:text-white dark:border-teal-400 w-fit py-1 px-2 rounded-full"
                    >
                      NodeJS
                    </li>
                    <li
                      class="border-2 border-teal-600 bg-white dark:bg-gray-800 hover:bg-teal-600 dark:hover:bg-teal-700 hover:text-white dark:border-teal-400 w-fit py-1 px-2 rounded-full"
                    >
                      ExpressJS
                    </li>
                    <li
                      class="border-2 border-teal-600 bg-white dark:bg-gray-800 hover:bg-teal-600 dark:hover:bg-teal-700 hover:text-white dark:border-teal-400 w-fit py-1 px-2 rounded-full"
                    >
                      MongoDB
                    </li>
                  </ul>
                </div>
              </div>
            </div> -->
          </div>
        </div>
      </section>
      <section class="mt-16">
        <div class="text-center lg:flex lg:justify-around">
          <div>
            <h1 class="text-3xl mb-6 font-bold">Education</h1>
            <div
              class="bg-gray-100 border-4 dark:border rounded-lg dark:bg-gray-800 px-6 py-4 my-4 hover:scale-105 ease-in duration-300"
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
              class="bg-gray-100 border-4 dark:border rounded-lg dark:bg-gray-800 px-6 py-4 my-4 hover:scale-105 ease-in duration-300"
            >
              <h3 class="font-semibold my-2">HSC and SSLC</h3>
              <h3 class="text-gray-700 dark:text-gray-400 my-2 font-medium">
                Kendriya Vidyalaya Ashok Nagar
              </h3>
              <h3 class="my-2">2020 Batch</h3>
            </div>
          </div>
          <div class="">
            <h1 class="text-3xl mb-6 mt-12 md:mt-0 font-bold">Experience</h1>
            <div
              class="bg-gray-100 border-4 dark:border rounded-lg dark:bg-gray-800 px-6 py-4 my-4 hover:scale-105 ease-in duration-300"
            >
              <h3 class="font-semibold my-2">No experience</h3>

              <img
                src="./assets/Doge-Crying.jpg"
                class="w-40 h-40 justify-center mx-auto my-3 rounded-md"
              />
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
    </div>
  </div>
</template>

<style scoped></style>
