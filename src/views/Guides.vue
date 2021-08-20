<template>
    <div id="wrapper">  
        <div class="body ps-0">
            <div class="backdrop" v-on:click="close()"></div>
            
            <small-header v-model:screen='screen' :title="'Documentation'" :tagline="'Learn about your typical template.'"></small-header>

            <div class="position-absolute h-100">
              <sidebar v-model:screen=screen :page="'Guides'" class="position-relative"></sidebar>
            </div>

            <div class="body">
              <breadcrumbs :breadcrumbs_data=breadcrumbs_data class="breadcrumbs-border-bottom"></breadcrumbs>

              <div id="introduction" class="row mt-4" v-if="screen == 0">
                <div class="col-12">
                  <div class="card mb-2 border-0 ms-4 me-4">
                    <div class="card-body pb-4 pt-4">

                      <h4 class="fw-bold text-center text-primary rk mb-1">Welcome to Your Typical Dashboard</h4>
                      <div class="d-flex">
                        <small class="text-center mx-auto">An Introduction</small>
                      </div>

                      <div class="ps-2 pe-2 pt-4 guide-text">
                        <p class="ps-4 pe-4"><span class="text-primary fw-bold">Your typical dashboard</span> is a minimal Vuejs template built on Vue 3(duh) and  the Bootstrap 5 design system. As the name suggests, it is a typical template, built with ready-made components to allow you to have a jump-start to your projects. Some of the components have been automated, so that they can be highly reusable. </p>

                        <p class="ps-4 pe-4">This template, however, is also built to be minimal too, so that you can build anything you want on top of it. You don't need to invest a lot of time to learn how to use it. You just need to know Vuejs(duh) and Bootstrap.</p>

                        <p class="ps-4 pe-4">This little guide will take you through the template and its components, so that you'll be ready to use the template as fast as possible.</p>

                        <div class="d-flex ps-4 pe-4 mt-4"> 
                          <button class="btn btn-outline-dark ms-auto" @click="switchScreen('next')">
                            <span class="fw-bold">Next</span> <font-awesome-icon class="ms-2" :icon="['fa', 'angle-right']" /></button>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>    

              <div id="components" class="row mt-4" v-if="screen == 1">
                <div class="col-12">
                  <div class="card mb-2 border-0 ms-4 me-4">
                    <div class="card-body pb-4 pt-4">
                      <h4 class="fw-bold text-center text-primary">Components</h4>
                      <div class="d-flex">
                        <small class="text-center mx-auto">Read about all your components here.</small>
                      </div>                  

                      <div class="ps-2 pe-2 guide-text">
                        <p class="ps-4 pe-4 mt-4">This template is build to be minimal, meaning that most of the components will be Bootstrap 5 elements separated for ease of use. However, we'll learn about these components, along with the highly reusable components.</p>

                        <div class="d-flex ps-4 pe-4 mt-4">
                          <div class="ms-auto">
                            <button class="btn btn-outline-dark me-2" @click="switchScreen('previous')">
                              <font-awesome-icon class="me-2" :icon="['fa', 'angle-left']" />
                              <span class="fw-bold">Previous</span> 
                            </button>     

                            <button class="btn btn-outline-dark" @click="switchScreen('next')">
                              <span class="fw-bold">Next</span> <font-awesome-icon class="ms-2" :icon="['fa', 'angle-right']" /></button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>  

              <div id="form" class="row mt-4" v-if="screen == 2">
                <div class="col-12">
                  <div class="card mb-2 border-0 ms-4 me-4">
                    <div class="card-body pb-4 pt-4">
                      <div class="ps-4 pe-4">
                        <h6 class="fw-bold mb-1 ps-2 pe-2 text-primary">Forms</h6>
                      </div>

                      <div class="ps-2 pe-2 guide-text">
                        <p class="ps-4 pe-4 mt-4">We have provided a Form component  <span class="fst-italic">(Form.vue)</span> that you can use to create your Forms in the template.</p>

                        <p class="ps-4 pe-4 mt-4">The Form comes up as a modal and can be called upon on click. The Status component (that handles success, loading or error messages) is also fitted in and can be used by the forms you build. The <a href='#status' class="text-decoration-none">Status</a> section shows how you can wire this together, though the Form.vue file also shows this in action.</p>

                        <div class="d-flex ps-4 pe-4 mt-4">
                          <div class="ms-auto">
                            <button class="btn btn-outline-dark me-2" @click="switchScreen('previous')">
                            <font-awesome-icon class="me-2" :icon="['fa', 'angle-left']" />
                            <span class="fw-bold">Previous</span> 
                          </button>   

                          <button class="btn btn-outline-dark " @click="switchScreen('next')">
                            <span class="fw-bold">Next</span> <font-awesome-icon class="ms-2" :icon="['fa', 'angle-right']" /></button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>                 

              <div id="breadcrumbs" class="row mt-4" v-if="screen == 3">
                <div class="col-12">
                  <div class="card mb-2 border-0 ms-4 me-4">
                    <div class="card-body pb-4 pt-4">
                      <div class="ps-4 pe-4">
                        <h6 class="fw-bold mb-1 ps-4 pe-4 text-primary">Breadcrumbs</h6>
                      </div>

                      <div class="p-4 pt-0 guide-text">
                        <p class="ps-4 pe-4 mt-4">We have provided two breadcrumbs components, a simple Breadcrumb Component  <span class="fst-italic">(Breadcrumbs.vue)</span> and what we call the Auto-Breadcrumb component  <span class="fst-italic">(AutoBreadcrumbs.vue)</span>.</p>

                        <p class="ps-4 pe-4 mt-4">Our Breadcrumb component snippet follows the Bootstrap 5 design system, and in the unordered list in the <code>ol</code> tag you can add new list items to the breadcrumb.</p>

                        <p class="ps-4 pe-4 mt-4">Our Auto-Breadcrumbs allow you to add items in the breadcrumbs through props from a parent component. The prop currently named 'breadcrumbs_data' allows you to set: </p>
                        
                        <div style="padding-left: 45px">
                          <ul class="ps-4">
                            <li>the <span class="fst-italic">title</span> of a new list item</li>
                            <li>a <span class="fst-italic">link</span> to click from the item to a new page/section</li>
                            <li>what item is <span class="fst-italic">active</span></li>
                          </ul>
                        </div>

                        <div class="code pt-2 pb-2 ps-4 pe-4 m-4 rounded">
                          <p class="mb-0">#JSON Structure of breadcrumbs_data</p>
                          
                          <p class="mb-0"><span class="tag">breadcrumbs_data:</span> [</p>

                          <div class="ps-4 pb-0">
                            <p class="mb-0">{ <span class="tag">title:</span> <span class="text-primary">"Home"</span>, <span class="tag">link:</span> <span class="text-primary">"home"</span>, <span class="tag">active:</span> <span class="text-primary">false</span>}</p>
                            <p class="mb-1">{ <span class="tag">title:</span> <span class="text-primary">"Dashboard"</span>, <span class="tag">active:</span> <span class="text-primary">true</span>}</p> 
                          </div>
                          <p class="mb-1">]</p>  
                        </div>

                        <p class="ps-4 pe-4 mt-4">You can see this in use in the Dashboards.vue file.</p>

                        <div class="d-flex ps-4 pe-4 mt-4">
                          <div class="ms-auto">
                            <button class="btn btn-outline-dark me-2" @click="switchScreen('previous')">
                              <font-awesome-icon class="me-2" :icon="['fa', 'angle-left']" />
                              <span class="fw-bold">Previous</span> 
                            </button>

                            <button class="btn btn-outline-dark" @click="switchScreen('next')">
                              <span class="fw-bold">Next</span> 
                              <font-awesome-icon class="ms-2" :icon="['fa', 'angle-right']" />
                            </button>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>   

              <div id="status" class="row mt-4" v-if="screen == 4">
                <div class="col-12">
                  <div class="card mb-2 border-0 ms-4 me-4">
                    <div class="card-body pb-4 pt-4">
                      <div class="ps-4 pe-4">
                        <h6 class="fw-bold mb-1 ps-4 pe-4 text-primary">Status</h6>
                      </div>

                      <div class="p-4 pt-0 guide-text">
                        <p class="ps-4 pe-4 mt-4">We have provided a Status component  <span class="fst-italic">(Status.vue)</span> that you can use to display success, loading or error messages across your application.</p>

                        <p class="ps-4 pe-4 mt-4"> You can push a current state(whether successful, loading or error) through its props in the parent component, and update the status from the child Status component. The prop object(that we've called <span class="fst-italic">'status_data'</span>) has these items in it:</p>
                                            
                        <div style="padding-left: 45px">
                          <ul class="ps-4">
                            <li>a <span class="fst-italic">success</span> boolean value that shows if the current state is successful.</li>
                            <li>a <span class="fst-italic">success message</span> string value that displays a success messge if the success boolean value is <span class="text-primary">true</span></li>
                            <li>a <span class="fst-italic">error</span> boolean value that shows if the current state is unsuccessful.</li>
                            <li>a <span class="fst-italic">error message</span> string value that displays an error messge if the error boolean value is <span class="text-primary">true</span></li>              
                            <li>a <span class="fst-italic">loading</span> boolean value that shows if the current state is loading</li>   
                          </ul>
                        </div>

                        <div class="code pt-2 pb-2 ps-4 pe-4 m-4 rounded">
                          <p class="mb-0">#JSON Structure of status_data</p>
                          
                          <p class="mb-0"><span class="tag">status_data:</span> {</p>

                          <div class="ps-4 pb-0">
                            <p class="mb-0">
                              <span class="tag">"success":</span> <span class="text-primary">true</span>, 
                            </p>
                            <p class="mb-0">
                              <span class="tag">"success_message":</span> <span class="text-primary">"Success!"</span>, 
                            </p>
                            <p class="mb-0">
                              <span class="tag">"error":</span> <span class="text-primary">false</span>,
                            </p>
                            <p class="mb-0">
                              <span class="tag">"error_message":</span> <span class="text-primary">""</span>,
                            </p>
                            <p class="mb-0">
                              <span class="tag">"loading":</span> <span class="text-primary">false</span>
                            </p>
                          </div>
                          <p class="mb-1">}</p>  
                        </div>

                        <p class="ps-4 pe-4 mt-4">The error/success messages appear in alert boxes styled in the Bootstrap 5 way. You can see this in use in the Form.vue file.</p>

                        <div class="d-flex ps-4 pe-4 mt-4">
                          <div class="ms-auto">
                            <button class="btn btn-outline-dark me-2" @click="switchScreen('previous')">
                              <font-awesome-icon class="me-2" :icon="['fa', 'angle-left']" />
                              <span class="fw-bold">Previous</span> 
                            </button>

                            <button class="btn btn-outline-dark" @click="switchScreen('next')">
                              <span class="fw-bold">Next</span> 
                              <font-awesome-icon class="ms-2" :icon="['fa', 'angle-right']" />
                            </button>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id="sidebar" class="row mt-4" v-if="screen == 5">
                <div class="col-12">
                  <div class="card mb-2 border-0 ms-4 me-4">
                    <div class="card-body pb-4 pt-4">
                      <div class="ps-4 pe-4">
                        <h6 class="fw-bold mb-1 ps-4 pe-4 text-primary">Sidebar</h6>
                      </div>

                      <div class="p-4 pt-0 guide-text">
                        <p class="ps-4 pe-4 mt-4">We have provided two sidebar components, a simple Sidebar Component  <span class="fst-italic">(Sidebar.vue)</span> and what we call the Auto-Sidebar component  <span class="fst-italic">(AutoSidebar.vue)</span>.</p>

                        <p class="ps-4 pe-4 mt-4">The first sidebar is a simple sidebar, where you can go in and add or remove things manually. Items on the sidebar are in a list, so adding items on the list will show onto the sidebar.</p>

                        <div class="code pt-2 pb-2 ps-4 pe-4 m-4 rounded">
                          <p class="mb-0">#example list item in sidebar</p>
                          
                          <pre>&lt;<span class="tag">li</span> <span class="text-success">class</span>="<span class="text-primary">list-group-item active</span>"&gt;</pre>

                          <div class="ps-4 pb-0 pt-0">
                            <pre>&lt;<span class="tag">router-link</span> <span class="text-success">class</span>="<span class="text-primary">list-group-item active</span>"&gt;</pre>
                            <div class="ps-4 pe-4">
                              <pre>&lt;<span class="tag">span</span>&gt;</pre>
                              <div class="ps-4 pe-4">
                                <pre>&lt;<span class="tag">font-awesome</span> <span class="text-success">class</span>="<span class="text-primary">icon float-right</span>" <span class="text-success">:icon</span>="<span class="text-primary">['fa', 'home']</span>"&gt;</pre>
                                <pre>&lt;/<span class="tag">font-awesome</span>&gt;</pre>
                              </div>
                              <pre>&lt;/<span class="tag">span</span>&gt;</pre>
                            </div>
                            <pre>&lt;/<span class="tag">router-link</span>&gt;</pre>
                          </div>
                          <pre>&lt;/<span class="tag">li</span>&gt;</pre>
                        </div>

                        <p class="ps-4 pe-4 mt-4">The Auto-Sidebar allows you to add or remove things from the sidebar through a prop added by a parent component. You can set: </p>
                        <div style="padding-left: 45px">
                          <ul>
                            <li>the <span class="fst-italic">title</span> of the sidebar item</li>
                            <li>a <span class="fst-italic">link</span> to where the sidebar item leads to, on click</li>
                            <li>a <span class="fst-italic">if_children</span> boolean value that indicates whether the sidebar item has other items nested in it.</li>
                            <li>an <span class="fst-italic">icon</span> that shows up beside the sidebar item. It has to be a FontAwesome icon and initialized in the App.vue file.</li>
                            <li>a <span class="fst-italic">modal</span> boolean value that states whether a click initiates a modal</li>
                            <li>a <span class="fst-italic">children</span> object where you can nest items inside a sidebar item. </li>
                          </ul>
                        </div>

                        <p class="ps-4 pe-4 mt-4">All child properties are objects with the title, link, modal and icon elements under the parent item. The icon value does not provide an icon. Rather dictates whether the angle-right icon is shown. </p>

                        <div class="code pt-2 pb-2 ps-4 pe-4 m-4 rounded">
                          <p class="mb-0">#JSON structure of sidebar_data</p>
                          
                          <p class="mb-0"><span class="tag">sidebar_data:</span> [</p>

                          <div class="ps-4 pb-0">
                            <p class="mb-0">{ 
                              <span class="tag">title:</span> <span class="text-primary">"Home"</span>, 
                              <span class="tag"> link:</span> <span class="text-primary">"home"</span>, 
                              <span class="tag"> icon:</span> <span class="text-primary">"home"</span>,
                              <span class="tag"> if_children:</span> <span class="text-primary">false</span>,
                              <span class="tag"> modal:</span> <span class="text-primary">false</span>
                            },</p>

                            <div class="mb-0">{ 
                              <span class="tag">title:</span> <span class="text-primary">"Administration"</span>, 
                              <span class="tag"> link:</span> <span class="text-primary">"home"</span>, 
                              <span class="tag"> icon:</span> <span class="text-primary">"crown"</span>,
                              <span class="tag"> modal:</span> <span class="text-primary">false</span>,
                              <span class="tag"> if_children:</span> <span class="text-primary">true</span>,
                              <span class="tag"> children:</span> <span class="text-primary">[</span>
                              
                              <div class="ps-4 pb-0">
                                <p class="mb-0">#List all nested items in sidebar item</p>
                                <p class="mb-0">{
                                  <span class="tag"> child_title:</span> <span class="text-primary">"Manage Users"</span>,
                                  <span class="tag"> child_link:</span> <span class="text-primary">false</span>,
                                  <span class="tag"> child_icon:</span> <span class="text-primary">true</span>,
                                  <span class="tag"> child_modal:</span> <span class="text-primary">false</span>
                                }</p>
                              </div>
                              <span class="text-primary">]</span>},
                            </div>

                            <p class="mb-0">{ 
                              <span class="tag">title:</span> <span class="text-primary">"Administration"</span>, 
                              <span class="tag"> link:</span> <span class="text-primary">"admin"</span>, 
                              <span class="tag"> icon:</span> <span class="text-primary">"crown"</span>,
                              <span class="tag"> if_children:</span> <span class="text-primary">false</span>,
                              <span class="tag"> modal:</span> <span class="text-primary">false</span>
                            },</p>
                          </div>
                          <p class="mb-1">]</p>  
                        </div>

                        <p class="ps-4 pe-4 mt-4">You can see this in use in the Admin.vue file.</p>

                        <div class="d-flex ps-4 pe-4 mt-4">
                          <div class="ms-auto">
                            <button class="btn btn-outline-dark me-2" @click="switchScreen('previous')">
                              <font-awesome-icon class="me-2" :icon="['fa', 'angle-left']" />
                              <span class="fw-bold">Previous</span> 
                            </button>

                            <button class="btn btn-outline-dark" @click="switchScreen('next')">
                              <span class="fw-bold">Next</span> 
                              <font-awesome-icon class="ms-2" :icon="['fa', 'angle-right']" />
                            </button>
                          </div>
                        </div>                    
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id="navbar" class="row mt-4" v-if="screen == 6">
                <div class="col-12">
                  <div class="card mb-2 border-0 ms-4 me-4">
                    <div class="card-body pb-4 pt-4">
                      <div class="ps-4 pe-4">
                        <h6 class="fw-bold mb-1 ps-4 pe-4 text-primary">Navbar</h6>
                      </div>

                      <div class="p-4 pt-0 guide-text">
                        <p class="ps-4 pe-4 mt-4">We have provided a Navbar component  <span class="fst-italic">(Navbar.vue)</span> that you can use to display a navbar and elements it holds.</p>

                        <p class="ps-4 pe-4 mt-4"> It accepts one prop:</p>
                                            
                        <div style="padding-left: 45px">
                          <ul class="ps-4">
                            <li>a <span class="fst-italic">background_color</span> string value that dictates the navbar background color.</li> 
                          </ul>
                        </div>

                        <div class="code pt-2 pb-2 ps-4 pe-4 m-4 rounded">
                          <p class="mb-0">#JSON</p>
                          
                          <p class="mb-0"><span class="tag">background_color:</span> <span class="text-primary">"white"</span></p>
                        </div>

                        <p class="ps-4 pe-4 mt-4">You can see this in use in the Home.vue file.</p>

                        <div class="d-flex ps-4 pe-4 mt-4">
                          <div class="ms-auto">
                            <button class="btn btn-outline-dark me-2" @click="switchScreen('previous')">
                              <font-awesome-icon class="me-2" :icon="['fa', 'angle-left']" />
                              <span class="fw-bold">Previous</span> 
                            </button>

                            <button class="btn btn-outline-dark" @click="switchScreen('next')">
                              <span class="fw-bold">Next</span> 
                              <font-awesome-icon class="ms-2" :icon="['fa', 'angle-right']" />
                            </button>
                          </div>
                        </div>                    
                      </div>
                    </div>
                  </div>
                </div>
              </div>   

              <div id="headers" class="row mt-4" v-if="screen == 7">
                <div class="col-12">
                  <div class="card mb-2 border-0 ms-4 me-4">
                    <div class="card-body pb-4 pt-4">
                      <div class="ps-4 pe-4">
                        <h6 class="fw-bold mb-1 ps-4 pe-4 text-primary">Headers</h6>
                      </div>

                      <div class="p-4 pt-0 guide-text">
                        <p class="ps-4 pe-4 mt-4">We have provided two header components, a Header Component <span class="fst-italic">(Header.vue)</span> and a Small header component <span class="fst-italic">(SmallHeader.vue)</span>.</p> 
                        
                        <p class="ps-4 pe-4 mt-4">They hold a jumbotron(a big box for calling extra attention to some special content or information) which holds the navbar component, a title and tagline. The Small Header component occupies a smaller space than the Header Component.</p>

                        <div class="d-flex ps-4 pe-4">
                          <img class="img-fluid" :src="require('../assets/img/header.png')" alt="">
                        </div>

                        <p class="ps-4 pe-4 mt-4"> It accepts two props:</p>
                                            
                        <div style="padding-left: 45px">
                          <ul class="ps-4">
                            <li>a <span class="fst-italic">title</span> string value that displays the title of the page.</li> 
                            <li>a <span class="fst-italic">tagline</span> string value that displays extra text to give more information on the page.</li> 
                          </ul>
                        </div>

                        <div class="code pt-2 pb-2 ps-4 pe-4 m-4 rounded">
                          <p class="mb-0">#JSON Structure of header_data</p>
                          
                          <p class="mb-0"><span class="tag">title:</span> <span class="text-primary">"Your Dashboard"</span></p>
                          <p class="mb-0"><span class="tag">tagline:</span> <span class="text-primary">"All about your business, in one place."</span></p>
                        </div>

                        <p class="ps-4 pe-4 mt-4">You can see this in use in the Dashboard.vue file.</p>

                        <div class="d-flex ps-4 pe-4 mt-4">
                          <div class="ms-auto">
                            <button class="btn btn-outline-dark me-2" @click="switchScreen('previous')">
                              <font-awesome-icon class="me-2" :icon="['fa', 'angle-left']" />
                              <span class="fw-bold">Previous</span> 
                            </button>

                            <button class="btn btn-outline-dark" @click="switchScreen('next')">
                              <span class="fw-bold">Next</span> 
                              <font-awesome-icon class="ms-2" :icon="['fa', 'angle-right']" />
                            </button>
                          </div>
                        </div>                    
                      </div>
                    </div>
                  </div>
                </div>
              </div>  

              <div id="stats" class="row mt-4" v-if="screen == 8">
                <div class="col-12">
                  <div class="card mb-2 border-0 ms-4 me-4">
                    <div class="card-body pb-4 pt-4">
                      <div class="ps-4 pe-4">
                        <h6 class="fw-bold mb-1 ps-4 pe-4 text-primary">Stats</h6>
                      </div>

                      <div class="p-4 pt-0 guide-text">
                        <p class="ps-4 pe-4 mt-4">We have provided two Stats components, a Stats Component <span class="fst-italic">(Stats.vue)</span> and a Auto-Stats component <span class="fst-italic">(AutoStats.vue)</span>.</p> 
                        
                        <p class="ps-4 pe-4 mt-4">These components display aggregate numbers for certain things or actions, for example 1000 Leads. They're great when you want to display totals that are important to always monitor, like revenues or expenses.</p>

                        <div class="d-flex ps-4 pe-4">
                          <img class="img-fluid" :src="require('../assets/img/stats.png')" alt="">
                        </div>
                        

                        <p class="ps-4 pe-4 mt-4">The Stats component has example code you can reuse for your own test cases. The Auto-Stats component allows you to use props to create as many stats to display, as well as the details for each stats. It accepts these props: </p>
                                            
                        <div style="padding-left: 45px">
                          <ul class="ps-4">
                            <li>a <span class="fst-italic">title</span> string value that shows the label of the stat.</li> 
                            <li>a <span class="fst-italic">value</span> numeric value that displays the number of the stat.</li> 
                            <li>an <span class="fst-italic">icon</span> string value that shows an icon related to the stat being displayed. It has to be a FontAwesome icon and has to be initialised in the App.vue file.</li> 
                            <li>a <span class="fst-italic">color</span> string value that state a class that dictates the color of that stat element. You can use Bootstrap's existing color class schemes, like bg-primary, or create your own.</li> 
                          </ul>
                        </div>

                        <div class="code pt-2 pb-2 ps-4 pe-4 m-4 rounded">
                          <p class="mb-0">#JSON structure of stats_data</p>
                          
                          <p class="mb-0"><span class="tag">stats_data:</span> [</p>

                          <div class="ps-4 pb-0">
                            <p class="mb-0">{ 
                              <span class="tag">title:</span> <span class="text-primary">"Clients"</span>, 
                              <span class="tag"> value:</span> <span class="text-primary">"2000"</span>, 
                              <span class="tag"> icon:</span> <span class="text-primary">"users"</span>,
                              <span class="tag"> color:</span> <span class="text-primary">primary</span>,
                            },</p>
                            <p class="mb-0">{ 
                              <span class="tag">title:</span> <span class="text-primary">"Revenue"</span>, 
                              <span class="tag"> value:</span> <span class="text-primary">"300000"</span>, 
                              <span class="tag"> icon:</span> <span class="text-primary">"dollar-sign"</span>,
                              <span class="tag"> color:</span> <span class="text-primary">success</span>,
                            },</p>
                          </div>
                          <p class="mb-1">]</p>  
                        </div>

                        <p class="ps-4 pe-4 mt-4">The simple Stats Component is in use in the Sales component used in the Dashboard.vue file. The AutoStats component is in use in the Revenue Component used in the Dashboard.vue file. </p>

                        <div class="d-flex ps-4 pe-4 mt-4">
                          <div class="ms-auto">
                            <button class="btn btn-outline-dark me-2" @click="switchScreen('previous')">
                              <font-awesome-icon class="me-2" :icon="['fa', 'angle-left']" />
                              <span class="fw-bold">Previous</span> 
                            </button>

                            <button class="btn btn-outline-dark" @click="switchScreen('next')">
                              <span class="fw-bold">Next</span> 
                              <font-awesome-icon class="ms-2" :icon="['fa', 'angle-right']" />
                            </button>
                          </div>
                        </div>                    
                      </div>
                    </div>
                  </div>
                </div>
              </div>    

              <div id="lists" class="row mt-4" v-if="screen == 9">
                <div class="col-12">
                  <div class="card mb-2 border-0 ms-4 me-4">
                    <div class="card-body pb-4 pt-4">
                      <div class="ps-4 pe-4">
                        <h6 class="fw-bold mb-1 ps-4 pe-4 text-primary">Lists</h6>
                      </div>

                      <div class="p-4 pt-0 guide-text">
                        <p class="ps-4 pe-4 mt-4">We have provided two Lists components, a simple Lists Component <span class="fst-italic">(Lists.vue)</span> and a Auto-Lists component <span class="fst-italic">(AutoLists.vue)</span>.</p> 
                        
                        <p class="ps-4 pe-4 mt-4">They both provide code for listing things in a table format in large displays and in card format for smaller displays.</p>

                        <p class="ps-4 pe-4 mt-4">The AutoList component has sample code for loading data from an API. it uses props to get the url of the API so it can get the data, and the columns to know how to label the data being iterated against in the list. </p>

                        <p class="ps-4 pe-4 mt-4">It accepts these props:</p>
                                            
                        <div style="padding-left: 45px">
                          <ul class="ps-4">
                            <li>a <span class="fst-italic">url</span> string value that points to an API.</li> 
                            <li>a <span class="fst-italic">columns</span> string value that describes all key values of a single JSON object.</li> 
                            <li>an <span class="fst-italic">headers</span> string value that displays each name for all key values of a single JSON object. They're shown as the headers </li>
                          </ul>
                        </div>

                        <div class="code pt-2 pb-2 ps-4 pe-4 m-4 rounded">
                          <p class="mb-0">#JSON structure</p>
                          
                          <p class="mb-0"><span class="tag">url:</span> <span class="text-primary">"https://jsonplaceholder.typicode.com/users"</span></p>
                          <p class="mb-0"><span class="tag">columns:</span>  [<span class="text-primary">"name"</span>, <span class="text-primary">"email"</span>, <span class="text-primary">"username"</span>, <span class="text-primary">"phone"</span>]</p>
                          <p class="mb-0"><span class="tag">headers:</span> [<span class="text-primary">"Name"</span>, <span class="text-primary">"Email"</span>, <span class="text-primary">"Username"</span>, <span class="text-primary">"Phone Number"</span>]</p>
                        </div>

                        <div class="d-flex ps-4 pe-4 mt-4">
                          <div class="ms-auto">
                            <button class="btn btn-outline-dark me-2" @click="switchScreen('previous')">
                              <font-awesome-icon class="me-2" :icon="['fa', 'angle-left']" />
                              <span class="fw-bold">Previous</span> 
                            </button>
                          </div>
                        </div>                    

                      </div>
                    </div>
                  </div>
                </div>
              </div>  

              <div id="dependencies" class="row mt-4" v-if="screen == 10">
                <div class="col-12">
                  <div class="card mb-2 border-0 ms-4 me-4">
                    <div class="card-body pb-4 pt-4">

                      <h4 class="fw-bold text-center text-primary rk mb-1">Dependencies</h4>
                      <div class="d-flex">
                        <small class="text-center mx-auto">All our dependencies</small>
                      </div>

                      <div class="ps-2 pe-2 pt-4 guide-text">
                        <p class="ps-4 pe-4">We don't use too many depencies on purpose, just to keep the dashboard beautifully minimal. These are all the dependencies we use in the template:</p>

                        <div style="padding-left: 45px">
                          <ul class="ps-4">
                            <li class="text-primary">
                              <a class="text-decoration-none" href="https://getbootstrap.com/docs/5.0">Bootstrap 5</a>
                            </li>

                            <li class="text-primary">
                              <a class="text-decoration-none" href="https://fontawesome.com/">FontAwesome 6</a>
                            </li>

                            <li class="text-primary">
                              <a class="text-decoration-none" href="https://github.com/axios/axios">Axios</a>
                            </li> 

                            <li class="text-primary">
                              <a class="text-decoration-none" href="https://router.vuejs.org/">Vue Router</a>
                            </li>                                                        
                          </ul>
                        </div>

                        <div class="d-flex ps-4 pe-4 mt-4"> 
                          <button class="btn btn-outline-dark ms-auto" @click="switchScreen('previous')">
                            <font-awesome-icon class="me-2" :icon="['fa', 'angle-left']" />
                            <span class="fw-bold">Previous</span> 
                          </button>
                        </div>
                      </div>
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
    font-size: 18px;
  }

  .code {
    background: #24242e;
    color: #767693;
    font-size: 16px;

    .tag {
      color: #dd672c;
    }
  }
  
  pre {
    margin: 0;
    overflow: visible;
  }

  .card {
    border-radius: 5px;
    box-shadow: 0 1px 4px 0 rgb(0 0 0 / 15%);
    transition: transform 0.55s ease, opacity 0.25s linear;
    -webkit-transition: transform 0.55s ease, opacity 0.25s linear;
    -o-transition: transform 0.55s ease, opacity 0.25s linear;
  }

  .card :before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    height: 100%;
    width: 5px;
    // background-color: #0dcaf0;
    background-color: $info-color;
  }

</style>

<script>
  import MainFooter from '../components/Footer'
  import Sidebar from '../components/SmallSidebar'
  import Breadcrumbs from '../components/AutoBreadcrumbs'
  import SmallHeader from '../components/SmallHeader'
  
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
        ]    
      }
    },
    components: {
      SmallHeader,
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
      switchScreen(value) {
        if(value == 'next') {
          this.screen++
        } else {
          this.screen--
        }
      }
    }
  }
</script>
