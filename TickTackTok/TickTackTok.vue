<template>
  <table-component :table-data="tableData" :turn="turn"></table-component>
</template>
<script>
import TableComponent from "./TableComponent.vue";
import EventVus from "./EventBus";
import store from "./store";
export default {
  components: {
    "table-component": TableComponent,
  },
  data() {
    return {
      tableData: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ],
      turn: "O",
    };
  },
  methods: {
    onClickTd() {
      console.log(this.turn);
      this.$store.commit("CLICK_CELL", data); // 첫번째는 mutation이름 두번째는 데이터
    },
  },
  created() {
    EventBus.$on("clickTd", this.onClickTd);
  },
};
</script>
<style scoped>
table {
  border-collapse: collapse;
}
</style>
