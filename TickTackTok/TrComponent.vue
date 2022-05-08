<template>
  <div>
    <td-component
      v-for="(cellData, index) in rowData"
      :key="`cellData-${index}`"
      :row-Data="rowData"
      :cell-data="cellData"
      :cell-index="index"
      :row="rowIndex"
      :turn="turn"
    ></td-component>
  </div>
</template>
<script>
import TdComponent from "./TdComponent";

export default {
  props: {
    rowData: Array,
    rowIndex: Number,
    turn: String,
  },
  components: {
    "td-component": TdComponent,
  },
};
</script>
