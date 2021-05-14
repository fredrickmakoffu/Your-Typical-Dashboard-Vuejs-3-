<template>
    <div id="wrapper">
        <div class="body">
            <div class="backdrop" v-on:click="close()"></div>
             
            <navbar :background_color="'default'"></navbar>

            <small-admin-header style="margin-bottom: 3rem"></small-admin-header>
            
            <div class="container">
              <div class="content-wrapper">
                <div class="content mx-auto">
                  <section-title class="mb-4"></section-title>

                  <div class="row mt-4 gx-2">
                    <div class="col-lg-3 col-md-6 col-sm-6 mb-2">
                        <div class="card stats primary">    
                            <div class="card-body">
                                <div class="d-flex">
                                    <span>
                                        <h4 class="fw-bold">{{ formatNumber('236000')}}</h4>
                                        <p class="card-icon-title">Subscribers</p>
                                    </span>
                                    
                                    <font-awesome-icon class="icon card-icon" :icon="['fa', 'users']" /> 
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 col-sm-6 mb-2">
                        <div class="card stats success">
                            <div class="card-body">
                                <div class="d-flex">
                                    <span>
                                        <h4 class="fw-bold">{{ formatNumber('67500')}}</h4>
                                        <p class="card-icon-title">Active Accounts</p>
                                    </span>
                                    
                                    <font-awesome-icon class="icon card-icon" :icon="['fa', 'lightbulb']" /> 
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 col-sm-6 mb-2">
                        <div class="card stats warning">
                            <div class="card-body">
                                <div class="d-flex">
                                    <span>
                                        <h4 class="fw-bold">{{ formatNumber('5000')}}</h4>
                                        <p class="card-icon-title">Expired</p>
                                    </span>
                                    
                                    <font-awesome-icon class="icon card-icon" :icon="['fa', 'exclamation-triangle']" /> 
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-lg-3 col-md-6 col-sm-6 mb-2">
                        <div class="card stats danger">
                            <div class="card-body">
                                <div class="d-flex">
                                    <span>
                                        <h4 class="fw-bold">{{ formatNumber('600')}}</h4>
                                        <p class="card-icon-title">Cancelled</p>
                                    </span>
                                    
                                    <font-awesome-icon class="icon card-icon" :icon="['fa', 'times-circle']" /> 
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>

                  <div class="row mt-4">
                    <!-- new subscribers by timeline -->
                    <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div class="card stats bg-light-grey mb-4">
                            <div class="card-body">
                                <h6 class="mt-4 mb-0 text-dark fw-bold">New Subscribers</h6>
                                <small class="text-muted mt-0" style="margin-bottom: 1.5rem">Annual Subscriber registrations by Time</small>
                                <canvas id="subscribers"></canvas>
                            </div>
                        </div>
                    </div>

                    <!-- new renewals by timeline -->
                    <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div class="card stats bg-light-grey mb-4">
                            <div class="card-body">
                                <h6 class="mt-4 mb-0 text-dark fw-bold">New Renewals</h6>
                                <small class="text-muted mt-0" style="margin-bottom: 1.5rem">Annual Subscriber renewals by Time</small>
                                <canvas id="renewals"></canvas>
                            </div>
                        </div>
                    </div>

                    <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div class="card stats bg-light-grey mb-4">
                            <div class="card-body">
                                <h6 class="mt-4 mb-0 text-dark fw-bold">Subscribers by Postal Codes</h6>
                                <small class="text-muted mt-0" style="margin-bottom: 1.5rem">See division of subscribers by postal codes.</small>
                                <canvas id="postal_codes"></canvas>
                            </div>
                        </div>
                    </div>

                    <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div class="card stats bg-light-grey mb-4">
                            <div class="card-body">
                                <h6 class="mt-4 mb-0 text-dark fw-bold">Subscribers by Gender</h6>
                                <small class="text-muted mt-0" style="margin-bottom: 1.5rem">See division of subscribers by gender.</small>
                                <canvas id="gender"></canvas>
                            </div>
                        </div>
                    </div>

                    <!-- new renewals by timeline -->
                    <div class="col-xxl-8 col-xl-8 col-lg-6 col-md-12 col-sm-12">
                        <div class="card stats bg-light-grey mb-4">
                            <div class="card-body">
                                <h6 class="mt-4 mb-0 text-dark fw-bold">New Stuff</h6>
                                <small class="text-muted mt-0" style="margin-bottom: 1.5rem">Annual Stuff by Time</small>
                                <canvas id="stuff"></canvas>
                            </div>
                        </div>
                    </div>

                    <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-12 col-sm-12">
                        <div class="card stats bg-light-grey mb-4">
                            <div class="card-body">
                                <h6 class="mt-4 mb-0 text-dark fw-bold">New Stuff</h6>
                                <small class="text-muted mt-0" style="margin-bottom: 1.5rem">Annual Stuff by Time</small>
                                <table class="table table-striped mt-4">
                                    <thead class="thead-dark">
                                        <th>#</th>
                                        <th>Stuff</th>
                                        <th>Ideas</th>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Stuff 1</td>
                                            <td>Sell to everyone</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Stuff 2</td>
                                            <td>Sell to some people</td>
                                        </tr>

                                        <tr>
                                            <td>3</td>
                                            <td>Stuff 3</td>
                                            <td>Sell to little people</td>
                                        </tr>

                                        <tr>
                                            <td>4</td>
                                            <td>Stuff 4</td>
                                            <td>Sell later</td>
                                        </tr>

                                        <tr>
                                            <td>5</td>
                                            <td>Stuff 5</td>
                                            <td>Do not sell</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <button class="btn btn-primary btn-sm rounded-pill">
                                    <span class="ms-1 me-1">
                                        View more <font-awesome-icon class="icon" :icon="['fa', 'plus']" /> 
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>              
              </div>
            </div>
            
            <main-footer></main-footer>
        </div>
    </div>
