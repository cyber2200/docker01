<template>
  <div>
    <div>TEST</div>
    <button v-on:click="mysqlTest">Mysql Test</button> <button v-on:click="mongoTest">Mongo Test</button> <button v-on:click="pgTest">Pg Test</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "IndexPage",
  methods: {
    async mysqlTest() {
      try {
        const resp = await axios.post("http://localhost:3000/mysqlTest");
        console.log(resp.data);
      } catch (err) {
        console.error(err);
      }
    },
    async mongoTest() {
      try {
        const resp = await axios.post("http://localhost:3000/mongoTest");
        console.log(resp.data);
      } catch (err) {
        console.error(err);
      }
    },
    async pgTest() {
      try {
        const resp = await axios.post("http://localhost:3000/pgTest");
        console.log(resp.data);
      } catch (err) {
        console.error(err);
      }
    },
  },
};
</script>
