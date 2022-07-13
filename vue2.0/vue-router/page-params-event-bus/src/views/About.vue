<template>
	<div class="about">
		<h1>This is an about page</h1>

		<div><span>{{ milkValue }} : </span><span>{{ milk }}</span></div>
    <div>{{ str }}</div>
    <br>
    <hr>
    <div>{{ key }}</div>
	</div>
</template>

<script>
export default {
  data() {
    return {
      milk: '',
      milkValue: '',
      str: '',
      key: ''
    }
  },
  created() {
    console.log('===========>About created')
    const { name, value } = this.$route.query;
    this.milk = name;
    this.milkValue = value;
    this.$bus.$on('busEvent', data => {
      console.log(data);
      this.str = data;
    });
    this.key = localStorage.getItem('params');
  },
  beforeMount() {
    console.log('===========>About beforeMount')
  },
  mounted() {
    console.log('===========>About mounted')
  },
  beforeUpdate() {
    console.log('===========>About beforeUpdate')
  },
  updated() {
    console.log('===========>About updated')
  },
  beforeDestroy() {
    console.log('===========>About beforeDestroy')
    this.$bus.$off('busEvent')
  },
  destoryed() {
    console.log('===========>About destoryed')
  }
}
</script>
