<template>
    <div id="wrapper">
        <sidebar></sidebar>
        <div class="body">

            <div class="backdrop" v-on:click="close()"></div>
             
            <navbar :background_color="'white'"></navbar>

            <div class="container mb-4">
              <div class="content-wrapper">
                <div class="content mx-auto">
                    
                  <stats class="mb-4 mt-4"></stats>

                  <lists :title="title" :url="url" :headers=headers :columns=columns></lists>

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
  import Lists from '../components/Lists'
  import Stats from '../components/Stats'

  export default {
    name: 'Home',
    components: {
      MainFooter,
      Sidebar,
      Navbar,
      Lists,
      Stats
    }, 
    data() {
      return {
        url: "/users",
        headers: ["Name", "Email", "Username", "Phone Number"],
        columns: ["name", "email", "username", "phone"],
        title: {
          "status": true,
          "title": "Your Data",
          "actions": true
        }
      } 
    }
  }
</script>
