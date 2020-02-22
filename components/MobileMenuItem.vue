<template>
  <div class="menu-item">
    <a :href='!isGroup ? fullPath : ""' class="menu-item__link" @click.prevent='handleClick'>
      <div class="menu-item__avatar-container">
        <div class="menu-item__avatar">
            <img v-if='item.thumbnail' class='menu-item__image' :src="item.thumbnail" :alt="item.name">
        </div>
          <span class="menu-item__badge">
            {{ item.product_count }}
          </span>
      </div>

      <div class="menu-item__content">
        {{ item.name }}
      </div>
      <div class="menu-item__group">
        <gm-icon name='right' class='menu-item__icon' v-if='isGroup' />
      </div>
    </a>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import GmIcon from './Icon'
const ROOT_PATH = 'https://gdematerial.ru/catalog'
export default {
  name: 'MenuItem',
  props: {
    item: {
      type: Object,
      default: () => ({id: '', name: '', thumbnail: ''})
    }
  },
  computed: {
    isGroup() {
      return ('submenu' in this.item)
    },
    fullPath() {
      return `${this.rootPath}/${this.path}/${this.item.slug}`
    },
    ...mapGetters({
      path: 'the_menu/getLinkPath'
    })
  },
  methods:  {
    handleClick() {
      if (this.isGroup) {
        this.$store.dispatch('the_menu/stepNext', this.item)
        this.$emit('slide', 'right')
      } else {
        this.$store.dispatch('the_menu/setMenuHide')
        location.href = this.fullPath
      }

    }
  },
  created() {
    this.rootPath = ROOT_PATH
  },
  mounted() {},
  components: { GmIcon }
}
</script>

<style lang='scss' scoped>
@import "~assets/variables.scss";
  .menu-item {
    width: 100%;
    height: 64px;
    padding-left: 3px;
    padding-right: 10px;
    box-sizing: border-box;
    @media (min-width: $screen-md) {
      padding: 3px 10px;
    }     
    &:hover {
      background-color:#eee;
    }
    &__link {
      display: flex;
      align-items: center;
      height: 100%;
      text-decoration: none;

      &:hover
      &:active,      
      &:focus {
        color: inherit;
        background-color: inherit;
        outline: none;
      }
    }
    &__avatar-container {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      margin-right: 28px;
    }
    &__avatar {
      width: 48px;
      height: 48px;
      display: flex;
      border-radius: 50%;
      background-color: #ddd;
      overflow: hidden;

    }
    &__badge {
      font-size: 10px;
      background-color:red;
      color: white;
      position: absolute;
      top: -6px;
      right: -14px;
      border-radius: 5px;
      padding: 4px;
    }
    &__image {
      min-width: 100%;
      max-width: 100%;
      min-height: 100%;
      max-height: 100%;
      object-fit: cover;
      display: block;
    }
    &__content {
      color: grey;
      text-transform: uppercase;
      font-weight: 500;
      text-overflow: ellipsis;
      font-size: 14px;
      // width: 100%;
      flex: 1;
      @media (min-width: $screen-md) {
        font-size: 16px;
      }       
    }
    &__group {
      width: 24px;
    }
    &__icon {
      width: 24px;
      height: 24px;
      color: teal;
    }
  }
</style>