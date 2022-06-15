<template>
  <div class="col-md-2">
    <select class="form-select"
            v-model="selectLang"
            @change="switchLang($event)">
      <option v-for="(lang,i) in langs"
              :key="i"
              v-bind:value="lang.iso_639_1">
        {{ lang.iso_639_1 }}
      </option>
    </select>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data(){
    return {
      selectLang: '',
    }
  },
  computed: {
    ...mapGetters(["langs"]),
  },
  methods: {
    ...mapActions(["fetchLangs","changeLangs","fetchthemoviewDiscovery"]),
    switchLang($event) {
      this.fetchthemoviewDiscovery($event.target.value)
    },
  },
  created() {
    this.fetchLangs();
    this.fetchthemoviewDiscovery({selectedLang: this.selectedLang});
  },
}
</script>

<style scoped>

</style>