<template lang="html">
  <div class="col-lg-8">
    <div class="card text-white bg-dark mb-3" style="" v-for="(article, index) in articles" :key="index">
      <div class="card-header"><h4>{{article.title}}</h4></div>
      <div class="card-body">
        <p class="card-text">{{article.content}}</p>
        <small>{{article.category}}</small>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState([
      'articles'
    ])
  }
}
</script>

<style lang="css">
</style>
