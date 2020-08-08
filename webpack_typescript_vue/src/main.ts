import Vue from 'vue';
import MyComponent from './MyComponent';

new Vue({
    el: "#app",
    template: `<div class="app">
      <h1>couter vuejs</h1>
      <my-component message="vue with typescript"></my-component>
    </div>`,

    components: {
        "my-component": MyComponent,
    },
});

