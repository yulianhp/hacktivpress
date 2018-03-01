<template lang="html">
  <div class="">
    <Navbar/>
    <div class="container" style="margin-top:3%;">
      <div class="row">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  name: 'HomePage',
  components: {
    Navbar
  },
  created () {
    this.$store.dispatch('getAllArticles')
    this.$store.dispatch('getNewsArticles')
    this.$store.dispatch('getReviewsArticles')  
  }
}
</script>

<style lang="css">
</style>
