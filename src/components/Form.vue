<template>
    <!-- Modal -->
    <div class="modal fade" id="forms" tabindex="-1" role="dialog" aria-labelledby="formsLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <span class="d-block">
                        <h5 class="content-title-min">Your Form</h5>
                        <p class="text-muted">And the relevant description.</p>
                    </span>
                </div>
                <div class="modal-body">
                    <form class="row" action="#" @submit.prevent="HandleSubmit()">
                        <div class="col-md-6 mb-3">
                            <label for="first_name" class="form-label">First Name</label>
                            <input type="text" class="form-control" id="first_name" placeholder="First Name">
                        </div>

                        <div class="col-md-6 mb-3">
                            <label for="last_names" class="form-label">First Name</label>
                            <input type="text" class="form-control" id="last_names" placeholder="Last Names">
                        </div>

                        <div class="col-md-12 mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" class="form-control" id="email" placeholder="name@example.com">
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn button btn-sm secondary" data-bs-dismiss="modal">
                        &nbsp;&nbsp;Cancel &nbsp; <font-awesome-icon :icon="['fa', 'times-circle']" />&nbsp;
                    </button>
                    
                    <button type="button" class="btn button btn-sm success">
                        &nbsp;&nbsp;Submit&nbsp; <font-awesome-icon :icon="['fa', 'check-circle']" />&nbsp;
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import '../assets/scss/layout/_form.scss';
</style>

<script>
export default {
    name: 'Form',
    methods: {
        handleSubmit() {

        }
    }
}
</script>