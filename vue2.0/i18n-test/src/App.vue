<template>
  <div id="app">
    <p>{{ $t(hello) }}</p>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {

  },
  data() {
    return {
      hello: 'message.hello'
    }
  },
  created() {
    console.log(this)
  }
}
</script>
