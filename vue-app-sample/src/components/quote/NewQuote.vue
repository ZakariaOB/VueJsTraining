<template>
  <div class="row">
    <form class="form-group">
      <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 form-group">
        <label for>Quote</label>
        <textarea class="form-control" v-model="quote" rows="3"></textarea>
      </div>
      <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 form-group">
        <button class="btn btn-primary" @click.prevent="createNew">Create a new quote</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      quote: ""
    };
  },
  methods: {
    createNew() {
      this.$emit('quoteAdded', this.quote);
      this.quote = "";
    }
  }
};
</script>
<style scoped>
.panel-body {
  font-family: "Arial";
  font-size: 24px;
  color: burlywood;
}

.quote {
  cursor: pointer;
}
.quote:hover {
  background-color: azure;
}
</style>

