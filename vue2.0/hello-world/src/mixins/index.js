export default {
  data () {
    return {
      msg: 'ni是猪🐎'
    }
  },
  computed: {},
  created () {
    // console.log('我是mixin中的created生命周期函数')
  },
  mounted () {
    // console.log('我是mixin中的mounted生命周期函数')
  },
  methods: {
    clickMe () {
      // console.log('我是mixin中的点击事件')
    }
  }
}
