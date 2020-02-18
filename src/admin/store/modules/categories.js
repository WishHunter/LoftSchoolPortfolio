export default {
  namespaced: true,
  state: {
    categories: [],
    skills: []
  },
  mutations: {
    ADD_CATEGORY: (state, category) => state.categories.splice(0, 0, category),
    ADD_SKILL: (state, skill) => state.skills.push(skill),
    SET_CATEGORY: (state, data) => (state.categories = data),
    ADD_ALL_SKILLS: (state, data) => (state.skills = data),
    REMOVE_CATEGORY: (state, id) =>
      (state.categories = state.categories.filter(
        category => category.id !== id
      )),
    REMOVE_SKILL: (state, id) => (state.skills = state.skills.filter(skill => skill.id !== id)),
    EDIT_CATEGORY: (state, newCategory) => {
      state.categories = state.categories.map(category => {
        return category.id === newCategory.id ? newCategory : category;
      });
    },
    EDIT_SKILL: (state, newSkill) => {
      state.skills = state.skills.map(skill => {
        return skill.id === newSkill.id ? newSkill : skill;
      });
    }
  },
  actions: {
    async addCategory({ commit }, title) {
      const { data } = await this.$axios.post("/categories", { title });
      commit("ADD_CATEGORY", data);
    },

    async editCategory({ commit }, category) {
      const id = category[0];
      const title = category[1];
      const { data } = await this.$axios.post(`/categories/${id}`, { title });

      commit("EDIT_CATEGORY", data.category);
    },

    async viewCategories({ commit }) {
      try {
        const { data } = await this.$axios.get("/categories");
        commit("SET_CATEGORY", data);
      } catch (error) {
      }
    },

    async deleteCategory({ commit }, id) {
      await this.$axios.delete(`/categories/${id}`);
      commit("REMOVE_CATEGORY", id);
    },

    async viewSkills({ commit }) {
      try {
        const response = await this.$axios.get("/user");
        const { data } = await this.$axios.get(`/skills/${response.data.user.id}`);
        commit("ADD_ALL_SKILLS", data);

      } catch (error) {}
    },

    async addSkill({ commit }, skill) {
      const { data } = await this.$axios.post('/skills', skill)
      commit("ADD_SKILL", data);
    },

    async deleteSkill({ commit }, id) {
      await this.$axios.delete(`/skills/${id}`)
      commit('REMOVE_SKILL', id);
    },

    async editSkill({ commit }, obj) {
      const { data } = await this.$axios.post(`/skills/${obj.id}`, obj.newSkill)
      commit('EDIT_SKILL', data.skill);
    }
  }
};
