<template>
  <div class="settings">
    <!-- TODO add contexts here -->
    <h1> Set your work hours and location here</h1>

    <sui-input class='work-start' placeholder="Add start hours here" focus v-model="workStart" v-on:keyup.enter="setTime('start')" />
    <sui-input class='work-end' placeholder="Add closing hours here" focus v-model="workEnd" v-on:keyup.enter="setTime('end')" />
    <hr>
    <sui-input class='work-location' placeholder="Add lat/long here" focus v-model="workLocation" v-on:keyup.enter="setTime('end')" />
  </div>
</template>
<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import {Location} from '@/models/Location.ts';
  export default class Settings extends Vue {
    workStart:any = "";
    workEnd:any = "";
    workLocation:any = "";

    setTime(when:string) {

    }
    setLocation(where:string) {

    }
  }
</script
