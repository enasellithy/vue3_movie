<template>
  <div class="row">
    <ItemListMovies :themoviedbDiscovery="themoviedbDiscovery" :imagePath="imagePath"/>
  </div>
  <div class="nav_pagnation">
    <NavPagination/>
  </div>
</template>

<script>
import { mapActions, mapGetters} from "vuex";
import {APISettings} from "@/ApiSettings";
import NavPagination from "@/components/NavPagination";
import ItemListMovies from "@/components/ItemListMovies";
export default {
  components: {ItemListMovies, NavPagination},
  data() {
    return {
      imagePath: APISettings.themoviedbImagePath,
      selectLang: '',
    }
  },
  computed: {
    ...mapGetters(['themoviedbDiscovery','moviesCount','pageCount','currentPage']),
  },
  methods: {
    ...mapActions(["fetchthemoviewDiscovery","changeLangs"]),
  },
  created() {
    this.fetchthemoviewDiscovery({selectedLang: this.selectedLang});
  },
}
</script>

<style scoped>
.nav_pagnation {
  margin-top: 25px;
}
</style>