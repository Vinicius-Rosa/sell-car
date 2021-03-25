
const state = {
    showForm: false,
    selectedItem: null
}

const mutations = {
    shouldShowForm: state => {
        state.showForm = true;
    },

    shouldHideForm: state => {
        state.showForm = false;
    },

    setSelectedItem: (state, value) => {
        state.selectedItem = value;
    },
}

export { state, mutations }