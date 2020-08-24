import Vue from 'vue'
import Loading from './Loading'
import LoadingMask from './LoadingMask'
import './loading.css'
import 'spinkit/spinkit.min.css'

Vue.component(Loading)
const CLoadingMask = Vue.extend(LoadingMask)

function initLoader(el, state, options) {
  try {
    const propsData = {
      name: el.getAttribute('loading-name') || undefined,
      color: el.getAttribute('loading-color') || undefined,
      ...options,
    }
    if (!el.__loading || !el.loading.mask) {
      const mask = new CLoadingMask({ propsData })
      mask.$mount()
      el.__loading = {
        mask,
      }
    }
    updateLoader(el, state, options)
  } catch (error) {}
}

function updateLoader(el, state, options) {
  try {
    const propsData = {
      name: el.getAttribute('loading-name') || undefined,
      color: el.getAttribute('loading-color') || undefined,
      ...options,
    }
    Object.assign(el.__loading.mask, propsData)
    if (state) {
      el.appendChild(el.__loading.mask.$el)
      el.classList.add('loading-parent')
    } else {
      el.removeChild(el.__loading.mask.$el)
      el.classList.remove('loading-parent')
    }
  } catch (error) {}
}

Vue.directive('loading', {
  bind(el, binding) {
    initLoader(el, binding.value)
  },
  update(el, binding) {
    updateLoader(el, binding.value)
  },
  unbind(el, binding) {
    try {
      el.removeChild(el.__loading.mask.$el)
      el.classList.remove('loading-parent')
    } catch (error) {}
  },
})

Vue.mixin({
  methods: {
    $loading(config) {
      config = {
        el: document,
        ...config,
      }
      const { el, duration, ...options } = config
      initLoader(el, true, options)
      if (duration) {
        setTimeout(() => {
          updateLoader(el, false, options)
        }, duration)
      }
      const inject = {
        el,
        show() {
          updateLoader(el, true, options)
        },
        hide() {
          updateLoader(el, false, options)
        },
        destroy() {
          updateLoader(el, false, options)
          delete el.__loading
        },
      }
      return inject
    },
  },
})
