<template>
  <div>{{ msg }}</div>
  <ul>
    <li v-for="item in testArr" :key="item.key">{{ item.name }}</li>
  </ul>
  <div>{{ num }}</div>
  <button @click="increase">增加</button>
  <div>双倍：{{ doubleNum }}</div>
</template>

<script>
import { ref, computed, watch, onMounted, toRefs } from 'vue'

const test = [{
  name: '小明',
  age: 18,
  key: 1
}, {
  name: '小红',
  age: 16,
  key: 2
}, {
  name: '小王',
  age: 15,
  key: 3
}]
export default {
  props: {
    msg: String
  },
  setup (props) {
    const { msg: msgRef } = toRefs(props)
    const testArrRef = ref(test)
    const numRef = ref()
    const increase = () => numRef.value++
    const doubleNumRef = computed(() => numRef.value * 2)

    onMounted(() => {
      numRef.value = 0
      console.log('doubleNumRef.value', doubleNumRef.value)
      console.log('props.msg', props.msg)
      console.log('msgRef.value :', msgRef.value)
    })

    watch(numRef, (newValue, oldValue) => {
      console.log('The newValue of numRef is :', newValue)
    })

    return {
      testArr: testArrRef,
      num: numRef,
      increase,
      doubleNum: doubleNumRef
    }
  }
}
</script>

<style lang="less">
ul {
  list-style: none;
  display: flex;
  justify-content: center;
  li {
    margin: 2px 10px;
  }
}
</style>
