<template>
    <div id="wrapper">
        <sidebar></sidebar>
        <div class="body">

            <div class="backdrop" v-on:click="close()"></div>
             
            <admin-header style="margin-bottom: 3rem"></admin-header>

            <div class="container mb-4">
              <div class="content-wrapper">
                <div class="content mx-auto">

                  <!--  List 1 -->
                  <lists :title="false" :url="url" :headers=headers :columns=columns></lists>


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
import Lists from '../components/Lists'

export default {
  name: 'Admin',
  components: {
    AdminHeader,
    MainFooter,
    Sidebar,
    Lists
  },
  data() {
    return {
      url: "/users",
      headers: ["Name", "Email", "Username", "Phone Number"],
      columns: ["name", "email", "username", "phone"],
    } 
  }
}
</script>
