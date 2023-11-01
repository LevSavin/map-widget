import { createApp } from 'https://unpkg.com/petite-vue@0.2.2/dist/petite-vue.es.js'

const MapComponent = (props) => {
  return {
    $template: '#ecom-map-template',
    count: props.initialCount,
    inc() {
      this.count++;
    }
  }
}

export const initEcomWidget = (elementId) => {
    addVueTemplate(elementId);
    addContainer(elementId);
    createApp({
        MapComponent
    }).mount()
}

const addVueTemplate = (elementId) => {
    const conatainer = document.querySelector(`#${elementId}`);
    const child = document.createElement('div');
    child.innerHTML = "<template id='ecom-map-template'>My count is {{ count }}<button @click='inc'>++</button></template>";
    conatainer.appendChild(child);
}

const addContainer = (elementId) => {
    const conatainer = document.querySelector(`#${elementId}`);
    const child = document.createElement('div');
    child.innerHTML = "<div v-scope='MapComponent({ initialCount: 1 })'></div>";
    conatainer.appendChild(child);
}