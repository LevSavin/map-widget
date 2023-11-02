const state = {
    elementId: "",
    baseUrl: "",
  }
  
  function init() {
      const script = document.getElementById("hecnyEcomScript");
      state.elementId = script.getAttribute("elementId");
      state.baseUrl = script.getAttribute("baseUrl");
      loadSrcScript();
  }
  init();
  
  function loadSrcScript() {
      const script = document.createElement("script");
      script.setAttribute("src", `${state.baseUrl}/js/widgets/map-widget/petite-vue.iife.js`),
      script.setAttribute("defer", true),
      script.id = "petiteVueScript",
      document.body.insertAdjacentElement("beforeEnd", script),
          document.getElementById("petiteVueScript").onload = function() {
          initWidget();
      }
  }
  
  function initWidget() {
      addContainer();
    addVueTemplate();
    PetiteVue.createApp({
        MapComponent
    }).mount()
  }
  
  function addContainer() {
      const conatainer = document.querySelector(`#${state.elementId}`);
      const child = document.createElement('div');
      child.innerHTML = "<div v-scope='MapComponent({ initialCount: 1 })'></div>";
      conatainer.appendChild(child);
  }
  
  function addVueTemplate() {
      const conatainer = document.querySelector(`#${state.elementId}`);
      const child = document.createElement('div');
      child.innerHTML = "<template id='ecom-map-template'>My count is {{ count }}<button @click='inc'>++</button></template>";
      conatainer.appendChild(child);
  }
  
  function MapComponent(props) {
      return {
          $template: '#ecom-map-template',
          count: props.initialCount,
          inc() {
              this.count++;
          }
      }
  }
  
  const initCoords = () => ([55.757724, 37.571490]);