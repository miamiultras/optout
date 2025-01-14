import { createApp } from 'vue'
import "./index.scss"
import Counter from "./Counter.vue"


export default function (element) {
    createApp(Counter).mount(element)
}
