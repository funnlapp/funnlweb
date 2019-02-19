<template>
  <div class="home">
    
    <menu></menu>
    <sui-input id='task-adder' placeholder="Search..." focus v-model="draftTask" v-on:keyup.enter="addTask" />
    <sui-card v-if="context === 'home' || 'all'">
      <sui-card-content>
        <sui-card-header>Home</sui-card-header>
        <sui-list v-bind:key="task" v-for="task in homeTasks">
          <sui-list-item v-on:click="handleTask(task)">
            <sui-icon name="tick" />
            {{task}}
          </sui-list-item>
        </sui-list>

      </sui-card-content>
      <sui-card-content extra>
        <sui-icon name="user" />
        {{homeTasks.length}} Tasks
      </sui-card-content>
    </sui-card>
    <sui-card v-if="context === 'work' || 'all'">
      <sui-card-content>
        <sui-card-header>Work</sui-card-header>
        <sui-list v-bind:key="task" v-for="task in workTasks">
          <sui-list-item>
            <sui-icon name="help" />
            {{task}}
          </sui-list-item>
        </sui-list>
      </sui-card-content>
      <sui-card-content extra>
        <sui-icon name="user" />
        {{workTasks.length}} Tasks
      </sui-card-content>
    </sui-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Menu from '@/components/Menu.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
    Menu,
  },
})
export default class Home extends Vue {
  watchID: any;
  coordinates: Object = {};
  homeTasks = [];
  workTasks = [];
  draftTask: string = "";
  context:string = 'all';

  private mounted() {
    this.watchID = this.$watchLocation(null)
    .then(coordinates => {
      this.coordinates = coordinates;
    });
    console.log(Vue.moment().calendar());
  }

  private destroyed() {
    console.log('dead')
    this.$clearLocationWatch(this.watchID);
  }

  public addTask() {
    // TODO handle time and location here
    this.homeTasks.push(this.draftTask);
    this.draftTask = "";
  }

  public handleTask(task, index) {

  }
}
</script>
<style scoped>
#task-adder {
  width: 100%;
}
</style>

