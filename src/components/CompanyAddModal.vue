<template>
  <div id="companyAddModal" class="modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Company: {{ name }}</h4>
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true" v-on:click="closeModal()">×</button>
        </div>
        <div class="modal-body p-4">
          <div class="row">
            <div class="col-md-4">
              <div class="form-group">
                <label for="Name" class="control-label">Name</label>
                <input type="text" class="form-control" id="Name" v-model="name">
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <label for="address" class="control-label">address</label>
                <input type="text" class="form-control" id="address" v-model="address">
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <label for="city" class="control-label">city</label>
                <input type="text" class="form-control" id="city" v-model="city">
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-9">
              <div class="form-group">
                <label for="website" class="control-label">website</label>
                <input type="text" class="form-control" id="website" v-model="website">
              </div>
            </div>
            <div class="col-md-3">
              <div class="form-group">
                <label for="last_contacted" class="control-label">Last contacted</label>
                <input type="date" class="form-control" id="last_contacted" v-model="last_contacted">
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <div class="form-group no-margin">
                <label for="Description" class="control-label">Description</label>
                <textarea class="form-control" id="Description" v-model="description"></textarea>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <div class="form-group no-margin">
                <label for="Notitie" class="control-label">Notitie</label>
                <textarea class="form-control" id="Notitie" v-model="notes"></textarea>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <div class="form-group no-margin">
                <label for="field-7" class="control-label">Special needs possibility</label><br/>
                <span v-if="special_needs" class="badge badge-success">Ja</span>
                <span v-else class="badge badge-danger">Nee</span>
              </div>
            </div>
          </div>

        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary waves-effect" data-dismiss="modal" v-on:click="closeModal()">Close</button>
          <button type="button" class="btn btn-info waves-effect waves-light" v-on:click="SubmitModal()">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from 'axios';
export default {
  name: 'Modal',
  data: function() {
      return {
        name: '',
        address: '',
        city: '',
        email: '',
        description: '',
        website: '',
        notes: '',
        last_contacted: '',
        special_needs: ''
      }
  },
  methods: {
    closeModal() {
      event.preventDefault();
      $('#studentAddModal').modal('hide');
    },
    SubmitModal() {
    event.preventDefault();
      Axios.post('http://localhost:80/company', {
        name: this.name,
				address: this.address,
				description: this.description,
				website: this.website,
				notes: this.notes,
        city: this.city,
				last_contacted: this.last_contacted,
				special_needs: this.special_needs
      }).then((response) => {
        console.log(this.student);
        console.info('Company succesfully Created');
        console.log(response.data);
      }).catch((err) => {
        console.warn(err);
        alert('Error has occured check log');
      })/*.finally(() => {
        $('#companyAddModal').modal('hide');
        setTimeout("location.reload(true);", 1);
      });*/
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