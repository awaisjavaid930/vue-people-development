<template>
    <div>
        <vue-typed-js :fadeOut="true" :loop="true" :strings="['First text', 'Second Text']">
            <h1 class="typing"></h1>
        </vue-typed-js>
    </div>
</template>
<script>
    export default {
        name : 'Service'
    }
</script>