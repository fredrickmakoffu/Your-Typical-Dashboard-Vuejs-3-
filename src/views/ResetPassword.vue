<template>
    <div id="wrapper" class="bg-light pt-4">
        <div class="container-fluid">
            <div class="row">
                <div class="col-xl-4 offset-xl-4 col-lg-4 col-md-5 offset-lg-4 offset-md-2">
                    <div class="card bg-gradient border-0">
                        <!-- strip of black at the top of the login box -->
                        <div class="bg-dark pt-1"></div>

                        <logo class="pt-4"></logo>

                        <status v-model:status_data=status_data></status>

                        <form id="form" action="#" @submit.prevent="handleSubmit()">
                            <div class="card-body border-bottom-0 p-4">
                                <div class="row mt-4" id="old_password-row">
                                    <div class="input-group">

                                        <input id="old_password" type="password" class="form-control" v-model="data.old_password" placeholder="Enter Old Password" required>
                                        
                                        <span class="input-group-text pe-4" @click="seePassword('old_password')">
                                            <font-awesome-icon id="eye" :icon="['fa', 'eye']" />
                                        </span>
                                    </div>
                                </div>

                                <div class="row mt-4" id="password-row">
                                    <div class="input-group">

                                        <input id="password" type="password" class="form-control" v-model="data.password" placeholder="Create new Password" required>
                                        
                                        <span class="input-group-text pe-4" @click="seePassword('password')">
                                            <font-awesome-icon id="eye" :icon="['fa', 'eye']" />
                                        </span>
                                    </div>
                                </div>

                                <div class="row mt-4" id="cpassword-row">
                                    <div class="input-group">

                                        <input id="cpassword" type="password" class="form-control" v-model="data.cpassword" placeholder="Confirm new Password" required>
                                        
                                        <span class="input-group-text pe-4" @click="seePassword('cpassword')">
                                            <font-awesome-icon id="eye" :icon="['fa', 'eye']" />
                                        </span>
                                    </div>
                                </div>

                                <div class="row" id="login">
                                    <div class="col">
                                        <button class="btn btn-dark btn-sm mt-4 w-100 text-uppercase fw-bold pt-2 pb-2" type="submit">
                                            <span style="letter-spacing: 2px">Update Password</span> <font-awesome-icon class="icon ms-1 me-1" :icon="['fa', 'unlock']" />
                                        </button>
                                    </div>
                                </div>

                                <div class="row mt-1">
                                    <small class="text-muted text-start">Go back to <router-link class="text-dark fw-bold text-decoration-none" :to="'/login'">Login</router-link></small>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>  
            </div>
        </div>

        <div class="container-fluid">
            <p class="text-center pt-4">Don't have an account? <router-link :to="'/register'" class="text-primary">Create One</router-link></p>
        </div>

        <main-footer :center=true class="fixed-bottom"></main-footer>
    </div>
</template>

<style scoped lang="scss">
    @import '../assets/scss/base/_base.scss';
    @import '../assets/scss/base/_fonts.scss';
    @import '../assets/scss/helpers/breakpoints.scss';

    .fixed-bottom {
        position: fixed;
        bottom: 0;
    }

    .form-control {
        border: 0;
        border-bottom: 1px solid #eee;
        padding-top: 0.8rem;
        font-size: 16px!important;
        padding-bottom: 0.8rem;
    }

    .form-control:focus {
        box-shadow: none;
        background: #E8F0FE;
        border-bottom-color: #86b7fe; 
    }

    .form-control:focus + .input-group-text {
        color: #86b7fe!important; 
        background-color: inherit;
        border-bottom-color: #86b7fe; 
        outline: 0;
        background: #E8F0FE;
    }

    .input-group-text {
        border: 0;
        background: transparent;
        border-bottom: 1px #eee solid;
        cursor: pointer;
    }

    .form-control::placeholder {
        color: #6c757d;
        font-size: 16px;
        letter-spacing: 0; 
    }

    .card {
        box-shadow: 0 4px 8px rgb(0 0 0 / 3%)
    }
    
</style>

<script>
    import Status from '../components/Status';
    import Logo from '../components/Logo';
    import MainFooter from '../components/Footer';

    export default {
        name: 'Login',
        components: {
            Status,
            Logo,
            MainFooter
        },
        data() {
            return {
                data: {
                    email: '',
                },
                status_data: {
                    "success": false,
                    "success_message": 'We have sent a email to you with instructions on resetting your password.',
                    "error": false,
                    "error_message": 'There are some input errors.',
                },
                loading: false
            }
        },
        methods: {
            handleSubmit() {
                this.success
            },
            hideAlert() {
                if(this.success == true) {
                    this.success = false
                } else if(this.error == true) {
                    this.error = false
                }
            },
            seePassword(id) {
                if(document.querySelector('#' + id).type == 'password') {
                    document.querySelector('#' + id).type = 'text'
                } else {
                    document.querySelector('#' + id).type = 'password'
                }
            },
        }
    }
</script>