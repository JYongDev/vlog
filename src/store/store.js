import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        count:0
    },
    mutations:{
        increate:function(state){
            state.count++;
        }
    },
    getters:{
        getCount:function(state){
            return state.count;
        }
    }
});

export default store;