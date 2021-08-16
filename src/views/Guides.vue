<template>
    <div id="wrapper">  
        <div class="body ps-0">
            <div class="backdrop" v-on:click="close()"></div>
            
            <small-admin-header v-model:screen='screen' :title="'Documentation'" :tagline="'Learn about your typical template.'"></small-admin-header>

            <div class="position-absolute h-100">
              <sidebar :sidebar_data=sidebar_data :page="'Guides'" class="sidebar-border-right position-relative"></sidebar>
            </div>

            <div class="body">
              <breadcrumbs :breadcrumbs_data=breadcrumbs_data class="breadcrumbs-border-bottom"></breadcrumbs>

              <div id="introduction" class="row mt-4">
                <div class="col-12">
                  <h2 class="fw-bold text-center text-dark">Welcome to Your Typical Template</h2>
                  <div class="bg-dark pt-1 w-25 rounded ms-auto me-auto"></div>
                  
                  <div class="p-4 guide-text">
                    <p class="ps-4 pe-4 mt-4"><span class="text-dark fw-bold">Your typical template</span> is a minimal Vuejs template built on Vue 3(duh) and  the Bootstrap 5 design system. As the name suggests, it is a typical template, built with ready-made components to allow you to have a jump-start to your projects. Some of the components have been automated, so that they can be highly reusable. </p>

                    <p class="ps-4 pe-4">This template, however, is also built to be minimal too, so that you can build anything you want on top of it. You don't need to invest a lot of time to learn how to use it. You just need to know Vuejs(duh) and Bootstrap.</p>

                    <p class="ps-4 pe-4">This little guide will take you through the template and its components, so that you'll be ready to use the template as fast as possible.</p>

                    <div class="d-flex ps-4 pe-4 mt-4">
                      <button class="btn btn-outline-dark ms-auto">
                        <span class="fw-bold">Next</span> <font-awesome-icon class="ms-2" :icon="['fa', 'angle-right']" /></button>
                    </div>
                  </div>
                </div>
              </div>            

            </div>

            <main-footer class="position-fixed bottom-0"></main-footer>

        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import '../assets/scss/abstracts/variables';
    @import '../assets/scss/helpers/breakpoints';
    @import '../assets/scss/layout/sidebar.scss';
    @import '../assets/scss/layout/_breadcrumbs.scss';

    .guide-text {
      font-size: 20px;
    }

</style>

<script>
  import MainFooter from '../components/Footer'
  import Sidebar from '../components/AutoSidebar'
  import Breadcrumbs from '../components/AutoBreadcrumbs'
  import SmallAdminHeader from '../components/SmallAdminHeader'
  // import SmallSidebar from '../components/SmallSidebar'
  
  export default {
    name: 'Admin',  
    data() {
      return {
        screen: 0,
        all_screens: [
            {"title": "Sales"},
            {"title": "Revenue"},
        ],
        breadcrumbs_data: [
            {title: 'Home', link: '', active: false},
            {title: 'Guides', active: true},
        ],
        sidebar_data: [
          {title: 'Introduction', link: 'guides#introduction', if_children: false, icon: 'home', modal: false},
          {title: 'Components', icon:'boxes', modal: false, if_children: true, children: [
            {child_title: 'Breadcrumbs', child_link: 'guides#breadcrumbs', child_icon: 'angle-right', child_modal: true},
            {child_title: 'Forms', child_link: 'guides#forms', child_icon: 'angle-right', child_modal: true},
            {child_title: 'Lists', child_link: 'guides#lists', child_icon: 'angle-right', child_modal: true},
            {child_title: 'Navbar', child_link: 'guides#navbar', child_icon: 'angle-right', child_modal: true},
            {child_title: 'Headers', child_link: 'guides#headers', child_icon: 'angle-right', child_modal: true},
            {child_title: 'Stats', child_link: 'guides#stats', child_icon: 'angle-right', child_modal: true},
            {child_title: 'Status', child_link: 'guides#status', child_icon: 'angle-right', child_modal: true},
            {child_title: 'Sidebar', child_link: 'guides#sidebar', child_icon: 'angle-right', child_modal: false},
          ]},
          {title: 'Dependencies', link: 'guides#dependencies', if_children: false, icon: 'project-diagram', modal: false},
        ]      
      }
    },
    components: {
      SmallAdminHeader,
      MainFooter,
      Sidebar,
      Breadcrumbs
    },
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
    }
  }
</script>
