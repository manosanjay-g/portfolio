import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faMoon, faLaptopCode, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faTwitter, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"

/* add icons to the library */
library.add(faMoon, faInstagram, faLinkedin, faTwitter, faLaptopCode, faGithub, faArrowUp)
/* add font awesome icon component */


createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount('#app')
