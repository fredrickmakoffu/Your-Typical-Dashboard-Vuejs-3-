<template>
    <!-- Modal -->
    <div class="modal fade" id="forms" tabindex="-1" role="dialog" aria-labelledby="formsLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
            <div class="modal-content">
                <div class="modal-header pb-0">
                    <span class="d-block">
                        <h5 class="content-title-min">Your Form</h5>
                        <p class="text-muted">And the relevant description.</p>
                    </span>
                </div>
                <status v-model:status_data=status_data></status>
                <form action="#" @submit.prevent="handleSubmit()">
                    <div class="modal-body pt-0">
                        <div class="row mb-4">
                            <div class="col-md-6 mt-4">
                                <label for="first_name" class="fw-bold mb-2">First Name</label>
                                <div class="input-group">
                                    <span class="input-group-text border-right-0">
                                        <font-awesome-icon id="eye" :icon="['fa', 'user']" />
                                    </span>
                                    
                                    <input id="first_name" type="text" class="form-control" v-model="data.first_name" placeholder="Enter your First Name" required> 
                                </div>
                            </div>

                            <div class="col-md-6 mt-4">
                                <label for="first_name" class="fw-bold mb-2">Last Name</label>
                                <div class="input-group">
                                    <span class="input-group-text border-right-0">
                                        <font-awesome-icon id="eye" :icon="['fa', 'user']" />
                                    </span>

                                    <input id="first_name" type="text" class="form-control" v-model="data.last_name" placeholder="Enter your Last Name" required> 
                                </div>
                            </div>
                            
                        </div>

                        <div class="form-row">
                            <label for="first_name" class="fw-bold mb-2">Email</label>
                            <div class="input-group">
                                <span class="input-group-text border-right-0" @click="seePassword()">
                                    <font-awesome-icon id="eye" :icon="['fa', 'envelope']" />
                                </span>

                                <input id="email" type="email" class="form-control no-border" v-model="data.email" placeholder="Enter your Email" required>
                            </div>
                        </div>
                    </div>

                    <div class="modal-footer">
                        <button type="button" class="btn button btn-sm secondary" data-bs-dismiss="modal">
                            &nbsp;&nbsp;Cancel &nbsp; <font-awesome-icon :icon="['fa', 'times-circle']" />&nbsp;
                        </button>
                        
                        <button :class="[{'success': status_data.loading == false }, {'bg-dark text-white': status_data.loading == true }, 'btn', 'button', 'btn-sm']" :disabled="status_data.loading == true">
                            &nbsp;&nbsp;Submit&nbsp; <font-awesome-icon :icon="['fa', 'check-circle']" />&nbsp;
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import '../assets/scss/layout/_form.scss';
</style>

<script>
import Status from '../components/Status';

export default {
    name: 'Form',
    components: {
        Status
    },
    data() {
        return {
            data: {
                first_name: null,
                last_name: null,
                email: null
            },
            status_data: {
                "success": false,
                "success_message": 'Form Submission was successful!',
                "error": false,
                "error_message": 'There are some errors.',
                "loading": false
            },
        }
    },
    methods: {
        handleSubmit() {
            // Simulate successful submit
            
            // 1. Show loading spinner
            this.status_data.loading = true

            // 2. Hide loading spinner after .9 second
            setTimeout(() => (this.status_data.loading = false), 700)
            
            // 3. Show success alert after a second
            setTimeout(() => (this.status_data.success = true), 1400)
            
            // 3. Hide success alert after 5 seconds
            setTimeout(() => (this.status_data.success = false), 4000)
            
        },
    }
}
</script>