<template>
  <nav :class="'navbar bg-' + background_color">
    <div class="container">
      
      <div class="navbar-brand bars" v-if="sidebar" @click="toggled()">
        <span style="display: -webkit-inline-box;">
          <font-awesome-icon :class="'nav-icon text-' + color" :icon="['fa', 'bars']" />
        </span>
      </div>

      <span class="navbar-left">
        <div class="navbar-brand">
          <span style="display: -webkit-inline-box;">
            <font-awesome-icon :class="'nav-icon text-' + color" :icon="['fab', 'telegram-plane']" style="margin-right: 0" />
          </span>
        </div>

        <div class="navbar-brand">
          <span style="display: -webkit-inline-box;">
            <font-awesome-icon :class="'nav-icon text-' + color" :icon="['fa', 'bell']" style="margin-right: 0" />
          </span>
        </div>

        <div class="navbar-brand dropdown">
          <span data-bs-toggle="dropdown" class="dropdown-toggle" style="display: -webkit-inline-box;">
            <font-awesome-icon :class="'nav-icon text-' + color" :icon="['fa', 'user']" style="margin-right: 0" />
          </span>

          <div class="dropdown-menu">
            <span class="account">
              <p class="account-text" style="display: inline-block">Hey, Joseph!</p>
            </span>
            
            <a class="dropdown-item" data-bs-toggle="modal" data-bs-target="#profile">
              <font-awesome-icon class="icon" :icon="['fa', 'user']" /> 
              <p class="dropdown-list"> My Account </p>
            </a>

            <a class="dropdown-item" @click="darkMode()">
              <font-awesome-icon class="icon" :icon="['fa', 'moon']" /> 
              <p class="dropdown-list"> Dark Theme </p>
            </a>

            <div class="dropdown-divider"></div>

            <router-link :to="'/login'"  class="dropdown-item logout">
              <font-awesome-icon class="icon logout" :icon="['fa', 'sign-out-alt']" />
              <p class="dropdown-list"> Logout </p>
            </router-link>
          </div>
        </div>
      </span>

      <profile></profile>

      <div class="divider mt-4 d-none"></div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
    @import '../assets/scss/layout/_navbar.scss';

    .dropdown-item {
      cursor: pointer;
    }
    
</style>

<script>
import Profile from '../components/Profile';


export default {
    name: 'Navbar',
    props: {
      background_color: {
        type: String,
        required: true
      },
      sidebar: {
        required: false,
        type: Boolean
      }
    },
    components: {
      Profile
    },
    data() {
      return {
        color: ''      
      }
    },
    mounted() {
      this.setColor();
    },
    methods: {
      toggled() { 
        document.querySelector('#sidebar-wrapper').classList.add('toggled');
        document.querySelector('.backdrop').classList.add('on');
      },
      setColor() {
        if(this.background_color == "white") {
          this.color = 'muted'
        } else {
          this.color = 'white'
        }
      }
    }
}
</script>