export default {
  namespaced: true,
  state: {
    works: [],
    selectedWork: {
      id: '',
      title: '',
      techs: '',
      photo: '',
      link: '',
      description: ''
    }
  },
  mutations: {
    ADD_ALL_WORKS: (state, data) => (state.works = data),
    ADD_NEW_WORK: (state, data) => (state.works.push(data)),
    DELETE_WORK: (state, workId) => {
      state.works = state.works.filter(work => work.id !== workId)
    },
    CHANGE_WORK: (state, work) => {
      for (const key in state.selectedWork) {
        if (key === 'photo') {
          state.selectedWork[key] = `url(https://webdev-api.loftschool.com/${work[key]})`;
        } else {
          state.selectedWork[key] = work[key];
        }
      }
    },
    EDIT_WORK: (state, newWork) => {
      state.works = state.works.map(work => {
        if (work.id === newWork.id) {
          work = newWork;
        }
        return work;
      });
    },
    CLEAR_SELECTEDWORK: (state) => {
      for (const key in state.selectedWork) {
        state.selectedWork[key] = '';
      }
    }
  },
  actions: {
    async addWork({ commit }, work) {
      try {
        const { data } = await this.$axios.post('/works', work);
        commit('ADD_NEW_WORK', data);
        commit('CLEAR_SELECTEDWORK');
      } catch (error) {

      }
    },

    async viewWorks({ commit }) {
      try {
        const response = await this.$axios.get('/user');
        const { data } = await this.$axios.get(`/works/${response.data.user.id}`);
        commit('ADD_ALL_WORKS', data);
      } catch (error) {

      }
    },

    async deleteWork({ commit }, workId) {
      try {
        const { data } = await this.$axios.delete(`/works/${workId}`);
        commit('DELETE_WORK', workId);

      } catch (error) {

      }
    },

    async changeWork({ commit, state }, work) {
      try {
        const { data } = await this.$axios.post(`/works/${state.selectedWork.id}`, work)
        commit('EDIT_WORK', data.work);
        commit('CLEAR_SELECTEDWORK');
      } catch (error) {

      }
    }
  }
}
