<template>
  <td>{{ cellData }}</td>
</template>
<script>
import EventBus from "./EventBus";
export default {
  props: {
    cellData: String,
    rowIndex: Number,
    cellIndex: Number,
    turn: String,
  },
  methods: {
    onClickTd() {
      if (this.cellData) return;
      EventBus.$emit("clickTd");
    },
  },
};
</script>
