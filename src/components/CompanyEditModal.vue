<template>
  <div id="CompanyEdit" class="modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Company: {{ company.name }}</h4>
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true" v-on:click="closeModal()">×</button>
        </div>
        <div class="modal-body p-4">
          <div class="row">
            <div class="col-md-4">
              <div class="form-group">
                <label for="Name" class="control-label">Name</label>
                <input type="text" class="form-control" id="Name" v-model="company.name">
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <label for="address" class="control-label">address</label>
                <input type="text" class="form-control" id="address" v-model="company.address">
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <label for="city" class="control-label">city</label>
                <input type="text" class="form-control" id="city" v-model="company.city">
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-9">
              <div class="form-group">
                <label for="website" class="control-label">website</label>
                <input type="text" class="form-control" id="website" v-model="company.website">
              </div>
            </div>
            <div class="col-md-3">
              <div class="form-group">
                <label for="last_contacted" class="control-label">Last contacted</label>
                <input type="date" class="form-control" id="last_contacted" v-model="company.last_contacted">
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <div class="form-group no-margin">
                <label for="Description" class="control-label">Description</label>
                <textarea class="form-control" id="Description" v-model="company.description"></textarea>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <div class="form-group no-margin">
                <label for="Notitie" class="control-label">Notitie</label>
                <textarea class="form-control" id="Notitie" v-model="company.notes"></textarea>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <div class="form-group no-margin">
                <label for="field-7" class="control-label">Special needs possibility</label><br/>
                <span v-if="company.special_needs" class="badge badge-success">Ja</span>
                <span v-else class="badge badge-danger">Nee</span>
              </div>
            </div>
          </div>

        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary waves-effect" data-dismiss="modal" v-on:click="closeModal()">Close</button>
          <button type="button" class="btn btn-info waves-effect waves-light" v-on:click="SubmitModal()">Save changes</button>
          <button type="button" class="btn btn-danger waves-effect waves-light" v-on:click="Delete()">Delete this company</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from 'axios';
export default {
  name: 'Modal',
  props: ['company'],
  methods: {
    closeModal() {
      event.preventDefault();
      $('#CompanyEdit').modal('hide');
    },
    SubmitModal() {
      console.log(this.company.id)
      Axios.patch('http://localhost:80/company/' + this.company.id, {
        name: this.company.name,
				address: this.company.address,
				description: this.company.description,
				website: this.company.website,
				notes: this.company.notes,
        city: this.company.city,
				last_contacted: this.company.last_contacted,
				special_needs: this.company.special_needs
      }).then((response) => {
        console.log(this.student);
        console.info('Student succesfully updated');
        console.log(response.data);
      }).catch((err) => {
        console.warn(err);
        alert('Error has occured check log');
      }).finally(() => {
        $('#CompanyEdit').modal('hide');
        setTimeout("location.reload(true);", 1);
      });
    },
    Delete() {
      Axios.delete('http://localhost:80/company/' + this.company.id).then((response) => {
        console.log(this.company);
        console.info('Student succesfully deleted');
        console.log(response.data);
      }).catch((err) => {
        console.warn(err);
        alert('Error has occured check log');
      }).finally(() => {
        $('#studentModal').modal('hide');
        setTimeout("location.reload(true);", 1);
      });
    }
  }
}
</script>

<style scoped>
.modal-dialog {
  max-width: 900px;
}
.badge {
  font-size: 14px;
}
</style>