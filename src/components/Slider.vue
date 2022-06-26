<template>
    <div class="slider _container">
        <nav class="slider__navigation">
            <h2>Актерский состав</h2>
            <div class="nav-buttons__container">
                <button class="nav-btn left-btn" :class="possibleSwipePrev?'btn-active':''" @click="slidePrevious">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="32" viewBox="0 0 18 32" fill="none">
                    <path d="M0.723995 15.1219L15.5249 0.361867C16.0099 -0.121444 16.795 -0.120631 17.2791 0.364367C17.7629 0.849302 17.7616 1.63486 17.2766 2.11855L3.35667 16L17.2771 29.8815C17.7621 30.3652 17.7633 31.1503 17.2796 31.6353C17.0369 31.8784 16.719 32 16.4011 32C16.0839 32 15.7672 31.8792 15.525 31.6378L0.723995 16.8782C0.490435 16.6458 0.359371 16.3295 0.359371 16C0.359371 15.6706 0.49081 15.3547 0.723995 15.1219Z" :fill="possibleSwipePrev?'#EC3F3F':'#ffffff4d'"/>
                    </svg>
                </button>
                <button class="nav-btn right-btn" :class="possibleSwipeNext?'btn-active':''" @click="slideNext">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="32" viewBox="0 0 18 32" fill="none">
                    <path d="M0.723995 15.1219L15.5249 0.361867C16.0099 -0.121444 16.795 -0.120631 17.2791 0.364367C17.7629 0.849302 17.7616 1.63486 17.2766 2.11855L3.35667 16L17.2771 29.8815C17.7621 30.3652 17.7633 31.1503 17.2796 31.6353C17.0369 31.8784 16.719 32 16.4011 32C16.0839 32 15.7672 31.8792 15.525 31.6378L0.723995 16.8782C0.490435 16.6458 0.359371 16.3295 0.359371 16C0.359371 15.6706 0.49081 15.3547 0.723995 15.1219Z" :fill="possibleSwipeNext?'#EC3F3F':'#ffffff4d'"/>
                    </svg>
                </button>
            </div>
        </nav>
        <div class="progress-bar">
            <div class="running-bar"></div>
        </div>
        <div class="slider__wrapper">
            <ul class="slides__container">
                <li v-for="(slide, index) in slides" :key="slide+index" class="slide">
                    <img class="slide__img" :src="require(`../assets/images/sliderImages/${slide.image}.png`)" alt="hero-picture" />
                    <div class="info__container">
                        <div class="main-info">
                            <h4 class="info-element hero-name">{{ slide.heroName }}</h4>
                            <p class="info-element actor-name">{{ slide.actorName }}</p>
                        </div>
                        <p class="info-element hero-description"> {{ slide.description.length>0 ? slide.description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum provident iusto at nesciunt doloribus minus ab totam commodi ipsa molestiae! Dolorum delectus dolore et nisi ut neque autem nesciunt? Eius!'}} </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            iterator: 0,
            slidesToShow: undefined,
            slides: [
                {
                    heroName: 'Геральт',
                    actorName: 'Генри Кавилл',
                    description: '',
                    image: 'geralt'
                },
                {
                    heroName: 'Лютик',
                    actorName: 'Джои Бэти',
                    description: 'Один из центральных персонажей сериала, лучший друг и неизменный спутник Геральта, трубадур и бабник',
                    image: 'lutik'
                },
                {
                    heroName: 'Йеннифэр',
                    actorName: 'Аня Чалотра',
                    description: '',
                    image: 'ieniffer'
                },
                {
                    heroName: 'Цири',
                    actorName: 'Фрейя Аллан',
                    description: '',
                    image: 'ciri'
                },
                {
                    heroName: 'Эмгыр вар Эмрейс',
                    actorName: 'Барт Эдвардс',
                    description: '',
                    image: 'emgyr'
                },
                {
                    heroName: 'Геральт',
                    actorName: 'Генри Кавилл',
                    description: '',
                    image: 'geralt'
                },
                {
                    heroName: 'Лютик',
                    actorName: 'Джои Бэти',
                    description: '',
                    image: 'lutik'
                },
            ]
        }
    },
    mounted() {
        this.onResize()
        window.addEventListener('resize', this.onResize)
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.onResize)
    },
    methods: {
        slideNext() {
            if (this.possibleSwipeNext) {
                const elWidth = document.querySelector('.slide').getBoundingClientRect().width
                const elMargin = parseInt(window.getComputedStyle(document.querySelector('.slide')).marginRight, 10)
                const slider = document.querySelector('.slides__container')

                slider.style.transition = 'transform .5s';
                slider.style.transform = 'translateX(-' + `${++this.iterator*(elWidth+elMargin)}` + 'px)'
            }
        },
        slidePrevious() {
            if (this.possibleSwipePrev) {
                const elWidth = document.querySelector('.slide').getBoundingClientRect().width
                const elMargin = parseInt(window.getComputedStyle(document.querySelector('.slide')).marginRight, 10)
                const slider = document.querySelector('.slides__container')

                slider.style.transition = 'transform .5s';
                slider.style.transform = 'translateX(-' + `${--this.iterator*(elWidth+elMargin)}` + 'px)'
            }
        },
        onResize() {
            let count;
            const containerWidth = document.querySelector('.slides__container').getBoundingClientRect().width
            const slideWidth = document.querySelector('.slide').getBoundingClientRect().width
            const elMargin = parseInt(window.getComputedStyle(document.querySelector('.slide')).marginRight, 10)
            count = Math.floor(containerWidth/(slideWidth+elMargin))
            this.slidesToShow = count;

            document.querySelector('.running-bar').style.transition = 'all .3s';
            const progressWidth = (this.iterator + this.slidesToShow)/this.slides.length*100
            document.querySelector('.running-bar').style.width = `${progressWidth < 100? progressWidth: 100}%`;
        }
    },
    computed: {
        possibleSwipeNext() {
            return this.iterator + this.slidesToShow < this.slides.length
        },
        possibleSwipePrev() {
            return this.iterator > 0
        },
    },
    watch: {
        iterator(cur) {
            document.querySelector('.running-bar').style.transition = 'all .3s';
            document.querySelector('.running-bar').style.width = `${(cur + this.slidesToShow)/this.slides.length*100}%`;
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/mixins';
@import '../assets/colors';
@mixin card($height) {
    height: ($height);
    width: $height * 0.705;
}

.slider {
    width: 100%;
    overflow: hidden;

    margin-bottom: 72px;
    @include laptop { margin-bottom: 64px; }

    .slider__navigation {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 24px;
        @include tablet { margin-bottom: 16px; }

        .nav-buttons__container {
            height: 100%;

            .nav-btn {
                background: none;
                height: 100%;
                display: inline-flex;
                align-items: center;
            }
            .btn-active:hover {
                filter: drop-shadow(0px 2px 12px #FF1E1E);
            }
            .left-btn {
                margin-right: 40px;
                @include tablet {margin-right: 24px;}
            }
            .right-btn {
                transform: rotate(180deg);
            }
        }
    }
    .progress-bar {
        width: 100%;
        height: 4px;
        background: rgba($color: #fff, $alpha: .3);
        margin-bottom: 32px;
        @include tablet { margin-bottom: 24px; }
        .running-bar {
            background: $red;
            height: 4px;
            width: 0%;
            opacity: 1;
        }
    }
    .slider__wrapper{
        width: 100%;
        .slides__container {
            width: 100%;
            display: flex;
            .slide {
                @include card(400px);
                @include laptop { @include card(360px); };
                @include tablet { @include card(280px); };

                flex-shrink: 0;
                position: relative;
                transition: ease .3s;
                cursor: pointer;
                &:not(:last-child) {
                    margin-right: 24px;
                    @include tablet { margin-right: 16px; };
                }
                .slide__img {
                    position: absolute;
                }
    
                .info__container {
                    transition: ease .3s;
                    width: 100%;
                    padding: 24px 24px 32px 24px;
                    z-index: 2;
                    position: absolute;
                    bottom: 0; left: 0;
                    .hero-description { transition: ease .3s; display: none; }
                }
                &:hover {
                    .info__container {
                        display: flex;
                        height: 100%;
                        flex-direction: column;
                        justify-content: space-between;
                        background-color: rgba($color: #000000, $alpha: .5);
                        .hero-description { display: block; }
                    }
                }
            }
        }
    }
}
img {
    width: 100%;
    height: 100%;
}
</style>