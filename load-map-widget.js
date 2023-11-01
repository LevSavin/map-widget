import { createApp } from 'https://unpkg.com/petite-vue@0.2.2/dist/petite-vue.es.js'

function Counter(props) {
  return {
    $template: '#counter-template',
    count: props.initialCount,
    inc() {
      this.count++
    }
  }
}

export const initEcomWidget = () => {
    createApp({
      Counter
    }).mount()
}