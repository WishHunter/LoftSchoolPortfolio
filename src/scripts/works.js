import Vue from "vue";
import axios from 'axios';

const $axios = axios.create({
  baseURL: "https://webdev-api.loftschool.com/"
});

const worksText = {
	template: '#works-text',
	props: {
		work: {},
	}
}

const worksNav = {
	template: '#works-nav',
	props: {
		works: Array,
		activeElem: Number,
		visibleDots: Number,
		visibleDotStart: Number
	},
	methods: {
		changeSlide(change) {
			this.$emit('change', change);
		},

		visibleSlide(e) {
			console.log(e);
		}
	}
}

const worksImg = {
	template: '#works-img',
	components: {
		worksNav
	},
	props: {
		works: Array,
		activeElem: Number,
		visibleDots: Number,
		visibleDotStart: Number
  },
  computed: {
    worksActive() {
      return [this.works[this.activeElem]];
    }
  },
  methods: {
		changeSlide(change) {
			this.$emit('change', change);
		}
	}
}

new Vue({
	el: '#works-component',
	template: '#works-container',
	components: {
		worksImg,
		worksText
	},
	data() {
		return {
			works: [],
			activeElem: 0,
			visibleDots: 4,
			visibleDotStart: 0
		}
	},
	methods: {
		changeSlide(change) {
			switch (change) {
				case 'next':
					this.activeElem++;
					this.checkArrows();
					return;
				case 'prev':
					this.activeElem--;
					this.checkArrows();
					return;
			};
			if (typeof (change) === "number") {
				this.activeElem = change;
				this.checkArrows();
			}

		},
		checkArrows() {
			let prev = this.$el.querySelector(".works__slider-nav-prev");
			let next = this.$el.querySelector(".works__slider-nav-next");

			this.visibleDot();

			if (this.activeElem === 0) {
				prev.disabled = true;
				next.disabled = false;
				return;
			};

			if (this.activeElem === this.works.length - 1) {
				next.disabled = true;
				prev.disabled = false;
				return;
			};

			prev.disabled = false;
			next.disabled = false;
		},

		visibleDot() {
			if (document.documentElement.clientWidth < 1800 && document.documentElement.clientWidth > 1200) {
				this.visibleDots = 3; //3
			};
      if (this.visibleDots > this.works.length) {
        this.visibleDots = this.works.length;

      }
			let visibleDotEnd = this.visibleDots; // 3


			if (this.visibleDots <= this.activeElem) {
				visibleDotEnd = this.activeElem + 1; //4
			}

			this.visibleDotStart = visibleDotEnd - this.visibleDots; // 0
    },

    makeImagesAndTegs(data) {
      return data.map(item => {
        item.photo = `https://webdev-api.loftschool.com/${item.photo}`;
        let objectTegs = [];
        let arrayTegs = item.techs.split(',');
        arrayTegs.forEach((value, index) => {
          if (value && value !== ' ') {
            objectTegs.push({
              id: index,
              name: value
            })
          }
        });
        item.techs = objectTegs;
        return item;
      })
    }
	},
  async created() {
    try {
      const { data } = await $axios.get('/works/257');
      this.works = this.makeImagesAndTegs(data);
      this.visibleDot();
    } catch (error) {

    }
	}
});
