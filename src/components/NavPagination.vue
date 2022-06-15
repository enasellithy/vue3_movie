<template>
  <nav aria-label="Page navigation">
    <ul class="pagination">
      <li class="page-item disabled">
        <a class="page-link">Previous</a>
      </li>
      <li class="page-item" 
      <!-- v-for="i in pageCount" :key="i" -->
      >
        <router-link class="page-link" to="page">
          Page
        </router-link>
        
      </li>
      <li class="page-item">
        <a class="page-link" href="#">Next</a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      pagesList: [],
    }
  },
  computed: {
    ...mapGetters(['currentPage', 'pageCount']),
  },
}
</script>

<style scoped>

</style>