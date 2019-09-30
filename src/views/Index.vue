<template>
  <div>
    <TopNav />
    <div class="wrapper">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="page-title-box">
              <div class="page-title-right">
                <ol class="breadcrumb m-0">
                  <li class="breadcrumb-item">
                    <a href="javascript: void(0);"><router-link to="/">Home </router-link></a>
                  </li>
                </ol>
              </div>
              <h4 class="page-title">Home</h4>
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