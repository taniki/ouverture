<template>
    <div class="row">
        <Dataset v-for="dataset in items" :slug="dataset" />
    </div>
</template>

<script>
export default {
    props: ['items']
}
</script>

<style scoped>
.row {
    justify-content: flex-start;
}

.row .card {
    flex: 0 1 auto;
    width: calc(100% * (1/3) - 10px - 1px);
}
</style>
