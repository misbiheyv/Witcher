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
        <Teleport to="body" >
            <modal v-if="showModal"></modal>
        </Teleport>
    </div>
</template>

<script>
import Slider from '../components/Slider.vue'
import Gallery from '../components/Gallery.vue'
import MyMap from '../components/Map.vue'
import Modal from '../components/Modal.vue'
import { mapState } from 'vuex'

export default {
    components: { 
        Slider,
        Gallery,
        MyMap,
        Modal
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
    computed: {
        ...mapState({showModal: 'showModal'})
    },
    methods: {
        onResize() {
            this.innerWidth = window.innerWidth
        }
    }
}
</script>

<style lang="scss" scope>

/** ==================IMPORTS======================= */

@import '../assets/mixins';

/** =================MAIN=CONTENT======================= */

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

/** =================MAIN=SECTIONS======================= */

.section__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    @include laptop { display: block; }
    // .map-section { width: 100%; }
    .section-title { width: 100%; }
}
</style>