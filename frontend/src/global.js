import Vue from 'vue'

export function showError(e) {
    if(e && e.response && e.response.data){
        Vue.toasted.global.defaultError({ msg: e.response.data })
    } else if(typeof e === 'string') {
        Vue.toasted.global.defaultError({ msg: e })
    }else {
        Vue.toasted.global.defaultError()
    }
}

export default { showError }