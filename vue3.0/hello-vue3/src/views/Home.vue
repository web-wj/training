<template>
  <div class="home">
    <Test msg="这是测试的参数！"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Test from '@/components/Test.vue'

export default {
  name: 'Home',
  components: {
    Test
  }
}
</script>
