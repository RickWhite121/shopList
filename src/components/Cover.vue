<template>
  <div class="cover" @click.self="clickToCloseList">
    <List v-bind="$attrs" />
  </div>
</template>

<script>
import List from './List.vue';
export default {
  name: 'CoverModule',
  inheritAttrs: false,
  methods: {
    clickToCloseList() {
      this.$store.commit('setListStatus');
    },
  },
  components: {
    List,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cover {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: rgba(14, 13, 13, 0.507);
}
</style>
