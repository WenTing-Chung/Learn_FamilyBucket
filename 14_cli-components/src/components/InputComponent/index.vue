<template>
  <input v-model="inputText" type="text" />
</template>

<script>
export default {
  name: 'InputComponent',
  props: {
    text: {
      type: String,
      required: true,
      // default: '',
    },
  },
  computed: {
    inputText: {
      get() {
        return this.text
      },
      set(val) {
        // console.log(val)
        //-- 1.使用 function 設定來執行修改
        // this.$emit('textChange', val)

        //-- 2.使用 sync 同步資料
        this.$emit('update:text', val)
      },
    },
  },
}
</script>

<style src="./style.css"></style>