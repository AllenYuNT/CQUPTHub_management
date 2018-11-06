export default {
  state: {
    count: 1
  },
  mutations: {
    changState(state){
      state.count++;
      
      console.log(state.count);
    },
  }
}