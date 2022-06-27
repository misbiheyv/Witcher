<template>
    <div class="map__container">
        <h2 class="_container">Магазины мерча ведьмака</h2>
        <div class="map__wrapper" :class="innerWidth > 1440 ? '_container' : ''">
            <div id="map">
            </div>
        </div>
    </div>
</template>

<script>
import * as L from 'leaflet'
import 'leaflet-polylinedecorator'
import 'leaflet/dist/leaflet.css'

export default {
    data() {
        return {
            map: null,
            innerWidth,
        }
    },
    mounted() {
        const icon = new L.icon({
            iconUrl: require('../assets/images/marker.png'),
            iconSize: [60, 60],
        })
        this.map = new L.map('map', {
            center: [55.751244, 37.568423],
            zoom: 12,
            zoomControl: false,
            doubleClickZoom: false,
            attributionControl: false,
        })
        
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        }).addTo(this.map);

        L.marker(L.latLng(55.751244, 37.618423), {
            zIndexOffset: 1000,
            icon
        }).addTo(this.map)
        L.marker(L.latLng(55.750037, 37.545137), {
            zIndexOffset: 1000,
            icon
        }).addTo(this.map)
        L.marker(L.latLng(55.777357, 37.516974), {
            zIndexOffset: 1000,
            icon
        }).addTo(this.map)

        this.onResize()
        window.addEventListener('resize', this.onResize)
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.onResize)
    },
    methods: {
        onResize() {
            this.innerWidth = window.innerWidth
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/mixins';
    .fake-map__wrapper {
        width: 100%;
        display: flex;
        justify-content: center;
    }
    .map__container {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        h2 {
            width: 100%;
            margin-bottom: 40px;
            @include laptop { margin-bottom: 24px; }
        }
    }
    #map {
        width: 100%;
        height: 540px;
        @include tablet {
            height: 400px;
        }
        position: relative;
        z-index: 0;
        // filter: grayscale(50%);
        filter: saturate(0);


    }
    .map__wrapper {
        width: 100%;
    }
</style>