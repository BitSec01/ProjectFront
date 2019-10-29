<template>
  <div id="studentModal" class="modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Student: {{ student.name }} {{ student.middlename }} {{ student.lastname }}</h4>
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true" v-on:click="closeModal()">×</button>
        </div>
        <div class="modal-body p-4">
          <div class="row">

            <div class="col-md-3">
              <div class="form-group">
                <label for="class" class="control-label">Klas</label>
                <input type="text" class="form-control" id="class" v-model="student.class">
              </div>
            </div>
            <div class="col-md-3">
              <div class="form-group">
                <label for="field-1" class="control-label">Name</label>
                <input type="text" class="form-control" id="field-1" v-model="student.name">
              </div>
            </div>
            <div class="col-md-3">
              <div class="form-group">
                <label for="field-2" class="control-label">Middlename</label>
                <input type="text" class="form-control" id="field-2" v-model="student.middlename">
              </div>
            </div>
            <div class="col-md-3">
              <div class="form-group">
                <label for="field-2" class="control-label">Lastname</label>
                <input type="text" class="form-control" id="field-2" v-model="student.lastname">
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-4">
              <div class="form-group">
                <label for="streetname" class="control-label">Straatnaam</label>
                <input type="text" class="form-control" id="streetname" v-model="student.streetname">
              </div>
            </div>
            <div class="col-md-2">
              <div class="form-group">
                <label for="postalcode" class="control-label">Huisnummer</label>
                <input type="text" class="form-control" id="postalcode" v-model="student.house_number">
              </div>
            </div>
            <div class="col-md-2">
              <div class="form-group">
                <label for="city" class="control-label">Postcode</label>
                <input type="text" class="form-control" id="city" v-model="student.postalcode">
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <label for="field-3" class="control-label">Plaats</label>
                <input type="text" class="form-control" id="field-3" v-model="student.city">
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-2">
              <div class="form-group">
                <label for="studentNumber" class="control-label">Studenten #</label>
                <input type="text" class="form-control" id="studentNumber" v-model="student.student_number">
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <label for="phone" class="control-label">Telefoon</label>
                <input type="text" class="form-control" id="phone" v-model="student.phone">
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="email" class="control-label">Email</label>
                <input type="text" class="form-control" id="email" v-model="student.email">
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <div class="form-group no-margin">
                <label for="field-7" class="control-label">Notitie</label>
                <textarea class="form-control" id="field-7" v-model="student.note"></textarea>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <div class="form-group no-margin">
                <label for="field-7" class="control-label">Heeft Stageplek?</label><br/>
                <span v-if="student.has_internship" class="badge badge-success">Ja</span>
                <span v-else class="badge badge-danger">Nee</span>
              </div>
            </div>
          </div>

        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary waves-effect" data-dismiss="modal" v-on:click="closeModal()">Close</button>
          <button type="button" class="btn btn-info waves-effect waves-light" v-on:click="SubmitModal()">Save changes</button>
          <button type="button" class="btn btn-danger waves-effect waves-light" v-on:click="Delete()">Delete this student</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from 'axios';
export default {
  name: 'Modal',
  props: ['student'],
  methods: {
    closeModal() {
      event.preventDefault();
      $('#studentModal').modal('hide');
    },
    SubmitModal() {
      console.log(this.student.id)
      Axios.patch('http://localhost:80/student/' + this.student.id, {
        name: this.student.name,
        middlename: this.student.middlename,
        lastname: this.student.lastname,
        streetname: this.student.streetname,
        house_number: this.student.house_number,
        postalcode: this.student.postalcode,
        city: this.student.city,
        email: this.student.email,
        student_number: this.student.student_number,
        class: this.student.class,
        note: this.student.note,
        has_internship: this.student.has_internship,
        phone: this.student.phone
      }).then((response) => {
        console.log(this.student);
        console.info('Student succesfully updated');
        console.log(response.data);
      }).catch((err) => {
        console.warn(err);
        alert('Error has occured check log');
      }).finally(() => {
        $('#studentModal').modal('hide');
        setTimeout("location.reload(true);", 1);
      });
    },
    Delete() {
      Axios.delete('http://localhost:80/student/' + this.student.id).then((response) => {
        console.log(this.student);
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