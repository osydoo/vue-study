<template>
  <div>
    <div id="screen" v-bind:class="state" @click="onClickScreen">
      {{ message }}
    </div>
    <template v-if="result.length">
      <div>
        평균 시간:
        {{ average }}
      </div>
      <button @Click="onReset">리셋</button>
    </template>
  </div>
</template>
<script>
let startTime = 0;
let endTime = 0;
let timeout = null;
export default {
  data() {
    return {
      result: [],
      state: "waiting",
      message: "클릭해서 시작하세요.",
    };
  },
  computed: {
    average() {
      return this.result.reduce((c, v) => c + v, 0) / this.result.length || 0;
    },
  },
  methods: {
    onReset() {
      console.log("reset");
    },
    onClickScreen() {
      if (this.state === "waiting") {
        this.state = "ready";
        this.message = "파란색이 되면 클릭하세요.";
        setTimeout(() => {
          timeout = this.state = "now";
          this.message = "지금 클릭";
          startTime = new Date();
        }, Math.floor(Math.random() * 1000 + 3000));
      } else if (this.state === "ready") {
        this.state = "waiting";
        this.message = "너무 성급하시군요! 파란색이 된 후에 클릭하세요.";
      } else if (this.state === "now") {
        endTime = new Date();
        this.state = "waiting";
        this.message = "클릭해서 시작하세요";
        this.result.push(endTime - startTime);
        clearTimeout(timeout);
      }
    },
  },
};
</script>
<style scoped>
#screen {
  background-color: yellow;
  width: 400px;
  height: 400px;
}
#screen.waiting {
  background-color: green;
}
#screen.ready {
  background-color: red;
  color: white;
}
#screen.now {
  background-color: blue;
}
</style>
