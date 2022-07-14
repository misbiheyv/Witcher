<template>
    <div class="_container subscribe__wrapper">
        <h1 v-show="formState === 0" class="subscribe__title">Оставьте заявку</h1>
        <div class="subscribe__container">
            <form v-if="formState === 0" name="subscribe-form" class="subscribe__form">
                <input type="text" v-model="city" class="subscribe__input" name="subscribe-city" id="subscribe-city" placeholder="Город">
    
                <input type="text" v-model="name" class="subscribe__input" name="subscribe-name" id="subscribe-name" placeholder="Имя">
                
                <input type="email" v-model="email" class="subscribe__input" name="subscribe-email" id="subscribe-email" placeholder="Электронная почта">
    
                <input type="tel" v-model="number" v-maska="'+7 (###) ###-##-##'" class="subscribe__input" name="subscribe-phone" id="subscribe-phone" placeholder="+7 (">
    
                <textarea v-model="additionalInfo" name="comment" id="subscribe-comment" cols="30" rows="8" placeholder="Оставьте пометки к заказу"></textarea>

                <div class="subscribe__checkbox">
                    <input v-model="isChecked" type="checkbox" name="subscribe-checkbox" id="subscribe-checkbox__inp">
                    <label for="subscribe-checkbox__inp"></label>
                    <label for="subscribe-checkbox__inp">Даю согласие на обработку своих персональных данных</label>
                </div>
    
                <button type="submit" @click.prevent="subscribe" class="subscribe__btn btn filled-btn">Оставить заявку</button>
            </form>

            <section v-else-if="1" class="access__form">
                <h1 class="access__title">Заявка отправлена!</h1>
                <p class="access__text">
                    Мы получили вашу заявку. Наши специалисты свяжутся с вами в ближайшее время, чтобы уточнить все детали заказа.
                </p>
                <button class="btn filled-btn" @click="goHome()">Вернуться на главную</button>
            </section>
    
            <section class="subscribe__info">
                <label class="subscribe-info__title">Наша горячая линия</label>
                <h3 class="subscribe-info__text">8 800 38 23 112</h3>
    
                <label class="subscribe-info__title">Главный офис</label>
                <h3 class="subscribe-info__text">г. Москва, Садовническая ул., 80</h3>
    
                <label class="subscribe-info__title">Часы работы</label>
                <h3 class="subscribe-info__text">Пн-Пт с 10:00 до 22:00</h3>
            </section>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex';

export default {
    data() {
        return {
            city: '',
            name: '',
            email: '',
            number: '',
            additionalInfo: '',
            isChecked: false
        }
    },
    methods: {
        ...mapActions({ sendRequest: 'subscribe/sendRequest' }),
        ...mapMutations({ fillingForm: 'subscribe/fillingForm' }),
        goHome() { 
            this.$router.push('/')
            this.fillingForm()
        },
        subscribe() {
            if (this.isValid) {
                return this.sendRequest()
            }
        }
    },
    computed: {
        ...mapState({ formState: state => state.subscribe.formState }),
        isValid() {
            return this.city.length > 0
                && this.name.length > 0
                && this.email.length > 0
                && /\+\d \(\d{3}\) \d{3}(-\d{2}){2}/.test(this.number)
                && this.isChecked
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../assets/mixins';
    .subscribe__title {
        margin-bottom: 48px;
    }
    .subscribe__wrapper {
        margin-top: 60px;
        margin-bottom: 60px;
        @include laptop { 
            margin-top: 50px;
            margin-bottom: 50px;
        }
        @include tablet { 
            margin-top: 30px;
            margin-bottom: 30px;
        }
    }
    .subscribe__container {
        display: flex;
        gap: 126px;
        @include tablet { flex-direction: column; gap: 40px; }

        .subscribe__form {
            width: 100%;
            display: flex;
            flex-direction: column;

            .subscribe__input {
                height: 56px;
                padding: 18px 24px;
                background: rgba(255, 255, 255, 0.1);
                color: white;
            }
            & > textarea {
                padding: 18px 24px;
                background: rgba(255, 255, 255, 0.1);
                height: 156px;
                color: white;
            }
            & > *:not(:last-child) { margin-bottom: 32px; }

            #subscribe__file {
                display: none;
                & + label {
                    cursor: pointer;
                    padding: 18px 24px;
                    background: rgba(255, 255, 255, 0.1);
                    height: 56px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
            }
            .subscribe__checkbox {
                display: flex;
                align-items: center;
                gap: 20px;

                #subscribe-checkbox__inp { 
                    display: none; 
                
                    &:checked + label {
                        background: no-repeat center url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='13' viewBox='0 0 18 13' fill='none'%3E%3Cpath d='M16.9869 0.993454C16.8137 0.998615 16.6493 1.071 16.5285 1.19528L6.33323 11.3906L2.13791 7.19528C2.07648 7.13129 2.0029 7.08021 1.92149 7.04502C1.84007 7.00983 1.75244 6.99124 1.66375 6.99034C1.57506 6.98944 1.48707 7.00624 1.40496 7.03977C1.32284 7.07329 1.24824 7.12287 1.18552 7.18559C1.1228 7.24831 1.07322 7.32291 1.0397 7.40503C1.00617 7.48715 0.989367 7.57513 0.990269 7.66382C0.991171 7.75251 1.00976 7.84014 1.04495 7.92156C1.08014 8.00298 1.13122 8.07655 1.19521 8.13798L5.86187 12.8047C5.9869 12.9296 6.15645 12.9998 6.33323 12.9998C6.51001 12.9998 6.67955 12.9296 6.80458 12.8047L17.4712 2.13799C17.5676 2.04434 17.6334 1.92378 17.66 1.7921C17.6867 1.66042 17.6729 1.52377 17.6205 1.40004C17.5682 1.27632 17.4797 1.1713 17.3666 1.09875C17.2535 1.02619 17.1212 0.989494 16.9869 0.993454V0.993454Z' fill='white'/%3E%3C/svg%3E");
                    }
                    & + label {
                        content: '';
                        display: inline-block;

                        width: 28px;
                        height: 28px;
                        aspect-ratio: 1;
                        background: rgba(255, 255, 255, 0.15);
                        border: 1px solid rgba(255, 255, 255, 0.3);
                    }
                }
                & > *:last-child {
                    display: inline-block;
                }
            }

            .subscribe__btn {
                width: 205px;
                height: 56px;
                @include tablet { width: 100%; }
            }
        }
        .access__form {
            .access__title {
                margin-bottom: 24px;
            }
            .access__text {
                margin-bottom: 40px;
            }
        }
        .subscribe__info {
            width: 100%;
            display: flex;
            flex-direction: column;

            .subscribe-info__title {
                opacity: 0.6;
                margin-bottom: 8px;
            }
            .subscribe-info__text:not(:last-child) { margin-bottom: 32px; }
        }
    }
</style>