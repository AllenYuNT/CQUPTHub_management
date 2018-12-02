export default {
  state: {
   	current:'',
  },
  mutations: {
    changState(state,name){
      state.current = name;
      console.log(state.current);
    },
    deleteUser(){
    	state.current = '';
    	console.log(state.current);
    },
  }
}