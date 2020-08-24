"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vue_1 = __importDefault(require("vue"));
const Loading_1 = __importDefault(require("./Loading"));
const LoadingMask_1 = __importDefault(require("./LoadingMask"));
require("./loading.css");
require("spinkit/spinkit.min.css");
function default_1() {
    vue_1.default.component(Loading_1.default);
    const CLoadingMask = vue_1.default.extend(LoadingMask_1.default);
    function initLoader(el, state, options) {
        try {
            const propsData = Object.assign({ name: el.getAttribute('loading-name') || undefined, color: el.getAttribute('loading-color') || undefined, size: el.getAttribute('loading-size') || undefined }, options);
            if (!el.__loading || !el.loading.mask) {
                const mask = new CLoadingMask({ propsData });
                mask.$mount();
                el.__loading = {
                    mask,
                };
            }
            updateLoader(el, state, options);
        }
        catch (error) { }
    }
    function updateLoader(el, state, options) {
        try {
            const propsData = Object.assign({ name: el.getAttribute('loading-name') || undefined, color: el.getAttribute('loading-color') || undefined, size: el.getAttribute('loading-size') || undefined }, options);
            Object.assign(el.__loading.mask, propsData);
            if (state) {
                el.appendChild(el.__loading.mask.$el);
                el.classList.add('loading-parent');
            }
            else {
                el.removeChild(el.__loading.mask.$el);
                el.classList.remove('loading-parent');
            }
        }
        catch (error) { }
    }
    vue_1.default.directive('loading', {
        bind(el, binding) {
            initLoader(el, binding.value);
        },
        update(el, binding) {
            updateLoader(el, binding.value);
        },
        unbind(el, binding) {
            try {
                el.removeChild(el.__loading.mask.$el);
                el.classList.remove('loading-parent');
            }
            catch (error) { }
        },
    });
    vue_1.default.mixin({
        methods: {
            $loading(config) {
                config = Object.assign({ el: document }, config);
                const { el, duration } = config, options = __rest(config, ["el", "duration"]);
                initLoader(el, true, options);
                if (duration) {
                    setTimeout(() => {
                        updateLoader(el, false, options);
                    }, duration);
                }
                const inject = {
                    el,
                    show() {
                        updateLoader(el, true, options);
                    },
                    hide() {
                        updateLoader(el, false, options);
                    },
                    destroy() {
                        updateLoader(el, false, options);
                        delete el.__loading;
                    },
                };
                return inject;
            },
        },
    });
}
exports.default = default_1;
