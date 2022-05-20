<template>
  <div class="cart">
    <p class="cart__title">商品數量</p>
    <p class="cart__total">{{ parentData }}</p>
    <button v-if="parentData !== 0" class="cart__btn" @click="clickToShowList">
      購物清單
    </button>
  </div>
</template>

<script>
export default {
  name: 'CartComponent',
  data() {
    return {};
  },
  props: {
    parentData: {
      type: Number,
    },
  },

  computed: {},

  methods: {
    clickToShowList() {
      this.$emit('update');
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
}
</style>
