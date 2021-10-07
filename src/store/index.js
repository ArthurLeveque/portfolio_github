import { createStore } from 'vuex'
import projects from "./projects";
import profile from "./profile";

const store = createStore({
    modules: {
        projects, profile
    }
})
export default store