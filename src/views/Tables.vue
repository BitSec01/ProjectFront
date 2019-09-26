<template>
  <div class="wrapper">
    <div class="container-fluid">
      
      <div class="row">
        <div class="col-12">
          <div class="page-title-box">
            <div class="page-title-right">
              <ol class="breadcrumb m-0">
                <li class="breadcrumb-item"><a href="javascript: void(0);">UBold</a></li>
                <li class="breadcrumb-item"><a href="javascript: void(0);">Tables</a></li>
                <li class="breadcrumb-item active">Datatables</li>
              </ol>
            </div>
            <h4 class="page-title">Datatables</h4>
          </div>
        </div>
      </div>

      <DataTables />

    </div>
  </div>
</template>

<script>
  import DataTables from '@/components/DataTables.vue';

  export default {
    name: 'about',
    components: {
      DataTables
    }
  }
</script>