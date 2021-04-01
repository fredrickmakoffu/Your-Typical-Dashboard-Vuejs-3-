<template>
    <section class="admin-header bg-primary">
        <div class="title">
            <h4 class="fw-bold text-white">Manage Users</h4>
            <p class="text-white">All your user controls, in one place.</p>
        </div>

        <ul class="nav">
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