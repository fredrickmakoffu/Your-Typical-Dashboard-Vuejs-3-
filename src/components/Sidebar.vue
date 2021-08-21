<template>
    <div id="sidebar-wrapper">
        <div class="col-12 mt-4 mb-4 brand d-flex">
            <h6 class="float-left mr-2 abbreviation bg-danger">P</h6>
            <span class="wide float-right mt-1" style="margin-left: 20px">
                <a href="<?php echo base_url(); ?>home">
                    Your Typical Dashboard
                </a>
                
                <p class="text-muted">Your essentials</p>
            </span>

            <span class="close mt-2" v-on:click="close()">
                <font-awesome-icon class="icon float-right" :icon="['fa', 'times']" /> 
            </span>
        </div>

        <div class="list-nav list-group list-group-flush">
            <li :class="['list-group-item', {'active': page == 'Home'}]">
                <router-link :to="'/'" class="d-flex">
                    <span>
                        <font-awesome-icon class="icon float-right" :icon="['fa', 'home']" /> 
                        <span class="list-name"> Home </span>  
                    </span>
                </router-link> 
            </li>

            <li :class="['list-group-item', {'active': page == 'Admin'}]" v-on:click="expand($event.currentTarget)">
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

            <li :class="['list-group-item', {'active': page == 'Dashboard'}]">
                <router-link :to="'/dashboard'" class="d-flex">
                    <span>
                        <font-awesome-icon class="icon" :icon="['fa', 'hammer']" /> 
                        <span class="list-name"> Dashboard </span>  
                    </span>
                </router-link>
            </li>

            <li :class="['list-group-item', {'active': page == 'Profile'}]">
                <a class="dropdown-item" data-bs-toggle="modal" data-bs-target="#profile">
                    <span>
                        <font-awesome-icon class="icon" :icon="['fa', 'user']" /> 
                        <span class="list-name"> Your Profile  </span>  
                    </span>
                </a>
            </li>

            <li :class="['list-group-item', {'active': page == 'Guides'}]">
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
    @import '../assets/scss/layout/_sidebar.scss';
</style>

<script> 
export default {
    name: 'SideBar',
    props: ['page'],
    methods: {
        expand(event) {
            document.querySelectorAll('.list-nav > .list-group-item').forEach(list => { 
                if(list.querySelector('.list-name').textContent === event.querySelector('.list-name').textContent) {
                    if(list.querySelector('.list-nav-child').style.height === '0px' || list.querySelector('.list-nav-child').style.height === '') {
                        list.querySelector('.list-nav-child').style.opacity = '1'
                        list.querySelector('.list-nav-child').style.visibility = 'visible'
                        list.querySelector('.list-nav-child').style.height = 'auto'

                        if(list.querySelector('.list-nav-child').parentElement.className.includes('active')) {
                            list.querySelector('.list-nav-child').parentElement.querySelector('.list-group-item a.d-flex').classList.add('expand-active-list-item');
                        } else {
                            list.querySelector('.list-nav-child').parentElement.querySelector('.list-group-item a.d-flex').classList.add('expand-list-item');
                        }
                    } else {
                        list.querySelector('.list-nav-child').style.height = '0px'
                        list.querySelector('.list-nav-child').style.visibility = 'hidden'
                        list.querySelector('.list-nav-child').style.opacity = '0'

                        if(list.querySelector('.list-nav-child').parentElement.className.includes('active')) {
                            list.querySelector('.list-nav-child').parentElement.querySelector('.list-group-item a.d-flex').classList.remove('expand-active-list-item');
                        } else {
                            list.querySelector('.list-nav-child').parentElement.querySelector('.list-group-item a.d-flex').classList.remove('expand-list-item');
                        }
                    }
                }
            });
        },

        close() {
            document.querySelector('#sidebar-wrapper').classList.remove('toggled');
            document.querySelector('.backdrop').classList.remove('on');
        }
    }
}
</script>