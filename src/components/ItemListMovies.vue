<template>
  <div class="col-md-6" v-for="(item,i) in themoviedbDiscovery" :key="i">
    <div class="thumbnail">
      <div class="card">
        <div class="img-thumbnail">
          <img :src="imagePath+ item.backdrop_path" class="card-img-top"
               :alt="item.original_title">
        </div>
        <div class="card-body">
          <h4 class="movie_title">{{ item.original_title }}</h4>
          <p class="card-text text-muted">
            {{ item.overview.substring(10,100)+"..." }}
          </p>
          <ul class="list-unstyled list_icons" style="display: inline-flex">
            <li>
                <span class="lang">
                  <i class="bi bi-translate"></i>{{ item.original_language }}
                </span>
            </li>
            <li>
                <span class="rate">
                  <i class="bi bi-star"></i> {{ item.vote_average }}
               </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["themoviedbDiscovery",'imagePath'],
}
</script>

<style scoped>
.thumbnail {
  margin: 6px auto;
}
.movie_title {
  font-size: 1rem;
  color: #f44336;
}
.list_icons li {
  margin: 2px;
}
.list_icons li i {
  padding-left: 2px;
}
.list_icons li span i {
  padding-right: 2px;
}
</style>