<template>
  <div class="main__wrapper">
    <my-header></my-header>
    <router-view></router-view>
    <my-footer></my-footer>
    <Teleport to="body" >
      <modal v-if="showModal"></modal>
    </Teleport>
  </div>
</template>

<script>
import MyHeader from './components/Header.vue';
import MyFooter from './components/Footer.vue';
import Modal from './components/Modal.vue';
import { mapState } from 'vuex';

export default {
  name: 'App',
  components: { 
    MyHeader,
    MyFooter,
    Modal
  },
  computed: {
    ...mapState({showModal: 'showModal'})
  }
}
</script>

<style lang="scss">
/** ==================IMPORTS======================= */

@import './assets/colors';
@import './assets/mixins';

/** ==================BASE======================= */

.main__wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: $gray;
  min-height: 100vh;
  height: 100%;
  width: 100%;
  margin-top: 88px;
  @include tablet { margin-top: 72px; }
  @include phone { margin-top: 80px; }

  .main__container {
    height: 100%;
    width: 100%;
  }
}

/** ==================ELEMENTS======================= */

.btn {
  color: inherit;
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
  transition: ease 0.2s;
  &:hover {
    background-color: $brightRed;
    box-shadow: 0px 2px 24px rgba(255, 30, 30, 0.5);
  }
}
.filled-btn {
  background: $red;
  transition: ease 0.2s;
  &:hover {
  background-color: $brightRed;
    box-shadow: 0px 2px 24px rgba(255, 30, 30, 0.5);
  }
}
._container {
  max-width: 1440px;
  padding: 0px 120px;
  @include laptop { padding: 0px 64px; }
  @include tablet { padding: 0px 16px; }
}
</style>