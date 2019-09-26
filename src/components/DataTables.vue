<template>
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-body">
          <h4 class="header-title">Basic Data Table</h4>
          <p class="text-muted font-13 mb-4">
            DataTables has most features enabled by default, so all you need to do to use it with your own tables is
            to call the construction
            function:
            <code>$().DataTable();</code>.
          </p>

          <div id="basic-datatable_wrapper" class="dataTables_wrapper dt-bootstrap4 no-footer">

            <div class="row">
              <div class="col-sm-12">
                <table id="basic-datatable" class="table dt-responsive nowrap dataTable no-footer dtr-inline collapsed"
                  role="grid" aria-describedby="basic-datatable_info">
                  <thead>
                    <tr role="row">
                      <th class="sorting_asc" tabindex="0" aria-controls="basic-datatable" rowspan="1" colspan="1"
                        style="width: 144.4px;" aria-sort="ascending"
                        aria-label="Name: activate to sort column descending">Name</th>
                      <th class="sorting" tabindex="0" aria-controls="basic-datatable" rowspan="1" colspan="1"
                        style="width: 220.4px;" aria-label="Position: activate to sort column ascending">Position
                      </th>
                      <th class="sorting" tabindex="0" aria-controls="basic-datatable" rowspan="1" colspan="1"
                        style="width: 103.4px;" aria-label="Office: activate to sort column ascending">Office</th>
                      <th class="sorting" tabindex="0" aria-controls="basic-datatable" rowspan="1" colspan="1"
                        style="width: 47.4px;" aria-label="Age: activate to sort column ascending">Age</th>
                      <th class="sorting" tabindex="0" aria-controls="basic-datatable" rowspan="1" colspan="1"
                        style="width: 97.4px;" aria-label="Start date: activate to sort column ascending">Start date
                      </th>
                      <th class="sorting" tabindex="0" aria-controls="basic-datatable" rowspan="1" colspan="1"
                        style="width: 86.4px; display: none;" aria-label="Salary: activate to sort column ascending">
                        Salary</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr role="row" class="odd">
                      <td tabindex="0" class="sorting_1">Airi Satou</td>
                      <td>Accountant</td>
                      <td>Tokyo</td>
                      <td>33</td>
                      <td>2008/11/28</td>
                      <td style="display: none;">$162,700</td>
                    </tr>
                    <tr role="row" class="even">
                      <td class="sorting_1" tabindex="0">Angelica Ramos</td>
                      <td>Chief Executive Officer (CEO)</td>
                      <td>London</td>
                      <td>47</td>
                      <td>2009/10/09</td>
                      <td style="display: none;">$1,200,000</td>
                    </tr>
                    <tr role="row" class="odd">
                      <td tabindex="0" class="sorting_1">Ashton Cox</td>
                      <td>Junior Technical Author</td>
                      <td>San Francisco</td>
                      <td>66</td>
                      <td>2009/01/12</td>
                      <td style="display: none;">$86,000</td>
                    </tr>
                    <tr role="row" class="even">
                      <td class="sorting_1" tabindex="0">Bradley Greer</td>
                      <td>Software Engineer</td>
                      <td>London</td>
                      <td>41</td>
                      <td>2012/10/13</td>
                      <td style="display: none;">$132,000</td>
                    </tr>
                    <tr role="row" class="odd">
                      <td class="sorting_1" tabindex="0">Brenden Wagner</td>
                      <td>Software Engineer</td>
                      <td>San Francisco</td>
                      <td>28</td>
                      <td>2011/06/07</td>
                      <td style="display: none;">$206,850</td>
                    </tr>
                    <tr role="row" class="even">
                      <td tabindex="0" class="sorting_1">Brielle Williamson</td>
                      <td>Integration Specialist</td>
                      <td>New York</td>
                      <td>61</td>
                      <td>2012/12/02</td>
                      <td style="display: none;">$372,000</td>
                    </tr>
                    <tr role="row" class="odd">
                      <td class="sorting_1" tabindex="0">Bruno Nash</td>
                      <td>Software Engineer</td>
                      <td>London</td>
                      <td>38</td>
                      <td>2011/05/03</td>
                      <td style="display: none;">$163,500</td>
                    </tr>
                    <tr role="row" class="even">
                      <td class="sorting_1" tabindex="0">Caesar Vance</td>
                      <td>Pre-Sales Support</td>
                      <td>New York</td>
                      <td>21</td>
                      <td>2011/12/12</td>
                      <td style="display: none;">$106,450</td>
                    </tr>
                    <tr role="row" class="odd">
                      <td class="sorting_1" tabindex="0">Cara Stevens</td>
                      <td>Sales Assistant</td>
                      <td>New York</td>
                      <td>46</td>
                      <td>2011/12/06</td>
                      <td style="display: none;">$145,600</td>
                    </tr>
                    <tr role="row" class="even">
                      <td tabindex="0" class="sorting_1">Cedric Kelly</td>
                      <td>Senior Javascript Developer</td>
                      <td>Edinburgh</td>
                      <td>22</td>
                      <td>2012/03/29</td>
                      <td style="display: none;">$433,060</td>
                    </tr>
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
