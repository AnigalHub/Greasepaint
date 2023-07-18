<template>
  <div id="app">
    <div class="background">
      <div class="bg">
        <Navbar/>
        <Home/>
        <About/>
        <Preparation/>
        <FormEntry/>
        <Tournaments/>
        <Awards/>
        <Portfolio/>
        <MyFooter/>
      </div>
    </div>
  </div>
</template>

<script>
import Home from "@/components/Home";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import FormEntry from "@/components/FormEntry";
import Tournaments from "@/components/Tournaments";
import Portfolio from "@/components/Portfolio";
import MyFooter from "@/components/MyFooter";
import Awards from "@/components/Awards";
import Preparation from "@/components/Preparation";

export default {
  name: 'App',
  components: {
    Preparation,
    MyFooter,
    Portfolio,
    Tournaments,
    FormEntry,
    About,
    Awards,
    Navbar,
    Home,
  },
}
</script>
<style lang="scss">
  $bgBlock: rgba(24, 57, 80, 0.2);
  $borderBlock: 2px solid rgba(67, 103, 167, 0.41);
  $fontFamily:'Roboto Slab', serif;
  $colorText: #b3b8c2;
  $bgImg: radial-gradient(ellipse 47% 48%, rgb(106 152 174 / 25%), transparent);
  $borderRadius: 8px;
  $hoverEffectBlock:scale(1.03);

  /*МИКСИНЫ*/
  /*миксин на пункты списка*/
  @mixin preparationLi{
    /*пункты списка*/
    li{
      padding: 10px 10px 12px 25px;
      margin-left: 20px;
      /*круг вместо точки в списке*/
      &:before{
        top: 9px;
        left: -20px;
        width: 36px;
      }
      /*круг вместо точки в списке*/
      &:after{
        border-width: 2.25px;
        left: -20px;
        width: 38px;
        height: 38px;
      }
    }
  }
  /*миксин для параметры сетки бутстрап, от 768px ширины*/
  @mixin Col5WithImg768{
    /*параметры сетки бутстрап*/
    .col-5, .col-4{
      flex: 0 0 100%;
      max-width: 100%;
      /*картинки*/
      img{
        width: 43%;
        margin: 0 auto;
        position: relative;
      }
    }
  }
  /*миксин для  Компоненты - Главная, от 768px ширины*/
  @mixin HomeLess768{
    /*заголовки*/
    h1{
      padding: 20% 0 0;
    }
    /*кнопки*/
    button{
      padding: 0 2% 1%;
    }
  }
  /*миксин для Компоненты - О компании, от 768px ширины*/
  @mixin AboutLess768{
    /*Компонент - О компании*/
    #About{
      padding-bottom: 0;
      /*миксин для параметры сетки бутстрап, от 768px ширины*/
      @include Col5WithImg768;
      /*бутстрап сетка*/
      .row:first-child{
        flex-direction: column-reverse;
      }
    }
  }
  /*миксин для Компоненты - Подготовка, от 768px ширины*/
  @mixin PreparationLess768{
    /*Компонент - Подготовка*/
    #Preparation{
      padding-bottom: 10px;
      /*перенос*/
      br{
        display: none;
      }
      /*миксин для параметры сетки бутстрап, от 768px ширины*/
      @include Col5WithImg768;
      /*параметры сетки бутстрап*/
      .col, .col-4:first-child{
        padding: 0 15px !important;
      }
      /*миксин на пункты списка*/
      @include preparationLi;
      /*список*/
      ol{
        margin-left: 15px;
      }
    }
  }
  /*миксин для Компоненты - Запись на грим, от 768px ширины*/
  @mixin FormEntryLess768{
    /*миксин для параметры сетки бутстрап, от 768px ширины*/
    @include Col5WithImg768;
    padding-bottom: 10px;
    /*форма, абзацы*/
    form, p{
      width: 100%;
    }
    /*форма*/
    form{
      padding: 1% 0;
    }
    /*фраза про стоимость*/
    .aboutMoney{
      padding: 0;
      margin: 2% 0 !important;
    }
    /*кнопка*/
    button{
      padding: 3px 10px;
    }
    /*бутстрап сетка*/
    .row:first-child{
      flex-direction: column-reverse;
    }
  }
  /*миксин для Компоненты - Турниры, от 768px ширины*/
  @mixin TournamentsLess768{
    /*Компонент - Турниры*/
    #Tournaments{
      padding-bottom: 10px;
      /*контейнер, который включает в себя повтор блоков*/
      .flex-container{
        flex-direction: column;
        padding-top: 10%;
        /*блоки с турнирами*/
        & > .tournament{
          width: 87%;
          /*параметры сетки бутстрап*/
          .col div{
            /*кнопка*/
            button{
              padding: 0 10px 4px;
              margin: -20px 0 0;
            }
          }
        }
      }
    }
  }
  /*миксин для Компоненты - Награды, от 768px ширины*/
  @mixin Awards768{
    /*Компонент - Награды*/
    #Awards{
      /*бутстрап сетка*/
      .row{
        flex-direction: column;
      }
      /*параметры сетки бутстрап*/
      .col{
        padding: 0 20px;
      }
      /*параметры сетки бутстрап*/
      .col-2{
        flex: 0 0 100%;
        max-width: 100%;
        /*картинки*/
        img{
          width: 25%;
          margin: 0 auto;
          position: relative;
        }
      }
    }
  }

  body{
    background: rgba(10, 15, 24);
  }
  /*вся страница*/
  #app{
    height: 100%;
    margin: 0 !important;
    padding: 0 !important;
    background: rgba(10, 15, 24);
    color: $colorText;
  }
  /*контейнер на блоки посередине экрана*/
  .container{
    padding-right: 15px !important;
    padding-left: 15px !important;
  }
  /*фон*/
  .background{
    background: url("../public/bg.svg") no-repeat;
    background-size: cover;
    opacity: .7;
  }
  /*второй фон*/
  .bg{
    background-image: url("../public/bg.png");
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    background-size: cover;
  }
  /*Компонент - Главная, О компании, Подготовка, Запись на грим, Турниры, Награды, Портфолио*/
  #Home, #About, #Preparation, #FormEntry, #Tournaments, #Awards, #Portfolio{
    padding-bottom: 20px;
    /*бутстрап сетка*/
    .row{
      margin: 0;
    }
  }
  /*название компании  в логотипе*/
  .name_company{
    opacity: 1;
    font-size: 1.5rem;
    padding: 4.5% 2px 0;
    color: #266c8c;
    font-weight: 500;
    font-family: "Philosopher", sans-serif;
    font-style: oblique;
  }
  /*логотип*/
  .logo{
    width: 38px;
    height: 38px;
    fill: #266c8c;
    float: left;
    margin-top: 1.5%;
    margin-right: 5%
  }
  /*картинки*/
  img{
    display: block;
    width: 100%;
    z-index: 4;
  }
  /*абзацы, кнопки, списки, формы ввода, ссылки*/
  p, button, ol, li, input, a{
    color: $colorText;
  }
  /*ссылки*/
  a{
    text-decoration: none !important;
    color: #3c88b5 !important;
  }
  /*абзацы*/
  p{
    margin-bottom: 1.5% !important;
  }
  /*абзацы (голубой)*/
  #About p:first-child, #About p:nth-child(2),
  #About p:nth-child(3), p:nth-child(5), #About li,
  #Preparation p:nth-child(4), #Preparation p:nth-child(6),
  #Preparation p:nth-child(7), #FormEntry p{
    padding: 5px;
    color: rgba(209, 233, 245, 0.7);
    /*контейнер для выделения важного*/
    span{
      color: #5eccff;
    }
  }
  /*список в компоненте "О нас"*/
  #About li{
    padding: 0;
  }
  /*абзацы (оранжевый)*/
  #About p:last-child, #About p:nth-child(6),
  #About p:nth-child(8), #Preparation p:first-child,
  #Preparation p:nth-child(2){
    padding: 5px;
    color: rgba(232, 217, 199, 0.75);
    /*контейнер для выделения важного*/
    span{
      color: rgba(233, 145, 45, 0.92);
    }
  }
  /*абзацы, ссылки, списки, текст о награде, текст об авторе*/
  p,a,ol,li, #Awards .awards, #Awards .author{
    font-size: 1.3rem;
    font-weight: 200;
    line-height: 1.6rem;
    margin-bottom: .5% !important;
  }
  /*формы ввода*/
  input{
    line-height: 1.2rem;
  }
  /*контейнер, который включает в себя повтор блоков*/
  .flex-container{
    display: flex;
    flex-wrap: wrap;
  }
  /*заголовки, абзацы, кнопки в компонентах - Главная, Запись на грим, списки, формы ввода|выбора в Компоненте - Запись на грим*/
  h2,p,#Home button, #FormEntry button, li, #FormEntry input,
  #FormEntry select, #Tournaments button, #FormEntry form input,
  #FormEntry form select, #FormEntry form textarea{
    font-family: $fontFamily;
    font-weight: 300;
    z-index: 7;
  }
  h1, h2, span, #FormEntry .aboutMoney, #Awards .author{
    font-family: 'Philosopher', sans-serif;
    font-style: oblique;
  }
  /*заголовки*/
  h2{
    padding: 1% 0;
    font-size: 1.9rem !important;
    text-align: center;
    text-shadow: #293655 3px 0 120px;
    color: rgba(233, 145, 45, 0.92);
  }
  /*контейнер для выделения важного*/
  span{
    letter-spacing: .8px;
  }
  /*Кнопки в компонентах - Главная, Запись на грим, Турниры*/
  #Home button, #FormEntry button, #Tournaments button{
      color: rgba(56, 152, 197, 0.92);
      background: transparent;
      background: radial-gradient(ellipse 180px 90px, transparent, rgba(14, 21, 33, 0.98));
      text-align: center;
      display: block;
      font-size: 1.5rem;
      border: none;
      z-index: 10;
      position: relative;
      box-shadow:0 0.25px 2.5px 0.25px rgba(55, 152, 197, 0.52);
      /*при наведении*/
      &:hover{
        transform: $hoverEffectBlock !important;
        background:  rgba(24, 57, 80, .5) !important;
      }
  }
  /*Компонент - Главная*/
  #Home{
    /*контейнер для выделения важного*/
    p span{
      font-family: $fontFamily;
      font-style: inherit;
    }
    /*заголовки*/
    h1{
      margin-top: 100%;
      width: 320%;
      text-align: center;
      margin-left: -25px;
      margin-bottom: 5%;
      color: rgba(233, 145, 45, 0.92);
      font-size: 2.7rem;
      line-height: 3.8rem;
    }
    /*абзацы*/
    p{
      font-size: 1.35rem;
      line-height: 2rem;
      padding: 10% 0 12%;
      width: 320%;
      text-align: center;
      margin-left: -20px;
    }
    /*картинки*/
    img{
      margin-left: 175px;
      width: 84%;
      margin-top: -10px;
      filter: brightness(125%);
    }
    /*кнопки*/
    button{
      width: 220%;
      border-radius: 25px;
      margin: 18% auto 0 30%;
      padding: 12px 10px;
    }
  }
  /*Компонент - О компании*/
  #About{
    /*картинки*/
    img{
      width: 105%;
      filter: brightness(125%);
    }
    /*бренды грима (картинки)*/
    .flex-container{
      div{
        width: 20%;
        margin: 10px 5px 0;
        padding: 5px;
        /*картинки (бренды грима)*/
        img{
          width: 100%;
          margin-top: -7%;
          filter: grayscale(20%);
        }
        /*при наведении*/
        &:hover{
          transform: $hoverEffectBlock;
        }
      }
    }
    /*список*/
    ul{
      list-style: none;
      margin-left: -20px;
    }
    /*пункты списка*/
    ul > li{
      padding-left: 20px;
      position: relative;
    }
    /*пункты списка (пункт - кружок)*/
    ul > li:before{
      content: "\2022";
      position: absolute;
      top: 5px;
      left: 0;
      color: #5eccff;
    }
  }
  /*Компонент - Подготовка*/
  #Preparation{
    /*параметры сетки бутстрап*/
    .col{
      padding: 5% 0 0 0 !important;
      margin-left: -3% ;
    }
    /*параметры сетки бутстрап*/
    .col-4:first-child{
      padding: 6% 0 0 !important;
      margin-right: -50px ;
    }
    /*список*/
    ol{
      padding:0;
      list-style: none;
      counter-reset: li;
    }
    /*пункты списка*/
    li{
      position: relative;
      padding: 17px 20px 5px 28px;
      margin-left: 40px;
      transition-duration: 0.3s;
      /*круг вместо точки в списке*/
      &:before{
        border: 6px solid transparent;
        line-height: 30px;
        position: absolute;
        top: 14px;
        left: -30px;
        width: 46px;
        text-align: center;
        font-size: 1.1rem;
        font-weight: bold;
        color: #77AEDB;
        counter-increment: li;
        content: counter(li);
        transition-duration: 0.3s;
        box-sizing: border-box;
      }
      /*при наведении*/
      &:hover:before{
        color: #337AB7;
      }
      /*круг вместо точки в списке*/
      &:after{
        position: absolute;
        top: 10px;
        left: -30px;
        width: 48px;
        height: 48px;
        border-color: rgba(55, 152, 197, 0.7);
        border-style: solid;
        border-width: 3px;
        border-radius: 50%;
        content: '';
        opacity: 0.5;
        box-sizing: border-box;
      }
      /*при наведении*/
      &:hover:after{
        animation: 500ms ease-in-out 0s bounceIn;
        opacity: 1;
      }
    }
    /*анимация*/
    @keyframes bounceIn{
      0%{
        opacity: 0;
        transform: scale3d(.3, .3, .3);
      }
      20%{
        transform: scale3d(1.3, 1.3, 1.3);
      }
      40%{
        transform: scale3d(.9, .9, .9);
      }
      60%{
        opacity: 1;
        transform: scale3d(1.03, 1.03, 1.03);
      }
      80%{
        transform: scale3d(.97, .97, .97);
      }
      to{
        opacity: 1;
        transform: scale3d(1, 1, 1);
      }
    }
    /*картинки*/
    img{
      /*миксин основной картинки компонента*/
      width: 100%;
      filter: brightness(90%);
    }
  }
  /*Компонент - Запись на грим*/
  #FormEntry{
    /*фраза про стоимость*/
    .aboutMoney{
      color: rgba(209, 233, 245, 0.7);
      display: block;
      width: 100%;
      text-align: center;
      padding: 1.5% 0;
    }
    /*абзацы*/
    p{
      width: 85%;
      margin: 0 auto 3%;
      text-align: center;
    }
    /*блок под стоимость*/
    .money{
      font-size: 2rem;
      font-family: $fontFamily;
      color: #5eccff;
    }
    /*разделение абзацев*/
    hr{
      height: 1px;
      margin: .5rem 0;
      background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(22, 185, 191, 0.33), rgba(0, 0, 0, 0));
    }
    /*кнопки*/
    button{
      margin: 3% auto 2%;
      padding: 8px 10px;
      width: 100%;
      border-radius: 20px;
    }
    /*картинки*/
    img{
      width: 105%;
    }
    /*форма*/
    form{
      width: 85%;
      margin: 3% auto 0;
      padding: 0 5% 2%;
    }
    /*форма ввода|выбора, описания*/
    input, select, textarea{
      width: 100%;
      background: transparent;
      border-top: none;
      border-left: none;
      border-right: none;
      font-size: 1.35rem;
      border-bottom: 1px solid rgba(55, 152, 197, 0.52);
      color: $colorText;
      margin-bottom: 4%;
      padding: 2%;
    }
    /*форма описания*/
    textarea{
      overflow-y: hidden;
      height: 50px;
      min-height: 50px;
      max-height: 95px;
    }
    /*пункты выбора*/
    option{
      border: none;
      background: rgba(31, 52, 70, 0.95);
      /*неактивный пункт*/
      &:disabled{
        display: none;
      }
    }
    /*фразы в формах ввода|выбора, описания*/
    input::placeholder, select:optional, textarea::placeholder{
      color: $colorText;
    }
    /*фокус формы ввода|выбора, описания*/
    input:focus, select:focus, textarea:focus{
      background-color: transparent;
    }
  }
  /*Компонент - Турниры*/
  #Tournaments{
    /*дата турниров*/
    .date{
      padding: 2% 4%;
      color: #5eccff;
      margin-bottom: 1%;
    }
    /*разделение абзацев*/
    hr{
      background: rgba(55, 152, 197, 0.7);
      width: 50%;
      margin: .3rem auto;
    }
    /*контейнер, который включает в себя повтор блоков*/
    .flex-container{
      align-items: center;
      justify-content: center;
    }
    /*турниры*/
    .flex-container > .tournament{
      width: 46%;
      margin: 1.8%;
      border-radius: $borderRadius;
      background: radial-gradient(ellipse 180px 90px, transparent, rgba(14, 21, 33, 0.45));
      box-shadow: 0 0.5px 3.5px 0.5px rgba(55, 152, 197, 0.52);
      text-align: center;
      /*параметры сетки бутстрап*/
      .col-5{
        padding: 0 !important;
      }
      /*параметры сетки бутстрап*/
      .col{
        div{
          padding: 4%;
          margin-left: 3%;
          /*адрес*/
          .address{
            padding: 0;
            min-height: 70px;
          }
          /*кнопки*/
          button{
            margin: 4% 0 0;
            width: 100%;
            padding: 8px 10px;
            border-radius: 20px;
          }
        }
      }
      /*название турниров*/
      .name_tournament{
        color: #5eccff;
        padding: 1.5% 0;
        background: rgba(24, 57, 80, 0.45);
        margin-bottom: 0;
      }
      /*картинки*/
      img{
        width: 100%;
        filter: blur(0.5px);
        margin: 5% 0 5% 10%;
        padding: 3%;
        border: 1px solid #307997;
        border-radius: $borderRadius;
      }
      /*при наведении*/
      &:hover{
        transform: $hoverEffectBlock;
      }
    }
  }
  /*Компонент - Награды*/
  #Awards{
    /*текст награды*/
    .awards{
      font-family: $fontFamily;
    }
    /*картинки*/
    img{
      margin-top: -15%;
    }
    /*автор (текст)*/
    .author{
      margin-top: -1%;
      text-align: right;
      color: #50b5e3;
    }
  }
  /*Компонент - Портфолио*/
  #Portfolio{
    /*блоки с картинками (ссылками)*/
    .flex-container > a{
      width: 12%;
      height: 100%;
      margin: 0 1.1% 2.4% !important;
      box-shadow: 0 0.5px 2.5px 0.5px rgba(55, 152, 197, 0.52);
      display: inline-block; /* Строчно-блочный элемент */
      overflow: hidden;
      /*картинки*/
      img{
        transition: .5s;
        display: block;
        /*при наведении*/
        &:hover{
          transform: scale(1.2);
        }
      }
      /*при наведении*/
      &:hover{
        transform: scale(1.15);
      }
    }
  }
  /*Компонент - Футер*/
  #MyFooter{
    padding: 1.5% 0;
    background: #0000004f;
    /*блоки с пунктами информации (контакты)*/
    .flex-container > div{
      margin: 0 auto;
      padding-left: 70px;
      width: 33%;
      height: 100%;
      /*второй блок*/
      &:nth-child(2){
        padding-left: 40px;
      }
      /*при наведении*/
      &:hover{
        transform: $hoverEffectBlock;
      }
    }
    /*svg*/
    svg{
      fill:#8e9aaf;
      width: 35px;
      height: 35px;
      float: left;
      /*последний элемент*/
      &:last-child{
        margin-top: -2.7%;
      }
    }
  }

  /*АДАПТИВНОСТЬ*/
  @media screen and (min-width: 992px) and (max-width: 1200px){
    /*список*/
    ul{
      margin-bottom: .5rem !important;
    }
    /*заголовки*/
    h2{
      font-size: 1.5rem !important;
    }
    /*текст во всех компонентах*/
    p, a, ol, li, #Home p, #Awards .awards, #Awards .author,
    #Awards .awards, #Home button, #FormEntry button, button{
      font-size: 1.22rem;
      line-height: 1.4rem;
    }
    /*текст в пунктах меню*/
    .nav-link{
      font-size: 1.22rem !important;
    }
    /*Компоненты - Подготовка, Запись на грим (картинки)*/
    #Preparation img, #FormEntry img{
        margin-top: 10%;
    }
    /*Компонент - О компании (картинки)*/
    #About img{
      margin-top: 15%;
    }
    /*Компонент - Главная*/
    #Home{
      /*заголовки*/
      h1{
        font-size: 2.4rem;
        line-height: 2.9rem;
        margin-top: 145%;
      }
      /*заголовок, абзац*/
      h1, p{
        width: 370%;
      }
      /*картинки*/
      img{
        margin-left: 145px;
        width: 86%;
      }
    }
    /*Компонент - Запись на грим*/
    #FormEntry{
      /*блок под стоимость*/
      .money{
        font-size: 1.5rem !important;
      }
      /*форма ввода|выбора, описания*/
      input, select, textarea{
        font-size: 1.2rem !important;
      }
    }
    /*Компонент - Турниры*/
    #Tournaments{
      /*турниры (кнопки)*/
      .flex-container > .tournament .col div button{
        padding: 0 10px 4px;
      }
    }
    /*Компонент - Футер*/
    #MyFooter{
      /*svg*/
      svg{
        width: 30px;
        height: 30px;
      }
    }
  }
  @media screen and (max-width: 768px){
    /*второй фон*/
    .bg{
      background-image: none;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 992px){
    /*список*/
    ul{
      margin-bottom: .5rem !important;
    }
    /*заголовки*/
    h2{
      font-size: 1.25rem !important;
      padding: 0;
    }
    /*название компании в логотипе*/
    .name_company{
      font-size: 1.3rem;
      padding: 5% 2px 0;
    }
    /*текст во всех компонентах*/
    p, a, ol, li, #Home p, #Awards .awards, #Awards .author,
    #Awards .awards, #Home button, #FormEntry button, button{
      font-size: 1rem;
      line-height: 1.15rem;
    }
    /*текст в пунктах меню*/
    .nav-link{
      font-size: 1rem !important;
      padding: 0.35rem 1rem !important;
    }
    /*Компонент - Главная*/
    #Home{
      /*картинки*/
      img{
        margin-left: 95px;
      }
      /*заголовки*/
      h1{
        font-size: 1.7rem;
        line-height: 2.4rem;
        margin-top: 145%;
      }
      /*заголовки, абзац*/
      h1,p{
        width: 450%;
        margin-left: -35px;
      }
      /*кнопки*/
      button{
        width: 310%;
        margin-left: 0;
      }
    }
    /*Компоненты - О компании, Подготовка, Запись на грим (картинки)*/
    #About img, #Preparation img, #FormEntry img{
      width: 125%;
    }
    /*Компонент - О компании (картинки)*/
    #About img{
      margin-top: 30%;
      margin-left: -10%;
    }
    /*Компонент - Подготовка*/
    #Preparation{
      /*миксин на пункты списка*/
      @include preparationLi;
      /*параметры сетки бутстрап*/
      .col-4:first-child{
        padding: 3% 0 0 !important;
        margin-right: -50px;
      }
      /*параметры сетки бутстрап*/
      .col{
        padding: 3% 0 0!important;
      }
    }
    /*Компонент - Запись на грим*/
    #FormEntry{
      /*форма ввода|выбора, описания*/
      input, select, textarea{
        font-size: 1rem !important;
        margin-bottom: 1%;
      }
      /*кнопки*/
      button{
        font-size: 1rem;
      }
      /*форма, абзацы*/
      form, p{
        width: 90%;
      }
      /*блок под стоимость*/
      .money{
        font-size: 1rem !important;
      }
    }
    /*Компонент - Турниры*/
    #Tournaments{
      /*параметры сетки бутстрап*/
      .col div{
        margin-top: 20px;
      }
      /*турниры (кнопки)*/
      .flex-container > .tournament .col div button{
        margin: -5px 0 5px -150px;
        width: 200%;
        padding: 0 10px 4px;
        border-radius: 20px;
      }
    }
    /*Компонент - Футер*/
    #MyFooter{
      /*блоки с пунктами информации (контакты)*/
      .flex-container > div{
        padding-left: 50px;
        /*второй блок*/
        &:nth-child(2){
          padding-left: 30px;
        }
      }
      /*svg*/
      svg{
        margin-top: .45%;
        width: 17px;
        height: 17px;
      }
    }
  }
  @media screen and (min-width: 500px) and (max-width: 768px){
    /*список*/
    ul{
      margin-bottom: .5rem !important;
    }
    /*заголовки*/
    h2{
      font-size: 1.25rem !important;
      padding: 0;
    }
    /*название компании  в логотипе*/
    .name_company{
      font-size: 1.3rem;
      padding: 5% 2px 0;
    }
    /*текст во всех компонентах*/
    p, a, ol, li, #Home p, #Awards .awards, #Awards .author,
    #Awards .awards, button{
      font-size: 1rem;
      line-height: 1.15rem;
    }
    /*текст в пунктах меню*/
    .nav-link{
      font-size: 1rem !important;
      padding: 0.35rem 1rem !important;
    }
    /*Кнопки в компонентах - Главная, Запись на грим*/
    #Home button, #FormEntry button{
      font-size: 1.2rem !important;
    }
    /*Компонетн - О нас*/
    #About{
      padding-bottom: 0;
    }
    /*Компонент - Главная*/
    #Home{
      padding-bottom: 0;
      /*параметры сетки бутстрап*/
      .row{
        flex-direction: column-reverse;
        /*параметры сетки бутстрап*/
        .col-2{
          max-width: 100%;
        }
      }
      /*картинки*/
      img{
        margin-top: 0;
        margin-left: 0;
        width: 100%;
      }
      /*заголовки*/
      h1{
        font-size: 1.4rem;
        line-height: 1.5rem;
        margin-top: -300px;
        margin-bottom: 5px;
      }
      /*заголовки, абзац*/
      h1, p{
        /*контейнер для выделения важного*/
        span{
          background: rgba(0, 0, 0, 0.45);
        }
        position: relative;
        z-index: 10;
        width: 100%;
        margin-left: 0;
      }
      /*абзац*/
      p{
        padding: 3% 0;
        width: 80%;
        margin: 0 auto;
      }
      /*кнопки*/
      button{
        width: 70%;
        font-size: 1.25rem !important;
        margin: 0 auto;
        padding: 3px 10px;
      }
    }
    /*миксин для Компоненты - О компании, от 768px ширины*/
    @include AboutLess768;
    /*миксин для Компоненты - Подготовка, от 768px ширины*/
    @include PreparationLess768;
    /*Компонент - Запись на грим*/
    #FormEntry{
      /*миксин для Компоненты - Запись на грим, от 768px ширины*/
      @include FormEntryLess768;
      /*форма ввода|выбора, описания*/
      input, select, textarea{
        font-size: 1rem !important;
        margin-bottom: 1%;
      }
      /*кнопки*/
      button{
        font-size: 1.2rem !important;
      }
      /*блок под стоимость*/
      .money{
        font-size: 1.3rem !important;
      }
    }
    /*миксин для Компоненты - Турниры, от 768px ширины*/
    @include TournamentsLess768;
    /*миксин для Компоненты - Награды, от 768px ширины*/
    @include Awards768;
    /*Компонент - Портфолио*/
    #Portfolio{
      /*блоки с картинками (ссылками)*/
      .flex-container > a{
        width: 14%;
      }
    }
    /*Компонент - Футер*/
    #MyFooter{
      padding: 3% 0 !important;
      /*блоки с пунктами информации (контакты)*/
      .flex-container > div{
        width: 33.3%;
        padding-left: 0;
        /*второй блок*/
        &:nth-child(2){
          padding-left: 0;
        }
        /*абзац*/
        p{
          text-align: center;
        }
      }
      /*svg*/
      svg{
        width: 28px;
        height: 28px;
        margin-top: -.5%;
        float: none;
        margin-left: 45%;
      }
    }
  }
  @media screen and (max-width: 500px){
    /*список*/
    ul{
      margin-bottom: .5rem !important;
    }
    /*заголовки*/
    h2{
      font-size: 1.25rem !important;
      padding: 0;
    }
    /*логотип*/
    .logo {
      width: 32px;
      height: 32px;
    }
    /*название компании  в логотипе*/
    .name_company{
      font-size: 1.25rem !important;
      letter-spacing: 0 !important;
      padding: 5% 2px 0;
    }
    /*текст во всех компонентах*/
    p, a, ol, li, #Home p, #Awards .awards, #Awards .author,
    #Awards .awards, button{
      font-size: .95rem;
      line-height: 1.1rem;
    }
    /*текст в пунктах меню*/
    .nav-link{
      font-size: .95rem !important;
      padding: 0.35rem 1rem !important;
    }
    /*Кнопки в компонентах - Главная, Запись на грим*/
    #Home button, #FormEntry button{
      font-size: 1.2rem !important;
    }
    /*Компонент - Главная*/
    #Home{
      padding-bottom: 0;
      /*параметры сетки бутстрап*/
      .row{
        flex-direction: column-reverse;
        /*параметры сетки бутстрап*/
        .col-2{
          max-width: 100%;
        }
      }
      /*картинки*/
      img{
        margin-top: 0;
        margin-left: 0;
        width: 100%;
      }
      /*заголовки*/
      h1{
        font-size: 1.4rem;
        line-height: 1.5rem;
        margin-top: -270px;
        margin-bottom: 0;
      }
      /*заголовки, абзац*/
      h1, p{
        /*контейнер для выделения важного*/
        span{
          background: rgba(0, 0, 0, 0.45);
        }
        position: relative;
        z-index: 10;
        width: 100%;
        margin-left: 0;
      }
      /*абзац*/
      p{
        padding: 2% 0;
        width: 100%;
        margin: 0 auto;
      }
      /*кнопки*/
      button{
        width: 80%;
        font-size: 1.25rem !important;
        margin: 0 auto;
        padding: 0 10px;
      }
    }
    /*миксин для Компоненты - О компании, от 768px ширины*/
    @include AboutLess768;
    /*Компонент - О нас*/
    #About{
      padding-bottom: 0;
      /*блок под картинку*/
      .flex-container > div{
        padding: 0 ;
      }
    }
    /*миксин для Компоненты - Подготовка, от 768px ширины*/
    @include PreparationLess768;
    /*Компонент - Запись на грим*/
    #FormEntry{
      /*миксин для Компоненты - Запись на грим, от 768px ширины*/
      @include FormEntryLess768;
      /*форма ввода|выбора, описания*/
      input, select, textarea{
        font-size: 1rem !important;
        margin-bottom: 1%;
      }
      /*кнопки*/
      button{
        font-size: 1.2rem !important;
      }
      /*блок под стоимость*/
      .money{
        font-size: 1.25rem !important;
      }
    }
    /*миксин для Компоненты - Турниры, от 768px ширины*/
    @include TournamentsLess768;
    /*Компонент - Турниры*/
    #Tournaments{
      /*турниры*/
      .tournament{
        /*картинки*/
        img{
          margin: 5% 0 5% 70% !important;
        }
        /*параметры сетки бутстрап*/
        .row{
          flex-direction: column;
          /*параметры сетки бутстрап*/
          .col div{
            padding-top: 0 !important;
            /*кнопки*/
            button{
              margin-top: -33px;
            }
          }
        }
      }
    }
    /*миксин для Компоненты - Награды, от 768px ширины*/
    @include Awards768;
    /*Компонент - Портфолио*/
    #Portfolio{
      /*блоки с картинками (ссылками)*/
      .flex-container > a{
        width: 17.5%;
      }
    }
    /*Компонент - Футер*/
    #MyFooter{
      padding: 3% 0 !important;
      /*блоки с пунктами информации (контакты)*/
      .flex-container > div{
        width: 100%;
        padding-left: 0;
        padding-bottom: 2%;
        /*второй блок*/
        &:nth-child(2){
          padding-left: 0;
        }
        /*абзац*/
        p{
          text-align: center;
        }
      }
      /*svg*/
      svg{
        float: none;
        margin-left: 45%;
        width: 28px;
        height: 28px;
        margin-top: -.5%;
      }
    }
  }
  @media screen and (min-width: 400px) and (max-width: 450px){
    /*Компонент - Главная (заголовки)*/
    #Home h1{
      margin-top: -255px;
    }
  }
  @media screen and (min-width: 350px) and (max-width: 400px){
    /*Компонент - Главная (заголовки)*/
    #Home h1{
      margin-top: -220px;
    }
  }
  @media screen and (min-width: 300px) and (max-width: 350px){
    /*Компонент - Главная*/
    #Home{
      padding-bottom: 20px;
      /*заголовки, абзац*/
      h1, p{
        width: 105%;
      }
      /*кнопки*/
      button{
        width: 100%;
      }
      /*заголовки*/
      h1{
        margin-top: -190px;
        font-size: 1.25rem;
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 300px){
    /*Компонент - Главная*/
    #Home{
      padding-bottom: 20px;
      /*заголовки, абзац*/
      h1, p{
        width: 107%;
      }
      /*кнопки*/
      button{
        width: 100%;
      }
      /*заголовки*/
      h1{
        margin-top: -160px;
        font-size: 1.25rem;
      }
    }
  }
  @media screen and (max-width: 260px){
    /*Компонент - Главная*/
    #Home{
      padding-bottom: 20px;
      /*заголовки, абзац*/
      h1, p{
        width: 107%;
      }
      /*кнопки*/
      button{
        width: 100%;
      }
      /*заголовки*/
      h1{
        margin-top: -150px;
        font-size: 1.25rem;
      }
    }
  }
</style>
