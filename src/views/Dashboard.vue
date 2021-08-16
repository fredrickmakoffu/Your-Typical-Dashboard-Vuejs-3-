<template>
    <div id="wrapper">  
        <div class="body">
            <div class="backdrop" v-on:click="close()"></div>
            
            <small-admin-header v-model:screen='screen' :title="'Your Dashboard'" :tagline="'All about your business, in one place'" v-model:all_screens=all_screens></small-admin-header>

            <breadcrumbs :breadcrumbs_data=breadcrumbs_data class="breadcrumbs-border-bottom"></breadcrumbs>
            
            <div class="container">
              <div class="content-wrapper">
                <div class="content mx-auto">

                  <section-title></section-title>

                  <sales-dashboard v-if="screen == 1"></sales-dashboard>

                  <revenue-dashboard v-if="screen == 2"></revenue-dashboard>
                </div>              
              </div>
            </div>
            
            <main-footer></main-footer>
        </div>
    </div>
</template>

<style lang="scss" scoped>
  @import '../assets/scss/layout/_stats.scss';
  @import '../assets/scss/layout/_breadcrumbs.scss';

  .body {
    padding-left: 0!important;
  }

</style>

<script>
  import MainFooter from '../components/Footer';
  import SmallAdminHeader from '../components/SmallAdminHeader'
  import SectionTitle from '../components/SectionTitle';
  import SalesDashboard from '../components/Dashboard/Sales';
  import RevenueDashboard from '../components/Dashboard/Revenue';
  import Breadcrumbs from '../components/Breadcrumbs'
  
  export default {
    name: 'Dashboard',  
    data() {
      return {
        screen: 1,
        all_screens: [
          {title: 'Sales', screen: 1},
          {title: 'Dashboard', screen: 2},
        ],
        breadcrumbs_data: [
            {title: 'Home', link: '', active: false},
            {title: 'Dashboard', active: true},
        ]                  
      }
    },
    components: {
      SmallAdminHeader,
      MainFooter,
      SectionTitle,
      SalesDashboard,
      RevenueDashboard,
      Breadcrumbs
    }
  }
</script>
