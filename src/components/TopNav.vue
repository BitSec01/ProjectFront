<template>
  <header id="topnav">
    <!-- Topbar Start -->
    <div class="navbar-custom">
      <div class="container-fluid">
        <ul class="list-unstyled topnav-menu float-right mb-0">

          <li class="dropdown notification-list">
            <!-- Mobile menu toggle-->
            <a class="navbar-toggle nav-link">
              <div class="lines">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </a>
            <!-- End mobile menu toggle-->
          </li>

          <li class="d-none d-sm-block">
            <form class="app-search">
              <div class="app-search-box">
                <div class="input-group">
                  <input type="text" class="form-control" placeholder="Search...">
                  <div class="input-group-append">
                    <button class="btn" type="submit">
                      <i class="fe-search"></i>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </li>

          <li class="dropdown notification-list">
            <a class="nav-link dropdown-toggle waves-effect waves-light" data-toggle="dropdown" href="#" role="button"
              aria-haspopup="false" aria-expanded="false">
              <i class="fe-bell noti-icon"></i>
              <span class="badge badge-danger rounded-circle noti-icon-badge">9</span>
            </a>
            <div class="dropdown-menu dropdown-menu-right dropdown-lg" style="">

              <!-- item-->
              <div class="dropdown-item noti-title">
                <h5 class="m-0">
                  <span class="float-right">
                    <a href="" class="text-light">
                      <small>Clear All</small>
                    </a>
                  </span>Notification
                </h5>
              </div>

              <div class="slimScrollDiv" style="position: relative; overflow: hidden; width: auto; height: 509.5px;">
                <div class="slimscroll noti-scroll" style="overflow: hidden; width: auto; height: 509.5px;">

                  <!-- item-->
                  <a href="javascript:void(0);" class="dropdown-item notify-item active">
                    <div class="notify-icon">
                      <img src="images/users/user-1.jpg" class="img-fluid rounded-circle" alt=""> </div>
                    <p class="notify-details">Cristina Pride</p>
                    <p class="text-muted mb-0 user-msg">
                      <small>Hi, How are you? What about our next meeting</small>
                    </p>
                  </a>

                  <!-- item-->
                  <a href="javascript:void(0);" class="dropdown-item notify-item">
                    <div class="notify-icon bg-primary">
                      <i class="mdi mdi-comment-account-outline"></i>
                    </div>
                    <p class="notify-details">Caleb Flakelar commented on Admin
                      <small class="text-muted">1 min ago</small>
                    </p>
                  </a>

                  <!-- item-->
                  <a href="javascript:void(0);" class="dropdown-item notify-item">
                    <div class="notify-icon">
                      <img src="images/users/user-4.jpg" class="img-fluid rounded-circle" alt=""> </div>
                    <p class="notify-details">Karen Robinson</p>
                    <p class="text-muted mb-0 user-msg">
                      <small>Wow ! this admin looks good and awesome design</small>
                    </p>
                  </a>

                  <!-- item-->
                  <a href="javascript:void(0);" class="dropdown-item notify-item">
                    <div class="notify-icon bg-warning">
                      <i class="mdi mdi-account-plus"></i>
                    </div>
                    <p class="notify-details">New user registered.
                      <small class="text-muted">5 hours ago</small>
                    </p>
                  </a>

                  <!-- item-->
                  <a href="javascript:void(0);" class="dropdown-item notify-item">
                    <div class="notify-icon bg-info">
                      <i class="mdi mdi-comment-account-outline"></i>
                    </div>
                    <p class="notify-details">Caleb Flakelar commented on Admin
                      <small class="text-muted">4 days ago</small>
                    </p>
                  </a>

                  <!-- item-->
                  <a href="javascript:void(0);" class="dropdown-item notify-item">
                    <div class="notify-icon bg-secondary">
                      <i class="mdi mdi-heart"></i>
                    </div>
                    <p class="notify-details">Carlos Crouch liked
                      <b>Admin</b>
                      <small class="text-muted">13 days ago</small>
                    </p>
                  </a>
                </div>
                <div class="slimScrollBar"
                  style="background: rgb(158, 165, 171) none repeat scroll 0% 0%; width: 8px; position: absolute; top: 0px; opacity: 0.4; display: block; border-radius: 7px; z-index: 99; right: 1px;">
                </div>
                <div class="slimScrollRail"
                  style="width: 8px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; background: rgb(51, 51, 51) none repeat scroll 0% 0%; opacity: 0.2; z-index: 90; right: 1px;">
                </div>
              </div>

              <!-- All-->
              <a href="javascript:void(0);" class="dropdown-item text-center text-light notify-item notify-all">
                View all
                <i class="fi-arrow-right"></i>
              </a>

            </div>
          </li>

          <li class="dropdown notification-list">
            <a class="nav-link dropdown-toggle nav-user mr-0 waves-effect waves-light" data-toggle="dropdown" href="#"
              role="button" aria-haspopup="false" aria-expanded="false">
              <img src="images/users/user-1.jpg" alt="user-image" class="rounded-circle">
              <span class="pro-user-name ml-1">
                Geneva <i class="mdi mdi-chevron-down"></i>
              </span>
            </a>
            <div class="dropdown-menu dropdown-menu-right profile-dropdown ">
              <!-- item-->
              <div class="dropdown-header noti-title">
                <h6 class="text-overflow m-0">Welcome !</h6>
              </div>

              <!-- item-->
              <a href="javascript:void(0);" class="dropdown-item notify-item">
                <i class="fe-user"></i>
                <span>My Account</span>
              </a>

              <!-- item-->
              <a href="javascript:void(0);" class="dropdown-item notify-item">
                <i class="fe-settings"></i>
                <span>Settings</span>
              </a>

              <!-- item-->
              <a href="javascript:void(0);" class="dropdown-item notify-item">
                <i class="fe-lock"></i>
                <span>Lock Screen</span>
              </a>

              <div class="dropdown-divider"></div>

              <!-- item-->
              <a href="javascript:void(0);" class="dropdown-item notify-item">
                <i class="fe-log-out"></i>
                <span>Logout</span>
              </a>

            </div>
          </li>

          <li class="dropdown notification-list">
            <a href="javascript:void(0);" class="nav-link right-bar-toggle waves-effect">
              <i class="fe-settings noti-icon"></i>
            </a>
          </li>

        </ul>

        <!-- LOGO -->
        <div class="logo-box">
          <a href="index.html" class="logo text-center">
            <span class="logo-lg">
              <img src="images/logo-light.png" alt="" height="18">
              <!-- <span class="logo-lg-text-light">UBold</span> -->
            </span>
            <span class="logo-sm">
              <!-- <span class="logo-sm-text-dark">U</span> -->
              <img src="images/logo-sm.png" alt="" height="24">
            </span>
          </a>
        </div>

        <ul class="list-unstyled topnav-menu topnav-menu-left m-0">

          <li class="dropdown d-none d-lg-block">
            <a class="nav-link dropdown-toggle waves-effect waves-light" data-toggle="dropdown" href="#" role="button"
              aria-haspopup="false" aria-expanded="false">
              Create New
              <i class="mdi mdi-chevron-down"></i>
            </a>
            <div class="dropdown-menu">
              <!-- item-->
              <a href="javascript:void(0);" class="dropdown-item">
                <i class="fe-briefcase mr-1"></i>
                <span>New Projects</span>
              </a>

              <!-- item-->
              <a href="javascript:void(0);" class="dropdown-item">
                <i class="fe-user mr-1"></i>
                <span>Create Users</span>
              </a>

              <!-- item-->
              <a href="javascript:void(0);" class="dropdown-item">
                <i class="fe-bar-chart-line- mr-1"></i>
                <span>Revenue Report</span>
              </a>

              <!-- item-->
              <a href="javascript:void(0);" class="dropdown-item">
                <i class="fe-settings mr-1"></i>
                <span>Settings</span>
              </a>

              <div class="dropdown-divider"></div>

              <!-- item-->
              <a href="javascript:void(0);" class="dropdown-item">
                <i class="fe-headphones mr-1"></i>
                <span>Help &amp; Support</span>
              </a>

            </div>
          </li>

          <li class="dropdown dropdown-mega d-none d-lg-block">
            <a class="nav-link dropdown-toggle waves-effect waves-light" data-toggle="dropdown" href="#" role="button"
              aria-haspopup="false" aria-expanded="false">
              Mega Menu
              <i class="mdi mdi-chevron-down"></i>
            </a>
            <div class="dropdown-menu dropdown-megamenu">
              <div class="row">
                <div class="col-sm-8">

                  <div class="row">
                    <div class="col-md-4">
                      <h5 class="mt-0">UI Components</h5>
                      <ul class="list-unstyled megamenu-list">
                        <li>
                          <a href="javascript:void(0);">Widgets</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">Nestable List</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">Range Sliders</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">Masonry Items</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">Sweet Alerts</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">Treeview Page</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">Tour Page</a>
                        </li>
                      </ul>
                    </div>

                    <div class="col-md-4">
                      <h5 class="mt-0">Applications</h5>
                      <ul class="list-unstyled megamenu-list">
                        <li>
                          <a href="javascript:void(0);">eCommerce Pages</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">CRM Pages</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">Email</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">Calendar</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">Team Contacts</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">Task Board</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">Email Templates</a>
                        </li>
                      </ul>
                    </div>

                    <div class="col-md-4">
                      <h5 class="mt-0">Extra Pages</h5>
                      <ul class="list-unstyled megamenu-list">
                        <li>
                          <a href="javascript:void(0);">Left Sidebar with User</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">Menu Collapsed</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">Small Left Sidebar</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">New Header Style</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">Search Result</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">Gallery Pages</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">Maintenance &amp; Coming Soon</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="text-center mt-3">
                    <h3>Special Discount Sale!</h3>
                    <h4>Save up to 70% off.</h4>
                    <button class="btn btn-primary btn-rounded mt-3">Download Now</button>
                  </div>
                </div>
              </div>

            </div>
          </li>
        </ul>
      </div> <!-- end container-fluid-->
    </div>
    <!-- end Topbar -->

    <div class="topbar-menu">
      <div class="container-fluid">
        <div id="navigation">
          <!-- Navigation Menu-->
          <ul class="navigation-menu">

            <li class="has-submenu">
              <a href="#">
                <i class="fe-airplay"></i>Dashboards <div class="arrow-down"></div></a>
              <ul class="submenu">
                <li>
                  <a href="index.html">Dashboard 1</a>
                </li>
                <li>
                  <a href="dashboard-2.html">Dashboard 2</a>
                </li>
                <li>
                  <a href="dashboard-3.html">Dashboard 3</a>
                </li>
                <li>
                  <a href="dashboard-4.html">Dashboard 4</a>
                </li>
              </ul>
            </li>

            <li class="has-submenu">
              <a href="#">
                <i class="fe-grid"></i>Apps <div class="arrow-down"></div></a>
              <ul class="submenu">
                <li class="has-submenu">
                  <a href="#">CRM <div class="arrow-down"></div></a>
                  <ul class="submenu">
                    <li>
                      <a href="crm-dashboard.html">Dashboard</a>
                    </li>
                    <li>
                      <a href="crm-contacts.html">Contacts</a>
                    </li>
                    <li>
                      <a href="crm-opportunities.html">Opportunities</a>
                    </li>
                    <li>
                      <a href="crm-leads.html">Leads</a>
                    </li>
                    <li>
                      <a href="crm-customers.html">Customers</a>
                    </li>
                  </ul>
                </li>
                <li class="has-submenu">
                  <a href="#">eCommerce <div class="arrow-down"></div></a>
                  <ul class="submenu">
                    <li>
                      <a href="ecommerce-dashboard.html">Dashboard</a>
                    </li>
                    <li>
                      <a href="ecommerce-products.html">Products</a>
                    </li>
                    <li>
                      <a href="ecommerce-prduct-detail.html">Product Detail</a>
                    </li>
                    <li>
                      <a href="ecommerce-product-edit.html">Product Edit</a>
                    </li>
                    <li>
                      <a href="ecommerce-orders.html">Orders</a>
                    </li>
                    <li>
                      <a href="ecommerce-sellers.html">Sellers</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="apps-kanbanboard.html">Kanban Board</a>
                </li>
                <li>
                  <a href="apps-calendar.html">Calendar</a>
                </li>
                <li>
                  <a href="apps-contacts.html">Contacts</a>
                </li>
                <li>
                  <a href="apps-projects.html">Projects</a>
                </li>
                <li>
                  <a href="apps-tickets.html">Tickets</a>
                </li>
                <li>
                  <a href="apps-companies.html">Companies</a>
                </li>
              </ul>
            </li>

            <li class="has-submenu active">
              <a href="#"> <i class="fe-briefcase"></i>Elements <div class="arrow-down"></div></a>
              <ul class="submenu megamenu in">
                <li class="active">
                  <ul class="in">
                    <li class="active">
                      <a href="ui-buttons.html" class="active">Buttons</a>
                    </li>
                    <li>
                      <a href="ui-cards.html">Cards</a>
                    </li>
                    <li>
                      <a href="ui-portlets.html">Portlets</a>
                    </li>
                    <li>
                      <a href="ui-tabs-accordions.html">Tabs &amp; Accordions</a>
                    </li>
                    <li>
                      <a href="ui-modals.html">Modals</a>
                    </li>
                    <li>
                      <a href="ui-progress.html">Progress</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li>
                      <a href="ui-notifications.html">Notifications</a>
                    </li>
                    <li>
                      <a href="ui-images.html">Images</a>
                    </li>
                    <li>
                      <a href="ui-carousel.html">Carousel</a>
                    </li>
                    <li>
                      <a href="ui-video.html">Embed Video</a>
                    </li>
                    <li>
                      <a href="ui-dropdowns.html">Dropdowns</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li>
                      <a href="ui-ribbons.html">Ribbons</a>
                    </li>
                    <li>
                      <a href="ui-tooltips-popovers.html">Tooltips &amp; Popovers</a>
                    </li>
                    <li>
                      <a href="ui-general.html">General UI</a>
                    </li>
                    <li>
                      <a href="ui-typography.html">Typography</a>
                    </li>
                    <li>
                      <a href="ui-grid.html">Grid</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li class="has-submenu">
              <a href="#"> <i class="fe-cpu"></i>Admin UI <div class="arrow-down"></div></a>
              <ul class="submenu">
                <li>
                  <a href="admin-widgets.html">Widgets</a>
                </li>
                <li>
                  <a href="admin-nestable.html">Nestable List</a>
                </li>
                <li>
                  <a href="admin-range-slider.html">Range Slider</a>
                </li>
                <li>
                  <a href="admin-animation.html">Animation</a>
                </li>
                <li>
                  <a href="admin-sweet-alert.html">Sweet Alert</a>
                </li>
                <li>
                  <a href="admin-tour.html">Tour Page</a>
                </li>
                <li>
                  <a href="admin-loading-buttons.html">Loading Buttons</a>
                </li>
              </ul>
            </li>

            <li class="has-submenu">
              <a href="#">
                <i class="fe-layers"></i>Components <div class="arrow-down"></div></a>
              <ul class="submenu">
                <li class="has-submenu">
                  <a href="#">Forms <div class="arrow-down"></div></a>
                  <ul class="submenu">
                    <li>
                      <a href="forms-elements.html">General Elements</a>
                    </li>
                    <li>
                      <a href="forms-advanced.html">Advanced</a>
                    </li>
                    <li>
                      <a href="forms-validation.html">Validation</a>
                    </li>
                    <li>
                      <a href="forms-pickers.html">Pickers</a>
                    </li>
                    <li>
                      <a href="forms-wizard.html">Wizard</a>
                    </li>
                    <li>
                      <a href="forms-masks.html">Masks</a>
                    </li>
                    <li>
                      <a href="forms-summernote.html">Summernote</a>
                    </li>
                    <li>
                      <a href="forms-quilljs.html">Quilljs Editor</a>
                    </li>
                    <li>
                      <a href="forms-file-uploads.html">File Uploads</a>
                    </li>
                    <li>
                      <a href="forms-x-editable.html">X Editable</a>
                    </li>
                    <li>
                      <a href="forms-image-crop.html">Image Crop</a>
                    </li>
                  </ul>
                </li>
                <li class="has-submenu">
                  <a href="#">Tables <div class="arrow-down"></div></a>
                  <ul class="submenu">
                    <li>
                      <a href="tables-basic.html">Basic Tables</a>
                    </li>
                    <li>
                      <a href="tables-datatables.html">Data Tables</a>
                    </li>
                    <li>
                      <a href="tables-editable.html">Editable Tables</a>
                    </li>
                    <li>
                      <a href="tables-responsive.html">Responsive Tables</a>
                    </li>
                    <li>
                      <a href="tables-footables.html">FooTable</a>
                    </li>
                    <li>
                      <a href="tables-bootstrap.html">Bootstrap Tables</a>
                    </li>
                    <li>
                      <a href="tables-tablesaw.html">Tablesaw Tables</a>
                    </li>
                    <li>
                      <a href="tables-jsgrid.html">JsGrid Tables</a>
                    </li>
                  </ul>
                </li>
                <li class="has-submenu">
                  <a href="#">Charts <div class="arrow-down"></div></a>
                  <ul class="submenu">
                    <li>
                      <a href="charts-flot.html">Flot Charts</a>
                    </li>
                    <li>
                      <a href="charts-morris.html">Morris Charts</a>
                    </li>
                    <li>
                      <a href="charts-chartjs.html">Chartjs Charts</a>
                    </li>
                    <li>
                      <a href="charts-peity.html">Peity Charts</a>
                    </li>
                    <li>
                      <a href="charts-chartist.html">Chartist Charts</a>
                    </li>
                    <li>
                      <a href="charts-c3.html">C3 Charts</a>
                    </li>
                    <li>
                      <a href="charts-sparklines.html">Sparklines Charts</a>
                    </li>
                    <li>
                      <a href="charts-knob.html">Jquery Knob Charts</a>
                    </li>
                    <li>
                      <a href="charts-ricksaw.html">Ricksaw Charts</a>
                    </li>
                    <li>
                      <a href="charts-just-gage.html">JustGage Charts</a>
                    </li>
                  </ul>
                </li>
                <li class="has-submenu">
                  <a href="#">Icons <div class="arrow-down"></div></a>
                  <ul class="submenu">
                    <li>
                      <a href="icons-feather.html">Feather Icons</a>
                    </li>
                    <li>
                      <a href="icons-mdi.html">Material Design Icons</a>
                    </li>
                    <li>
                      <a href="icons-dripicons.html">Dripicons</a>
                    </li>
                    <li>
                      <a href="icons-font-awesome.html">Font Awesome</a>
                    </li>
                    <li>
                      <a href="icons-themify.html">Themify</a>
                    </li>
                    <li>
                      <a href="icons-simple-line.html">Simple Line</a>
                    </li>
                    <li>
                      <a href="icons-weather.html">Weather</a>
                    </li>
                  </ul>
                </li>
                <li class="has-submenu">
                  <a href="#">Maps <div class="arrow-down"></div></a>
                  <ul class="submenu">
                    <li>
                      <a href="maps-google.html">Google Maps</a>
                    </li>
                    <li>
                      <a href="maps-vector.html">Vector Maps</a>
                    </li>
                    <li>
                      <a href="maps-mapael.html">Mapael Maps</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li class="has-submenu last-elements">
              <a href="#"> <i class="fe-package"></i>Pages <div class="arrow-down"></div></a>
              <ul class="submenu megamenu">
                <li>
                  <ul>
                    <li>
                      <a href="pages-starter.html">Starter</a>
                    </li>
                    <li>
                      <a href="pages-login.html">Log In</a>
                    </li>
                    <li>
                      <a href="pages-register.html">Register</a>
                    </li>
                    <li>
                      <a href="pages-signin-signup.html">Signin - Signup</a>
                    </li>
                    <li>
                      <a href="pages-recoverpw.html">Recover Password</a>
                    </li>
                    <li>
                      <a href="pages-lock-screen.html">Lock Screen</a>
                    </li>
                    <li>
                      <a href="pages-logout.html">Logout</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li>
                      <a href="pages-confirm-mail.html">Confirm Mail</a>
                    </li>
                    <li>
                      <a href="pages-404.html">Error 404</a>
                    </li>
                    <li>
                      <a href="pages-404-alt.html">Error 404-alt</a>
                    </li>
                    <li>
                      <a href="pages-500.html">Error 500</a>
                    </li>
                    <li>
                      <a href="extras-profile.html">Profile</a>
                    </li>
                    <li>
                      <a href="extras-timeline.html">Timeline</a>
                    </li>
                    <li>
                      <a href="extras-sitemap.html">Sitemap</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li>
                      <a href="extras-invoice.html">Invoice</a>
                    </li>
                    <li>
                      <a href="extras-faqs.html">FAQs</a>
                    </li>
                    <li>
                      <a href="extras-search-results.html">Search Results</a>
                    </li>
                    <li>
                      <a href="extras-pricing.html">Pricing</a>
                    </li>
                    <li>
                      <a href="extras-maintenance.html">Maintenance</a>
                    </li>
                    <li>
                      <a href="extras-coming-soon.html">Coming Soon</a>
                    </li>
                    <li>
                      <a href="extras-gallery.html">Gallery</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li class="has-submenu last-elements">
              <a href="#"> <i class="fe-sidebar"></i>Layouts <div class="arrow-down"></div></a>
              <ul class="submenu">
                <li>
                  <a href="layouts-topbar-light.html">Topbar Light</a>
                </li>
                <li>
                  <a href="layouts-menubar-light.html">Menubar Light</a>
                </li>
                <li>
                  <a href="layouts-center-menu.html">Center Menu</a>
                </li>
                <li>
                  <a href="layouts-topbar-gradient.html">Gradient Topbar</a>
                </li>
                <li>
                  <a href="layouts-menu-drop-light.html">Menu Drop Light</a>
                </li>
                <li>
                  <a href="layouts-preloader.html">Preloader</a>
                </li>
                <li>
                  <a href="layouts-normal-header.html">Unsticky Header</a>
                </li>
                <li>
                  <a href="layouts-boxed.html">Boxed</a>
                </li>
              </ul>
            </li>

          </ul>
          <!-- End navigation menu -->

          <div class="clearfix"></div>
        </div>
        <!-- end #navigation -->
      </div>
      <!-- end container -->
    </div>
    <!-- end navbar-custom -->

  </header>
</template>