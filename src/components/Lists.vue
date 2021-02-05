<template>
    <span class="d-flex">
        <h5 class="content-title" style="margin-top: 45px; margin-bottom: 20px;">Subscribers</h5>
        <!-- <div class="content-buttons">
            <button class="btn button primary btn-sm"> &nbsp;&nbsp;Export &nbsp;<font-awesome-icon :icon="['fa', 'angle-down']" />&nbsp; </button>
            <button class="btn button info btn-sm" data-bs-toggle="modal" data-bs-target="#forms"> &nbsp;&nbsp;View &nbsp;<font-awesome-icon :icon="['fa', 'plus']" />&nbsp; </button>
        </div> -->
    </span>

    <div class="row">
        <div class="col-md-12">
            <div class="input-group mb-3">
                <form action="#" @submit.prevent="fetchResults()" style="width: inherit">
                    <div class="input-group mb-3">
                        <input type="text" class="form-control search" v-model="search" placeholder="Search through system." aria-label="search" aria-describedby="search-submit">

                        <span class="input-group-text search-icon" id="search-submit">
                            <button class="btn btn-transparent" type="submit">
                                <font-awesome-icon class="icon" :icon="['fa', 'search']" /> 
                            </button>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    </div>
    
    <div class="row">
        <div class="col-md-12">
            <small class="text-muted me-3 fw-bold">+{{ max }} total subscribers</small>
            <small class="text-muted float-end me-3 fw-bold">{{ totals }} subscribers found</small>
            <table id="table" class="table table-striped mt-2">
                <thead class="table-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Names </th>
                        <th scope="col">Mobile No. </th>
                        <th scope="col">ID No. </th>
                        <th scope="col">Postal Code </th>
                        <th scope="col">Paid </th>
                        
                        <th scope="col">Account Status </th>
                        <th scope="col">Date Expired</th>
                        <th scope="col">Pay</th>
                        <th scope="col">QR</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="({id, names, expiry, idNumber, mobileNumber, postalCode, isPaid, index}) in subscribers" :key="index">
                        <th scope="row">{{ id-2 }}</th>
                        <td>{{ names }}</td>
                        <td>{{ mobileNumber }}</td>
                        <td>{{ idNumber }}</td>
                        <td>{{ postalCode }}</td>
                        
                        <td>
                            <p v-if="isPaid == true" class="text-success fw-bold"><font-awesome-icon class="text-success" :icon="['fa', 'check-circle']" /> Paid </p>

                            <p v-if="isPaid == false" class="text-danger fw-bold"><font-awesome-icon class="text-danger" :icon="['fa', 'times-circle']" /> Unpaid </p>
                        </td>

                        <td>
                            <p v-if="isPaid == true" class="text-success fw-bold"><font-awesome-icon class="text-success" :icon="['fa', 'check-circle']" /> Enabled </p>

                            <p v-if="isPaid == false" class="text-danger fw-bold"><font-awesome-icon class="text-danger" :icon="['fa', 'times-circle']" /> Disabled </p>
                        </td>
                        
                        <td>{{ expiry.substring(0, 10) }}</td>

                        <td>
                            <button class="btn btn-sm success" data-bs-toggle="modal" data-bs-target="#pay">
                               <font-awesome-icon :icon="['fa', 'dollar-sign']" /> Pay
                            </button>
                        </td>

                        <td>
                            <button class="btn btn-sm info" data-bs-toggle="modal" data-bs-target="#qr" @click="printQR(mobileNumber, postalCode)">
                               <font-awesome-icon :icon="['fa', 'qrcode']" /> QR
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <div class="row navigation">
        <div class="col-12 d-flex">
            <div class="mx-auto">
                <button class="btn default btn-sm me-2" @click="start()" :disabled="hidePrevious">
                    <span class="mx-1">Start <font-awesome-icon class="icon ms-2" :icon="['fa', 'step-backward']" /></span>
                </button>

                <button class="btn default btn-sm me-2" id="previous" @click='previous()' :disabled="hidePrevious">
                    <font-awesome-icon class="icon me-2" :icon="['fa', 'caret-left']" /> Previous
                </button>

                <span>
                    ||
                </span>

                <button class="btn default btn-sm ms-2 me-2" id="next" @click='next()' :disabled="hideNext">
                    Next
                    <font-awesome-icon class="icon ms-2" :icon="['fa', 'caret-right']" />
                </button>

                <button class="btn default btn-sm me-2" @click="end()" :disabled="hideNext">
                    <span class="mx-1">End <font-awesome-icon class="icon ms-2" :icon="['fa', 'step-forward']" /></span>
                </button>
            </div>
        </div>
    </div>

    <form-component></form-component>

    <div class="modal fade" id="qr" tabindex="-1" role="dialog" aria-labelledby="qrLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="d-flex">
                        <canvas class="mx-auto" id="canvas"></canvas>
                    </div>

                    <div class="d-flex">
                        <p class="mx-auto">Print or scan the QR Code to get your details</p>
                    </div>
                </div>

                <div class="modal-footer d-flex border-0">
                    <button type="button" class="btn button btn-sm primary mx-auto mt-2" data-bs-dismiss="modal">
                        &nbsp;&nbsp;Print &nbsp; <font-awesome-icon :icon="['fa', 'print']" />&nbsp;
                    </button>
                </div>
            </div>  
            
        </div>
    </div>

    <div class="modal fade" id="pay" tabindex="-1" role="dialog" aria-labelledby="payLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
            <div class="modal-content">
                <div class="modal-body">
                       <h6><font-awesome-icon class="icon text-success" :icon="['fa', 'check-circle']" /> <span class="fw-bold text-success">Success!</span>   </h6>
                       <div class="divider bg-success pt-1" style="border-radius: 20px;width: 20%;"></div>
                       <p class="text-success mt-4" style="font-size: 18px; letter-spacing: .6px">Check your phone for a prompt to pay.</p> 
                </div>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
    @import '../assets/scss/layout/_lists.scss';
