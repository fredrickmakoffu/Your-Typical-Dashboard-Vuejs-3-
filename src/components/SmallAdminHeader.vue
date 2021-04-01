<template>
    <section class="small-admin-header bg-default">
        <div class="title text-center">
            <h4 class="fw-bold text-white">Manage Users</h4>
            <p class="text-white">All your user controls, in one place.</p>
        </div>
        <div class="row">
            <ul class="nav mx-auto">
                <li class="nav-item">
                    <a class="nav-link text-white active" aria-current="page" href="#">Active</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white" href="#">Link</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white" href="#">Link</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                </li>
            </ul>
        </div>
       
    </section>
</template>

<style lang="scss" scoped>
    @import '../assets/scss/layout/_admin_header.scss';
</style>

<script>

export default {
    name: "AdminHeader"
}
</script>