</template>

<style lang="scss" scoped>
  @import '../assets/scss/layout/_stats.scss';

  .body {
    padding-left: 0!important;
  }

</style>

<script>
  import Chart from 'chart.js';
  import MainFooter from '../components/Footer'
  import Navbar from '../components/Navbar'
  import SmallAdminHeader from '../components/SmallAdminHeader'
  import SectionTitle from '../components/SectionTitle.vue'
  
  export default {
    name: 'Admin',  
    components: {
      SmallAdminHeader,
      MainFooter,
      Navbar,
      SectionTitle,
    },
    methods: {
      formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
      },
      subscribers() {
        var ctx = document.getElementById('subscribers').getContext('2d');
        var data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 
            'September', 'October', 'November', 'December'],
            datasets: [{
                label: 'New Subscribers',
                data: [12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderWidth: 1
            }]
        }

        var options =  {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
        var type = 'bar'
        this.chartData(ctx, data, options, type)
      },
      renewals() {
        var ctx = document.getElementById('renewals').getContext('2d');
        var data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 
            'September', 'October', 'November', 'December'],
            datasets: [{
                label: 'New Subscribers',
                data: [12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderWidth: 1
            }]
        }

        var options =  {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
        var type = 'line'
        this.chartData(ctx, data, options, type)
      },
      postal_codes() {
        var ctx = document.getElementById('postal_codes').getContext('2d');
        var data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 
            'September', 'October', 'November', 'December'],
            datasets: [{
                label: 'New Subscribers',
                data: [12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderWidth: 1
            }]
        }

        var options =  {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }

        var type = 'pie'
        this.chartData(ctx, data, options, type)
      },
      stuff() {
        var ctx = document.getElementById('stuff').getContext('2d');
        var data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 
            'September', 'October', 'November', 'December'],
            datasets: [{
                label: 'New Subscribers',
                data: [12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderWidth: 1
            }]
        }

        var options =  {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }

        var type = 'line'
        this.chartData(ctx, data, options, type)
      },
      gender() {
        var ctx = document.getElementById('gender').getContext('2d');
        var data = {
            labels: ['Women', 'Men'],
            datasets: [{
                label: 'Subscribers by Gender',
                data: [12, 19],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)'
                ],
                borderWidth: 1
            }]
        }

        var options =  {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }

        var type = 'pie'
        this.chartData(ctx, data, options, type)
      },
      chartData(ctx, data, options, type) {
        new Chart(ctx, {
            type: type,
            data: data,
            options: options
        });
      }
    },
    mounted() {
      this.subscribers()
      this.renewals()
      this.postal_codes()
      this.gender()
      this.stuff()
    }
  }
</script>
