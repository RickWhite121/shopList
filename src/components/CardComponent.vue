<template>
  <div class="card">
    <div class="card__textZone">
      <h2 class="card__title">{{ parentData.name }}</h2>
      <p class="card__desc">{{ parentData.desc }}</p>
      <p class="card__price">{{ priceStrMaker }}</p>
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
    <div class="card__btnZone">
      <button class="card__btn" :disabled="isDisable(0)" @click="counter(-1)">
        -
      </button>
      <p class="card__amount">{{ count }}</p>
      <button class="card__btn" :disabled="isDisable(5)" @click="counter(+1)">
        +
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardComponent',
  data() {
    return {
      count: 0,
    };
  },
  props: {
    parentData: {
      type: Object,
    },
  },

  computed: {
    priceStrMaker() {
      return `$${this.parentData.price.toLocaleString()}`;
    },
  },

  methods: {
    counter(num) {
      this.count += num;
      this.$emit('update', parseInt(num, 10), this.parentData.id);
    },

    isDisable(limit) {
      return this.parentData.count === limit ? true : false;
    },
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
.card__btnZone {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 15px;
  padding-left: 15px;
}

.card__btn {
  padding: 3px 15px;
  font-size: 24px;
  color: #666;
  background-color: #fff;
  border: 1px solid rgb(221, 218, 218);
  border-radius: 3px;
}

.card__btn:disabled {
  color: rgba(102, 102, 102, 0.603);
  background-color: #f7f7f7;
}

.card__amount {
  font-size: 24px;
}
</style>
