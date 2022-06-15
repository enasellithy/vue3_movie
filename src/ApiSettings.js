import configApp from "@/Config";

export const APISettings = {
    token: '',
    headers: new Headers({
        'Accept': 'application/json'
    }),
    themoviedbImagePath: "https://image.tmdb.org/t/p/original/",
    themoviedbDiscovery: "https://api.themoviedb.org/3/discover/movie?api_key="+configApp.Themoviedb_api_key,
    theTvbDiscovery: "https://api.themoviedb.org/3/discover/tv?api_key="+configApp.Themoviedb_api_key,
    themoviedbLang:  "https://api.themoviedb.org/3/configuration/languages?api_key="+configApp.Themoviedb_api_key,
    timeZoneUrl: "https://api.themoviedb.org/3/configuration/timezones?api_key="+configApp.Themoviedb_api_key,
    countryListUrl: "https://api.themoviedb.org/3/configuration/countries?api_key="+configApp.Themoviedb_api_key,
};