<template>
    <div>
        <div class="main-content__container">
            <div class="main-content _container">
                <section class="main-content__about">
                    <h1>Сериал Ведьмак</h1>
                    <p>Геральт из Ривии, наемный охотник за чудовищами, перенесший мутации, идет навстречу своей судьбе в неспокойном мире, где люди часто оказываются куда коварнее чудовищ.</p>
                    <button class="filled-btn btn">Смотреть сериал</button>
                </section>
            </div>
        </div>
        <section class="section__container">
            <slider></slider>
        </section>
        <section class="section__container">
            <gallery></gallery>
        </section>
        <section class="section__container">
            <my-map></my-map>
        </section>
        <!-- <section class="section__container">
            <div class="map-section" :class="innerWidth > 1440 ? '_container' : ''">
                <h2 
                    class="map-section__title" 
                    :class="innerWidth <= 1440 ? '_container' : ''"
                > Магазины мерча ведьмака </h2>
                <div class="map-section__map-container">
                    <span class="map__marker"></span>
                    <span class="map__marker"></span>
                    <span class="map__marker"></span>
                </div>
            </div>
        </section> -->
    </div>
</template>

<script>
import Slider from './Slider.vue'
import Gallery from './Gallery.vue'
import MyMap from './Map.vue'

export default {
    components: { 
        Slider,
        Gallery,
        MyMap
    },
    mounted() {
        this.onResize()
        window.addEventListener('resize', this.onResize)
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.onResize)
    },
    data() {
        return {
            innerWidth,
        }
    },
    methods: {
        onResize() {
            this.innerWidth = window.innerWidth
        }
    }
}
</script>

<style lang="scss" scope>
@import '../assets/mixins';

.main-content__container {
    height: 440px;
    width: 100%;
    display: flex;
    justify-content: center;
    background: url(../assets/images/main.jpg) 70% 50% no-repeat;
    background-size: cover;
    margin-bottom: 72px;
    @include laptop { margin-bottom: 64px; }
    @include tablet { margin-bottom: 16px; }
    .main-content {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        &__about {
            max-width: 424px;
            h1 + p { margin-top: 24px; }
            p { margin-bottom: 40px; }
            @include laptop { 
                max-width: 370px;
                h1 + p { margin-top: 12px; }
                p { margin-bottom: 32px; }
            }
            @include tablet { 
                max-width: 280px;
                h1 + p { margin-top: 6px; }
            }
        }
    }
}

.map-section__map-container {
    background: url(../assets/images/map.png) left no-repeat;
    background-size: cover;
    height: 520px;
    width: 100%;
    position: relative;
}

.section__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    @include laptop { display: block; }
    .map-section { width: 100%; }
    .section-title {
        width: 100%; 
    }
}
.map__marker {
    background: url(../assets/images/marker.png) center;
    background-size: cover;
    position: absolute;
    z-index: 2;
    width: 50px;
    height: 50px;
}
@mixin marker1Pos($width, $height) {
    left: 199px/$width*100%;
    top: 79px/$height*100%;
}
@mixin marker2Pos($width, $height) {
    left: 299px/$width*100%;
    top: 254px/$height*100%;
}
@mixin marker3Pos($width, $height) {
    left: 600px/$width*100%;
    top: 277px/$height*100%;
}
.map__marker:nth-child(1) {
    @include marker1Pos(100%, 520px)
}
.map__marker:nth-child(2) {
    @include marker2Pos(100%, 520px)
}
.map__marker:nth-child(3) {
    @include marker3Pos(100%, 520px)
}
</style>