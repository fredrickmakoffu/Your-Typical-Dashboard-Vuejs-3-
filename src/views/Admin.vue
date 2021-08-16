<template>
    <div id="wrapper">
        <sidebar :page="'Admin'" :sidebar_data=sidebar_data></sidebar>
        <div class="body">
            <div class="backdrop" v-on:click="close()"></div>
             
            <admin-header :title="'Manage Users'" :tagline="'All your user controls, in one place.'" style="margin-bottom: 3rem"></admin-header>

            <div class="container mb-4">
              <div class="content-wrapper">
                <div class="content mx-auto">

                  <!--  List 1 -->
                  <auto-list :title=title :url="url" :headers=headers :columns=columns></auto-list>

                </div>                                          
              </div>
             </div>
            
            <main-footer></main-footer>
        </div>
    </div>
</template>

<script>
import MainFooter from '../components/Footer'
import Sidebar from '../components/Sidebar'
import AdminHeader from '../components/AdminHeader'
import AutoList from '../components/AutoList'

export default {
  name: 'Admin',
  components: {
    AdminHeader,
    MainFooter,
    Sidebar,
    AutoList
  },
  data() {
    return {
      url: "/users",
      title: {status: false},
      headers: ["Name", "Email", "Username", "Phone Number"],
      columns: ["name", "email", "username", "phone"],
      sidebar_data: [
        {title: 'Home', link: '', if_children: false, icon: 'home', modal: false},
        {title: 'Administration', icon: 'crown', modal: false, if_children: true, children: [
            {child_title: 'Manage Users', child_link: 'admin', child_icon: 'angle-right', child_modal: false},
            {child_title: 'My Accounts', child_link: 'profile', child_icon: 'angle-right', child_modal: true},
        ]},
        {title: 'Dashboard', link: 'dashboard', if_children: false, icon: 'hammer', modal: false},
        {title: 'My Account', link: 'profile', if_children: false, icon: 'user', modal: true},
        {title: 'Guides', link: 'guides', if_children: false, icon: 'info-circle', modal: false},
      ] 
    } 
  },

}
</script>
