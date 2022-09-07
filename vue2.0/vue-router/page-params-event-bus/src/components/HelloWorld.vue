<template>
  <div class="hello">
    <button @click="redirectToAboutByRouter()">手动跳转页面传参</button>
    <br><br><br>
    <div @click="redirectToAboutByBus()">事件总线传递参数</div>

    <div @click="redirectToAboutByStorage()">直接通过本地缓存传递参数</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  created() {
    console.log('===========>Home created')
  },
  beforeMount() {
    console.log('===========>Home beforeMount')
  },
  mounted() {
    console.log('===========>Home mounted')
  },
  beforeUpdate() {
    console.log('===========>Home beforeUpdate')
  },
  updated() {
    console.log('===========>Home updated')
  },
  beforeDestroy() {
    console.log('===========>Home beforeDestroy')
    const str = '传递字符串';
    this.$bus.$emit('busEvent', str)
  },
  destoryed() {
    console.log('===========>Home destoryed')
  },
  methods: {
    redirectToAboutByRouter() {
      const params = {
        name: '特仑苏',
        value: 'milk'
      }
      this.$router.push({
        name: 'About',
        query: {
          ...params,
        }
      })
    },
    redirectToAboutByBus() {
      this.$router.push({
        name: 'About',
      })
    },
    redirectToAboutByStorage() {
      localStorage.setItem('params', 'string params');
      this.$router.push({
        name: 'About',
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
