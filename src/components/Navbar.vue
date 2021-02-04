<template>
  <nav class="navbar navbar-light bg-light">
    <div class="container">
      <div class="navbar-brand bars" @click="toggled()">
        <span style="display: -webkit-inline-box;">
          <font-awesome-icon class="nav-icon" :icon="['fa', 'bars']" />
        </span>
      </div>

      <span class="navbar-left">
        <div class="navbar-brand">
          <span style="display: -webkit-inline-box;">
            <font-awesome-icon class="nav-icon" :icon="['fab', 'telegram-plane']" style="margin-right: 0" />
          </span>
        </div>

        <div class="navbar-brand">
          <span style="display: -webkit-inline-box;">
            <font-awesome-icon class="nav-icon" :icon="['fa', 'bell']" style="margin-right: 0" />
          </span>
        </div>

        <div class="navbar-brand dropdown">
          <span data-bs-toggle="dropdown" class="dropdown-toggle" style="display: -webkit-inline-box;">
            <font-awesome-icon class="nav-icon" :icon="['fa', 'user']" style="margin-right: 0" />
          </span>

          <div class="dropdown-menu">
            <span class="account">
              <p class="account-text" style="display: inline-block">Hey, Fredrick!</p>
            </span>
            <a href="<?php echo base_url(); ?>account_details" class="dropdown-item">
              <font-awesome-icon class="icon" :icon="['fa', 'user']" /> 
              <p class="dropdown-list"> My Account </p>
            </a>

            <a href="<?php echo base_url(); ?>profile" class="dropdown-item">
              <font-awesome-icon class="icon" :icon="['fa', 'cog']" />
              <p class="dropdown-list"> Settings </p>
            </a>

            <div class="dropdown-divider"></div>

            <a href="<?= base_url();?>logout" class="dropdown-item logout">
              <font-awesome-icon class="icon logout" :icon="['fa', 'sign-out-alt']" />
              <p class="dropdown-list"> Logout </p>
            </a>
          </div>
        </div>
      </span>

      <div class="divider mt-4"></div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
    @import '../assets/scss/layout/_navbar.scss';
</style>

<script>
export default {
    name: 'Navbar',
    methods: {
      toggled() { 
        document.querySelector('#sidebar-wrapper').classList.add('toggled');
        document.querySelector('.backdrop').classList.add('on');
      },

      backdrop() { 
        alert('here')
      }
    }
}
</script>