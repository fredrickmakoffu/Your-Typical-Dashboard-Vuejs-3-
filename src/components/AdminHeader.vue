<template>
    <section class="admin-header bg-default">

        <navbar :background_color="'transparent'" style="margin-bottom: 5rem"></navbar>
        
        <div class="title">
            <h4 class="fw-bold text-white">{{ title }}</h4>
            <p class="text-white">{{ tagline }}</p>
        </div>

        <ul class="nav">
            <li class="nav-item">
                <a class="nav-link text-white active text-uppercase" aria-current="page" href="#">Users</a>
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
    props: {
        title: {
            required: true,
            type: String
        },
        tagline: {
            required: true,
            type: String
        },
    },
    components: {
        Navbar
    }
}
</script>