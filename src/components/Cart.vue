<template>
  <div class="cart">
    <p class="cart__title">商品數量</p>
    <p class="cart__total">{{ getPdTotal }}</p>
    <button
      v-if="getPdTotal !== 0"
      class="cart__btn"
      @click="clickToShowList"
      type="button"
    >
      購物清單
    </button>
  </div>
</template>

<script>
export default {
  name: 'CartModule',

  computed: {
    getPdTotal() {
      return this.$store.state.pdTotal;
    },
  },

  methods: {
    clickToShowList() {
      this.$store.commit('setListStatus');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cart {
  position: fixed;
  top: 0px;
  right: 0px;
  color: #fff;
}

.cart__title {
  padding: 10px;
  font-size: 14px;
  background-color: #ff65ab;
}

.cart__total {
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 28px;
  background-color: #ff0079;
}

.cart__btn {
  width: 100%;
  padding-top: 3px;
  padding-bottom: 3px;
  color: #fff;
  border: none;
  background-color: #94cd4c;
  cursor: pointer;
  outline: none;
}
</style>
