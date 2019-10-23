<template>
  <div>
    <TopNav />
    <div class="wrapper">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="page-title-box">
              <h4 class="page-title">Studenten Kaart</h4>
            </div>
          </div>
        </div>
        <div class="card">
        <div class="card-body">
          <div class="row">
            <div class="col-9">
              <Map />
            </div>
            <div class="col-3">
              <h3>[filters]</h3> 
            </div>
          </div>

        </div> <!-- end card body-->
      </div> <!-- end card -->

        

      </div>
    </div>
  </div>
</template>

<script>
  import TopNav from '@/components/TopNav';
  import Map from '@/components/Map';

  export default {
    name: 'index',
    components: {
      TopNav,
      Map
    }
  }
</script>

<style scoped>
  li a {
    color: #adb5bd;
  }
</style>