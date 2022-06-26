<template>
    <div class="gallery__container _container">
        <h2>Кадры со съемок</h2>
        <div class="gallery">
            <div class="gallery__items">
                <div v-for="(image, index) in visibleImages" :key="image + index" class="gallery__item" :class="image.modifiers">
                    <img :src="require(`../assets/images/galleryImages/${image.name}.jpg`)" alt="photo">
                </div>
            </div>
        </div>
        <button class="gallery__btn btn transparent-btn">Показать еще</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            images: [
                {name: 'Photo1', modifiers: 'gallery__item-big'},
                {name: 'Photo2', modifiers: ''},
                {name: 'Photo3', modifiers: ''},
                {name: 'Photo4', modifiers: ''},
                {name: 'Photo5', modifiers: ''},
                {name: 'Photo1', modifiers: ''},
                {name: 'Photo2', modifiers: ''},
                {name: 'Photo3', modifiers: ''},
                {name: 'Photo4', modifiers: ''},
                {name: 'Photo5', modifiers: 'gallery__item-big'},
            ],
            step: 0
        }
    },
    computed: {
        visibleImages() {
            return this.images.slice(0, 5 * (this.step+1))
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/mixins';
.gallery__container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 72px;
    @include laptop { margin-bottom: 64px; }
    @include tablet { margin-bottom: 48px; }

    h2 {
        width: 100%;
        margin-bottom: 40px;
        @include laptop { margin-bottom: 24px; }
    }
    .gallery {
        width: 100%;
    }
    .gallery__btn {
        width: 100%;
        margin-top: 32px;
        @include laptop { margin-top: 24px; }
    }
}
    .gallery__items {
        width: 100%;
        display: grid;
        gap: 10px;
        grid-template-columns: repeat(auto-fit , minmax(282px, 1fr));
        .gallery__item {
            position: relative;
            padding: 0px 0px 85% 0px;
            img {
                position: absolute;
                top: 0; left: 0;
                width: 100%;
                height: 100%;
                object-fit: cover;

            }
        }
        .gallery__item-big {
            grid-column: span 2;
            grid-row: span 2;
        }
    }
</style>