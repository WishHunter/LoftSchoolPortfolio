import Vue from "vue";
import Flickity from "vue-flickity";

new Vue({
	el: "#reviews",
  components: {
    Flickity
  },

  data() {
    return {
      flickityOptions: {
        initialIndex: 0,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: false,
        groupCells: true
      },
      reviews: []
    };
  },

  methods: {
    next() {
			this.$refs.flickity.next();
			this.checkArrows();
    },

    previous() {
			this.$refs.flickity.previous();
			this.checkArrows();
    },

		makeRequiredImages(data) {
			return data.map(item => {
				const requireImage = require(`../images/content/${item.avatar}`);
				item.avatar = requireImage;
				return item;
			})
		},

		checkArrows() {
			let prev = this.$el.querySelector(".reviews__arrow--prev");
			let next = this.$el.querySelector(".reviews__arrow--next");

			if (this.$refs.flickity.selectedIndex() === 0) {
				prev.disabled = true;
				return;
			};

			if (this.$refs.flickity.selectedIndex() === this.$refs.flickity.slides().length - 1) {
				next.disabled = true;
				return;
			}; 

			prev.disabled = false;
			next.disabled = false;
		}
  },

  created() {
    const data = require("../json/reviews.json");
		this.reviews = this.makeRequiredImages(data);
  }
});
