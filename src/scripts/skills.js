import Vue from "vue";

const skill = {
	template: '#skill',
	props: {
		skillName: String,
		skillPercent: String
	},
	methods: {
		drawCirclePercent() {
			const circle = this.$refs["color-circle"];
			const levelPercent = 376.8 / 100 * (+this.skillPercent);

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
	created() {
		this.skills = require('../json/skills.json');
	}
});
