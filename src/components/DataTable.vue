<template>
  <table id="studentTable" class="table dt-responsive nowrap dataTable no-footer dtr-inline collapsed" role="grid" style="width:100%">
    <thead>
      <tr>
        <th v-for="column in columns" :key="column.id" class="sorting">
          {{ column.label }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in rows" :key="row.id">
        <td>{{ row.student_number }}</td>
        <td>{{ row.name }} {{ row.middlename }} {{ row.lastname }}</td>
        <td>{{ row.streetname }}, {{ row.postalcode }}, {{ row.city }}</td>
        <td>{{ row.phone }}</td>
        <td>{{ row.email }}</td>
        <td>
          <span v-if="row.has_internship" class="badge badge-success">Ja</span>
          <span v-else class="badge badge-danger">Geen</span>
        </td>
        <td>
          <a href="#custom-modal" class="btn btn-success text-dark btn-sm waves-effect" data-animation="blur" data-plugin="custommodal" data-overlaycolor="#38414a" v-on:click="showModal(row.id)"><i class="fe-edit"></i></a>
          <!-- <button type="button" class="btn btn-outline-success waves-effect waves-light" v-on:click="showModal(row.id)">Edit</button>-->
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import Axios from 'axios';
  export default {
    name: 'DataTable',
    data() {
      return {
        selectedStudent: {},
        columns: [
          { id: 1, label: 'Student'},
          { id: 2, label: 'Naam'},
          { id: 3, label: 'Woonplaats'},
          { id: 4, label: 'Telefoon'},
          { id: 5, label: 'Email'},
          { id: 6, label: 'Stage'},
          { id: 7, label: 'Edit'}
        ],
        rows: []
      };
    },
    methods: {
      fetchData() {
        Axios.get('http://localhost:80/student').then((response) => {
          console.info('Get request succeeded without errors');
          console.log(response.data);
          this.rows = response.data.data;
        }).catch((err) => {
          console.warn(err);
          alert('Error has occured check log');
        }).finally(() => {
          console.info('Get request has been made and executed.');
          $('#studentTable').DataTable();
        });
      },
      showModal(id) {
        event.preventDefault();

        Axios.get('http://localhost:80/student/' + id).then((response) => {
          console.info('Get request succeeded without errors');
          console.log(response.data.data[0]);
          this.selectedStudent = response.data.data[0];
        }).catch((err) => {
          console.warn(err);
          alert('Error has occured check log');
        }).finally(() => {
          this.$emit('studentSelected', this.selectedStudent);
          $('#studentModal').modal('show');
        });


      }
    },
    created() {
      this.fetchData();
    }
  }
</script>

<style scoped>
  tbody td {
    vertical-align: middle;
  }

  .badge {
    font-size: 16px;
  }
  .badge-danger {
    color: rgb(54, 54, 54);
  }
</style>