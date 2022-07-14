<template>
    <div class="modal__container" @click.self="closeModal">
        <div class="modal">
            <button class="modal__close close-btn" @click="closeModal">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M19 1L1 19" stroke="black" stroke-width="2" stroke-linecap="round"/>
                <path d="M19 19L1 1" stroke="black" stroke-width="2" stroke-linecap="round"/>
                </svg>
            </button>
            <h2 class="modal__title">Обработка данных</h2>
            <div class="modal__content">
                <section class="content__section">
                    <strong class="content__section-title">1. Что регулирует настоящая политика конфиденциальности</strong>
                    <p>
                        Настоящая политика конфиденциальности (далее — Политика) действует в отношении всей информации, включая персональные данные в понимании применимого законодательства (далее — «Персональная информация»), которую ООО «Гросс маркет» и/или его аффилированные лица, в том числе входящие в одну группу с ООО «Гросс маркет» (далее — «Гросс маркет»), могут получитьо Вас в процессе использования Вами любых сайтов, программ, продуктов и/или сервисов Гросс маркет (далее вместе  «Сервисы»), информацию о которых Гросс маркет может также получать Персональную информацию от своих партнеров (далее — «Партнеры»), сайты, программы, продукты или сервисы которых Вы используете (например, от рекламодателей Гросс маркет или службами такси). В таких случаях передача Персональной информации возможна только в случаях, установленных применимым законодательством, и осуществляется на основании специальных договоров между Гросс маркет и каждым из Партнеров.
                        Пожалуйста, обратите внимание, что использование любого из Сайтов и/или Сервисов может регулироваться дополнительными условиями, которые могут вносить в настоящую Политику изменения и/или дополнения, и/или иметь специальные условия в отношении персональной информации, размещенные в соответствующих разделах документов для таких Сайтов /или Сервисов.
                    </p>
                </section>
                <section class="content__section">
                    <strong class="content__section-title">2. Кто обрабатывает информацию</strong>
                    <p>Для обеспечения использования Вами Сайтов и Сервисов Ваша Персональная информация собирается и используется Яндексом, в том числе включая общество с ограниченной ответственностью «Гросс маркет», юридическое лицо, созданное по законодательству Российской Федерации и зарегистрированное по адресу: 123351, Россия, Москва, ул. Гроссова, д. 12 (ООО «Гросс маркет»), или его аффилированным лицом, предоставляющим соответствующий Сервис в иных юрисдикциях. С информацией о том, какое лицо предоставляет тот или иной Сервис, Вы можете ознакомиться в условиях использования соответствующего Сервиса.</p>
                </section>
                <section class="content__section">
                    <strong class="content__section-title">3. Какова цель данной Политики</strong>
                    <p>Защита Вашей Персональной информации и Вашей конфиденциальности чрезвычайно важны для Гросс маркета. Поэтому при использовании Вами Сайтов и Сервисов Гросс маркет защищает и обрабатывает Вашу Персональную информацию в строгом соответствии с применимым законодательством.</p>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    mounted() {
        this.disableScroll()
        document.addEventListener('keyup', this.onEscEvent)
        document.addEventListener('keydown', this.onEnterEvent)
    },
    beforeUnmount() {
        document.removeEventListener('keyup', this.onEscEvent)
        document.removeEventListener('keydown', this.onEnterEvent)
        this.enableScroll()
    },
    methods: {
        ...mapMutations({ closeModal: 'hideModal' }),
        preventDefault(e){
            e.preventDefault();
        },
        disableScroll(){
            const body = document.body;
            body.style.height = '100vh';
            body.style.overflowY = 'hidden';

            document.body.addEventListener(
                'touchmove', 
                this.preventDefault, 
                { passive: false }
            );
        },
        enableScroll(){
            const body = document.body;
            body.style.height = '';
            body.style.overflowY = '';

            document.body.removeEventListener(
                'touchmove', 
                this.preventDefault, 
                { passive: false }
            );
        },
    }
}
</script>

<style lang="scss" scoped>

    @import '../assets/mixins';

    .modal__container {
        position: fixed;
        inset: 0rem;
        margin: auto;
        background-color: rgba(0, 0, 0, 0.4);
        z-index: 100;
        .modal {
            position: fixed;
            inset: 5rem;
            margin: auto;
            background: white;
            color: black;
            overflow-x: scroll;
            padding: 5rem;
            @include laptop { inset: 5vh 10vw; padding: 3rem; }
            @include tablet { inset: 0; padding: 2rem; }

            &__close {
                position: absolute;
                top: 35px; right: 35px;
                @include tablet { top: 12px; right: 12px; }
            }
            &__title {
                margin-bottom: 32px;
                @include tablet { font-size: 24px; margin-bottom: 24px;}
            }
            &__content {
                .content__section {
                    &:not(:last-child) { 
                        margin-bottom: 52px; 
                        @include tablet { margin-bottom: 32px; }
                    }
                    &-title {
                        display: inline-block;
                        margin-bottom: 16px;
                    }
                }
            }

        }
    }

    .close-btn {
        background: none;
    }
</style>
