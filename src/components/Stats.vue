<template>
    <h5 class="content-title text-dark fw-bold mb-3">Your Stats</h5>
    
    <div class="row gx-2">
        <div class="col-lg-3 col-md-3 col-sm-6 mb-2">
            <div class="card stats info">
                <div class="card-body">
                    <span class="card-icon"> 
                        <font-awesome-icon class="icon" :icon="['fa', 'user']" /> 
                    </span>
                    <p class="card-icon-title">Subscribers</p>
                </div>
            </div>
        </div>

        <div class="col-lg-3 col-md-3 col-sm-6 mb-2">
            <div class="card stats primary" style="border-radius: 15px;">
                <div class="card-body">
                    <span class="card-icon"> 
                        <font-awesome-icon class="icon" :icon="['fab', 'galactic-republic']" /> 
                    </span>
                    <p class="card-icon-title">Users in System</p>
                </div>
            </div>
        </div>

        <div class="col-lg-3 col-md-3 col-sm-6 mb-2">
            <div class="card stats info" style="border-radius: 15px;">
                <div class="card-body">
                    <span class="card-icon"> 
                        <font-awesome-icon class="icon" :icon="['fa', 'envelope']" /> 
                    </span>
                    <p class="card-icon-title">Users in System</p>
                </div>
            </div>
        </div>

        <div class="col-lg-3 col-md-3 col-sm-6 mb-2">
            <div class="card stats primary" style="border-radius: 15px;">
                <div class="card-body">
                    <span class="card-icon"> 
                        <font-awesome-icon class="icon" :icon="['fa', 'dollar-sign']" /> 
                    </span>
                    <p class="card-icon-title">Users in System</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import '../assets/scss/layout/_stats.scss';
</style>


<script>
export default {
    name: 'Stats'
}
</script>