</style>

<script>
import FormComponent from './Form'


export default {
    name: 'Lists',
    components: {
        FormComponent
    },
    mounted() {
        this.getSubscribersbyPage(1, 25, '')
    },
    data (){
        return {
            error: [],
            page: 1,
            limit: 25,
            totals: '',
            subscribers: [],
            current_limit: 25,
            hidePrevious: true,
            hideNext: false,
            max: 250000,
            search: '',
            awaitingSearch: false
            
        }
    },
    methods: {
        getSubscribersbyPage(page, limit, term) {
            let url = '';

            if(term) {
                url = '/Subscribers/GetAllSubscribers?PhoneNumber=' + term + '&pageNumber=' + page + '&pageSize=' + limit;
            } else {
                url = '/Subscribers/GetAllSubscribers?pageNumber=' + page + '&pageSize=' + limit;
            }

            this.axios.get(url).then((response) => {
                this.subscribers = response.data
                this.totals = this.subscribers.length
            }).catch(error => {
                this.error = error.response.data
                console.log(this.error);
            })
        },
        next() {
            // increment page + limit
            this.page++
            this.current_limit = this.current_limit + this.limit

            // if current limit > limit, terminate
            if(this.hidePrevious == true && this.current_limit > this.limit) {
                this.hidePrevious = false
            }

            // if max - current limit is less than limit, hide next
            if((this.max - this.current_limit) <= this.limit){
                this.hideNext = true
                this.hidePrevious = false
            }

            // get data to populate lists
            this.getSubscribersbyPage(this.page, this.limit, '')

            document.getElementById("table").scrollIntoView(true)
        },

        previous() {
            // increment page + limit
            this.page--
            this.current_limit = this.current_limit - this.limit
            
            if(this.hideNext == true && ((this.max - this.current_limit) > this.limit)) {
                this.hideNext = false
            }

            // if current limit <= limit, terminate
            if(this.current_limit <= this.limit) {
                this.hidePrevious = true
                this.hideNext = false
            }

            // get data to populate lists
            this.getSubscribersbyPage(this.page, this.limit)
            document.getElementById("table").scrollIntoView(true)
        },
        start() {
            this.page = 1
            this.current_limit = this.limit
            
            this.hideNext = false
            this.hidePrevious = true

            this.getSubscribersbyPage(this.page, this.limit, '')
        },

        end() {
            this.page = this.max/this.limit
            this.current_limit = this.max - this.limit

            this.hideNext = true
            this.hidePrevious = false

            this.getSubscribersbyPage(this.page, this.limit,)
        },
        
        fetchResults(){
            if(this.search !== '') {
                this.getSubscribersbyPage(this.page, this.limit, this.search)
            } else {
                 this.getSubscribersbyPage(1, 25, '')
            }
        },
        printQR(PhoneNumber, postalCode) {
            var QRCode = require('qrcode')
            var canvas = document.getElementById('canvas')
            var opts = {
                errorCorrectionLevel: 'H',
                type: 'image/jpeg',
                quality: 0.3,
                margin: 1,
                scale: 4,
                width: 400
            }

            QRCode.toCanvas(canvas, PhoneNumber + ':'+postalCode, opts, function (error) {
            if (error) console.error(error)
                console.log('success!');
            })
        }
    }
}
</script>