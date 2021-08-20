<template>
    <!-- Aggregates -->
    <div class="row gx-2">
        <!-- <div class="col-lg-3 col-md-6 col-sm-6 mb-2">
            <div class="card stats primary">    
                <div class="card-body">
                    <div class="d-flex">
                        <span>
                            <h4 class="fw-bold">{{ formatNumber('2540')}}</h4>
                            <p class="card-icon-title">Clients</p>
                        </span>
                        
                        <font-awesome-icon class="icon card-icon ms-auto" :icon="['fa', 'users']" /> 
                    </div>  2540
                </div>
            </div>
        </div>

        <div class="col-lg-3 col-md-6 col-sm-6 mb-2">
            <div class="card stats success">
                <div class="card-body">
                    <div class="d-flex">
                        <span>
                            <h4 class="fw-bold">$ {{ formatNumber('125750')}}</h4>
                            <p class="card-icon-title">Active Accounts</p>
                        </span>
                        
                        <font-awesome-icon class="icon card-icon ms-auto" :icon="['fa', 'dollar-sign']" /> 
                    </div>
                </div>
            </div>
        </div>

        <div class="col-lg-3 col-md-6 col-sm-6 mb-2">
            <div class="card stats info ">
                <div class="card-body">
                    <div class="d-flex">
                        <span>
                            <h4 class="fw-bold">$ {{ formatNumber('5000')}}</h4>
                            <p class="card-icon-title">Profit Earned</p>
                        </span>
                        
                        <font-awesome-icon class="icon card-icon ms-auto" :icon="['fa', 'exclamation-triangle']" /> 
                    </div>
                </div>
            </div>
        </div>
        
        <div class="col-lg-3 col-md-6 col-sm-6 mb-2">
            <div class="card stats danger">
                <div class="card-body">
                    <div class="d-flex">
                        <span>
                            <h4 class="fw-bold">$ {{ formatNumber('600')}}</h4>
                            <p class="card-icon-title">Expenses</p>
                        </span>
                        
                        <font-awesome-icon class="icon card-icon ms-auto" :icon="['fa', 'times-circle']" /> 
                    </div>
                </div>
            </div>
        </div> -->

        <auto-stats :stats_data=stats_data></auto-stats>
    </div>

    <!-- Graphs -->
    <div class="row mt-4">
        <!-- revenues in line graph -->
        <div class="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12">
            <div class="card stats bg-light-grey mb-4">
                <div class="card-body">
                    <h6 class="mb-0 text-dark fw-bold">Revenues</h6>
                    <small class="text-muted mt-0" style="margin-bottom: 1.5rem">Revenues across 2020</small>
                    <canvas id="revenues"></canvas>
                </div>
            </div>
        </div>
        
        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12">
            <div class="card stats bg-light-grey mb-4">
                <div class="card-body">
                    <h6 class="mb-0 text-dark fw-bold">Revenues from different Locations</h6>
                    <small class="text-muted mt-0" style="margin-bottom: 1.5rem">See division of revenues by locations.</small>
                    <canvas id="locations"></canvas>
                </div>
            </div>
        </div>
    
        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12">
            <div class="card stats bg-light-grey mb-4">
                <div class="card-body">
                    <h6 class="mb-0 text-dark fw-bold">Subscribers by Gender</h6>
                    <small class="text-muted mt-0" style="margin-bottom: 1.5rem">See division of subscribers by gender.</small>
                    <canvas id="gender"></canvas>
                </div>
            </div>
        </div>

        <!-- new clients bar graph -->
        <div class="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12">
            <div class="card stats bg-light-grey mb-4">
                <div class="card-body">
                    <h6 class="mb-0 text-dark fw-bold">New Clients</h6>
                    <small class="text-muted mt-0" style="margin-bottom: 1.5rem">Acquired Clients Across 2020</small>
                    <canvas id="subscribers"></canvas>
                </div>
            </div>
        </div>

        <!-- new renewals by timeline -->
        <div class="col-xxl-8 col-xl-8 col-lg-6 col-md-12 col-sm-12">
            <div class="card stats bg-light-grey mb-4">
                <div class="card-body">
                    <h6 class="mb-0 text-dark fw-bold">Top Clients</h6>
                    <small class="text-muted mt-0" style="margin-bottom: 1.5rem">Clients who brought in most revenue</small>
                    <canvas id="clients"></canvas>
                </div>
            </div>
        </div>

        <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-12 col-sm-12">
            <div class="card stats bg-light-grey mb-4">
                <div class="card-body">
                    <h6 class="mb-0 text-dark fw-bold">Top Sales-persons</h6>
                    <small class="text-muted mt-0" style="margin-bottom: 1.5rem">The people who bring 'em in!</small>
                    <table class="table table-striped mt-4">
                        <thead class="thead-dark">
                            <th>#</th>
                            <th>Name</th>
                            <th>Top Client</th>
                        </thead>

                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Leanne Graham</td>
                                <td>119</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Ervin Howell</td>
                                <td>102</td>
                            </tr>

                            <tr>
                                <td>3</td>
                                <td>Clementine Bauch</td>
                                <td>98</td>
                            </tr>

                            <tr>
                                <td>4</td>
                                <td>Chelsey Dietrich</td>
                                <td>98</td>
                            </tr>

                            <tr>
                                <td>5</td>
                                <td>Mrs. Dennis Schulist</td>
                                <td>77</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Kurtis Weissnat</td>
                                <td>63</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>Nicholas Runolfsdottir V</td>
                                <td>61</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>Glenna Reichert</td>
                                <td>58</td>
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
</template>

