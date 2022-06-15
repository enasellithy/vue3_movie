import { createStore } from "vuex";
import MovieModule from "@/store/modules/MovieModule";
import LangModule from "@/store/modules/LangModule";
import TimeZoneModule from "@/store/modules/TimeZoneModule";

const store = createStore({
    state: {},
    getters: {},
    actions: {},
    mutations: {},
    modules: {
        MoviesModule: MovieModule,
        LangModule: LangModule,
        TimeZoneModule: TimeZoneModule,
    }
});

export default store;