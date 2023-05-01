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
  $hoverBgBlock: rgba(53, 59, 62, 0.25);
  $hoverEffectBlock:scale(1.03);

  @mixin preparationLi{
    .preparation{
      padding-top: 0 !important;
    }
    li {
      padding: 10px 10px 12px 25px;
      margin-left: 20px;
      &:before {
        top: 9px;
        left: -20px;
        width: 36px;
      }
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
    .col-5{
      flex: 0 0 100%;
      max-width: 100%;
      img{
        width: 50%;
        margin: 0 auto;
        position: relative;
      }
    }
  }
  @mixin HomeLess768{
    h1{
      padding: 20% 0 0;
    }
    .imgBg{
      left: -45%;
    }
    button{
      padding: 0 2% 1%;
    }
  }
  @mixin AboutLess768{
    #About{
      padding-bottom: 20px;
      @include Col5WithImg768;
      .row:first-child{
        flex-direction: column-reverse;
      }
      .imgBg{
        width: 110%;
      }
      .col-3{
        flex: 0 0 33%;
        padding: 0 5px !important;
      }
      .imgLast{
        padding: 3%;
        width: 100%;
        margin: 0 10px 8% 0;
      }
    }

  }
  @mixin PreparationLess768{
    #Preparation{
      @include Col5WithImg768;
      padding-bottom: 10px;
      @include preparationLi;
      .imgBg {
        width: 100%;
      }
    }
  }
  @mixin FormEntryLess768{
    @include Col5WithImg768;
    padding-bottom: 10px;
    form,p{
      width: 100%;
    }
    form{
      padding: 1% 0;
    }
    .aboutMoney{
      padding: 0;
      margin: 2% 0 !important;
    }
    .row:first-child{
      flex-direction: column-reverse;
    }
    .imgBg{
      width: 110%;
    }
  }
  @mixin TournamentsLess768{
    #Tournaments{
      padding-bottom: 10px;
      .flex-container{
        flex-direction: column;
        & > div{
          width: 70%;
          margin: 1% auto 5%;
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
    #Awards{
      .row{
        flex-direction: column;
      }
      .awards{
        margin-right: 0;
        background: rgb(3 14 19 / 56%);
        padding: 1.5%;
      }
      .col{
        padding: 0 20px;
      }
      .col-2{
        flex: 0 0 100%;
        max-width: 100%;
        img{
          width: 28%;
          margin: 0 auto;
          position: relative;
        }
      }
    }
  }
  @mixin Contacts768{
    #Contacts{
      padding-bottom: 10px;
      .col-5{
        flex: 0 0 100%;
        max-width: 100%;
      }
      .row{
        flex-direction: column;
      }
      .flex-container {
        & > div {
          margin: 0 0 1% 0;
          padding-left: 0;
        }
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
  .background{
    background: url("../public/bg-blur-mobile.svg") no-repeat;
    background-size: cover;
    opacity: .8;
  }
  #Home,#About,#Preparation,#FormEntry,#Tournaments,#Portfolio,#Contacts{
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
  .text{
    font-size: 1.5rem;
    font-family: 'Forum', cursive;
    line-height: 1.8rem;
    font-weight: 500;
  }
  .logo{
    width: 38px;
    height: 38px;
    fill: #4797bc;
    float: left;
    margin-top: 1.5%;
    margin-right: 5%
  }
  img{
    display: block;
    width: 100%;
  }
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
    background: $hoverBgBlock;
    border: none;
    z-index: 10;
    &:hover{
      transform: $hoverEffectBlock;
      background:  rgba(24, 57, 80, 1);
    }
  }
  p,button,ol,input,a{
    color: $colorText !important;
  }
  a{
    text-decoration: none !important;
  }
  p{
    margin-bottom: 2.5% !important;
  }
  p,a,button,ol, #Contacts div{
    font-size: 1.45rem;
    font-weight: 200;
    line-height: 1.7rem;
  }
  input{
    line-height: 1.2rem;
  }
  .flex-container{
    display: flex;
    flex-wrap: wrap;
  }
  h2,p,#Home button, #FormEntry button, li, #FormEntry input, #FormEntry select{
    font-family: $fontFamily;
    font-weight: 300;
    z-index: 7;
  }
  h2{
    padding: 2%;
    font-size: 1.6rem !important;
    text-align: center;
    text-shadow: #293655 3px 0 120px;
    color: #3798c5;
  }
  span{
      font-family: 'Alkatra', cursive;
      letter-spacing: -.5px;
  }
  #Home button, #FormEntry button{
      text-align: center;
      display: block;
      сolor: $colorText !important;
      box-shadow:
              0 0.5px 3.5px 0.5px rgba(55, 152, 197, 0.52),
              inset 2px 2px 2px 0px rgba(55, 152, 197, 0.52),
              7px 7px 20px 0px rgba(0,0,0,.1),
              4px 4px 5px 0px rgba(0,0,0,.1);
      background: $hoverBgBlock;
      border: none;
      z-index: 10;
      &:hover{
        transform: $hoverEffectBlock;
        background:  rgba(24, 57, 80, .4) !important;
      }
  }
  #Home{
    padding-bottom: 210px;
    .imgBg{
      background-image: radial-gradient(ellipse 47% 50%, rgba(20, 102, 141, 0.65), transparent );
      width: 100%;
      height: 120%;
      top:0;
    }
    p{
      font-size: 1.45rem;
      line-height: 1.9rem;
      letter-spacing: .5px;
      text-align: center;
      width: 145%;
      padding: 5% 0 4%;
    }
    .allButton{
      width: 140%;
    }
    .col-4{
      z-index: 10;
    }
    button{
      border-radius: $borderRadius !important;
      width: 80%;
      margin: 5% auto 0;
      padding: 2% 3%;
      font-size: 1.5rem !important;
    }
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
    .css-typing{
      width: 158%;
      white-space:nowrap;
      overflow:hidden;
      animation: type 2s steps(50, end);
    }
    @keyframes type{
      from { width: 0; }
    }
    img{
      padding-top: 2%;
      width: 100%;
      @include img;
    }
  }
  #About{
    padding-bottom: 60px;
    .col-3{
      padding-left: 0 !important;
      padding-right: 0 !important;
    }
    img{
      @include img;
      width: 90%;
    }
    .imgBg{
      @include imgBg;
      width: 130%;
      height: 135%;
      left: -10%;
      top:-10%;
    }
    .imgLast{
      background: $bgBlock;
      border-radius: $borderRadius;
      float: left;
      margin: 0 2% 7%;
      padding: 5px;
      position: relative;
      &:hover{
        transform: $hoverEffectBlock;
      }
    }
  }
  #Preparation{
    padding-bottom: 110px;
    .preparation{
      padding-top: 5% !important;
    }
    ol {
      padding:0;
      list-style: none;
      counter-reset: li;
    }
    li {
      position: relative;
      padding: 17px 20px 22px 28px;
      margin-left: 40px;
      transition-duration: 0.3s;
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
      &:hover:before {
        color: #337AB7;
      }
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
      &:hover:after {
        animation: 500ms ease-in-out 0s bounceIn;
        opacity: 1;
      }
    }
    @keyframes bounceIn {
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
    img{
      @include img;
      width: 90%;
    }
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
  #FormEntry{
    padding-bottom: 60px;
    .aboutMoney{
      margin: 3% auto 0 !important;
      display: block;
      line-height: 2rem;
      width: 100%;
      text-align: center;
      padding: 3% 2%;
      font-style: italic;
    }
    p{
      width: 85%;
      margin: 0 auto 3%;
    }
    .money{
      font-size: 2rem !important;
      font-family: $fontFamily;
      color: #1496cf;
    }
    hr{
      height: 1px;
      background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(22, 185, 191, 0.33), rgba(0, 0, 0, 0));
    }
    h2{
      padding-bottom: 1%;
    }
    button{
      border-radius: $borderRadius !important;
      width: 100%;
      margin: 3% auto 2%;
      padding: 2% 0;
      font-size: 1.5rem;
    }
    img{
      @include img;
      width: 90%;
    }
    .imgBg{
      @include imgBg;
      width: 130%;
      height: 125%;
      left: -10%;
      top:-15%;
    }
    form{
      width: 90%;
      margin: 3% auto;
      padding: 2% 5%;
    }
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
    option{
      border: none !important;
      background: #1f3446 !important;
      &:disabled{
        display: none;
      }
    }
    .desc{
      color: rgba(85, 144, 165) !important;
    }
    input::placeholder, select:optional {
      color: #e3e5ea;
    }
    input:focus, select:focus {
      background-color: transparent !important;
    }
  }
  #Tournaments{
    padding-bottom: 40px;
    .date{
      padding: 2% 4%;
      color: #3c88b5 !important;
      margin-bottom: 1% !important;
    }
    hr{
      background: rgba(55, 152, 197, 0.52);
      width: 50%;
      margin: .3rem auto;
    }
    .flex-container{
      align-items: center;
      justify-content: center;
    }
    .flex-container > div {
      background: $hoverBgBlock;
      border-radius: $borderRadius;
      box-shadow: 0 0.5px 3.5px 0.5px rgba(55, 152, 197, 0.52);
      text-align: center;
      margin: 0 1.8% 1.8%;
      width: 29%;
      .name_tournament{
        background: rgba(24, 57, 80, 0.45);
        padding: 3% 0 !important;
        margin-bottom: 0 !important;
      }
      p{
        padding-left: 1%;
        padding-right: 1%;
      }
      img{
        width: 70%;
        display: block;
        margin: 5% auto 0;
        opacity: .8;
        filter: blur(0.5px);
      }
      &:hover{
        background: $hoverBgBlock;
        transform: $hoverEffectBlock;
      }
    }

  }
  #Awards{
    padding-bottom: 20px;
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
    img{
      margin-top: -2%;
    }
    .author{
      font-size: 1.4rem;
      margin-top: -1%;
      text-align: right !important;
      color: #95c2d4 !important;
      font-style: initial;
    }
  }
  #Portfolio{
    padding-bottom: 40px;
    /*блоки с картинками*/
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
  #Contacts{
    padding-bottom: 40px;
    span{
      font-family: $fontFamily ;
    }
    hr {
      background: rgba(55, 152, 197, 0.52);
      width: 100%;
      margin: .3rem auto;
    }
    .flex-container{
      & > div {
        padding: 2%;
        width: 100%;
        height: 100%;
        margin: 0 0 4% 0;
        &:hover{
          transform: $hoverEffectBlock;
        }
        p{
          margin: 0 !important;
        }
      }
    }
    a{
      color:  $colorText;
    }
    svg{
      fill: rgba(55, 152, 197, 0.52);
      width: 35px;
      height: 35px;
      margin-right: 2%;
      margin-top: -1.5%;
      float: left;
    }
    .text{
      margin-left: -4%;
      font-weight: 200 !important;
    }
    .desc{
      color: #3798c5 !important;
    }
    .col-4{
      padding: 0 8px 0 0 !important;
    }
  }
  #MyFooter{
    padding: 1.5% 0 3.5%;
    height: 25px;
    background: black;
    svg{
      fill:#8e9aaf;
      width: 35px;
      height: 35px;
      float: right;
      &:last-child {
        margin-top: -2.7%;
      }
    }
    .text{
      svg{float: left;}
    }
  }
  @media screen and (min-width: 992px) and (max-width: 1200px){
    .name_company{
      font-size: 1.4rem;
    }
    p{
      margin-bottom: 2% !important;
    }
    #Home p, #Awards .awards,#Awards .author, p,a,button,ol, #Contacts div,.text, .nav-link{
      font-size: 1.25rem !important;
      line-height: 1.45rem;
    }
    #About, #Preparation, #FormEntry{
      img{
        margin-top: 10%;
      }
    }
    #Home{
      h1{
        font-size: 3.5rem;
        line-height: 3rem;
      }
    }
    #Preparation{
      padding-bottom: 60px;
    }
    #FormEntry{
      .money{
        font-size: 1.5rem !important;
      }
      button{
        font-size: 1.2rem;
      }
      input, select{
        font-size: 1.2rem !important;
      }
    }
    #Awards .awards{
      font-size: 1.35rem;
      line-height: 1.5rem;
    }
    #Contacts, #MyFooter{
      svg{
        margin-top: -1%;
        width: 30px;
        height: 30px;
      }
    }
  }
  @media screen and (min-width: 768px) and (max-width: 992px){
    p{
      margin-bottom: 1.5% !important;
    }
    .name_company{
      font-size: 1.3rem;
      padding: 5% 2px 0;
    }
    #Home p, #Awards .awards, #Awards .author, p,a,button,ol, #Contacts div,.text, .nav-link{
      font-size: 1rem !important;
      line-height: 1.2rem;
    }
    h2{
      font-size: 1.2rem !important;
    }
    #Home{
      padding-bottom: 15%;
      img{
        width: 108%;
        margin-left: -8%;
      }
      h1{
        padding: 50% 0 0;
        font-size: 2.5rem;
        line-height: 2.5rem;
      }
      .allButton, p,.css-typing {
        width: 190%;
      }
      button{
        width: 60%;
        padding: 0 2% 1%;
      }
    }
    #About, #Preparation, #FormEntry{
      img{
        width: 95%;
      }
    }
    #About{
      padding-bottom: 6%;
      img{
        margin-top: 22%;
      }
      .imgLast{
        width: 100%;
        padding: .5%;
        margin: 8% 10px 8% 0;
      }
    }
    #Preparation{
      padding-bottom: 6%;
      @include preparationLi;
    }
    #FormEntry{
      padding-bottom: 4%;
      input,select{
        font-size: 1rem !important;
        margin-bottom: 1%;
      }
      button{
        font-size: 1rem;
      }
      form,p{
        width: 90%;
      }
      img{
        margin-top: 8%;
      }
      .money{
        font-size: 1rem !important;
      }
    }
    #Tournaments{
      padding-bottom: 4%;
      .flex-container > div img{
        width: 65%;
      }
    }
    #Contacts,#MyFooter{
      svg{
        margin-top: .45%;
        width: 17px;
        height: 17px;
      }
    }
  }
  @media screen and (min-width: 500px) and (max-width: 768px){
    .name_company{
      font-size: 1.3rem;
      padding: 5% 2px 0;
    }
    #Home p, #Awards .awards, #Awards .author, p,a,button,ol, #Contacts div,.text, .nav-link{
      font-size: 1.2rem;
      line-height: 1.25rem;
    }
    h2{
      font-size: 1.3rem !important;
      margin-bottom: 0 !important;
    }
    #Home{
      padding-bottom: 27%;
      @include HomeLess768;
      img {
        width: 150%;
        margin-top: 33%;
        margin-left: -55%;
      }
      h1{
        width: 350%;
        font-size: 2.8rem;
        line-height: 2.6rem;
      }
      p,.css-typing,.allButton {
        width: 440%;
      }
      p{
        margin-top: 110px;
        background: rgb(3 14 19 / 46%);
        margin-bottom: 60px;
      }
    }
    @include AboutLess768;
    @include PreparationLess768;
    #FormEntry{
      @include FormEntryLess768;
      input,select{
        font-size: 1.15rem !important;
      }
      button{
        font-size: 1.2rem;
      }
      .money{
        font-size: 1.3rem !important;
      }
    }
    @include TournamentsLess768;
    @include Awards768;
    #Portfolio{
      padding-bottom: 10px;
      .flex-container > a {
        width: 30%;
      }
    }
    @include Contacts768;
    #Contacts, #MyFooter{
      svg{
        width: 28px;
        height: 28px;
        margin-top: -.5%;
      }
    }
    #MyFooter {
      padding: 3% 0 6%;
      svg:last-child {
        margin-top: -6%;
      }
    }
  }
  @media screen and  (max-width: 500px){
    .name_company{
      font-size: 1.2rem;
      padding: 6% 2px 0;
    }
    #Home p, #Awards .awards, #Awards .author, p,a,button,ol, #Contacts div,.text, .nav-link{
      font-size: 1.15rem;
      line-height: 1.25rem;
    }
    h2{
      font-size: 1.3rem !important;
      margin-bottom: 0 !important;
    }
    #Home{
      padding-bottom: 22%;
      @include HomeLess768;
      h1{
        width: 380%;
        font-size: 2.3rem;
        line-height: 2.3rem;
      }
      img {
        width: 150%;
        margin-top: 32%;
        margin-left: -55%;
      }
      p,.css-typing,.allButton{
        width: 500%;
      }
      p{
        margin-top: 80px;
        background: rgb(3 14 19 / 46%);
        margin-bottom: 90px;
      }
    }
    @include AboutLess768;
    @include PreparationLess768;
    #FormEntry{
      @include FormEntryLess768;
      input,select{
        font-size: 1.15rem !important;
      }
      button{
        font-size: 1.2rem;
      }
      .money{
        display: block;
        font-size: 1.3rem !important;
      }
    }
    @include TournamentsLess768;
    @include Awards768;
    #Portfolio{
      padding-bottom: 10px;
      .flex-container > a {
        width: 30%;
      }
    }
    @include Contacts768;
    #Contacts, #MyFooter{
      svg{
        width: 22px;
        height: 22px;
        margin-top: -.5%;
      }
    }
    #MyFooter {
      padding: 8% 0 4%;
      .text,svg:last-child{
        margin-top: -6%;
      }
    }
  }
</style>
