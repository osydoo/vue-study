import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const SET_WINNTER = "SET_WINNDER";
export const CLICK_CELL = "CLICK_CELL";
// 실수하기 쉽기때문에 변수로 선언해둔다
// 대문자로한다.

export default new Vuex.Store({
  state: {},
  mutations: {
    [SET_WINNTER](state, winner) {
      state.winner = winner;
    }, // vue에서는 이러한 방식으로 많이한다.
    [CLICK_CELL](state, { row, cell }) {
      state.tableData[row][cell] = state.turn;
    },
  }, // state를 수정할 때 사용.  동기적으로
  getters: {}, // vue의 computed와 비슷
  actions: {}, // 비동기나 여러 뮤테이션을 연달아 실행할때
});
