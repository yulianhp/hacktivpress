<template lang="html">
  <div class="col-lg-8">
    <div class="card text-white bg-dark mb-3" style="" v-for="article in articles">
      <div class="card-header">{{a}}</div>
      <div class="card-body">
        <h4 class="card-title">Dark card title</h4>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
