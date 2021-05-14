<template>
    <span class="d-flex">
        <h5 class="content-title" style="margin-top: 45px; margin-bottom: 20px;">{{ title }}</h5>
        <div class="content-buttons" v-if="actions == true">
            <button class="btn button success btn-sm"> &nbsp;&nbsp;Export &nbsp;<font-awesome-icon :icon="['fa', 'angle-down']" />&nbsp; </button>
            <button class="btn button info btn-sm" data-bs-toggle="modal" data-bs-target="#forms"> &nbsp;&nbsp;Add &nbsp;<font-awesome-icon :icon="['fa', 'plus']" />&nbsp; </button>
        </div>
    </span>
</template>

<style lang="scss" scoped>
    @import '../assets/scss/layout/_lists.scss';
</style>

<script>
export default {
    name: "SectionTitle",
    props: {
        title: {
            type: String,
            required: true
        },
        actions: {
            type: Boolean,
            required: true
        }
    }
}
</script>