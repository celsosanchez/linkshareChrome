<template>
  <div>
    <p>{{str()}}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  mounted () {
    browser.runtime.sendMessage({})
  },
  computed: {
    defaultText () {
      return browser.i18n.getMessage('extName')
    }
  },
  methods: {
    str: function(){
      return "asdd";
    }
  }
}
</script>

<style scoped>
p {
  font-size: 20px;
}
</style>
