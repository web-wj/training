<template>
  <div>
    <div class="select-wrapper">
      <span>{{ select }}</span>
      <div v-for="(phone, index) in phoneList" :key="index + phone">
        <input type="checkbox" v-model="phone.checked"/>
        <input type="text" class="phone" v-model="phone.value"/>
      </div>
    </div>
    <div class="show-wrapper">
      <span>{{ show }}</span>
      <div class="show-content">
        <div class="select-phone">
          <span v-for="(phone, index) in selectedPhoneList" :key="index + phone">{{ phone }}</span>
        </div>
      </div>
    </div>
    <div>{{ msg }}</div>
  </div>
</template>

<script>
export default {
  props: {
    msg: String
  },
  data () {
    return {
      select: '选择：',
      show: '展示：',
      phoneList: [{
        value: 'iphone12',
        checked: true
      },
      {
        value: 'xiaomi',
        checked: true
      },
      {
        value: 'huawei',
        checked: false
      }]
    }
  },
  computed: {
    selectedPhoneList () {
      return this.phoneList.filter(item => item.checked).map(item => item.value).join(' 、')
    }
  },
  created () {
    this.msg = '修改传递的参数'
    // alert(this.msg)
    console.log(this.selectedPhoneList)
  }
}
</script>

<style lang="less">
.select-wrapper,
.show-wrapper {
  width: 800px;
  height: 50px;
  margin: 10px auto;
  text-align: start;
  display: flex;

  .phone {
    width: 100px;
    height: 25px;
    line-height: 25px;
    font-size: 18px;
    padding: 2px 0 2px 5px;
    border: 0;
    border-bottom: 1px solid #000;
    display: inline-block;
    overflow: hidden;
  }

  .show-content {
    width: 500px;
    height: 25px;
    line-height: 25px;
    border-bottom: 1px solid #000;
  }
}
</style>
