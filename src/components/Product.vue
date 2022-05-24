<template>
  <div class="card">
    <div class="card__textZone">
      <h2 class="card__title">{{ parentData.name }}</h2>
      <p class="card__desc">{{ parentData.desc }}</p>
      <p class="card__price">
        {{ priceStrMaker(parentData.price) }}
      </p>
    </div>
    <div class="card__imgZone">
      <img
        class="card__img"
        :src="parentData.src"
        width="214"
        height="214"
        :alt="parentData.name"
      />
    </div>
    <ButtonCom :parent-id="parentData.id" v-on="$listeners" />
  </div>
</template>

<script>
import ButtonCom from './ButtonCom.vue';

export default {
  name: 'ProductModule',
  inheritAttrs: false,
  props: {
    parentData: {
      type: Object,
    },
  },

  methods: {
    priceStrMaker(price) {
      return `$${price.toLocaleString()}`;
    },
  },

  components: {
    ButtonCom,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  padding: 15px 15px;
  border: 1px solid rgb(221, 218, 218);
  box-sizing: border-box;
}

.card__textZone {
  color: #000;
}

.card__title {
  padding-bottom: 15px;
  font-size: 22px;
  font-weight: 600;
  line-height: 1.3;
}

.card__desc {
  padding-bottom: 15px;
  font-size: 14px;
}

.card__price {
  font-size: 40px;
  font-weight: 700;
  color: #ff0079;
}

.card__img {
  width: 100%;
  height: auto;
}
</style>
