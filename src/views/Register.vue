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
                                <div class="form-row">
                                    <div class="input-group">
                                        <span class="input-group-text border-right-0">
                                            <font-awesome-icon id="eye" :icon="['fa', 'user']" />
                                        </span>

                                        <input id="names" type="text" class="form-control no-border" v-model="data.names" placeholder="Enter your Names" required> 
                                    </div>
                                </div>
                                
                                
                                <div class="form-row mt-4">
                                    <div class="input-group">
                                        <span class="input-group-text border-right-0" @click="seePassword()">
                                            <font-awesome-icon id="eye" :icon="['fa', 'envelope']" />
                                        </span>
                                        
                                        <input id="email" type="email" class="form-control no-border" v-model="data.email" placeholder="Enter your Email" required>
                                    </div>
                                </div>

                                <div class="row mt-4" id="password-row">
                                    <div class="input-group">
                                        <span class="input-group-text" >
                                            <font-awesome-icon id="lock" :icon="['fa', 'lock']" />
                                        </span>

                                        <input id="password" type="password" class="form-control" v-model="data.password" placeholder="Create Password" required>
                                        
                                        <span class="input-group-text pe-4" @click="seePassword('password')">
                                            <font-awesome-icon id="eye" :icon="['fa', 'eye']" />
                                        </span>
                                    </div>
                                </div>

                                <div class="row mt-4" id="cpassword-row">
                                    <div class="input-group">
                                        <span class="input-group-text" >
                                            <font-awesome-icon id="lock" :icon="['fa', 'lock']" />
                                        </span>

                                        <input id="cpassword" type="password" class="form-control" v-model="data.cpassword" placeholder="Confirm Password" required>
                                        
                                        <span class="input-group-text pe-4" @click="seePassword('cpassword')">
                                            <font-awesome-icon id="eye" :icon="['fa', 'eye']" />
                                        </span>
                                    </div>
                                </div>

                                <div class="form-row mt-3 mb-3">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                    <label class="form-check-label ms-2" for="flexCheckDefault">
                                        I have read and accepted the Terms and Conditions
                                    </label>
                                </div>

                                <div class="row" id="login">
                                    <div class="col">
                                        <button class="btn btn-dark btn-sm mt-4 w-100 text-uppercase fw-bold pt-2 pb-2" type="submit">
                                            <span style="letter-spacing: 2px">Register</span> <font-awesome-icon class="icon ms-1 me-1" :icon="['fa', 'unlock']" />
                                        </button>
                                    </div>
                                </div>

                                <div class="row mt-1">
                                    <small class="text-muted text-start">or <router-link class="text-dark fw-bold text-decoration-none" :to="'/login'">Login</router-link></small>
                                </div>
                            </div>
                            <div class="card-footer bg-white border-top-0 pb-4">
                                <div class="row mt-4" id="login">
                                    <div class="col-12">
                                        <h6 class="text-center mb-0" style="font-size: 14px">Sign up with Socials</h6>
                                    </div>
                                    <div class="col-6">
                                        <button class="btn btn-primary btn-sm mt-4 w-100 text-uppercase fw-bold" type="submit">
                                            <span class="fw-normal" style="letter-spacing: 1px">Facebook</span> <font-awesome-icon class="icon ms-1 me-1" :icon="['fab', 'facebook']" />
                                        </button>
                                    </div>

                                    <div class="col-6">
                                        <button class="btn btn-info btn-sm mt-4 w-100 text-uppercase fw-bold" type="submit">
                                            <span class="fw-normal" style="letter-spacing: 1px">Twitter</span> <font-awesome-icon class="icon ms-1 me-1" :icon="['fab', 'twitter']" />
                                        </button>
                                    </div>
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

        <main-footer :center=true></main-footer>
    </div>
</template>

<style scoped lang="scss">
    @import '../assets/scss/base/_base.scss';
    @import '../assets/scss/base/_fonts.scss';
    @import '../assets/scss/helpers/breakpoints.scss';

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
                    name: null,
                    email: null,
                    password: null,
                    cpassword: null,
                },
                status_data: {
                    "success": false,
                    "success_message": 'Login Successful!',
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
            seePassword(id) {
                if(document.querySelector('#' + id).type == 'password') {
                    document.querySelector('#' + id).type = 'text'
                } else {
                    document.querySelector('#' + id).type = 'password'
                }
            },
            hideAlert() {
                if(this.success == true) {
                    this.success = false
                } else if(this.error == true) {
                    this.error = false
                }
            }
        }
    }
</script>