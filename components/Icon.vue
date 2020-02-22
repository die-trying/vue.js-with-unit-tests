<template>
  <div class="mobile-menu__icon">
    <svg v-if='name==="home"' viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path fill="currentColor" d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"/></svg>
    <svg v-if='name==="back"' viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z"/></svg>    
    <svg v-if='name==="close"' viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>
    <svg v-if='name==="right"' viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path fill="currentColor" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"/></svg>
  </div>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    name: {
      type: String,
      default: 'close',
      validator: function (value) {
        return ['close', 'home', 'back','right'].indexOf(value) !== -1
      }
    },
  },
}  
</script>
