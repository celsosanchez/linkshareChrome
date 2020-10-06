<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Related Tags"/> -->
    <Form/>
    
    <FormulateForm
  @submit="showAlert"
>
<FormulateInput
  type="radio"
  label="What do you think of Vue Formulate?"
  :options="{
    good: 'It’s good',
    great: 'It’s great',
    install: 'I’m installing it now.'
  }"
/>


  <FormulateInput
    type="submit"
    name="Submit this form!"
  />
</FormulateForm>
    
  </div>
</template>

<script>
import Vue from 'vue'
import VueFormulate from '@braid/vue-formulate'

Vue.use(VueFormulate)
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import Form from  '@/components/Form.vue'

export default {
  name: 'Home',
  components: {
    
    //HelloWorld,
    Form
  }
}
</script>


