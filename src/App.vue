<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <LocaleChanger />
    <transition
      name="fade"
      mode="out-in"
      @beforeLeave="beforeLeave"
      @enter="enter"
      @afterEnter="afterEnter">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import LocaleChanger from './components/LocaleChanger.vue';

export default {
  name: 'app',
  components: {
    LocaleChanger,
  },
  data() {
    return {
      prevHeight: 0,
    };
  },
  methods: {
    beforeLeave(element) {
      this.prevHeight = getComputedStyle(element).height;
    },
    enter(element) {
      const elementData = element;
      const { height } = getComputedStyle(element);

      elementData.style.height = this.prevHeight;

      setTimeout(() => {
        elementData.style.height = height;
      });
    },
    afterEnter(element) {
      const elementData = element;
      elementData.style.height = 'auto';
    },
  },
};
</script>

