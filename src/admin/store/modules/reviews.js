export default {
  namespaced: true,
  state: {
    reviews: [],
    selectedReview: {
      id: '',
      photo: '',
      author: '',
      occ: '',
      text: ''
    }
  },
  mutations: {
    ADD_ALL_REVIEWS: (state, data) => (state.reviews = data),
    ADD_NEW_REVIEW: (state, review) => (state.reviews.push(review)),
    CLEAR_SELECTEDREVIEW: (state) => {
      for (const key in state.selectedReview) {
        state.selectedReview[key] = '';
      }
    },
    DELETE_REVIEW: (state, id) => {
      state.reviews = state.reviews.filter(review => review.id !== id)
    },
    CHANGE_REVIEW: (state, review) => {
      for (const key in state.selectedReview) {
        if (key === 'photo') {
          state.selectedReview[key] = `url(https://webdev-api.loftschool.com/${review[key]})`;
        } else {
          state.selectedReview[key] = review[key];
        }
      }
    },
    EDIT_REVIEW: (state, newReview) => {
      state.reviews = state.reviews.map(review => {
        if (review.id === newReview.id) {
          review = newReview;
        }
        return review;
      });
    }
  },
  actions: {
    async viewReviews({ commit }) {
      try {
        const response = await this.$axios.get('/user');
        const { data } = await this.$axios.get(`/reviews/${response.data.user.id}`);
        commit('ADD_ALL_REVIEWS', data);
      } catch (error) {

      }
    },

    async addReview({ commit }, review) {
      try {
        const { data } = await this.$axios.post('/reviews', review);
        commit('ADD_NEW_REVIEW', data);
        commit('CLEAR_SELECTEDREVIEW');
      } catch (error) {

      }
    },

    async deleteReview({ commit }, reviewId) {
      try {
        const { data } = await this.$axios.delete(`/reviews/${reviewId}`);
        commit('DELETE_REVIEW', reviewId);

      } catch (error) {

      }
    },

    async changeReview({ commit, state }, review) {
      try {
        const { data } = await this.$axios.post(`/reviews/${state.selectedReview.id}`, review)
        commit('EDIT_REVIEW', data.review);
        commit('CLEAR_SELECTEDREVIEW');
      } catch (error) {

      }
    }
  }
}
