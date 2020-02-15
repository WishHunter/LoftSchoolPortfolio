import Vue from "vue";
import Flickity from "vue-flickity";
import axios from 'axios';

const $axios = axios.create({
  baseURL: "https://webdev-api.loftschool.com/"
});

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

    makeImages(data) {
			return data.map(item => {
        item.photo = `https://webdev-api.loftschool.com/${item.photo}`;
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

  async created() {
    try {
      const { data } = await $axios.get('/reviews/257');
      this.reviews = this.makeImages(data);
      this.$refs.flickity.rerender();
    } catch (error) {

    }

  }
});
