<template>
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-body">
          <h4 class="header-title">Studenten Tabel</h4>
          <p class="text-muted font-13 mb-4">
            hier kun je alle studenten zien en managen. je kunt sorteren door op de column te klikken en zoeken met de
            zoekbalk!
          </p>

          <DataTable />

        </div> <!-- end card body-->
      </div> <!-- end card -->
    </div><!-- end col-->
  </div>
  <!-- end row-->
</template>

<script>
  import Axios from "axios";
  import DataTable from "@/components/DataTable";

  export default {
    name: 'StudentsTable',
    components: {
      DataTable
    }
  }
</script>