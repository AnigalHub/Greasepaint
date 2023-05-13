<template>
  <div id="app">
    <div class="background">
      <Navbar/>
      <Home/>
      <About/>
      <Preparation/>
      <FormEntry/>
      <Tournaments/>
      <Awards/>
      <Portfolio/>
      <Contacts/>
      <MyFooter/>
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
import Contacts from "@/components/Contacts";
import Awards from "@/components/Awards";
import Preparation from "@/components/Preparation";

export default {
  name: 'App',
  components: {
    Preparation,
    Contacts,
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
<style>
  .mx-time-content{
    background: #1f3446 !important;
  }
  .mx-datepicker-popup{
    border: none !important;
  }
</style>
<style lang="scss">
  $bgBlock: rgba(24, 57, 80, 0.2);
  $borderBlock: 2px solid rgba(67, 103, 167, 0.41);
  $fontFamily:'Roboto Slab', serif;
  $colorText: #d7dbe5;
  $bgImg: radial-gradient(ellipse 47% 48%, rgba(20, 102, 141, 0.55), transparent );
  $borderRadius: 8px;
  $hoverEffectBlock:scale(1.03);

  /*МИКСИНЫ*/
  @mixin preparationLi{
    /*параметры сетки бутстрап*/
    .col{
      padding-top: 0 !important;
    }
    /*пункты списка*/
    li {
      padding: 10px 10px 12px 25px;
      margin-left: 20px;
      /*круг вместо точки в списке*/
      &:before {
        top: 9px;
        left: -20px;
        width: 36px;
      }
      /*круг вместо точки в списке*/
      &:after {
        border-width: 4px;
        left: -20px;
        width: 38px;
        height: 38px;
      }
    }
  }
  @mixin imgBg{
    z-index: 3;
    position: absolute;
    background-image: $bgImg;
  }
  @mixin img{
    z-index: 4;
    position: absolute;
  }
  @mixin Col5WithImg768{
    /*параметры сетки бутстрап*/
    .col-5{
      flex: 0 0 100%;
      max-width: 100%;
      /*картинки*/
      img{
        width: 50%;
        margin: 0 auto;
        position: relative;
      }
    }
  }
  @mixin HomeLess768{
    /*заголовки*/
    h1{
      padding: 20% 0 0;
    }
    /*фон для основной картинки компонента*/
    .imgBg{
      left: -45%;
    }
    /*кнопки*/
    button{
      padding: 0 2% 1%;
    }
  }
  @mixin AboutLess768{
    /*Компонент - О компании*/
    #About{
      padding-bottom: 20px;
      @include Col5WithImg768;
      /*бутстрап сетка*/
      .row:first-child{
        flex-direction: column-reverse;
      }
      /*фон для основной картинки компонента*/
      .imgBg{
        width: 110%;
      }
      /*параметры сетки бутстрап*/
      .col-3{
        flex: 0 0 33%;
        padding: 0 5px !important;
      }
      /*блок под картинки производителей грима*/
      .imgProducts{
        padding: 3%;
        width: 100%;
        margin: 0 10px 8% 0;
      }
    }
  }
  @mixin PreparationLess768{
    /*Компонент - Подготовка*/
    #Preparation{
      @include Col5WithImg768;
      padding-bottom: 10px;
      @include preparationLi;
      /*фон для основной картинки компонента*/
      .imgBg {
        width: 100%;
      }
    }
  }
  @mixin FormEntryLess768{
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
    /*бутстрап сетка*/
    .row:first-child{
      flex-direction: column-reverse;
    }
    /*фон для основной картинки компонента*/
    .imgBg{
      width: 110%;
    }
  }
  @mixin TournamentsLess768{
    /*Компонент - Турниры*/
    #Tournaments{
      padding-bottom: 10px;
      /*контейнер, который включает в себя повтор блоков*/
      .flex-container{
        flex-direction: column;
        /*блоки с турнирами*/
        & > div{
          width: 70%;
          margin: 1% auto 5%;
          /*картинки*/
          img{
            width: 50%;
            height: auto;
            padding: 0;
          }
        }
      }
    }
  }
  @mixin Awards768{
    /*Компонент - Награды*/
    #Awards{
      /*бутстрап сетка*/
      .row{
        flex-direction: column;
      }
      /*текст награды*/
      .awards{
        margin-right: 0;
        background: rgb(3 14 19 / 56%);
        padding: 1.5%;
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
          width: 28%;
          margin: 0 auto;
          position: relative;
        }
      }
    }
  }
  @mixin Contacts768{
    /*Компонент - Контакты*/
    #Contacts{
      padding-bottom: 10px;
      /*параметры сетки бутстрап*/
      .col-5{
        flex: 0 0 100%;
        max-width: 100%;
      }
      /*бутстрап сетка*/
      .row{
        flex-direction: column;
      }
      /*блоки с пунктами информации (контакты)*/
      .flex-container > div {
        margin: 0 0 1% 0;
        padding-left: 0;
      }
    }
  }

  body{
    background: rgba(10, 15, 24) !important;
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
    background: url("../public/bg-blur-mobile.svg") no-repeat;
    background-size: cover;
    opacity: .8;
  }
  /*Компонент - Главная, О компании, Подготовка, Запись на грим, Турниры, Награды, Портфолио, Контакты*/
  #Home, #About, #Preparation, #FormEntry, #Tournaments, #Awards, #Portfolio, #Contacts{
    /*бутстрап сетка*/
    .row{
      margin: 0;
    }
  }
  /*название компании  в логотипе*/
  .name_company{
    opacity: 1 !important;
    font-size: 1.5rem;
    padding: 3% 2px 0;
    letter-spacing: -1px;
    color: #3798c5 !important;
    font-weight: 500;
    font-family: 'Alkatra', cursive;
  }
  /*текст*/
  .text{
    font-size: 1.5rem;
    font-family: 'Forum', cursive;
    line-height: 1.8rem;
    font-weight: 500;
  }
  /*логотип*/
  .logo{
    width: 38px;
    height: 38px;
    fill: #4797bc;
    float: left;
    margin-top: 1.5%;
    margin-right: 5%
  }
  /*картинки*/
  img{
    display: block;
    width: 100%;
  }
  /*кнопки*/
  button{
    text-align: center;
    border-radius: 13px;
    display: block;
    padding: 2% 3%;
    сolor: $colorText !important;
    box-shadow:
       0 0.5px 3.5px 0.5px rgba(55, 152, 197, 0.52),
       inset 2px 2px 2px 0px rgba(55, 152, 197, 0.52),
       7px 7px 20px 0px rgba(0,0,0,.1),
       4px 4px 5px 0px rgba(0,0,0,.1);
    border: none;
    z-index: 10;
    /*при наведении*/
    &:hover{
      transform: $hoverEffectBlock;
    }
  }
  /*абзацы, кнопки, списки, формы ввода, ссылки*/
  p,button,ol,input,a{
    color: $colorText !important;
  }
  /*ссылки*/
  a{
    text-decoration: none !important;
  }
  /*абзацы*/
  p{
    margin-bottom: 2.5% !important;
  }
  /*абзацы, кнопки, списки, формы ввода, ссылки, блоки в Компоненте - Контакты*/
  p,a,button,ol, #Contacts div{
    font-size: 1.45rem;
    font-weight: 200;
    line-height: 1.7rem;
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
  h2,p,#Home button, #FormEntry button, li, #FormEntry input, #FormEntry select{
    font-family: $fontFamily;
    font-weight: 300;
    z-index: 7;
  }
  /*заголовки*/
  h2{
    padding: 2%;
    font-size: 1.6rem !important;
    text-align: center;
    text-shadow: #293655 3px 0 120px;
    color: #3798c5;
  }
  /*контейнер для выделения важного*/
  span{
      font-family: 'Alkatra', cursive;
      letter-spacing: -.5px;
  }
  /*Кнопки в компонентах - Главная, Запись на грим*/
  #Home button, #FormEntry button{
      text-align: center;
      display: block;
      сolor: $colorText !important;
      box-shadow:
          0 0.5px 3.5px 0.5px rgba(55, 152, 197, 0.52),
          inset 2px 2px 2px 0px rgba(55, 152, 197, 0.52),
          7px 7px 20px 0px rgba(0,0,0,.1),
          4px 4px 5px 0px rgba(0,0,0,.1);
      background:  rgba(24, 57, 80, .6);
      border: none;
      z-index: 10;
      /*при наведении*/
      &:hover{
        transform: $hoverEffectBlock;
        background:  rgba(24, 57, 80, .8) !important;
      }
  }
  /*Компонент - Главная*/
  #Home{
    padding-bottom: 210px;
    /*фон для основной картинки компонента*/
    .imgBg{
      background-image: radial-gradient(ellipse 47% 50%, rgba(20, 102, 141, 0.65), transparent );
      width: 100%;
      height: 120%;
      top:0;
    }
    /*абзацы*/
    p{
      font-size: 1.45rem;
      line-height: 1.9rem;
      letter-spacing: .5px;
      text-align: center;
      width: 145%;
      padding: 5% 0 4%;
    }
    /*блок под кнопку*/
    .blockButton{
      width: 140%;
    }
    /*параметры сетки бутстрап*/
    .col-4{
      z-index: 10;
    }
    /*кнопки*/
    button{
      border-radius: $borderRadius !important;
      width: 80%;
      margin: 5% auto 0;
      padding: 2% 3%;
      font-size: 1.5rem !important;
    }
    /*заголовки*/
    h1{
      padding: 30% 0 0;
      width: 142%;
      margin-left: -10%;
      position: relative;
      font-weight: 500;
      font-family: 'Vollkorn', serif;
      letter-spacing: -1px;
      color: #3798c5;
      text-shadow:
              0 0 5px #000,
              0 0 6px rgba(6, 41, 57, 0.52),
              0 0 10px #111,
              0 0 6px  #44a3e2,
              2px 2px 2px #1a1818,
              1px 1px 2px #032645;
      font-size: 4.4rem;
      line-height: 4.8rem;
      text-align: center;
      z-index: 10;
    }
    /*заголовок в Компоненте - Главная*/
    .css-typing{
      width: 158%;
      white-space:nowrap;
      overflow:hidden;
      animation: type 2s steps(50, end);
    }
    /*анимация*/
    @keyframes type{
      from { width: 0; }
    }
    /*картинки*/
    img{
      padding-top: 2%;
      width: 100%;
      @include img;
    }
  }
  /*Компонент - О компании*/
  #About{
    padding-bottom: 60px;
    /*параметры сетки бутстрап*/
    .col-3{
      padding-left: 0 !important;
      padding-right: 0 !important;
    }
    /*картинки*/
    img{
      @include img;
      width: 90%;
    }
    /*фон для основной картинки компонента*/
    .imgBg{
      @include imgBg;
      width: 130%;
      height: 135%;
      left: -10%;
      top:-10%;
    }
    /*блок под картинки производителей грима*/
    .imgProducts{
      background: $bgBlock;
      border-radius: $borderRadius;
      float: left;
      margin: 0 2% 7%;
      padding: 5px;
      position: relative;
      /*при наведении*/
      &:hover{
        transform: $hoverEffectBlock;
      }
    }
  }
  /*Компонент - Подготовка*/
  #Preparation{
    padding-bottom: 110px;
    /*параметры сетки бутстрап*/
    .col{
      padding-top: 5% !important;
    }
    /*список*/
    ol {
      padding:0;
      list-style: none;
      counter-reset: li;
    }
    /*пункты списка*/
    li {
      position: relative;
      padding: 17px 20px 22px 28px;
      margin-left: 40px;
      transition-duration: 0.3s;
      /*круг вместо точки в списке*/
      &:before {
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
      &:hover:before {
        color: #337AB7;
      }
      /*круг вместо точки в списке*/
      &:after {
        position: absolute;
        top: 10px;
        left: -30px;
        width: 48px;
        height: 48px;
        border-color: rgba(55, 152, 197, 0.7);
        border-style: solid;
        border-width: 5px;
        border-radius: 50%;
        content: '';
        opacity: 0.5;
        box-sizing: border-box;
      }
      /*при наведении*/
      &:hover:after {
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
      @include img;
      width: 90%;
    }
    /*фон для основной картинки компонента*/
    .imgBg{
      @include imgBg;
      z-index: 3;
      background-image: radial-gradient(ellipse 47% 48%, rgba(20, 102, 141, 0.55), transparent);
      position: absolute;
      width: 115%;
      height: 135%;
      left: -12%;
      top: -20%;
    }
  }
  /*Компонент - Запись на грим*/
  #FormEntry{
    padding-bottom: 60px;
    /*фраза про стоимость*/
    .aboutMoney{
      margin: 3% auto 0 !important;
      display: block;
      line-height: 2rem;
      width: 100%;
      text-align: center;
      padding: 3% 2%;
      font-style: italic;
    }
    /*абзацы*/
    p{
      width: 85%;
      margin: 0 auto 3%;
    }
    /*блок под стоимость*/
    .money{
      font-size: 2rem !important;
      font-family: $fontFamily;
      color: #1496cf;
    }
    /*разделение абзацев*/
    hr{
      height: 1px;
      background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(22, 185, 191, 0.33), rgba(0, 0, 0, 0));
    }
    /*заголовки*/
    h2{
      padding-bottom: 1%;
    }
    /*кнопки*/
    button{
      border-radius: $borderRadius !important;
      width: 100%;
      margin: 3% auto 2%;
      padding: 2% 0;
      font-size: 1.5rem;
    }
    /*картинки*/
    img{
      @include img;
      width: 90%;
    }
    /*фон для основной картинки компонента*/
    .imgBg{
      @include imgBg;
      width: 130%;
      height: 125%;
      left: -10%;
      top:-15%;
    }
    /*форма*/
    form{
      width: 90%;
      margin: 3% auto;
      padding: 2% 5%;
    }
    /*форма ввода|выбора*/
    input, select{
      border-top: none !important;
      border-left: none !important;
      border-right: none !important;
      width: 100%;
      font-size: 1.35rem !important;
      background: transparent;
      padding: 2%;
      margin-bottom: 4%;
      border-bottom: 1px solid rgba(55, 152, 197, 0.52);
      color: #d7dbe5;
      border-radius: 0 !important;
    }
    /*пункты выбора*/
    option{
      border: none !important;
      background: #1f3446 !important;
      /*неактивный пункт*/
      &:disabled{
        display: none;
      }
    }
    /*второстепенный текст*/
    .desc{
      color: rgba(85, 144, 165) !important;
    }
    /*фразы в формах ввода|выбора*/
    input::placeholder, select:optional {
      color: #e3e5ea;
    }
    /*фокус формы ввода|выбора*/
    input:focus, select:focus {
      background-color: transparent !important;
    }
  }
  /*Компонент - Турниры*/
  #Tournaments{
    padding-bottom: 40px;
    /*дата турниров*/
    .date{
      padding: 2% 4%;
      color: #3c88b5 !important;
      margin-bottom: 1% !important;
    }
    /*разделение абзацев*/
    hr{
      background: rgba(55, 152, 197, 0.52);
      width: 50%;
      margin: .3rem auto;
    }
    /*контейнер, который включает в себя повтор блоков*/
    .flex-container{
      align-items: center;
      justify-content: center;
    }
    /*блоки с турнирами*/
    .flex-container > div {
      background: rgba(53, 59, 62, 0.25);
      border-radius: $borderRadius;
      box-shadow: 0 0.5px 3.5px 0.5px rgba(55, 152, 197, 0.52);
      text-align: center;
      margin: 0 1.8% 1.8%;
      width: 29%;
      /*название турниров*/
      .name_tournament{
        background: rgba(24, 57, 80, 0.45);
        padding: 3% 0 !important;
        margin-bottom: 0 !important;
      }
      /*абзацы*/
      p{
        padding-left: 1%;
        padding-right: 1%;
      }
      /*картинки*/
      img{
        width: 70%;
        display: block;
        margin: 5% auto 0;
        opacity: .8;
        filter: blur(0.5px);
      }
      /*при наведении*/
      &:hover{
        transform: $hoverEffectBlock;
      }
    }
  }
  /*Компонент - Награды*/
  #Awards{
    padding-bottom: 20px;
    /*текст награды*/
    .awards{
      font-size: 1.4rem;
      line-height: 2rem;
      letter-spacing: 0.5px;
      font-family: 'Roboto Slab', serif;
      padding: 1.2% 1.2% 0;
      color: #c5c4bf;
      font-style: italic;
      margin-right: 4%;
      margin-bottom: 0 !important;
    }
    /*картинки*/
    img{
      margin-top: -2%;
    }
    /*автор (текст)*/
    .author{
      font-size: 1.4rem;
      margin-top: -1%;
      text-align: right !important;
      color: #95c2d4 !important;
      font-style: initial;
    }
  }
  /*Компонент - Портфолио*/
  #Portfolio{
    padding-bottom: 40px;
    /*блоки с картинками (ссылками)*/
    .flex-container > a {
      width: 13.5%;
      height: 100%;
      margin: 0 1.5% 2.5% 1.5% !important;
      box-shadow: 0 1px 8px 1px #071935;
      /*при наведении*/
      &:hover{
        box-shadow: 0 1px 8px 1px #293655;
        transform: $hoverEffectBlock;
      }
    }
  }
  /*Компонент - Контакты*/
  #Contacts{
    padding-bottom: 40px;
    /*контейнер для выделения важного*/
    span{
      font-family: $fontFamily ;
    }
    /*разделение абзацев*/
    hr{
      background: rgba(55, 152, 197, 0.52);
      width: 100%;
      margin: .3rem auto;
    }
    /*блоки с пунктами информации (контакты)*/
    .flex-container > div {
      padding: 2%;
      width: 100%;
      height: 100%;
      margin: 0 0 4% 0;
      /*при наведении*/
      &:hover{
        transform: $hoverEffectBlock;
      }
      /*абзацы*/
      p{
        margin: 0 !important;
      }
    }
    /*ссылка*/
    a{
      color:  $colorText;
    }
    /*svg*/
    svg{
      fill: rgba(55, 152, 197, 0.52);
      width: 35px;
      height: 35px;
      margin-right: 2%;
      margin-top: -1.5%;
      float: left;
    }
    /*текст*/
    .text{
      margin-left: -4%;
      font-weight: 200 !important;
    }
    /*фраза - "До новых встреч!"*/
    .desc{
      color: #3798c5 !important;
    }
    /*параметры сетки бутстрап*/
    .col-4{
      padding: 0 8px 0 0 !important;
    }
  }
  /*Компонент - Футер*/
  #MyFooter{
    padding: 1.5% 0 3.5%;
    height: 25px;
    background: black;
    /*svg*/
    svg{
      fill:#8e9aaf;
      width: 35px;
      height: 35px;
      float: right;
      /*последний элемент*/
      &:last-child {
        margin-top: -2.7%;
      }
    }
    /*текст*/
    .text{
      /*svg*/
      svg{float: left;}
    }
  }

  /*АДАПТИВНОСТЬ*/
  @media screen and (min-width: 992px) and (max-width: 1200px){
    /*название компании  в логотипе*/
    .name_company{
      font-size: 1.4rem;
    }
    /*абзацы*/
    p{
      margin-bottom: 2% !important;
    }
    /*текст во всех компонентах + пунктов меню*/
    #Home p, #Awards .awards,#Awards .author, p,a,button,ol, #Contacts div,.text, .nav-link{
      font-size: 1.25rem !important;
      line-height: 1.45rem;
    }
    /*Компоненты - О компании, Подготовка, Запись на грим*/
    #About, #Preparation, #FormEntry{
      /*картинки*/
      img{
        margin-top: 10%;
      }
    }
    /*Компонент - Главная*/
    #Home{
      /*заголовки*/
      h1{
        font-size: 3.5rem;
        line-height: 3rem;
      }
    }
    /*Компонент - Подготовка*/
    #Preparation{
      padding-bottom: 60px;
    }
    /*Компонент - Запись на грим*/
    #FormEntry{
      /*блок под стоимость*/
      .money{
        font-size: 1.5rem !important;
      }
      /*кнопки*/
      button{
        font-size: 1.2rem;
      }
      /*форма ввода|выбора*/
      input, select{
        font-size: 1.2rem !important;
      }
    }
    /*Компонент - Награды*/
    #Awards{
      /*текст награды*/
      .awards{
        font-size: 1.35rem;
        line-height: 1.5rem;
      }
    }
    /*Компоненты - Контакты, Футер*/
    #Contacts, #MyFooter{
      /*svg*/
      svg{
        margin-top: -1%;
        width: 30px;
        height: 30px;
      }
    }
  }
  @media screen and (min-width: 768px) and (max-width: 992px){
    /*абзацы*/
    p{
      margin-bottom: 1.5% !important;
    }
    /*название компании  в логотипе*/
    .name_company{
      font-size: 1.3rem;
      padding: 5% 2px 0;
    }
    /*текст во всех компонентах + пунктов меню*/
    #Home p, #Awards .awards, #Awards .author, p,a,button,ol, #Contacts div,.text, .nav-link{
      font-size: 1rem !important;
      line-height: 1.2rem;
    }
    /*заголовки*/
    h2{
      font-size: 1.2rem !important;
    }
    /*Компонент - Главная*/
    #Home{
      padding-bottom: 15%;
      /*картинки*/
      img{
        width: 108%;
        margin-left: -8%;
      }
      /*заголовки*/
      h1{
        padding: 50% 0 0;
        font-size: 2.5rem;
        line-height: 2.5rem;
      }
      /*блок под кнопку, абзац, заголовок в Компоненте - Главная*/
      .blockButton, p,.css-typing {
        width: 190%;
      }
      /*кнопки*/
      button{
        width: 60%;
        padding: 0 2% 1%;
      }
    }
    /*Компоненты - О компании, Подготовка, Запись на грим*/
    #About, #Preparation, #FormEntry{
      /*картинки*/
      img{
        width: 95%;
      }
    }
    /*Компонент - О компании*/
    #About{
      padding-bottom: 6%;
      /*картинки*/
      img{
        margin-top: 22%;
      }
      /*блок под картинки производителей грима*/
      .imgProducts{
        width: 100%;
        padding: .5%;
        margin: 8% 10px 8% 0;
      }
    }
    /*Компонент - Подготовка*/
    #Preparation{
      padding-bottom: 6%;
      @include preparationLi;
    }
    /*Компонент - Запись на грим*/
    #FormEntry{
      padding-bottom: 4%;
      /*форма ввода|выбора*/
      input,select{
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
      /*картинки*/
      img{
        margin-top: 8%;
      }
      /*блок под стоимость*/
      .money{
        font-size: 1rem !important;
      }
    }
    /*Компонент - Турниры*/
    #Tournaments{
      padding-bottom: 4%;
      /*блоки с турнирами (картинки)*/
      .flex-container > div img{
        width: 65%;
      }
    }
    /*Компоненты - Контакты, Футер*/
    #Contacts, #MyFooter{
      /*svg*/
      svg{
        margin-top: .45%;
        width: 17px;
        height: 17px;
      }
    }
  }
  @media screen and (min-width: 500px) and (max-width: 768px){
    /*название компании  в логотипе*/
    .name_company{
      font-size: 1.3rem;
      padding: 5% 2px 0;
    }
    /*текст во всех компонентах + пунктов меню*/
    #Home p, #Awards .awards, #Awards .author, p,a,button,ol, #Contacts div,.text, .nav-link{
      font-size: 1.2rem;
      line-height: 1.25rem;
    }
    /*заголовки*/
    h2{
      font-size: 1.3rem !important;
      margin-bottom: 0 !important;
    }
    /*Компонент - Главная*/
    #Home{
      padding-bottom: 27%;
      @include HomeLess768;
      /*картинки*/
      img {
        width: 150%;
        margin-top: 33%;
        margin-left: -55%;
      }
      /*заголовки*/
      h1{
        width: 350%;
        font-size: 2.8rem;
        line-height: 2.6rem;
      }
      /*абзац, заголовок в Компоненте - Главная, блок под кнопку*/
      p,.css-typing,.blockButton {
        width: 440%;
      }
      /*абзацы*/
      p{
        margin-top: 110px;
        background: rgb(3 14 19 / 46%);
        margin-bottom: 60px;
      }
    }
    @include AboutLess768;
    @include PreparationLess768;
    /*Компонент - Запись на грим*/
    #FormEntry{
      @include FormEntryLess768;
      /*форма ввода|выбора*/
      input,select{
        font-size: 1.15rem !important;
      }
      /*кнопки*/
      button{
        font-size: 1.2rem;
      }
      /*блок под стоимость*/
      .money{
        font-size: 1.3rem !important;
      }
    }
    @include TournamentsLess768;
    @include Awards768;
    /*Компонент - Портфолио*/
    #Portfolio{
      padding-bottom: 10px;
      /*блоки с картинками (ссылками)*/
      .flex-container > a {
        width: 30%;
      }
    }
    @include Contacts768;
    /*Компоненты - Контакты, Футер*/
    #Contacts, #MyFooter{
      /*svg*/
      svg{
        width: 28px;
        height: 28px;
        margin-top: -.5%;
      }
    }
    /*Компонент - Футер*/
    #MyFooter {
      padding: 3% 0 6%;
      /*svg (последний элемент)*/
      svg:last-child {
        margin-top: -6%;
      }
    }
  }
  @media screen and  (max-width: 500px){
    /*название компании  в логотипе*/
    .name_company{
      font-size: 1.2rem;
      padding: 6% 2px 0;
    }
    /*текст во всех компонентах + пунктов меню*/
    #Home p, #Awards .awards, #Awards .author, p,a,button,ol, #Contacts div,.text, .nav-link{
      font-size: 1.15rem;
      line-height: 1.25rem;
    }
    /*заголовки*/
    h2{
      font-size: 1.3rem !important;
      margin-bottom: 0 !important;
    }
    /*Компонент - Главная*/
    #Home{
      padding-bottom: 22%;
      @include HomeLess768;
      /*заголовки*/
      h1{
        width: 380%;
        font-size: 2.3rem;
        line-height: 2.3rem;
      }
      /*картинки*/
      img{
        width: 150%;
        margin-top: 32%;
        margin-left: -55%;
      }
      /*абзац, заголовок в Компоненте - Главная, блок под кнопку*/
      p,.css-typing,.blockButton{
        width: 500%;
      }
      /*абзацы*/
      p{
        margin-top: 80px;
        background: rgb(3 14 19 / 46%);
        margin-bottom: 90px;
      }
    }
    @include AboutLess768;
    @include PreparationLess768;
    /*Компонент - Запись на грим*/
    #FormEntry{
      @include FormEntryLess768;
      /*форма вводы|выбора*/
      input,select{
        font-size: 1.15rem !important;
      }
      /*кнопки*/
      button{
        font-size: 1.2rem;
      }
      /*блок под стоимость*/
      .money{
        display: block;
        font-size: 1.3rem !important;
      }
    }
    @include TournamentsLess768;
    @include Awards768;
    /*Компонент - Портфолио*/
    #Portfolio{
      padding-bottom: 10px;
      /*блоки с картинками (ссылками)*/
      .flex-container > a {
        width: 30%;
      }
    }
    @include Contacts768;
    /*Компоненты - Контакты, Футер*/
    #Contacts, #MyFooter{
      /*svg*/
      svg{
        width: 22px;
        height: 22px;
        margin-top: -.5%;
      }
    }
    /*Компонент - Футер*/
    #MyFooter{
      padding: 8% 0 4%;
      /*текст, svg (последний элемент)*/
      .text,svg:last-child{
        margin-top: -6%;
      }
    }
  }
</style>
