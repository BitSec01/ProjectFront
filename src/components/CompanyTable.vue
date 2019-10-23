<template>
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-body">
          <h4 class="header-title">Bedrijven Tabel</h4>
          <p class="text-muted font-13 mb-4">
            hier kun je alle bedrijven zien en managen. je kunt sorteren door op de column te klikken en zoeken met de
            zoekbalk!
          </p>

          <a href="#custom-modal" class="btn btn-success text-dark btn-sm waves-effect" data-animation="blur" data-plugin="custommodal" data-overlaycolor="#38414a" v-on:click="showModal()"><i class="">Toevoegen</i></a>
         <DataTableCompany @companySelected="handleEmit"/>

        </div> <!-- end card body-->
      </div> <!-- end card -->
    </div><!-- end col-->
  </div>
  <!-- end row-->
</template>

<script>
  import DataTableCompany from "@/components/DataTableCompany";

  export default {
    name: 'CompanyTable',
    data() {
      return {
        companySelected: ""
      }
    },
    components: {
      DataTableCompany
    },
    methods: {
      handleEmit(event) {
        console.log('data after child handle: ', event) // get the data after child dealing
        this.$emit('companySelected', event);
      },
      showModal(){
        $('#companyAddModal').modal("show");
      }
    }
  }
</script>