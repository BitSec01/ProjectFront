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
  
        <CompanyTable @companySelected="handleEmit"/>
  
      </div>
    </div>
    <CompanyEditModal v-bind:company="company"/>
    <CompanyAddModal v-bind:company="company"/>
  </div>
</template>

<script>
import TopNav from '@/components/TopNav';
import CompanyTable from '@/components/CompanyTable';
import CompanyEditModal from '@/components/CompanyEditModal';
import CompanyAddModal from '@/components/CompanyAddModal';

export default {
  name: 'Company',
  data() {
    return {
      company: ''
    }
  },
  components: {
    TopNav,
    CompanyTable,
    CompanyEditModal,
    CompanyAddModal
  },
  methods: {
    handleEmit(event) {
      this.company = event;
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
