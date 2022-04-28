<template>
  <div>
    <h1>{{ result }}</h1>
    <form v-on:submit="onSubmitForm">
      <input ref="answer" maxlength="4" v-model="value" />
      <button type="submit">입력</button>
    </form>
    <div>시도: {{ this.tires.length }}</div>
    <ul>
      <li v-for="t in tries" v-bind:key="t.try">
        <div>{{ t.try }}</div>
        <div>{{ t.result }}</div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tries: [],
      value: "",
      result: "",
    };
  },
  methods: {
    onSubmitForm(e) {
      e.preventDefault();
      this.tries.push({
        try: this.value,
        result: this.result,
      });
      this.value = "";
      this.$ref.answer.focus();
    },
  },
};
</script>
<style></style>
