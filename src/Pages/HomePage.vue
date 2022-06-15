<template>
  <div class="container" id="containerMoviesList">
    <div class="row" id="filters">
      <LangFilter />
      <RegionFilter />
    </div>
    <HomeContentComponent/>
  </div>
</template>

<script>
import HomeContentComponent from "@/Pages/HomeListComponents/HomeContentComponent";
import LangFilter from "@/Pages/Filters/LangFilter";
import RegionFilter from "@/Pages/Filters/RegionFilter";
export default {
  components: {HomeContentComponent, LangFilter,RegionFilter}
}
</script>

<style scoped>
#containerMoviesList {
  margin-top: 25px;
  margin-right: 3px;
  margin-left: 3px;
}
#filters {
  margin-top: 6px;
  margin-bottom: 6px;
}
</style>