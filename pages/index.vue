<template>
 <div>
  <h1>test-blog</h1>
  <div v-for="(item,key) in items" :key="key">
    <nuxt-link :to="'article/' + item.id">
       <h2>{{ item.title }}</h2>
    </nuxt-link>
  </div>
 </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      items: []
    };
  },
  async asyncData() {
    const { data } = await axios.get(
      "https://kentakimuraportfolio.microcms.io/api/v1/blog",
      {
        headers: { "X-API-KEY": process.env.API_KEY }
      }
    );
    return {
      items: data.contents
    };
  }
}
</script>

<style>
h1 {
  display: block;
  font-size: 3em;
  text-align: center;
  font-weight: bold;
  border-top: solid 3px #364e96;
  border-bottom: solid 3px #364e96;
}
h2 {
   display: block;
    font-size: 1.6em;
    text-align: center;
    font-weight: bold;
    border: solid #ddd;
    border-width: 0 0 1px 0;
}
</style>