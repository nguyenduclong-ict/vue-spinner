# Simple spinner for vue

## Install:

```
import vSpinner from 'v-spinner'
vSpinner()
```

## Example:

```
<div v-spinner="true" spinner-name="pulse" spinner-color="red">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ad ullam
    voluptatem reiciendis voluptas eveniet optio tenetur eum voluptatum quam,
    reprehenderit pariatur dolorem iure quos molestias esse quo, laudantium
  vitae!
</div>
```

## Component Attributes

| name          | default | acept value                                                                             |
| ------------- | ------- | --------------------------------------------------------------------------------------- |
| loading-name  | plane   | plane, chase, bounce, wave, pulse, flow, swing, circle, circle-fade, grid, fold, wander |
| loading-color |         |                                                                                         |
| loading-size  |         |                                                                                         |

## Using with method

```vue
<template>
  <div ref="content">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ad ullam
    voluptatem reiciendis voluptas eveniet optio tenetur eum voluptatum quam,
    reprehenderit pariatur dolorem iure quos molestias esse quo, laudantium
    vitae!
  </div>
</template>

<script>
export default {
  data() {
    return {
      spinner: null,
    };
  },
  methods: {
    show() {
      this.spinner = this.loader || this.$spinner({ el: this.$refs.content });
      this.spinner.show();
    },
    hide() {
      this.spinner.hide();
    },
  },
};
</script>
```

## Loading Options

- el
- duration
- name
- nums
- dotName
- color
- size
