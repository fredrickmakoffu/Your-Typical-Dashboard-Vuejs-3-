<template>
    <div id="wrapper">
        <sidebar></sidebar>
        <div class="body">

            <div class="backdrop" v-on:click="close()"></div>
             
            <navbar :background_color="'primary'"></navbar>

            <admin-header style="margin-bottom: 3rem"></admin-header>

            <div class="container">
              <div class="content-wrapper">
                <div class="content mx-auto">
                  <lists :title="false"></lists>
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
import Navbar from '../components/Navbar'
import AdminHeader from '../components/AdminHeader'
import Lists from '../components/Lists'

export default {
  name: 'Admin',
    components: {
      AdminHeader,
      MainFooter,
      Sidebar,
      Navbar,
      Lists
    }
}
</script>
