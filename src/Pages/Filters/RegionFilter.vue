<template>
  <div class="col-md-2">
    <select class="form-select"
            v-model="selectRegion"
            @change="switchRegion($event)">
      <option v-for="(region,i) in regions"
              :key="i"
              v-bind:value="region.iso_639_1">
        {{ region.iso_3166_1 }}
      </option>
    </select>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data(){
    return {
      selectRegion: '',
    }
  },
  computed: {
    ...mapGetters(["regions"]),
  },
  methods: {
    ...mapActions(["fetchRegions","changeRegion","fetchthemoviewDiscovery"]),
    switchRegion($event) {
      this.fetchthemoviewDiscovery({selectRegion:$event.target.value})
    },
  },
  created() {
    this.fetchRegions();
    this.fetchthemoviewDiscovery({selectRegion: this.selectRegion});
  },
}
</script>

<style scoped>

</style>