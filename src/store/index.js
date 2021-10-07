import { createStore } from 'vuex'
import projects from "./projects";

const store = createStore({
    modules: {
        projects
    }
})
export default store