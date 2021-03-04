import Vue from 'vue'
import VueTwicpics from '@twicpics/vue'
import '@twicpics/vue/dist/vuetwicpics.css'

Vue.use(VueTwicpics, <%= serialize(options) %>)
