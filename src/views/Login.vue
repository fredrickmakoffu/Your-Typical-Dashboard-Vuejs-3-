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
                                        <input id="email" type="email" class="form-control no-border" v-model="data.email" placeholder="Enter your Email" required>

                                        <span class="input-group-text pe-4 border-right-0" style="border-bottom: 1px #eee solid;" @click="seePassword()">
                                            <font-awesome-icon id="eye" :icon="['fa', 'envelope']" />
                                        </span>
                                    </div>
                                </div>

                                <div class="row mt-4" id="password-row">
                                    <div class="input-group">
                                        <input id="password" type="password" class="form-control" v-model="data.password" placeholder="Password" required>
                                        <span class="input-group-text pe-4" style="border-right: 1px #eee solid; border-bottom: 1px #eee solid;" @click="seePassword()">
                                            <font-awesome-icon id="eye" :icon="['fa', 'eye']" />
                                        </span>

                                        <span class="input-group-text ps-4" style="border-bottom: 1px #eee solid;">
                                            <font-awesome-icon id="lock" :icon="['fa', 'lock']" />
                                        </span>
                                    </div>
                                    <router-link :to="'/forgot-password'">
                                        <small class="text-muted">
                                            <a href="#" class="text-dark fw-bold text-decoration-none float-end mt-2">Forgot Password</a>
                                        </small>
                                    </router-link>
                                </div>

                                <div class="form-row mt-3 mb-3">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                    <label class="form-check-label ms-2" for="flexCheckDefault">
                                        Remember me
                                    </label>
                                </div>

                                <div class="row" id="login">
                                    <div class="col">
                                        <button class="btn btn-dark btn-sm mt-4 w-100 text-uppercase fw-bold pt-2 pb-2" type="submit">
                                            <span style="letter-spacing: 2px">Login</span> <font-awesome-icon class="icon ms-1 me-1" :icon="['fa', 'unlock']" />
                                        </button>
                                    </div>
                                </div>

                                <div class="row mt-1">
                                    <small class="text-muted text-start">or <router-link class="text-dark fw-bold text-decoration-none" :to="'/register'">Register</router-link></small>
                                </div>
                            </div>
                            <div class="card-footer bg-white border-top-0 pb-4">
                                <div class="row mt-4" id="login">
                                    <div class="col-12">
                                        <h6 class="text-center mb-0" style="font-size: 14px">Login with Socials</h6>
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
                    password: '',
                },
                status_data: {
                    "success": false,
                    "success_message": 'You\'re in! Login is Successful!',
                    "error": false,
                    "error_message": 'There are some input errors.',
                },
                loading: false
            }
        },
        methods: {
            handleSubmit() {
                this.status_data.success = true 
                // Redirect   
                setTimeout(() => (this.$router.push('/')), 900)
            },
            seePassword() {
                if(document.querySelector('#password').type == 'password') {
                    document.querySelector('#password').type = 'text'
                } else {
                    document.querySelector('#password').type = 'password'
                }
            },
            hideAlert() {
                if(this.status_data.success == true) {
                    this.status_data.success = false
                } else if(this.status_data.error == true) {
                    this.status_data.error = false
                }
            }
        }
    }
</script>