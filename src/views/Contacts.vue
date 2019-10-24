<template>
  <div>
    <TopNav />
    <div class="wrapper">
      <div class="container-fluid">

        <div class="row">
          <div class="col-12">
            <div class="page-title-box">
              <h4 class="page-title">Datatables</h4>
            </div>
          </div>
        </div>

        <ContactsTable @contactSelected="handleEmit"/>

      </div>
    </div>
    <ContactEditModal v-bind:contact="contact"/>
    <ContactAddModal v-bind:contact="contact"/>
  </div>
</template>

<script>
import TopNav from '@/components/TopNav';
import ContactsTable from '@/components/ContactsTable';
import ContactEditModal from '@/components/ContactEditModal';
import ContactAddModal from '@/components/ContactAddModal';

export default {
  name: 'Contacts',
  data() {
    return {
      contact: ''
    }
  },
  components: {
    TopNav,
    ContactsTable,
    ContactEditModal,
    ContactAddModal
  },
  methods: {
    handleEmit(event) {
      this.contact = event;
    }
  }
}
</script>

<style>
  .modal-backdrop {
    opacity: 0.7 !important;
    background-color: black;
  }
</style>
