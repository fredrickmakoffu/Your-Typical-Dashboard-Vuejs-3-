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
            <small class="text-muted me-3 fw-bold">100 total</small>
            <small class="text-muted float-end me-3 fw-bold">10 records showing</small>

            <table id="table" class="table table-striped mt-2">
                <thead class="table-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Names </th>
                        <th scope="col">User-name </th>
                        <th scope="col">Email </th>
                        <th scope="col">Phone </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Clementina DuBuque</td>
                        <td>Rey.Padberg@karina.biz</td>
                        <td>Moriah.Stanton</td>
                        <td>024-648-3804</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Glenna Reichert</td>
                        <td>Chaim_McDermott@dana.io</td>
                        <td>Delphine</td>
                        <td>(775)976-6794 x41206</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Kurtis Weissnat</td>
                        <td>Telly.Hoeger@billy.biz</td>
                        <td>Elwyn.Skiles</td>
                        <td>210.067.6132</td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>Nicholas Runolfsdottir V</td>
                        <td>Sherwood@rosamond.me</td>
                        <td>Maxime_Nienow</td>
                        <td>586.493.6943 x140</td>
                    </tr>
                    <tr>
                        <th scope="row">5</th>
                        <td>Mrs. Dennis Schulist</td>
                        <td>Karley_Dach@jasper.info</td>
                        <td>Leopoldo_Corkery</td>
                        <td>1-477-935-8478 x6430</td>
                    </tr>
                    <tr>
                        <th scope="row">6</th>
                        <td>Chelsey Dietrich</td>
                        <td>Lucio_Hettinger@annie.ca</td>
                        <td>Kamren</td>
                        <td>(254)954-1289</td>
                    </tr>
                    <tr>
                        <th scope="row">7</th>
                        <td>Patricia Lebsack</td>
                        <td>Julianne.OConner@kory.org</td>
                        <td>Karianne</td>
                        <td>493-170-9623 x156</td>
                    </tr>
                    <tr>
                        <th scope="row">8</th>
                        <td>Clementine Bauch</td>
                        <td>Nathan@yesenia.net</td>
                        <td>Samantha</td>
                        <td>1-463-123-4447</td>
                    </tr>  
                    <tr>
                        <th scope="row">9</th>
                        <td>Ervin Howell</td>
                        <td>Shanna@melissa.tv</td>
                        <td>Antonette</td>
                        <td>010-692-6593 x09125</td>
                    </tr>
                    <tr>
                        <th scope="row">10</th>
                        <td>Leanne Graham</td>
                        <td>Sincere@april.biz</td>
                        <td>Bret</td>
                        <td>1-770-736-8031 x56442</td>
                    </tr>                                        
                </tbody>
            </table>
        </div>
    </div>

    <div class="row navigation">
        <div class="col-12 d-flex">
            <div class="mx-auto">
                <button class="btn default btn-sm me-2">
                    <span class="mx-1">Start <font-awesome-icon class="icon ms-2" :icon="['fa', 'step-backward']" /></span>
                </button>

                <button class="btn default btn-sm me-2" id="previous">
                    <font-awesome-icon class="icon me-2" :icon="['fa', 'caret-left']" /> Previous
                </button>

                <span>
                    ||
                </span>

                <button class="btn default btn-sm ms-2 me-2" id="next">
                    Next
                    <font-awesome-icon class="icon ms-2" :icon="['fa', 'caret-right']" />
                </button>

                <button class="btn default btn-sm me-2">
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
    name: 'List',
    props: {
        title: {
            required: false,
            type: Object
        }
    },
    components: {
        FormComponent,
        SectionTitle
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
}
</script>