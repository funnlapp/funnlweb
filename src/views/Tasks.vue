<template lang="html">
  <sui-menu :widths="3">
    <sui-menu-item>Editorials</sui-menu-item>
    <sui-menu-item>Reviews</sui-menu-item>
    <sui-menu-item active>Upcoming Events</sui-menu-item>
  </sui-menu>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TaskList from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    TaskList,
  },
})
export default class Tasks extends Vue {}
</script>