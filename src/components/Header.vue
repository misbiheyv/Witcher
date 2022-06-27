<template>
    <header class="header__container">
      <div class="header _container">
        <div class="header__logo"></div>
        <button class="header__btn transparent-btn btn"><p>Подключить подписку</p></button>
      </div>
    </header>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">

/** ==================IMPORTS======================= */

@import '../assets/colors';
@import '../assets/mixins';

/** ==================HEADER=BASE====================== */

.header__container {
    position: fixed;
    top: 0;
    display: flex;
    justify-content: center;
    background-color: black;
    width: 100%;
    height: 88px;
    z-index: 50;

    @include tablet { height: 72px; }
    @include phone { height: 80px; }

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        width: 100%;

        &__logo {
            height: 44px;
            width: 130px;
            background-image: url(../assets/images/logo.png);
            background-position: center;
            background-size: contain;
            background-repeat: no-repeat;
            position: relative;
            margin-right: 15px;
        }

        &__btn {
            @media (max-width: 400px) {
            max-width: 209px;
            min-width: max-content;
            padding: 16px 16px;
            p {
                font-size: 14px;
                white-space: nowrap;
            }
            }
        }
    }
}

</style>