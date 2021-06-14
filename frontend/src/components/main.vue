<template>
  <button @click="test" class="btn btn-success">Submit</button>
</template>
<script>
import httpModule from "../services/httpModule";
export default {
  name: "meow",
  data() {
    return {
      tutorial: {
        id: null,
        title: "",
        description: "",
        published: false
      },
      submitted: false
    };
  },
  methods: {
    test: function test() {
      httpModule.test().then((d) => console.log(d.data.data));
    },
  },
};
</script>
