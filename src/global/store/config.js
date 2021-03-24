
const state = {
    showForm: false
}

const mutations = {
    shouldShowForm: state => {
        state.showForm = true;
    },

    shouldHideForm: state => {
        state.showForm = false;
    },
}

export { state, mutations }