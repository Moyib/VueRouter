<template>
    <div class="about">
        <h1>Learn all you need to know about us</h1>
        <p>{{ msg }}</p>
    </div>
</template>

<script>
export default {
    name: 'about',
    data() {
        return {
            msg: 'How we started'
        }
    }
}
</script>