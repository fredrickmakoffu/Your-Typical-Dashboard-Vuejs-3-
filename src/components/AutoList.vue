<template>
    <section-title v-if="title.status == true" :title=title.title :actions=title.actions></section-title>

    <div class="row">
        <div class="col-md-12">
            <div class="input-group mb-3">
                <form action="#" @submit.prevent="fetchResults()" style="width: inherit">
                    <div class="input-group mb-3">
                        <input type="text" class="form-control search" v-model="search" placeholder="Search through system." aria-label="search" aria-describedby="search-submit">

                        <span class="input-group-text search-icon" id="search-submit">
                            <button class="btn btn-transparent" type="submit">
                                <font-awesome-icon class="icon" :icon="['fa', 'search']" /> 
                            </button>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    </div>
    
    <div id="tables" class="row">
        <div class="col-md-12">
            <small class="text-muted fw-bold">+{{ totals }} total</small>
            <small class="text-muted float-end fw-bold">{{ totals }} records showing</small>
            
            <table id="table" class="table table-striped mt-2">
                <thead class="table-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th v-for="(header, index) in headers" :key="index" scope="col">{{ header }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in data" :key="index">
                        <th scope="row">{{ index + 1 }}</th>
                        <td v-for="(column, index) in columns" :key="index">{{
                            item[column] }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    
    <div id="cards" class="row mb-3">
        <div class="col-md-12">
            <small class="text-muted fw-bold">+{{ totals }} total</small>
            <small class="text-muted float-end fw-bold">{{ totals }} records found.</small>
        </div>

        <div class="col-md-6 mt-3" v-for="(item, index) in data" :key="index">
            <div class="card mb-2 border-0">
                <div class="card-body pb-0">
                    <p class="text-dark fw-bold">{{ index + 1 }}. </p>
                    <p class="text-dark mb-3" v-for="(column, index) in columns" :key="index"> <span class="fw-bold text-uppercase">{{ column }}: </span> {{ item[column] }}</p>
                </div>
            </div>
        </div>
    </div>

    <div class="row navigation">
        <div class="col-12 d-flex">
            <div class="mx-auto">
                <button class="btn default btn-sm me-2" @click="start()" :disabled="hidePrevious">
                    <span class="mx-1">Start <font-awesome-icon class="icon ms-2" :icon="['fa', 'step-backward']" /></span>
                </button>

                <button class="btn default btn-sm me-2" id="previous" @click='previous()' :disabled="hidePrevious">
                    <font-awesome-icon class="icon me-2" :icon="['fa', 'caret-left']" /> Previous
                </button>

                <span>
                    ||
                </span>

                <button class="btn default btn-sm ms-2 me-2" id="next" @click='next()' :disabled="hideNext">
                    Next
                    <font-awesome-icon class="icon ms-2" :icon="['fa', 'caret-right']" />
                </button>

                <button class="btn default btn-sm me-2" @click="end()" :disabled="hideNext">
                    <span class="mx-1">End <font-awesome-icon class="icon ms-2" :icon="['fa', 'step-forward']" /></span>
                </button>
            </div>
        </div>
    </div>

    <form-component></form-component>

</template>

<style lang="scss" scoped>
    @import '../assets/scss/layout/_lists.scss';
</style>

<script>
import FormComponent from '../components/Form';
import SectionTitle from'../components/SectionTitle';

export default {
    name: 'AutoList',
    props: {
        title: {
            type: Object,
            required: true
        },
        url: {
            type: String,
            required: true
        },
        headers: {
            type: Object,
            required: true
        },
        columns: {
            type: Object,
            required: true
        }
    },
    components: {
        FormComponent,
        SectionTitle
    },
    mounted() {
        this.getDatabyPage()
    },
    data (){
        return {
            error: [],
            page: 1,
            limit: 25,
            totals: '',
            data: [],
            current_limit: 25,
            hidePrevious: true,
            hideNext: false,
            max: 0,
            search: '',
            awaitingSearch: false
        }
    },
    methods: {
        getDatabyPage() {
            this.axios.get(this.url).then((response) => {
                this.data = response.data
                this.totals = this.data.length
            }).catch(error => {
                this.error = error.response.data
                console.log(this.error);
            })
        }
    }
}
</script>