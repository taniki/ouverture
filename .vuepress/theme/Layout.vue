<template>
    <main>
        <Header />
        <Content />
        <Footer />
    </main>
</template>

<style>
main {
    display: flex;
    flex-direction: column;
}

main > div {
    flex-grow: 1;
}
</style>

<script>
import Header from './Header'
import Footer from './Footer'

export default {
    components: {
        Header,
        Footer
    }
};
</script>
