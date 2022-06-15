import axios from "axios";
import {APISettings} from "@/ApiSettings";

const LangModule = {
    state: {
        langs: [],
    },
    mutations: {
        setLangs(state,langs){
            state.langs = langs;
        },
    },
    actions: {
        fetchLangs(context){
            axios.get(APISettings.themoviedbLang).then(response => {
                context.commit('setLangs', response.data);
                localStorage.setItem('cacheLangs',response.data);
            })
        },
    },
    getters: {
        langs(state){
            return state.langs;
        },
    },
};

export default LangModule;