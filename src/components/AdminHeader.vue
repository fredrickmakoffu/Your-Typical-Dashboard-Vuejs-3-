<template>
    <section class="admin-header bg-primary">

        <navbar :background_color="'transparent'" style="margin-bottom: 5rem"></navbar>
        
        <div class="title">
            <h4 class="fw-bold text-white">Manage Users</h4>
            <p class="text-white">All your user controls, in one place.</p>
        </div>

        <ul class="nav">
            <li class="nav-item">
                <a class="nav-link text-white active" aria-current="page" href="#">Dashboard I</a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-white" href="#">Dashboard II</a>
            </li>
        </ul>
    </section>
</template>

<style lang="scss" scoped>
    @import '../assets/scss/layout/_admin_header.scss';
</style>

<script>
import Navbar from '../components/Navbar'

export default {
    name: "AdminHeader",
    components: {
        Navbar
    }
}
</script>