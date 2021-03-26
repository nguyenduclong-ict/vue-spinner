import Vue from "vue";
import Spinner from "./assets/Spinner";
import SpinnerMask from "./assets/SpinnerMask";
import "./assets/spinner.css";
import "spinkit/spinkit.min.css";

export default function () {
  Vue.component(Spinner);
  const SpinnerMaskClass = Vue.extend(SpinnerMask);

  function initLoader(el, state, options) {
    try {
      const propsData = {
        name: el.getAttribute("spinner-name") || undefined,
        color: el.getAttribute("spinner-color") || undefined,
        size: el.getAttribute("spinner-size") || undefined,
        ...options,
      };
      if (!el.__spinner || !el.spinner.mask) {
        const mask = new SpinnerMaskClass({ propsData });
        mask.$mount();
        el.__spinner = {
          mask,
        };
      }
      updateLoader(el, state, options);
    } catch (error) {}
  }

  function updateLoader(el, state, options) {
    try {
      const propsData = {
        name: el.getAttribute("spinner-name") || undefined,
        color: el.getAttribute("spinner-color") || undefined,
        size: el.getAttribute("spinner-size") || undefined,
        ...options,
      };
      Object.assign(el.__spinner.mask, propsData);
      if (state) {
        el.appendChild(el.__spinner.mask.$el);
        el.classList.add("spinner-parent");
      } else {
        el.removeChild(el.__spinner.mask.$el);
        el.classList.remove("spinner-parent");
      }
    } catch (error) {}
  }

  Vue.directive("spinner", {
    bind(el, binding) {
      initLoader(el, binding.value);
    },
    update(el, binding) {
      updateLoader(el, binding.value);
    },
    unbind(el, binding) {
      try {
        el.removeChild(el.__spinner.mask.$el);
        el.classList.remove("spinner-parent");
      } catch (error) {}
    },
  });

  Vue.mixin({
    methods: {
      $spinner(config) {
        config = {
          el: document,
          ...config,
        };
        const { el, duration, ...options } = config;
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
            delete el.__spinner;
          },
        };
        return inject;
      },
    },
  });
}
