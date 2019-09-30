<template>
  <div id="app">
    <TopNav />
    <router-view></router-view>
  </div>
</template>

<script>
import TopNav from '@/components/TopNav';

export default {
  name: 'app',
  components: {
    TopNav
  }
}
</script>