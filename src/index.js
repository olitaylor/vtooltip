import Tooltip from './components/Tooltip';

export default {
    install(Vue) {
        Vue.component('tooltip', Tooltip);
    }
};

export { Tooltip };