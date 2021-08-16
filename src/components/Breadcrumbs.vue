<template>
    <div class="container-fluid border-0 bg-white breadcrumbs">
        <div class="row">
            <nav class="col-12 pt-3 pb-3 position-relative" style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E&#34;);" aria-label="breadcrumb">
                <router-link :to="'/'" class="btn btn-secondary btn-sm ms-4">
                    <font-awesome-icon class='nav-icon ms-1 me-1' :icon="['fa', 'arrow-left']" />
                </router-link>
                
                <ol class="breadcrumb mb-0 float-end me-4 mt-1">
                    <li class="breadcrumb-item">
                        <router-link :to="'/home'">Home</router-link>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">Dashboard</li>
                </ol>
            </nav>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Breadcrumbs'
    }
</script>