<template>
  <div>
    <input-tags v-model="tags">
      <div
        class="tags-input"
        slot-scope="{ tag, removeTag, inputEventHandlers, inputBindings }"
      >
        <span :key="tag" v-for="tag in tags" class="tags-input-tag">
          <span>{{ tag }}</span>
          <button
            type="button"
            class="tags-input-remove"
            v-on:click="removeTag(tag)"
          >
            &times;
          </button>
        </span>
        <input
          class="tags-input-text"
          placeholder="Add tag..."
          v-on="inputEventHandlers"
          v-bind="inputBindings"
        />
      </div>
    </input-tags>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
import Vue from "vue";
import VueFormulate from "@braid/vue-formulate";
import VueTags from "vue-tags";
Vue.component("input-tags", VueTags);
Vue.use(VueFormulate);
export default {
  name: "HelloWorld",
  componnents: {
    VueTags,
  },
  props:{
    msg: String
  },
  data() {
    return {
      tags: ["Laravel", "Vuejs"],
    };
  },
  mounted() {
    browser.runtime.sendMessage({});
  },
  computed: {
    defaultText() {
      return browser.i18n.getMessage("extName");
    },
  },
  methods: {
    str: function () {
      return "asdder";
    },
  },
};
</script>

<style scoped>
p {
  font-size: 20px;
}
</style>
