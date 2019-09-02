<template>
    <div class="columns">
        <slot/>
    </div>
</template>

<style scoped>
.columns {
    display: flex;
}

.columns > div {
    flex-grow: 1;
}
</style>
