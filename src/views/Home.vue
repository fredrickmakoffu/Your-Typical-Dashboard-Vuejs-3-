<template>
    <div id="wrapper">

        <sidebar :page="'Home'"></sidebar>
      
        <div class="body">
            <div class="backdrop" v-on:click="close()"></div>
             
            <navbar :background_color="'white'"></navbar>

            <div class="container mb-4">
              <div class="content-wrapper">
                <div class="content mx-auto">
                    
                  <stats class="mb-4 mt-4"></stats>

                  <list :title=title></list>

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
  import List from '../components/List'
  import Stats from '../components/Stats'

  export default {
    name: 'Home',
    components: {
      MainFooter,
      Sidebar,
      Navbar,
      List,
      Stats
    }, 
    data() {
      return {
        title: {status: true, title: 'Your Data', actions: true},
      } 
    }
  }
</script>
