<template>
  <main>
    <section class="slider">
      <h2 class="visually-hidden">
        Slides
      </h2>
      <ul class="slider__slides">
        <li class="slider__slide">
          <h3 class="slider__title">
            Slide Title
          </h3>
          <p class="slider__description">
            Lorem ipsum dolor sit amet.
          </p>
        </li>
      </ul>
    </section>

    <section class="deals">
      <h2 class="visually-hidden">
        Deals
      </h2>
      <ul class="deals__items">
        <li class="deals__item">
          <a href="/" class="deals__link deals__link--image-left">
            <h3 class="deals__title">Title</h3>
            <p class="deals__description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, pariatur.
            </p>
            <div class="deals__image deals__image--left">.</div>
          </a>
        </li>
        <li class="deals__item">
          <a href="/" class="deals__link deals__link--image-right">
            <h3 class="deals__title">Title</h3>
            <p class="deals__description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, pariatur.
            </p>
            <div class="deals__image deals__image--right">.</div>
          </a>
        </li>
      </ul>
    </section>

    <section class="featured">
      <h2 class="visually-hidden">
        Featured categories
      </h2>
      <ul class="featured__items">
        <li class="featured__item">
          <!--фоновое изображение-->
          <h3 class="featured__title">
            Title
          </h3>
        </li>
      </ul>
    </section>

    <section class="customer-banner">
      <h2 class="visually-hidden">
        Contacts
      </h2>
      <p class="customer-banner__text">
        Lorem ipsum dolor sit amet.
      </p>
      <ul class="customer-banner__items">
        <li class="customer-banner__item">
          1
        </li>
        <li class="customer-banner__item">
          2
        </li>
        <li class="customer-banner__item">
          3
        </li>
        <li class="customer-banner__item">
          4
        </li>
      </ul>
    </section>
  </main>
</template>

<script>
export default {
  components: {
  },
};
</script>

<style lang="scss" scoped>
@import "~assets/variables.scss";

.social-links {
  display: flex;
  padding: 0;
  list-style-type: none;

  &__item:not(:first-child) {
    margin-left: 1rem;
  }
}

.featured__items {
  display: flex;
  list-style-type: none;
}

.deals {
  margin-top: 2rem;
  &__items {
    list-style-type: none;
    padding: 0;
  }

  &__item {
    width: 100%;
    height: 150px;
    margin-bottom: 1rem;
    padding: 0 1rem;
  }

  &__link {
    display: flex;
    flex-direction: column;
    position: relative;
    height: 120px;
    margin: 15px 0;
    padding: 1rem 1rem 1rem 1rem;
    background-color: $white;

    &--image-left {
      padding-left: calc(130px + 1rem);
    }

    &--image-right {
      padding-right: calc(130px + 1rem);
    }
  }

  &__title {
    margin-bottom: .5rem;
    font-size: 1.1875rem;
    font-weight: 900;
    line-height: 1.5625rem;
    max-height: 1.5625rem;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
    color: #f36;
  }

  &__description {
    max-height: 2.125rem;
    width: 100%;
    height: 2.4rem;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #333;
    fill: #333;
    font-size: .8125rem;
    line-height: 17px;
  }

  &__image {
    position: absolute;
    top: -1rem;
    width: 150px;
    height: 150px;
    background-image: url(https://jetimages.jetcdn.net/videos/cms_images/web_home/deals_deals2_9Sonos.png);
    background-size: contain;

    &--left {
      left: -0.375rem;
    }

    &--right {
      right: -0.375rem;
    }
  }
}

.slider {
  height: 520px;
  overflow: hidden;

  &__slides {
    display: flex;
    height: 100%;
    list-style-type: none;
    padding: 0;
  }

  &__title {
    font-size: 2.25rem;
    letter-spacing: -2px;
    line-height: 1.111;
    max-height: 3.361em;
    padding-bottom: .11em;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  &__description {
    padding: .5rem 1rem;
    font-size: 1.25rem;
    background-color: rgba(0,0,0,0.3);
    color: $white;
    border: 3px solid $white;
  }

  &__slide {
    // эту хрень делать нужно уже чере компоненты и с всей мозью vue,
    // а не на голом css(ибо часть свойств очень динамичные должны быть
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-size: cover;
    background: url(https://jetimages.jetcdn.net/videos/cms_images/web_home/1225_HP_HERO_Allure_dsktp_V2.jpg) no-repeat center center;
  }
}

.customer-banner {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: .5rem;
  background-color: rgb(54, 0, 96);
  color: $white;

  &__items {
    display: flex;
    padding: 0;
    list-style-type: none;
  }

  &__item:not(:first-child) {
    margin-left: 5px;

    &:before {
      content: ' | ';
    }
  }
}
</style>
