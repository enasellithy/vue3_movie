import axios from "axios";
import {APISettings} from "@/ApiSettings";

const TimeZoneModule = {
    state: {
        regions: [],
    },
    mutations: {
        setRegions(state,regions){
            state.regions = regions;
        }
    },
    actions: {
        fetchRegions(context){
            axios.get(APISettings.timeZoneUrl).then(response => {
                console.log('regions' +response);
                context.commit('setRegions',response.data);
            })
        }
    },
    getters: {
        regions(state){
            return state.regions;
        }
    },
};

export default TimeZoneModule;