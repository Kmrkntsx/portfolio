<template>
  <div>
    <h1>{{ item.title }}</h1>
    <div v-html="$md.render(item.body)"></div>
    <nuxt-link :to="'/'">
        <h2>戻る</h2>
    </nuxt-link>
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
  async asyncData({ params }) {
    const { data } = await axios.get(
      `https://kentakimuraportfolio.microcms.io/api/v1/blog/${params.id}`,
      {
        headers: { "X-API-KEY": process.env.API_KEY }
      }
    );
    return {
      item: data
    };
  }
};
</script>