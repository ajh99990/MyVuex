import Vue from "vue"
import myVuex from "../myVuex"

Vue.use(myVuex)

export default new myVuex.store({
    state: {
        counter: 0
    },
    mutations: {
        addCounter(state, payload) {
            state.counter += payload;
        },
    },
    actions: {
        asyncAddCounter({ commit }, payload) {
            console.log(this)
            return new Promise((resolve) => {
                setTimeout(() => {
                    commit("addCounter", payload);
                    resolve("成功！")
                }, 1000)
            })
        },
    },
    getters: {
        getCounter({ state }) {
            return `当前counter的值为${state.counter}`
        }
    }
})