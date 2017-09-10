import { Tooltip } from '../src';
import Vue from 'vue/dist/vue.js';


describe('Tooltip', () => {
    Vue.component('tooltip', Tooltip);

    beforeEach(() => {
        document.body.innerHTML = `
            <div id="app">
                <tooltip text="Test"></tooltip>
            </div>
        `;
    });

    it('can mount', async () => {
        await createVm();

        expect(document.body.innerHTML).toMatchSnapshot();
    });

    it('check all props at once', async () => {
        
        document.body.innerHTML = `
        <div id="app">
            <tooltip text="testing" position="top" color="red" bgcolor="green" :textsize="26" :rounded="true"></tooltip>
        </div>
        `;

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
