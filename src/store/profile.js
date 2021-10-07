import axios from 'axios'

const profile = {
  namespaced: true,

  state(){
    return {
      profile: {}
    }
  },

  mutations:{
    UPDATE_PROFILE(state, payload){
      state.profile = payload
    }
  },

  actions:{
    async getProfile(context){
      const url = "https://api.github.com/users/ArthurLeveque";

      const response = await axios.get(url, {
        headers: {
          Authorization : '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'
        }
      });

      context.commit('UPDATE_PROFILE', response.data);
    },
  }
}

export default profile;