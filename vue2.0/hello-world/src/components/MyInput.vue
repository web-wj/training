<template>
  <input
    type="text"
    :value="ruleValue"
    @input="changeText($event)"
  />
</template>

<script>
export default {
  props: {
    value: {
      type: String
    }
  },
  data () {
    return {
      ruleValue: this.value
    }
  },
  methods: {
    changeText (e) {
      this.ruleValue = e.target.value.replace(/\s+/g, '')
      console.log(this.ruleValue)
    }
  }
}
</script>

<style>

</style>
