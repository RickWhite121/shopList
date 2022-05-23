<template>
  <div class="container mx-auto" id="app">
    <CoverModule
      v-if="listShow"
      :parent-data="cartList"
      @update="switchListShow"
    />
    <CartModule :parent-data.sync="pdTotal" @update="switchListShow" />
    <main class="main grid">
      <CardModule
        v-for="item in pdData"
        :key="item.id"
        :parent-data="item"
        :parent-limit="pdLimit"
        @update="cartListHandler"
      />
    </main>
  </div>
</template>

<script>
import CardModule from './components/CardModule.vue';
import CartModule from './components/CartModule.vue';
import CoverModule from './components/CoverModule.vue';

export default {
  name: 'App',
  data() {
    return {
      pdData: [],
      cartList: [],
      pdTotal: 0,
      listShow: false,
      pdLimit: {
        minValue: 0,
        maxValue: 5,
      },
    };
  },

  async created() {
    this.pdData = await this.fetchData();
  },

  mounted() {
    const self = this;
    this.$nextTick(function () {
      document.addEventListener('keyup', function (e) {
        if (e.keyCode === 27 && self.listShow === true) {
          self.closeList();
        }
      });
    });
  },

  methods: {
    async fetchData() {
      try {
        const res = await this.$http.get('/data.json');
        return res.data;
      } catch (e) {
        console.log(e.message);
      }
    },

    cartListHandler(num, id) {
      this.pdTotal += num;
      if (num === 1) {
        this.pdData.map((item) => {
          if (item.id === id) {
            this.cartList.push(item);
          }
        });
      } else {
        const idDefine = (item) => item.id === id;
        const removeIndex = this.cartList.findIndex(idDefine);
        this.cartList.splice(removeIndex, 1);
      }
    },

    closeList() {
      this.listShow = false;
    },

    switchListShow() {
      this.listShow ? (this.listShow = false) : (this.listShow = true);
    },

    filterData() {
      return this.pdData.filter((item) => item.count > 0);
    },
  },

  components: {
    CardModule,
    CartModule,
    CoverModule,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  width: 1200px;
}

.mx-auto {
  margin-right: auto;
  margin-left: auto;
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px 20px;
}
</style>
