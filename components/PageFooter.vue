<template>
  <footer class="footer">
    <section class="footer__about-us">
      <h2 class="footer__title">
        Company
      </h2>
      <ul class="footer__items">
        <li class="footer__item">
          <a href="#" class="footer__link">About Us</a>
        </li>
        <li class="footer__item">
          <a href="#" class="footer__link">Careers</a>
        </li>
        <li class="footer__item">
          <a href="#" class="footer__link">Sell on Jet</a>
        </li>
        <li class="footer__item">
          <a href="#" class="footer__link">Jet Affiliates</a>
        </li>
        <li class="footer__item">
          <a href="#" class="footer__link">JetCares</a>
        </li>
        <li class="footer__item">
          <a href="#" class="footer__link">Tech Blog</a>
        </li>
      </ul>
    </section>
    <section class="footer__social">
      <h2 class="footer__title">
        Social
      </h2>
      <ul class="footer__items footer__items--inline">
        <li class="footer__item">
          <a class="footer__link">vk</a>
        </li>
        <li class="footer__item">
          <a class="footer__link">fb</a>
        </li>
        <li class="footer__item">
          <a class="footer__link">instagram</a>
        </li>
        <li class="footer__item">
          <a class="footer__link">telegram</a>
        </li>
      </ul>
    </section>
    <section class="footer__copyright">
      <h2 class="visually-hidden">
        Copyright
      </h2>
      <p>Copyright © 2017 Jet.com, Inc.</p>
    </section>
  </footer>
</template>

<script>
export default {
  name: 'PageFooter',
};
</script>

<style lang="scss" scoped>
@import '~assets/variables';

.footer {
  display: grid;
  grid-template-areas: "social" "copyright";
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  padding-top: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  background-color: rgb(231, 231, 231);
  color: rgb(102, 102, 102);

  @media (min-width: $screen-md) {
    grid-template-areas:
      "company social"
      "copyright copyright";
    grid-template-columns: 1fr 1fr;
  }

  &__title {
    margin-bottom: 1rem;
    text-align: center;
    font-size: .875rem;
    line-height: 19px;
    color: rgb(51, 51, 51);

    @media (min-width: $screen-md) {
      text-align: left;
    }
  }

  &__items {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0;
    list-style-type: none;

    @media (min-width: $screen-md) {
      justify-content: flex-start;
    }

    &--inline {
      display: flex;
      flex-direction: row;

      .footer__item:not(:first-child) {
        margin-left: 1rem;
      }
    }
  }

  &__link {
    color: rgb(51, 51, 51);
  }

  &__about-us {
    grid-area: company;
    margin-bottom: 1.5rem;
    display: none;

    @media (min-width: $screen-md) {
      display: block;
    }
  }

  &__social {
    grid-area: social;
    margin-bottom: 1.5rem;
  }

  &__copyright {
    grid-area: copyright;
    border-top: 1px solid rgb(204, 204, 204);
    padding-top: .5rem;
    padding-bottom: .5rem;
    text-align: center;
  }
}
</style>
