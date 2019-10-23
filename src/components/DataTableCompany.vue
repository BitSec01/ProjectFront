<template>
  <table id="contactTable" class="table dt-responsive nowrap dataTable no-footer dtr-inline collapsed" role="grid" style="width:100%">
    <thead>
      <tr>
        <th v-for="column in columns" :key="column.id" class="sorting">
          {{ column.label }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in rows" :key="row.id">
        <td>{{ row.name }}</td>
        <td>{{ row.address }}, {{row.city}}</td>
        <td>{{ row.website }}</td>
        <td>{{row.notes}}</td>
        <td>{{ row.last_contacted }}</td>
        <td>
          <span v-if="row.special_needs" class="badge badge-success">Ja</span>
          <span v-else class="badge badge-danger">Nee</span>
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
    name: 'DataTableContacts',
    data() {
      return {
        selectedContact: {},
        columns: [
          { id: 1, label: 'Naam'},
          { id: 2, label: 'Adres'},
          { id: 3, label: 'Website'},
          { id: 4, label: 'Notes'},
          { id: 5, label: 'Laatst Gecontacteerd'},
          { id: 6, label: 'Speciale Begeleiding'},
          { id: 7, label: 'Edit'}
        ],
        rows: []
      };
    },
    methods: {
      fetchData() {
        Axios.get('http://localhost:80/companies').then((response) => {
          console.info('Get request succeeded without errors');
          console.log(response.data);
          this.rows = response.data.data;
        }).catch((err) => {
          console.warn(err);
          alert('Error has occured check log');
        }).finally(() => {
          console.info('Get request has been made and executed.');
          $('#conpanyTable').DataTable();
        });
      },
      showModal(id) {
        event.preventDefault();

        Axios.get('http://localhost:80/company/' + id).then((response) => {
          console.info('Get request succeeded without errors');
          console.log(response.data.data[0]);
          this.selectedCompany = response.data.data[0];
        }).catch((err) => {
          console.warn(err);
          alert('Error has occured check log');
        }).finally(() => {
          this.$emit('companySelected', this.selectedCompany);
          $('#CompanyEdit').modal('show');
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