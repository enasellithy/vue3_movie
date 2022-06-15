import axios from "axios";
import {APISettings} from "@/ApiSettings";

const MoviesModule = {
    state:{
        moviesCount: null,
        pageCount: null,
        currentPage: null,
        themoviedbDiscoverys: [],
        langValue: 'en',
        selectLang: '',
        selectRegion: '',
    },
    mutations: {
        setMoviesCount(state, moviesCount){
            state.moviesCount = moviesCount;
        },
        setPageCont(state, pageCount){
            state.pageCount = pageCount;
        },
        setCurrentPage(state, currentPage){
            state.currentPage = currentPage;
        },
        setThemoviedbDiscoverys(state,themoviedbDiscovery){
            state.themoviedbDiscovery = themoviedbDiscovery;
        },
        setLangValue(state,langValue){
            state.langValue = langValue;
        },
        setSeletedLang(state,selectedLang){
            state.selectedLang = selectedLang;
        },
        setSelectedRegion(state,selectRegion){
            state.selectRegion = selectRegion;
        }
    },
    actions: {
        fetchthemoviewDiscovery(context,selectLang,selectRegion){
            let langauageCurrent = selectLang == '' ? 'en' : selectLang;
            let regionCurrent = selectRegion == '' ? 'AE' : selectRegion;
            console.log(selectRegion);
            axios.get(APISettings.themoviedbDiscovery+"&language="+ langauageCurrent)
                .then(response => {
                    console.log(APISettings.themoviedbDiscovery+"&language="+ langauageCurrent+"&region="+regionCurrent)
                    context.commit('setThemoviedbDiscoverys',response.data.results)
                    context.commit('setMoviesCount',response.data.total_results)
                    context.commit('setCurrentPage',response.data.page)
                    context.commit('setPageCont',response.data.total_pages)
                    context.commit('setLangValue',this.state.langValue)
                });
        },
        changeLangs({context},selectLang){
            axios.get(APISettings.themoviedbDiscovery+"&language="+selectLang).then(response => {
                console.log(APISettings.themoviedbDiscovery+"&language="+selectLang)
                context.commit("setThemoviedbDiscoverys",response.data.results)
                context.commit('setMoviesCount',response.data.total_results)
                context.commit('setCurrentPage',response.data.page)
                context.commit('setPageCont',response.data.total_pages)
                context.commit('setLangValue',this.state.langValue)
            })
        },
        changeRegion({context},selectRegion){
            axios.get(APISettings.themoviedbDiscovery+"&region="+selectRegion).then(response => {
                console.log(APISettings.themoviedbDiscovery+"&region="+selectRegion)
                context.commit("setThemoviedbDiscoverys",response.data.results)
                context.commit('setMoviesCount',response.data.total_results)
                context.commit('setCurrentPage',response.data.page)
                context.commit('setPageCont',response.data.total_pages)
                context.commit('setLangValue',this.state.langValue)
            })
        }
    },
    getters: {
        moviesCount(state) {
            return state.moviesCount;
        },
        pageCount(state){
            return state.pageCount;
        },
        currentPage(state){
            return state.currentPage;
        },
        themoviedbDiscovery(state){
            return state.themoviedbDiscovery;
        },
        langValue(state){
            return state.langValue;
        },
        selectLang(state){
            return state.selectLang;
        },
        selectRegion(state){
            return state.selectRegion;
        }
    }
}

export default MoviesModule;