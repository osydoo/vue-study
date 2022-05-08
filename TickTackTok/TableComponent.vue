<template>
  <table>
    <tr-component
      v-for="(rowData, index) in tableData"
      :key="index"
      :row-data="rowData"
      :row-index="index"
      :turn="turn"
    ></tr-component>
  </table>
</template>
<script>
import TrComponent from "./TrComponent";

export default {
  props: {
    tableData: Array,
    turn: String,
  },
  components: {
    "tr-component": TrComponent,
  },
};
</script>
