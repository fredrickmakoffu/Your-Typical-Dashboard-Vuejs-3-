<template>
    <div id="wrapper">
        <sidebar></sidebar>
        <div class="body">

            <div class="backdrop" v-on:click="close()"></div>
             
            <navbar :background_color="'default'"></navbar>

            <small-admin-header style="margin-bottom: 3rem"></small-admin-header>

            
            
            <div class="container">
              <div class="content-wrapper">
                <div class="content mx-auto">
                  <section-title class="mb-4"></section-title>

                  <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 mt-3">
                      <canvas id="other-chart"></canvas>
                    </div>

                    <div class="col-lg-6 col-md-6 col-sm-12 mt-3">
                      <canvas id="planet-chart"></canvas>
                    </div>

                    <div class="col-lg-6 col-md-6 col-sm-12 mt-3">
                      <canvas id="line-chart"></canvas>
                    </div>
                  </div>
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
import SmallAdminHeader from '../components/SmallAdminHeader'
import Chart from 'chart.js';
import chartData from '../assets/js/chart-data'
import SectionTitle from '../components/SectionTitle.vue'

export default {
  name: 'Admin',  
  components: {
    SmallAdminHeader,
    MainFooter,
    Sidebar,
    Navbar,
    SectionTitle
  },
  mounted() {
    this.createChart('planet-chart', this.chartData, 'bar');
    this.createChart('line-chart', this.chartData, 'line');
    this.createChart('other-chart', this.chartData, 'line');
  },
  data() {
    return {
      chartData: chartData,

    }
  },
  methods: {
     createChart(chartId, chartData, type) {
      const ctx = document.getElementById(chartId);
      new Chart(ctx, {
        type: type,
        data: chartData.data,
        options: chartData.options,
      });
    }
  }
}
</script>
