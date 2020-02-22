<template>
    <div>
      <div class='mobile-menu' :class='{isactive: showMenu}'>
        <div class="mobile-menu__container">
          <div class="mobile-menu__header">
            <mobile-menu-header @slide='handleSlide'/>
          </div>
          <perfect-scrollbar class="mobile-menu__body">          
            <transition-group 
              tag='div' 
              ref='list'
              class='mobile-menu__list' 
              :css='false'
              @enter='enterCb'
              @after-enter='afterCb'
              @leave='leaveCb'
              @before-enter='beforeCb'
            >
              <div class="mobile-menu__slide" v-for='slide in [slideMenu]' :key='slide.id'> 
                <mobile-menu-item v-for='(item,index) in menu' :key='index' :item='item' @slide='handleSlide'/>
              </div>
            </transition-group>
            </perfect-scrollbar>
          <div class="mobile-menu__footer" @click='handleAll'>
              <span class="mobile-menu__footer-link">Все материалы категории...</span>
          </div>
        </div>
      </div>
      <div class="mobile-menu__overlay" :class='{isactive: showMenu}' @click='handleClose'></div>      
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import MobileMenuHeader from './MobileMenuHeader'
import MobileMenuItem from './MobileMenuItem'
const ROOT_PATH = 'https://gdematerial.ru/catalog'
export default {
  name: 'MobileMenu',
  data() {
    return {
      direction: 'right'
    }
  },
  watch: {
    showMenu(val) {
      if(!!val) {
        document.body.style.overflow ='hidden'
      } else {
        document.body.style.overflow = 'auto'
      }
    },
  },
  computed: {
    fullPath() {
      return `${this.rootPath}/${this.path}/`
    },
    ...mapGetters({
      showMenu: 'the_menu/isMenuVisible',
      menu: 'the_menu/getCurrentMenu',
      slideMenu: 'the_menu/getParent',
      path: 'the_menu/getLinkPath',
    })
  },
  methods:  {
    handleClose() {
      this.$store.dispatch('the_menu/setMenuHide')
    },
    handleAll() {
      location.href = this.fullPath
    },
    handleSlide(e) {
      this.direction = e
    },
    enterCb(el, done) {
      const list = this.$refs.list.$el
      el.classList.add('outsided')
      list.classList.add('transition')
      if (this.direction === 'right') {
        el.style.left = '100%'
        list.style.transform= `translateX(-100%)`
      } else {
        el.style.right = '100%'
        list.style.transform= `translateX(100%)`
      }
      list.addEventListener('transitionend', e => done())
    },
    afterCb(el) {
      const list = this.$refs.list.$el
      list.classList.remove('transition')
      list.style.transform= `translateX(0px)`
      el.style.left = '0'
      el.style.rigth = '0'
      el.classList.remove('outsided')
    },
    leaveCb(el, done) {
      el.classList.add('fade')
      done()
    },
    beforeCb(el) {
      console.log('before')
      // Здесь будут методы для блокировки действий пользователя на время анимации
    }
  },
  created() {
    this.rootPath = ROOT_PATH
  },
  components: {
    MobileMenuHeader, MobileMenuItem
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/variables.scss";
  .mobile-menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    z-index: 20;
    padding: 0 10px;
    transform: translateX(-100%);
    transition: transform .3s cubic-bezier(0.77, 0, 0.175, 1);   
    @media (min-width: $screen-md) {
      width: 600px;
      padding: 10px 20px;
    } 
    &.isactive {
      transform: translateX(0);
      transition: transform .6s cubic-bezier(0.165, 0.84, 0.44, 1);
    } 
    &__overlay  {
      position: fixed;
      z-index: 10;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      display: none;
      background-color: rgba(0,0,0,.3);
      &.isactive {
        display: block;
      }
    }
    &__container {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
    }  
    &__header {
      width: 100%;
      height: 10%;
      border-bottom: 1px solid rgba(0,0,0,.1);
      padding-top: 7px;
      @media (min-width: $screen-md) {
        height: 8%;
        padding-top: 0;
      }       
    }
    &__footer {
      width: 100%;
      height: 10%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &__footer-link {
      font-size: 14px;
      font-weight: 500;
      padding: 20px;
      cursor: pointer;
      &:hover {
        background-color:#ddd;
      }
      @media (min-width: $screen-md) {
        font-size: 16px;
        font-weight: 700;
        text-transform: uppercase;
      }             
    }
    &__body {
      width: 100%;
      flex: 1;
      // overflow-y: auto;
      padding-top: 20px;
      position: relative;
      // overflow: hidden;
      @media (min-width: $screen-md) {
        padding-top: 30px;
      }       
    }
    &__list {
      width: 100%;
    }
    &__slide {
      width: 100%;
    }
  }
</style>

<style lang='css'>
  .transition {
    transition: .5s
  }
  .outsided {
    position: absolute;
  }
  .fade {
    transition: .7s;
    opacity: 0;
  }
</style>