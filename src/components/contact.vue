<template>
    <div class="contact">
        <h1>Our Contact Page</h1>
        <p>{{ msg }}</p>
    </div>
</template>

<script>
export default {
    name: 'contact',
    data() {
        return {
            msg: 'You can reach us on 0800 ()'
        }
    }
}
</script>