<style lang="scss" scoped>
  @import '../../assets/scss/layout/_stats.scss';

</style>

<script>
import Chart from 'chart.js';
import AutoStats from '../AutoStats'

export default {
    name: 'SalesDashboard',
    data() {
        return {
            stats_data: [
                { title: "Clients", value: "2540", icon: "users", color: "primary"},
                { title: "Active Accounts", value: "125750", icon: "dollar-sign", color: "success"},
                { title: "Profit Earned", value: "5000", icon: "exclamation-triangle", color: "warning"},
                { title: "Expenses", value: "600", icon: "times-circle", color: "danger"},
            ]
        }
    },
    mounted() {
      this.subscribers()
      this.revenues()
      this.locations()
      this.gender()
      this.clients()
    },
    components:{
        AutoStats
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
                label: 'New Clients',
                data: [52, 60, 90, 110, 139, 80, 92, 100, 220, 180, 180, 103],
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
      revenues() {
        var ctx = document.getElementById('revenues').getContext('2d');
        var data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 
            'September', 'October', 'November', 'December'],
            datasets: [{
                label: 'Revenues',
                data: [12020, 19220, 3200, 5500, 2802, 16000, 8200, 13450, 2340, 15100, 9980, 13020],
                borderColor: 'rgb(75, 192, 192)',
                fill: false,
                borderWidth: 3
            }]
        }

        var options =  {
            responsive: true,
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
      locations() {
        var ctx = document.getElementById('locations').getContext('2d');
        var data = {
            labels: ['Europe', 'Africa', 'Asia', 'North-America', 'South-America'],
            datasets: [{
                label: 'Locations',
                data: [12000, 49200, 33000, 55000, 25000],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)'
                ],
                borderWidth: 1
            }]
        }

        var options =  {
            responsive: true,   
            scales: {
                x: {
                    display: false
                },
                y: {
                    display: false
                }
            }
        }

        var type = 'pie'
        this.chartData(ctx, data, options, type)
      },
      clients() {
        var ctx = document.getElementById('clients').getContext('2d');
        var data = {
            labels: ['Evil-Corp', 'Absa', 'Zaibatsu Corporation', 'ADA', 'Usajili'],
            datasets: [{
                label: 'Top Clients',
                data: [25500, 22340, 20000, 15400, 12000],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)'
                ],
                borderWidth: 1
            }]
        }

        var options =  {
            indexAxis: 'y',
            responsive: true,
            scales: {
                yAxes: [{
                    stacked: true,
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
        var type = 'bar'
        this.chartData(ctx, data, options, type)
      },
      gender() {
        var ctx = document.getElementById('gender').getContext('2d');
        var data = {
            labels: ['Under 18', '18-25', '25-30', '30-35' ,'35-45', '45-55', '55+'],
            datasets: [{
                label: 'Subscribers by Gender',
                data: [120, 890, 760, 1020, 650, 490, 200],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
                ],
                borderColor: [
                    'rgba(255, 255, 255, 0.2)',
                    'rgba(255, 255, 255, 0.2)',
                    'rgba(255, 255, 255, 0.2)',
                    'rgba(255, 255, 255, 0.2)',
                    'rgba(255, 255, 255, 0.2)',
                    'rgba(255, 255, 255, 0.2)',
                    'rgba(255, 255, 255, 0.2)',
                ],
                borderWidth: 2
            }]
        }

        var options =  {
            scales: {
                x: {
                    display: false
                },
                y: {
                    display: false
                }
            }
        }

        var type = 'doughnut'
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
}
</script>