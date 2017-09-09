import { Tooltip } from '../src';
import Vue from 'vue/dist/vue.js';

describe('can mount', () => {
    Vue.component('tooltip', Tooltip);

    beforeEach(() => {
        document.body.innerHTML = `
            <div id="app">
                <tooltip></tooltip>
            </div>
        `;
    });

    it('can mount', async () => {
        await createVm();

        expect(document.body.innerHTML).toMatchSnapshot();
    });
});

async function createVm() {
    const vm = new Vue({
        el: '#app',
    });

    await Vue.nextTick(() => {});

    return { app: vm, component: vm.$children[0] };
}
