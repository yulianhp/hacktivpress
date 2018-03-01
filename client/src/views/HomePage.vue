<template lang="html">
  <div class="">
    <Navbar/>
    <div class="container" style="margin-top:3%;">
      <div class="row">
        <ArticleList/>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import ArticleList from '@/views/ArticleList'
export default {
  name: 'HomePage',
  components: {
    Navbar, ArticleList
  },
  created () {
    this.$store.dispatch('getAllArticles')
  }
}
</script>

<style lang="css">
</style>
