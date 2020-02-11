export default {
  namespaced: true,
  state: {
    works: [],
    selectedWork: {
      title: '',
      techs: '',
      photo: '',
      link: '',
      description: ''
    }
  },
  mutations: {},
  actions: {
    async addWork({ commit, state }, work) {
      console.log(state.selectedWork);
      const { data } = await this.$axios.post('/works', work);
    }
  }
}
