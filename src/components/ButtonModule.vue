<template>
  <div class="card__btnZone">
    <button
      class="card__btn"
      :disabled="setBtnStatus(parentLimit.minValue)"
      @click="counter(-1)"
    >
      -
    </button>
    <p class="card__amount">{{ count }}</p>
    <button
      class="card__btn"
      :disabled="setBtnStatus(parentLimit.maxValue)"
      @click="counter(+1)"
    >
      +
    </button>
  </div>
</template>

<script>
export default {
  name: 'ButtonModule',
  data() {
    return {
      count: 0,
    };
  },

  props: {
    parentLimit: {
      type: Object,
    },
    parentId: {
      type: Number,
    },
  },

  methods: {
    counter(num) {
      this.count += num;
      this.$emit('update', parseInt(num, 10), this.parentId);
    },

    setBtnStatus(limit) {
      return this.count === limit ? true : false;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
  cursor: pointer;
}

.card__btn:disabled {
  cursor: default;
}

.card__btn:disabled {
  color: rgba(102, 102, 102, 0.603);
  background-color: #f7f7f7;
}

.card__amount {
  font-size: 24px;
}
</style>
