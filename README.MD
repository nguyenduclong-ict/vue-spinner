# Simple loading for vue

## Install:

```
import vSpinner from 'v-spinner'
vSpinner()
```

## Example:
```
<div v-loading="true" loading-name="pulse" loading-color="red">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ad ullam
    voluptatem reiciendis voluptas eveniet optio tenetur eum voluptatum quam,
    reprehenderit pariatur dolorem iure quos molestias esse quo, laudantium
  vitae!
</div>
```
## Component Attributes

| name          | default | acept value                                                                    |
| ------------- | ------- | ------------------------------------------------------------------------------ |
| loading-name  | plane   | plane,chase,bounce,wave  pulse,flow,swing,circle,circle-fade,grid,fold  wander |
| loading-color |         |                                                                                |
| loading-size  |         |                                                                                |


## Using with method
```
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
  methods : {
    show () {
      this.loader = this.loader || this.$loading({ el: this.$refs.content })
      this.loader.show()
    },
    hide () {
      this.loader.hide()
    }
  }
}
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


