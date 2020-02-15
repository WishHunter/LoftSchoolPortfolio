import Vue from "vue";
import axios from 'axios';

const $axios = axios.create({
  baseURL: "https://webdev-api.loftschool.com/"
});

const skill = {
	template: '#skill',
	props: {
		skill: Object
	},
	methods: {
		drawCirclePercent() {
			const circle = this.$refs["color-circle"];
      const levelPercent = 376.8 / 100 * (+this.skill.percent);

			circle.style.strokeDasharray = `${levelPercent} ${376.8 - levelPercent}`;
		}
	},
	mounted() {
		this.drawCirclePercent();
	}
}

const skillsList = {
	template: '#skills-list',
	props: {
		skillList: Object
	},
	components: {
		skill
	}
}

new Vue({
	el: '#skills-component',
	template: '#skills-container',
	data() {
		return {
			skills: []
		}
	},
	components: {
		skillsList
	},
  async created() {
    const { data } = await $axios.get('/categories/257')
    this.skills = data;
	}
});
