<template lang="html">
  <sui-menu :widths="4">
    <sui-menu-item active>Tasks</sui-menu-item>
    <sui-menu-item>Add</sui-menu-item>
    <sui-menu-item>Settings</sui-menu-item>
  </sui-menu>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Menu extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
