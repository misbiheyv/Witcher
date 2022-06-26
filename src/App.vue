<template>
  <div class="main__wrapper">
    <my-header></my-header>

    <div class="main__container _container">
      <div></div>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
import MyHeader from './components/Header.vue'
import MyFooter from './components/Footer.vue'

export default {
  components: { 
    MyHeader,
    MyFooter,
  },
  name: 'App',
}
</script>

<style lang="scss">
  @import './assets/colors';
  @import './assets/mixins';

  .main__wrapper {
    background-color: $gray;
    min-height: 100vh;
    // height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .main__container {
      // min-height: 100vh;
      height: 100%;
      width: 100%;
    }
  }
  /** ==================ELEMENTS======================= */
  .btn {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 16px 32px;
    gap: 10px;

    font-weight: 600;
    line-height: 24px;
  }
  .transparent-btn {
    background: rgba(236, 63, 63, 0.15);
    border: 1px solid rgba(236, 63, 63, 0.8);
  }
  ._container {
    max-width: 1440px;
    padding: 0px 120px;
    @include laptop { padding: 0px 64px; }
    @include tablet { padding: 0px 16px; }
  }
</style>