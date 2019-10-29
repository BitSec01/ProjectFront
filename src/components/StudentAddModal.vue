<template>
  <div id="studentAddModal" class="modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Student Toevoegen: {{ name }} {{ middlename }} {{ lastname }}</h4>
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true" v-on:click="closeModal()">×</button>
        </div>
        <div class="modal-body p-4">
          <div class="row">

            <div class="col-md-3">
              <div class="form-group">
                <label for="class" class="control-label">Klas</label>
                <input type="text" class="form-control" id="class" v-model="Klas">
              </div>
            </div>
            <div class="col-md-3">
              <div class="form-group">
                <label for="field-1" class="control-label">Name</label>
                <input type="text" class="form-control" id="field-1" v-model="name">
              </div>
            </div>
            <div class="col-md-3">
              <div class="form-group">
                <label for="field-2" class="control-label">Middlename</label>
                <input type="text" class="form-control" id="field-2" v-model="middlename">
              </div>
            </div>
            <div class="col-md-3">
              <div class="form-group">
                <label for="field-2" class="control-label">Lastname</label>
                <input type="text" class="form-control" id="field-2" v-model="lastname">
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-4">
              <div class="form-group">
                <label for="streetname" class="control-label">Straatnaam</label>
                <input type="text" class="form-control" id="streetname" v-model="streetname">
              </div>
            </div>
            <div class="col-md-2">
              <div class="form-group">
                <label for="postalcode" class="control-label">Huisnummer</label>
                <input type="text" class="form-control" id="postalcode" v-model="house_number">
              </div>
            </div>
            <div class="col-md-2">
              <div class="form-group">
                <label for="city" class="control-label">Postcode</label>
                <input type="text" class="form-control" id="city" v-model="postalcode">
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <label for="field-3" class="control-label">Plaats</label>
                <input type="text" class="form-control" id="field-3" v-model="city">
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-2">
              <div class="form-group">
                <label for="studentNumber" class="control-label">Studenten #</label>
                <input type="text" class="form-control" id="studentNumber" v-model="student_number">
              </div>
            </div>
            <div class="col-md-4">
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
            <div class="col-md-12">
              <div class="form-group no-margin">
                <label for="field-7" class="control-label">Notitie</label>
                <textarea class="form-control" id="field-7" v-model="note"></textarea>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <div class="form-group no-margin" v-on:click="ChangeInternship">
                <label for="field-7" class="control-label">Heeft Stageplek?</label><br/>
                <span v-if="has_internship" class="badge badge-success" style="user-select:none;">Ja</span>
                <span v-else class="badge badge-danger" style="user-select:none;">Nee</span>
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
        middlename: '',
        lastname: '',
        streetname: '',
        house_number: '',
        postalcode: '',
        city: '',
        email: '',
        student_number: '',
        Klas: '',
        note: '',
        has_internship: false,
        phone: '',
      }
  },
  methods: {
    closeModal() {
      event.preventDefault();
      $('#studentAddModal').modal('hide');
    },
    SubmitModal() {
    event.preventDefault();
      Axios.post('http://localhost:80/student', {
        name: this.name,
        middlename: this.middlename,
        lastname: this.lastname,
        streetname: this.streetname,
        house_number: this.house_number,
        postalcode: this.postalcode,
        city: this.city,
        email: this.email,
        student_number: this.student_number,
        class: this.Klas,
        note: this.note,
        has_internship: this.has_internship,
        phone: this.phone
      }).then((response) => {
        console.log(this.student);
        console.info('Student succesfully Created');
        console.log(response.data);
      }).catch((err) => {
        console.warn(err);
        alert('Error has occured check log');
      }).finally(() => {
        $('#studentAddModal').modal('hide');
        setTimeout("location.reload(true);", 1);
      });
    }, 
    ChangeInternship(event){
      if(this.has_internship == false){
        this.has_internship = true;
      }
      else{
        this.has_internship = false;
      }
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