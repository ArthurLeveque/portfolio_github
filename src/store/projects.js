import axios from 'axios'

const projects = {
  namespaced: true,

  state(){
    return {
      projects: {},
      project: {}
    }
  },

  mutations:{
    UPDATE_PROJECTS(state, payload){
      state.projects = payload
    },
    UPDATE_PROJECT(state, payload){
      state.project = payload
    },
  },

  actions:{
    async getProjects(context){
      const url = "https://api.github.com/users/ArthurLeveque/repos";

      const response = await axios.get(url, {
        headers: {
          Authorization : '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'
        }
      });

      context.commit('UPDATE_PROJECTS', response.data);
    },

    async getProject(context, project_name){
      const url = `https://api.github.com/repos/ArthurLeveque/${project_name}`;

      const response = await axios.get(url, {
        headers: {
          Authorization : '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'
        }
      });

      context.commit('UPDATE_PROJECT', response.data);
    },
  }
}

export default projects;