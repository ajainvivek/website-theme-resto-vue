<!-- WebXP: Resume: SuperGeek: Container -->
<template>
  <div class="review-block">
    <h1>Reviews</h1>
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-4">
        <b-carousel class="carousel-reviews" indicators img-width="1024" img-height="450">
          <b-carousel-slide
            caption
            v-for="(review, index) in reviews"
            :key="index"
            img-blank
            img-alt
            class="carousel-slide"
          >
            <b-card class="p-4">
              <h3>{{review.author}}</h3>
              <p>{{review.description}}</p>
              <footer>
                <span class="item-company">posted on {{review.source}}</span>
              </footer>
            </b-card>
          </b-carousel-slide>
        </b-carousel>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReviewBlock",
  components: {},
  props: ["reviews"],
  data: function() {
    return {};
  },
  methods: {},
  computed: {}
};
</script>

<style scoped lang="scss">
.review-block {
  width: 100%;
  padding: 40px 40px;

  h1 {
    font-size: 60px;
    margin: 20px 0;
    text-align: center;
  }
}

.carousel-slide {
  h3 {
    color: #000 !important;
  }
  p {
    color: #888888;
    font-size: 24px;
  }
  footer {
    color: #888888;
    font-size: 24px;
  }
}
</style>