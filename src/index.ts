import {App} from 'vue';
import GeetestCaptcha from './GeetestCaptcha.vue';
import {CaptchaConfig} from "@/types/types";

function loadGeetestScript(callback: () => void) {
    const script = document.createElement('script');
    script.id = 'geetest';
    script.src = 'https://static.geetest.com/v4/gt4.js';
    script.onload = callback;
    script.onerror = () => {
        console.error('Failed to load Geetest.');
    };
    document.head.appendChild(script);
}

const Geetest = {
    install(app: App, options?: CaptchaConfig) {
        loadGeetestScript(() => {
            app.component('GeetestCaptcha', GeetestCaptcha);
            if (options) {
                app.provide('geetest-config', options);
            }
        });
    }
};

export default Geetest;
export {GeetestCaptcha};
export type {CaptchaConfig};
