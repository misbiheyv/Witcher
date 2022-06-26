<template>
    <div class="main-content__container">
        <div class="main-content _container">
            <section class="main-content__about">
                <h1>Сериал Ведьмак</h1>
                <p>Геральт из Ривии, наемный охотник за чудовищами, перенесший мутации, идет навстречу своей судьбе в неспокойном мире, где люди часто оказываются куда коварнее чудовищ.</p>
                <button class="filled-btn btn">Смотреть сериал</button>
            </section>
            <section><h2></h2></section>
            <section><h2></h2></section>
            <section><h2></h2></section>
        </div>
    </div>
</template>

<style lang="scss" scope>
  @import '../assets/mixins';
.main-content__container {
    height: 440px;
    width: 100%;
    background: url(../assets/images/main.png) 70% 50% no-repeat;
    background-size: cover;
    .main-content {
        height: 100%;
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

</style>