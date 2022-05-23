<template>
  <div class="Cover" @click.self="clickToCloseList">
    <ListModule v-bind="$attrs" v-on="$listeners" />
  </div>
</template>

<script>
import ListModule from './ListModule.vue';
export default {
  name: 'CoverModule',

  methods: {
    clickToCloseList() {
      this.$emit('update');
    },
  },
  components: {
    ListModule,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Cover {
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
