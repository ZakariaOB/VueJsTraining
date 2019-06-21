<template>
  <div class="component">
    <h1>The User Component</h1>
    <p>I'm an awesome User!</p>
    <button @click="applyInfo">Change my name</button>

    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <app-user-detail :name="name" :age="age"></app-user-detail>
      </div>
      <div class="col-xs-12 col-sm-6">
        <app-user-edit></app-user-edit>
      </div>
    </div>
  </div>
</template>

<script>
import UserDetail from "./UserDetail.vue";
import UserEdit from "./UserEdit.vue";

export default {
  components: {
    appUserDetail: UserDetail,
    appUserEdit: UserEdit
  },
  data: function() {
      return {
        name: "Zak",
        age: "30"
      };
    },
    methods: {
      applyInfo() {
        this.name = "Oussama";
        this.age = 4;
      }
    }
};
</script>

<style scoped>
</style>
