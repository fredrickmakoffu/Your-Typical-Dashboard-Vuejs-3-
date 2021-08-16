<template>      
    <div id="sidebar-wrapper" class="position-relative">
        <div class="col-12 mt-2 mb-4 brand d-flex">
            <!-- <h6 class="float-left mr-2 abbreviation bg-danger">P</h6> -->
            <span class="wide float-right mt-1" style="margin-left: 20px">
                <a href="<?php echo base_url(); ?>home"> Guide Menu </a>
                <div class="pt-1 bg-dark-grey mt-1 w-50 rounded"></div>
            </span>

            <span class="close mt-2" v-on:click="close()">
                <font-awesome-icon class="icon float-right" :icon="['fa', 'times']" /> 
            </span>
        </div>

        <div class="list-nav list-group list-group-flush">
            <li class="list-group-item">
                <router-link :to="'/home'" class="d-flex">
                    <span>
                        <font-awesome-icon class="icon float-right" :icon="['fa', 'home']" /> 
                        <span class="list-name"> Home </span>  
                    </span>
                </router-link> 
            </li>

            <li class="list-group-item active" v-on:click="expand($event.currentTarget)">
                <a class="d-flex">
                    <span>
                        <font-awesome-icon class="icon" :icon="['fa', 'crown']" /> 
                        <span class="list-name"> Administration </span>  
                    </span>

                    <font-awesome-icon class="icon me-0" :icon="['fa', 'caret-down']" /> 
                </a> 

                <ul class="list-nav-child list-group list-group-flush">
                    <li class="list-group-item">
                        <router-link :to="'/admin'" >
                            <font-awesome-icon class="icon" :icon="['fa', 'angle-right']" />  &nbsp; Manage Users
                        </router-link>
                    </li>
                </ul>
            </li>

            <li class="list-group-item">
                <router-link :to="'/dashboard'" class="d-flex">
                    <span>
                        <font-awesome-icon class="icon" :icon="['fa', 'hammer']" /> 
                        <span class="list-name"> Dashboard </span>  
                    </span>
                </router-link>
            </li>

            <li class="list-group-item">
                <a class="dropdown-item" data-bs-toggle="modal" data-bs-target="#profile">
                    <span>
                        <font-awesome-icon class="icon" :icon="['fa', 'user']" /> 
                        <span class="list-name"> My Account  </span>  
                    </span>
                </a>
            </li>

            <li class="list-group-item">
                <router-link :to="'/guides'" class="dropdown-item">
                    <span>
                        <font-awesome-icon class="icon" :icon="['fa', 'info-circle']" /> 
                        <span class="list-name"> Guide  </span>  
                    </span>
                </router-link>
            </li>
        </div>
    </div>             
</template>

<style lang="scss" scoped>
    @import '../assets/scss/layout/sidebar.scss';
</style>

<script>
export default {
    name: 'SmallSidebar',
}
</script>
