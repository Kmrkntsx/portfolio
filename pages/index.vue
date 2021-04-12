<template>
 <div class="wrapper">
    <div class="jumbotron">
      <div class="container top-content">
        <h1>KENTA KIMURA</h1>
        <h3>WebEngineer</h3>
      </div>
    </div>
    <div class="bg-glay">
        <div class="container">
            <h1 class="left-title text-left">ABOUT</h1>
            <span class="sub-title text-left">自己紹介</span>
            <div class="row my-5">
              <div class="col-md-6">
                  <p class="about-text">
                    愛知県在住Ｗｅｂエンジニア<br>
                    印刷会社兼Ｗｅｂ制作会社で3年勤務後<br>
                    ＩＴ企業に入社したしがないＳＥ<br>
                  </p>
                  <p class="mt-3">
                    ＨＰ制作<br>
                    ディレクション・デザイン・コーディング<br>
                    ※広く浅く...<br>
                    Angular の経験も有 React勉強中<br>
                    とにかくWebを勉強中です！
                  </p>
              </div>
              <div class="col-md-6 sp-mt-5">
                  <img src="../assets/images/about.png" alt="about">
              </div>
            </div>
        </div>
    </div>
 <div class="container my-5">
    <h1 class="title text-center">BLOG</h1>
    <span class="sub-title text-center">ブログ</span>
    <div class="row mt-5">
      <div v-for="(item,key) in items" :key="key" class="col-md-4 mb-3">
        <img :src="item.thumb.url" alt="" width="80%">
        <p>{{ item.createdAt}}</p>
        <nuxt-link :to="'article/' + item.id">
          <h4 class="blog-title color-def">{{ item.title }}</h4>
        </nuxt-link>
      </div>
    </div>
    <div class="text-center">
      <button class="btn bg-sub text-white">MORE</button>
    </div>
 </div>
  <Footer />
 </div>
</template>
<script>
import axios from "axios";
import Footer from "@/components/footer.vue";
export default {
  components: {
    Footer
  },
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