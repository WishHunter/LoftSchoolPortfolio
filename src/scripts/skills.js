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
			const dasharray = `${levelPercent} ${376.8 - levelPercent}`;

			circle.style.strokeDasharray = dasharray;
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
		console.log(this.skills[0].name);
	}
});

