<template>
    <!-- Aggregates -->
    <div class="row gx-2">
        <div class="col-lg-3 col-md-6 col-sm-6 mb-2">
            <div class="card stats primary">    
                <div class="card-body">
                    <div class="d-flex">
                        <span>
                            <h4 class="fw-bold">{{ formatNumber('1036')}}</h4>
                            <p class="card-icon-title">Leads</p>
                        </span>
                        
                        <font-awesome-icon class="icon card-icon ms-auto" :icon="['fa', 'users']" /> 
                    </div>
                </div>
            </div>
        </div>

        <div class="col-lg-3 col-md-6 col-sm-6 mb-2">
            <div class="card stats success">
                <div class="card-body">
                    <div class="d-flex">
                        <span>
                            <h4 class="fw-bold">{{ formatNumber('857')}}</h4>
                            <p class="card-icon-title">Conversions</p>
                        </span>
                        
                        <font-awesome-icon class="icon card-icon ms-auto" :icon="['fa', 'lightbulb']" /> 
                    </div>
                </div>
            </div>
        </div>

        <div class="col-lg-3 col-md-6 col-sm-6 mb-2">
            <div class="card stats warning">
                <div class="card-body">
                    <div class="d-flex">
                        <span>
                            <h4 class="fw-bold">{{ formatNumber('103')}}</h4>
                            <p class="card-icon-title">In Progress</p>
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
                            <h4 class="fw-bold">{{ formatNumber('76')}}</h4>
                            <p class="card-icon-title">Failed Leads</p>
                        </span>
                        
                        <font-awesome-icon class="icon card-icon ms-auto" :icon="['fa', 'times-circle']" /> 
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Graphs -->
    <div class="row mt-4">
        <!-- conversion types on pie graph -->
        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12">
            <div class="card stats bg-light-grey mb-4 pt-0">
                <div class="card-body">
                    <h6 class="mb-0 text-dark fw-bold">Leads by Type</h6>
                    <small class="text-muted mt-0" style="margin-bottom: 1.5rem">See division of leads by conversion stage.</small>
                    <canvas id="leadsOnPieChart"></canvas>
                </div>
            </div>
        </div>

        <!-- new leads on timeline -->
        <div class="col-xxl-8 col-xl-8 col-lg-6 col-md-12 col-sm-12">
            <div class="card stats bg-light-grey mb-4">
                <div class="card-body">
                    <h6 class="mb-0 text-dark fw-bold">New Leads</h6>
                    <small class="text-muted mt-0" style="margin-bottom: 1.5rem">Lead generation across the year 2020</small>
                    <canvas id="leadsOnBarGraph"></canvas>
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

export default {
    name: 'SalesDashboard',
    mounted() {
      this.leadsOnBarGraph()
      this.leadsOnPieChart()
    },
    methods: {
        formatNumber(num) {
            return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
        },
        leadsOnBarGraph() {
            var ctx = document.getElementById('leadsOnBarGraph').getContext('2d');
            
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
        leadsOnPieChart() {
            var ctx = document.getElementById('leadsOnPieChart').getContext('2d');

            var data = {
                labels: ['Prospecting', 'In Progress', 'Demo', 'Converted', 'Follow-up', 'Cancelled'],
                datasets: [{
                    label: 'Leads by Conversion Type',
                    data: [122, 345, 103, 67, 19, 76],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(153, 102, 255, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(75, 192, 192, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(235, 108, 93, 0.6)'
                    ],
                    borderColor: [
                        'rgba(255, 255, 255, 0.6)',
                        'rgba(255, 255, 255, 0.6)',
                        'rgba(255, 255, 255, 0.6)',
                        'rgba(255, 255, 255, 0.6)',
                        'rgba(255, 255, 255, 0.6)',
                    ],
                    borderWidth: 1.5
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
}
</script>