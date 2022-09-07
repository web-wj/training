<script>
import { ref, computed } from 'vue'
import CheckEdit from './components/CheckEdit.vue'

const phoneList = [{
  name: '小米',
  key: 1,
  checked: true,
}, {
  name: 'vivo',
  key: 2,
  checked: true,
}, {
  name: 'oppo',
  key: 3,
  checked: true,
}];

export default({
  components: { CheckEdit },
  setup() {
    const phoneListRef = ref(phoneList);
    const checkedPhoneListRef = computed(() => {
      return phoneListRef.value.filter(i => i.checked)
    })
    return {
      phoneList: phoneListRef,
      checkedPhoneList: checkedPhoneListRef,
    }
  }
})

</script>

<template>
  <div id="app">
    <div>
      <template v-for="phone in phoneList" :key="phone.key">
        <CheckEdit v-model:checked="phone.checked" v-model:name="phone.name" />
      </template>
    </div>
    <div>
      <template v-for="(checkedPhone, index) in checkedPhoneList" :key="checkedPhone.key">
        <div>{{ index + 1 }}</div>
        <div>{{ checkedPhone.name }}</div>
      </template>
    </div>
  </div>
  <div>123</div>
</template>

<style scoped></style>
