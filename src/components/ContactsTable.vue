<template>
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-body">
          <h4 class="header-title">Contacten Tabel</h4>
          <p class="text-muted font-13 mb-4">
            hier kun je alle contacten zien en managen. je kunt sorteren door op de column te klikken en zoeken met de
            zoekbalk!
          </p>

          <DataTableContacts @contactSelected="handleEmit"/>

        </div> <!-- end card body-->
      </div> <!-- end card -->
    </div><!-- end col-->
  </div>
  <!-- end row-->
</template>

<script>
  import Axios from "axios";
  import DataTableContacts from "@/components/DataTableContacts";

  export default {
    name: 'ContactsTable',
    data() {
      return {
        contactSelected: ""
      }
    },
    components: {
      DataTableContacts
    },
    methods: {
      handleEmit(event) {
        console.log('data after child handle: ', event) // get the data after child dealing
        this.$emit('contactSelected', event);
      }
    }
  }
</script>