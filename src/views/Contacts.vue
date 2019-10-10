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
                <li class="breadcrumb-item"><a href="javascript: void(0);">UBold</a></li>
                <li class="breadcrumb-item"><a href="javascript: void(0);">Tables</a></li>
                <li class="breadcrumb-item active">Datatables</li>
              </ol>
            </div>
            <h4 class="page-title">Datatables</h4>
          </div>
        </div>
      </div>

      <ContactsTable @contactSelected="handleEmit"/>

    </div>
  </div>
    <Modal v-bind:contact="contact"/>
  </div>
</template>

<script>
import TopNav from '@/components/TopNav';
import ContactsTable from '@/components/ContactsTable';
import Modal from '@/components/Modal';

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
    Modal
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
