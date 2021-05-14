<template>
    <footer class="main-footer d-flex">
        <div class="float-end ms-auto">
          Copyright &copy;  

          Built on <a href="www.inshaka.ga">Inshaka</a>
        </div>
      </footer>
</template>

<style>
    .main-footer {
        padding: 20px;
        display: inline-block;
        width: 100%;
    }
</style>

<script>
export default {
    name: 'Footer',
    props: ['center']
}
</script>