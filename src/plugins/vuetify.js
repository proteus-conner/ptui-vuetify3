/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { md2 } from 'vuetify/blueprints'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#0A449F',
          secondary: '#122846',
          ptblue100: '#D6EBFF',
          ptroyal50: '#F0F4FA',
          ptroyal100: '#CEDAEC',
          green700: '#15663E',
        },
      },
    },
  },
  blueprint: md2
})
