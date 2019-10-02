<template>
  <header id="topnav">
    <!-- Topbar Start -->
    <div class="navbar-custom">
      <div class="container-fluid">
        <ul class="list-unstyled topnav-menu float-right mb-0">
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
              <a href="javascript:void(0);" class="dropdown-item notify-item">
                <i class="fe-user"></i>
                <span>Mijn Account</span>
              </a>

              <!-- item-->
              <a href="javascript:void(0);" class="dropdown-item notify-item">
                <i class="fe-settings"></i>
                <span>Instellingen</span>
              </a>

              <div class="dropdown-divider"></div>

              <!-- item-->
              <a href="javascript:void(0);" class="dropdown-item notify-item">
                <i class="fe-log-out"></i>
                <span>Uitloggen</span>
              </a>

            </div>
          </li>
        </ul>

        <!-- LOGO -->
        <div class="logo-box">
          <a href="/" class="logo text-center">
            <span class="logo-lg">
              <h1 class="display-4">BPV</h1>
            </span>
          </a>
        </div>
      </div> <!-- end container-fluid-->
    </div>
    <!-- end Topbar -->

    <div class="topbar-menu">
      <div class="container-fluid">
        <div id="navigation">
          <!-- Navigation Menu-->
          <ul class="navigation-menu">
            <li>
              <router-link to="/"><a href="javascript: void(0);"><i class="fe-home"></i>Home </a></router-link>
            </li>

            <li class="has-submenu">
              <a href="/students">
                <i class="fe-users"></i>Studenten <div class="arrow-down"></div></a>
              <ul class="submenu">
                <li>
                  <router-link to="/students"><i class="fe-briefcase"></i> Studenten lijst</router-link>
                </li>
                <li>
                  <router-link to="/students-map"><i class="fe-map"></i> Studenten kaart</router-link>
                </li>
              </ul>
            </li>

            <li class="has-submenu">
              <a href="/companies">
                <i class="fe-grid"></i>Bedrijven <div class="arrow-down"></div></a>
              <ul class="submenu">
                <li>
                  <router-link to="/companies"><i class="fe-briefcase"></i> Bedrijven lijst</router-link>
                </li>
                <li>
                  <router-link to="/companies-map"><i class="fe-map"></i> Bedrijven kaart</router-link>
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

<style scoped>
  li a {
    color: white;
  }
</style>