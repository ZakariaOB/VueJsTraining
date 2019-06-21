<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User name : {{ name }}</p>
        <p>User age : {{ age }}</p>
        <button @click='resetName'>Reset the name</button>
    </div>
</template>

<script>
export default {
    props: ['name', 'age'],
    methods: {
        resetName() {
            this.name = "Reset";
            this.age = "Reset";
        }
    }
}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
