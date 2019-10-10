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
        <td>{{ row.company_id }}</td>
        <td>{{ row.name }} {{ row.lastname }}</td>
        <td>{{ row.email }}</td>
        <td>{{ row.phone }}</td>
        <td>{{ row.last_contacted }}</td>
        <td>{{ row.contacted_by }}</td>
        <td>
          <span v-if="row.is_supervisor" class="badge badge-success">Ja</span>
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
          { id: 1, label: 'Bedrijf'},
          { id: 2, label: 'Naam'},
          { id: 3, label: 'Email'},
          { id: 4, label: 'Telefoon'},
          { id: 5, label: 'Laatst gecontacteerd'},
          { id: 6, label: 'Gecontacteerd door'},
          { id: 7, label: 'Is begeleider?'},
          { id: 8, label: 'Edit'}
        ],
        rows: []
      };
    },
    methods: {
      fetchData() {
        Axios.get('http://localhost:80/contacts').then((response) => {
          console.info('Get request succeeded without errors');
          console.log(response.data);
          this.rows = response.data.data;
        }).catch((err) => {
          console.warn(err);
          alert('Error has occured check log');
        }).finally(() => {
          console.info('Get request has been made and executed.');
          $('#contactTable').DataTable();
        });
      },
      showModal(id) {
        event.preventDefault();

        Axios.get('http://localhost:80/contact/' + id).then((response) => {
          console.info('Get request succeeded without errors');
          console.log(response.data.data[0]);
          this.selectedContact = response.data.data[0];
        }).catch((err) => {
          console.warn(err);
          alert('Error has occured check log');
        }).finally(() => {
          this.$emit('contactSelected', this.selectedContact);
          $('#contactModal').modal('show');
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