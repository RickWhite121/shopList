<template>
  <div
    class="list"
    @click.self="clickToCloseList"
    @keyup.esc="keyUptoCloseVideo"
  >
    <div class="list__content">
      <h3 class="list__title">您的購物清單</h3>
      <div class="list__tableZone">
        <table class="list__table">
          <thead>
            <tr class="list__tableTitle">
              <th class="list__th">品名</th>
              <th class="list__th">描述</th>
              <th class="list__th">價格</th>
            </tr>
          </thead>
          <tbody>
            <template v-for="(item, i) in parentData">
              <tr v-if="i % 2 === 0" class="list__row" :key="item.id">
                <td class="list__td">{{ item.name }}</td>
                <td class="list__td">{{ item.desc }}</td>
                <td class="list__td list__td--textRight">
                  {{ priceStrMaker(item.price) }}
                </td>
              </tr>
              <tr v-else class="list__row list__row--stripe" :key="item.id">
                <td class="list__td">{{ item.name }}</td>
                <td class="list__td">{{ item.desc }}</td>
                <td class="list__td list__td--textRight">
                  {{ priceStrMaker(item.price) }}
                </td>
              </tr>
            </template>
          </tbody>
          <tfoot>
            <tr class="list__tableFoot">
              <td class="list__td" colspan="2">合併</td>
              <td class="list__td list__td--textRight">
                {{ countTotalP }}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
      <button class="list__btn" @click.self="clickToCloseList">
        繼續購物去
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListComponent',

  // mounted() {
  //   document.addEventListener('keyup', function (e) {
  //     if (e.keyCode === 27) {
  //       this.listShow = false;
  //     }
  //   });
  // },

  data() {
    return {
      total: 0,
    };
  },

  props: {
    parentData: {
      type: Array,
    },
  },

  computed: {
    countTotalP() {
      return this.parentData.forEach(function (item) {
        return (this.total = this.total + item.count * item.price);
      });
    },
  },

  methods: {
    priceStrMaker(num) {
      return `$${num.toLocaleString()}`;
    },

    clickToCloseList() {
      this.$emit('update');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list {
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

.list__title {
  padding-bottom: 20px;
  font-size: 24px;
  color: #000;
  font-weight: 700;
}

.list__content {
  padding: 15px;
  width: 850px;
  background-color: #fff;
  border-radius: 10px;
}

.list__table {
  width: 100%;
}

.list__tableTitle {
  background: #ededed;
}

.list__th {
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 14px;
  color: #000;
  font-weight: 700;
  border: 1px solid #cbcbcb;
  white-space: nowrap;
}

.list__row--stripe {
  background-color: #f6f6f6;
}

.list__td {
  padding: 10px 15px;
  font-size: 14px;
  color: #000;
  border: 1px solid #dfdddd;
  text-align: left;
  vertical-align: middle;
  box-sizing: border-box;
}

.list__td--textRight {
  text-align: right;
}

.list__tableFoot {
  background-color: #ffe5f1;
}

.list__btn {
  margin-top: 15px;
  padding: 5px 15px;
  font-size: 15px;
  color: #fff;
  background-color: #ff0079;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}
</style>
