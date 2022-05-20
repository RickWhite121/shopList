<template>
  <div class="container mx-auto" id="app">
    <ListComponent
      v-if="listShow"
      :parent-data.sync="filterData"
      @update="switchListShow"
    />
    <CartComponent :parent-data="pdTotal" @update="switchListShow" />
    <main class="main grid">
      <CardComponent
        v-for="item in pdData"
        :key="item.id"
        :parent-data="item"
        @update="pdCounter"
      />
    </main>
  </div>
</template>

<script>
import CardComponent from './components/CardComponent.vue';
import CartComponent from './components/CartComponent.vue';
import ListComponent from './components/ListComponent.vue';

export default {
  name: 'App',
  data() {
    return {
      pdData: [],
      pdTotal: 0,
      listShow: false,
    };
  },

  async created() {
    this.pdData = await this.fetchData();
    this.addCountKey();
  },

  computed: {
    filterData() {
      return this.pdData.filter(function (item) {
        return item.count > 0;
      });
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

    addCountKey() {
      this.pdData.forEach((item) => {
        item['count'] = 0;
      });
    },

    pdCounter(num, id) {
      this.pdData.map((item) => {
        if (item.id === id) {
          item.count += num;
        }
      });
      this.pdTotal += num;
    },

    switchListShow() {
      this.listShow ? (this.listShow = false) : (this.listShow = true);
    },
  },

  components: {
    CardComponent,
    CartComponent,
    ListComponent,
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
