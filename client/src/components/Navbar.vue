<template lang="html">
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <router-link :to="{ path: '/'}" class="navbar-brand">
      Home
    </router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation" style="">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarColor02">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <router-link :to="{ path: '/news'}" class="nav-link"><span class="sr-only">(current)</span>
          News
        </router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{ path: '/reviews'}" class="nav-link">Reviews
        </router-link>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">My Articles</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Post Article</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Logout</a>
      </li>
    </ul>
  </div>
</nav>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
