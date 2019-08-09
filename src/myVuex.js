let Vue;

function install(_Vue) {
    Vue = _Vue;
    Vue.mixin({
        beforeCreate() {
            if (this.$options.store) {
                Vue.prototype.$store = this.$options.store;
            }
        },
    })
}

class store {
    constructor(config) {
        this.state = new Vue({
            data: config.state
        })
        this.mutations = config.mutations;
        this.actions = config.actions;
        this.handleGetters(config.getters);
    }

    commit = (name, payload) => {
        this.mutations[name](this.state, payload);
    }

    dispatch = (name, payload) => {
        this.actions[name]({ state: this.state, commit: this.commit, getters: this.getters, dispatch: this.dispatch }, payload)
    }

    handleGetters = (getters) => {
        this.getters = {};
        Object.keys(getters).forEach((key) => {
            Object.defineProperty(this.getters, key, {
                get: () => {
                    return getters[key]({ state: this.state, getters: this.getters });
                }
            })
        })
    }


}

export default { install, store }