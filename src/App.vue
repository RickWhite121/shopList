<template>
  <div class="container mx-auto" id="app">
    <Cover v-if="getListStatus" :parent-data="getFullList" />
    <Cart />
    <main class="main grid">
      <Product v-for="item in pdData" :key="item.id" :parent-data="item" />
    </main>
  </div>
</template>

<script>
import Product from './components/Product.vue';
import Cart from './components/Cart.vue';
import Cover from './components/Cover.vue';

export default {
  name: 'App',
  data() {
    return {
      pdData: [],
    };
  },

  async created() {
    this.pdData = await this.fetchData();
  },

  mounted() {
    const self = this;
    document.addEventListener('keyup', function (e) {
      if (e.keyCode === 27 && self.getListStatus === true) {
        self.keyUpToCloseList();
      }
    });
  },

  computed: {
    getFullList() {
      return this.$store.state.cartList.map((item) => {
        const pdID = (elem) => elem.id === item;
        return this.pdData.find(pdID);
      });
    },

    getListStatus() {
      return this.$store.state.listShow;
    },
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

    keyUpToCloseList() {
      this.$store.commit('setListStatus');
    },
  },

  components: {
    Product,
    Cart,
    Cover,
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
