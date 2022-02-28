<template>
    <div>
        <button v-on:click="counter += 1">{{ counter }}</button><v-spacer></v-spacer>
        <button v-on:click="sayHi('Hit me')" id="hitme">Hit me </button><v-spacer></v-spacer>
        <button v-on:click="sayHi('kiss me')">kiss me </button><v-spacer></v-spacer>
    </div>
</template>
<script>
    export default {
        name : "Click",
        data(){
            return {
                counter : 1
            }
        },
        methods : {
            sayHi : function(message){
                alert(message);
            }
        }
    }
</script>
