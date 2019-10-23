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

        <StudentsTable @studentSelected="handleEmit"/>

      </div>
    </div>
    <Modal v-bind:student="student"/>
    <StudentAddModal v-bind:student="student"/>
  </div>
</template>

<script>
import TopNav from '@/components/TopNav';
import StudentsTable from '@/components/StudentsTable';
import Modal from '@/components/Modal';
import StudentAddModal from '@/components/StudentAddModal';

export default {
  name: 'Students',
  data() {
    return {
      student: ''
    }
  },
  components: {
    TopNav,
    StudentsTable,
    Modal,
    StudentAddModal
  },
  methods: {
    handleEmit(event) {
      this.student = event;
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
