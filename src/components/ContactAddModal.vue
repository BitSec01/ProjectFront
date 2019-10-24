<template>
  <div id="contactAddModal" class="modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Contact: {{ name }} {{ lastname }}</h4>
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true" v-on:click="closeModal()">×</button>
        </div>
        <div class="modal-body p-4">
          <div class="row">

            <div class="col-md-2">
              <div class="form-group">
                <label for="class" class="control-label">Company id</label>
                <input type="text" class="form-control" id="class" v-model="company_id">
              </div>
            </div>
            <div class="col-md-5">
              <div class="form-group">
                <label for="field-1" class="control-label">Name</label>
                <input type="text" class="form-control" id="field-1" v-model="name">
              </div>
            </div>
            <div class="col-md-5">
              <div class="form-group">
                <label for="field-2" class="control-label">Lastname</label>
                <input type="text" class="form-control" id="field-2" v-model="lastname">
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label for="phone" class="control-label">Telefoon</label>
                <input type="text" class="form-control" id="phone" v-model="phone">
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="email" class="control-label">Email</label>
                <input type="text" class="form-control" id="email" v-model="email">
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label for="phone" class="control-label">Laatst gecontacteerd</label>
                <input type="date" class="form-control" id="last_contacted" v-model="last_contacted">
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="email" class="control-label">Gecontacteerd door</label>
                <input type="text" class="form-control" id="contacted_by" v-model="contacted_by">
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <div class="form-group no-margin">
                <label for="field-7" class="control-label">Is begeleider?</label><br/>
                <span v-if="is_supervisor" class="badge badge-success">Ja</span>
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
        lastname: '',
        phone: '',
        email: '',
        company_id: '',
        contacted_by: '',
        is_supervisor: '',
        last_contacted: ''
      }
  },
  methods: {
    closeModal() {
      event.preventDefault();
      $('#contactModal').modal('hide');
    },
    SubmitModal() {
      Axios.post('http://localhost:80/contact/', {
        name: this.name,
        lastname: this.lastname,
        email: this.email,
        phone: this.phone,
        company_id: this.company_id,
        last_contacted: this.last_contacted,
        contacted_by: this.contacted_by,
        is_supervisor: this.is_supervisor
      }).then((response) => {
        console.log(this.contact);
        console.info('Contact succesfully updated');
        console.log(response.data);
      }).catch((err) => {
        console.warn(err);
        alert('Error has occured check log');
      }).finally(() => {
        $('#contactModal').modal('hide');
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