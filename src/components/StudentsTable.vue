<template>
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-body">
          <h4 class="header-title">Studenten Tabel</h4>
          <p class="text-muted font-13 mb-4">
            hier kun je alle studenten zien en managen. je kunt sorteren door op de column te klikken en zoeken met de zoekbalk!
          </p>

          <div id="students-datatable_wrapper" class="dataTables_wrapper dt-bootstrap4 no-footer">

            <div class="row">
              <div class="col-sm-12">
                <table id="students-datatable" class="table dt-responsive nowrap dataTable no-footer dtr-inline collapsed"
                  role="grid" aria-describedby="students-datatable_info" style="width:100%;">
                  <thead>
                    <tr role="row">
                      <th class="sorting_asc" tabindex="0" aria-controls="students-datatable" rowspan="1" colspan="1" aria-sort="ascending">ID</th>
                      <th class="sorting" tabindex="0" aria-controls="students-datatable" rowspan="1" colspan="1">Naam</th>
                      <th class="sorting" tabindex="0" aria-controls="students-datatable" rowspan="1" colspan="1">Tussenvoegsel</th>
                      <th class="sorting" tabindex="0" aria-controls="students-datatable" rowspan="1" colspan="1">Achternaam</th>
                      <th class="sorting" tabindex="0" aria-controls="students-datatable" rowspan="1" colspan="1">Straatnaam</th>
                      <th class="sorting" tabindex="0" aria-controls="students-datatable" rowspan="1" colspan="1">Huisnummer</th>
                      <th class="sorting" tabindex="0" aria-controls="students-datatable" rowspan="1" colspan="1">Postcode</th>
                      <th class="sorting" tabindex="0" aria-controls="students-datatable" rowspan="1" colspan="1">Woonplaats</th>
                      <th class="sorting" tabindex="0" aria-controls="students-datatable" rowspan="1" colspan="1">Email</th>
                      <th class="sorting" tabindex="0" aria-controls="students-datatable" rowspan="1" colspan="1">Telefoon</th>
                      <th class="sorting" tabindex="0" aria-controls="students-datatable" rowspan="1" colspan="1">Heeft Stage</th>
                      <th class="sorting" tabindex="0" aria-controls="students-datatable" rowspan="1" colspan="1">Student nummer</th>
                      <th class="sorting" tabindex="0" aria-controls="students-datatable" rowspan="1" colspan="1">Klas</th>
                      <th class="sorting" tabindex="0" aria-controls="students-datatable" rowspan="1" colspan="1">is actief</th>
                    </tr>
                  </thead>
                  <tbody>


                    <!-- <tr role="row" class="odd" v-for="student in students" :key="student.id">
                      <td tabindex="0" class="sorting_1"> {{ student.id }} </td>
                      <td> {{ student.name }} </td>
                      <td> {{ student.middlename }} </td>
                      <td> {{ student.lastname }} </td>
                      <td> {{ student.streetname }} </td>
                      <td> {{ student.house_number }} </td>
                      <td> {{ student.postalcode }} </td>
                      <td> {{ student.city }} </td>
                      <td> {{ student.email }} </td>
                      <td> {{ student.phone }} </td>
                      <td> {{ student.has_internship }} </td>
                      <td> {{ student.student_number }} </td>
                      <td> {{ student.class }} </td>
                      <td> {{ student.is_actief }} </td>
                    </tr> -->

                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div> <!-- end card body-->
      </div> <!-- end card -->
    </div><!-- end col-->
  </div>
  <!-- end row-->
</template>

<script>
import Axios from "axios";

export default {
  name: 'StudentsTable',
  data() {
    return {
      students: []
    };
  },
  mounted() {
    Axios.get("http://localhost:80/students").then(response => {
      console.log(response.data);
      this.students = [...response.data.data];
      $('#students-datatable').DataTable({
        data : this.students,
        columns: [
          { data: "id" },
          { data: "name" },
          { data: "middlename" },
          { data: "lastname" },
          { data: "streetname" },
          { data: "house_number" },
          { data: "postalcode" },
          { data: "city" },
          { data: "email" },
          { data: "phone" },
          { data: "has_internship" },
          { data: "student_number" },
          { data: "class" },
          { data: "is_actief" }
        ]
      });
    }).catch((error) => {
      console.warn(error);
    });
  }
}
</script>
