import axios from 'axios'

const projects = {
  namespaced: true,

  state(){
    return {
      projects: {}
    }
  },

  mutations:{
    UPDATE_PROJECTS(state, payload){
      state.projects = payload
    },
  },

  actions:{
    async getProjects(context){
      const url = "https://api.github.com/users/ArthurLeveque/repos";

      const response = await axios.get(url);

      context.commit('UPDATE_PROJECTS', response.data);
    },
  }
}

export default projects;