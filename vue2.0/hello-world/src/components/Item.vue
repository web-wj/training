<template>
  <div>
    <div>{{ copyItem.a }}</div>
    <button @click="clickChange">改变值</button>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      copyItem: this.item
    }
  },
  created () {
    console.log(123)
  },
  methods: {
    clickChange () {
      // this.copyItem.a = 12
      // console.log('item', this.item)
      this.$set(this.copyItem, 'a', 12)
    }
  }
}
</script>

<style></style>
