<template>
  <div class="mobile-header">
    <gm-icon v-if='!isRoot' name='back' @click.native='handleBack' class='mobile-header__icon mobile-header__icon--back'/>
    <div class="mobile-header__content">
      <!-- <h3 class="mobile-header__header">Вы находитесь в разделе:</h3> -->
      <div class="mobile-header__title"> {{ parent.name }}</div>
    </div>
    <gm-icon v-if='!isRoot' name='home' @click.native='handleHome' class='mobile-header__icon mobile-header__icon--home'/>
    <gm-icon name='close' @click.native='handleClose' class='mobile-header__icon mobile-header__icon--close'/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import GmIcon from './Icon'
export default {
  name: 'MobileMenuHeader',
  props: {},
  data() {
    return {

    }
  },
  watch: {},
  computed: {
    ...mapGetters({
      isRoot: 'the_menu/isRoot',
      parent: 'the_menu/getParent'
    })
  },
  methods:  {
    handleClose() {
      this.$store.dispatch('the_menu/setMenuHide')
    },
    handleBack() {
      this.$store.dispatch('the_menu/stepPrev')
      this.$emit('slide', 'left')
    },
    handleHome() {
      this.$store.dispatch('the_menu/stepHome')
      this.$emit('slide', 'left')
    }
  },
  components: {
    GmIcon,
  }
}
</script>

<style lang='scss' scoped>
@import "~assets/variables.scss";
  .mobile-header {
      width: 100%;
      height: 100%;
      position: relative;      
      padding: 0;
      display: flex;
      // align-items: center;
      border-bottom: 2px solid rgba(0,0,0,.1);
      @media (min-width: $screen-md) {
        padding-top: 20px;
      }       
      &__content {
        display: flex;
        flex-direction: column;
        width: 100%;
        // align-items: center;
      }
      // &__header {
      //   display: none;
      //   font-size: 14px;
      //   color: teal;
      //   @media (min-width: $screen-md) {
      //     display: block;
      //   }         
      // }
      &__title {
        width: 100%;
        font-size: 12px;
        text-align: center;
        @media (min-width: $screen-md) {
          font-size: 16px;
          text-transform: uppercase;
          font-weight: 700;
        }          
      }
      &__icon {
        position: absolute;
        top: 50%;
        transform: translateY(-30%);
        @media (min-width: $screen-md) {
          transform: translateY(-50%);
        }
        width: 36px;
        height: 36px;
        cursor: pointer;
        color: teal;
        &--back {
          left: 5px;
        }
        &--home {
          right: 50px;
        }
        &--close {
          right: 5px;
        }
      }
   }
</style>