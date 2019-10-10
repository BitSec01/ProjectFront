<template>
  <div>
    <TopNav />
    <div class="wrapper">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="page-title-box">
              <h4 class="page-title">Bedrijvenlijst</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import TopNav from '@/components/TopNav';

  export default {
    name: 'index',
    components: {
      TopNav
    }
  }
</script>

<style scoped>
  li a {
    color: #adb5bd;
  }
</style>