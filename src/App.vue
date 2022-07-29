<template>
  <div id="app">
    <div class="background">
      <Navbar/>
      <Home/>
      <About/>
      <Preparation/>
      <FormEntry/>
      <Tourneys/>
      <Portfolio/>
      <Contacts/>
      <MyFooter/>
    </div>
  </div>
</template>

<script>
import Home from "@/components/Home";
import Navbar from "@/components/navbar";
import About from "@/components/About";
import FormEntry from "@/components/FormEntry";
import Tourneys from "@/components/Tourneys";
import Portfolio from "@/components/Portfolio";
import MyFooter from "@/components/MyFooter";
import Contacts from "@/components/Contacts";
import Preparation from "@/components/Preparation";

export default {
  name: 'App',
  components: {
    Preparation,
    Contacts,
    MyFooter,
    Portfolio,
    Tourneys,
    FormEntry,
    About,
    Navbar,
    Home,
  }
}
</script>

<style lang="scss">
  $bgBlock: rgba(24, 57, 80, 0.3);
  $borderBlock: 2px solid rgba(67, 103, 167, 0.21);
  $fontFamily: 'Forum', cursive;
  $colorText: #8e9aaf;
  $bgImg: radial-gradient(ellipse 47% 48%, rgba(20, 102, 141, 0.55), transparent );
  $borderRadius: 8px;

  @mixin imgBg{
    z-index: 3;
    position: absolute;
    background-image: $bgImg;
  }
  @mixin img{
    z-index: 4;
    position: absolute;
  }
  @mixin block{
    background: $bgBlock;
    border: $borderBlock;
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
    //background: url("../public/fog-1.png") repeat fixed;
  }
  /*название компании "Аваконт" в логотипе*/
  .name_company{
    font-size: 1.5rem;
    letter-spacing: 2px;
    padding: 0 7px !important;
    color: #2b6584 !important;
    font-weight: 500;
    font-family: $fontFamily;
  }
  img{
    display: block;
    width: 100%;
  }
  p,button,ol,input{
    color: $colorText;
  }
  p{
    margin-bottom: 3.5% !important;
  }
  p,a,button,ol, #Contacts div{
    font-size: 1.5rem;
    line-height: 1.6rem;
  }
  input{
    line-height: 1.2rem;
  }
  .flex-container{
    display: flex;
    flex-wrap: wrap;
  }
  h2,p, #FormEntry button, li, input{
    font-family: $fontFamily;
    font-weight: 300;
    z-index: 7;
  }
  h2{
    padding: 2%;
    font-size: 1.8rem !important;
    text-align: center;
  }
  #Home{
    padding-bottom: 220px;
    .imgBg{
      background-image: radial-gradient(ellipse 47% 50%, rgba(20, 102, 141, 0.55), transparent );
      width: 130%;
      height: 145%;
      margin-left: -9%;
      top:-15%;
    }
    p{
      font-size: 2.2rem;
      line-height: 2.5rem;
      letter-spacing: .5px;
      text-align: center;
      width: 140%;
      padding: 5% 4% 4%;
      border-radius: $borderRadius;
    }
    .allButton{
      width: 140%;
    }
    a{
      font-size: 2rem;
      line-height: 2rem;
      letter-spacing: .5px;
    }
    .col-4{
      z-index: 10;
    }
    button{
      width: 47%;
      text-align: center;
      border-radius: 10px;
      margin: 4% 1.5% 2%;
      display: block;
      padding: 2% 3%;
      сolor: rgba(255, 255, 255, 0.75);
      border: 2px solid #8e9aaf;
      background:  rgba(24, 57, 80, 0.5);
      border: $borderBlock;
      font-size: 1.3rem;
      float: left;
      z-index: 10;
      &:last-child{
        background: transparent;
      }
    }
    h1{
      padding: 120px 0 0;
      width: 140%;
      margin-left: -4%;
      position: relative;
      font-family: "Rubik Dirt", cursive;
      letter-spacing: -1px;
      color: #457490;
      text-shadow: 2px 2px 12px #1a1818, 1px 1px 5px #032645;
      font-size: 3.8rem;
      line-height: 4rem;
      text-align: center;
      z-index: 10;
    }
    img{
      padding-top: 1%;
      width: 100%;
      @include img;
    }
  }
  #About{
    padding-bottom: 60px;
    .about{
      padding-top: 3% !important;
      .col-2 img{
        width: 110%;
        margin: 0 0 0 -20%;
        filter: invert(0.3);
        position: relative;
      }
    }
    .important{
      padding: 1%;
      @include block;
      border-radius: $borderRadius;
      margin: 3% 0;
      .col{
        padding-top: 1.5%;
        p{
          margin: 0 !important;
        }
      }
      .col-2{
        padding-top: 1%;
        padding-bottom: 1%;
      }
    }
    .imgLast{
      @include block;
      width: 100%;
      filter: brightness(80%);
      float: left;
      margin: 8% 10px;
      padding: 5px;
      border-radius: $borderRadius;
      position: relative;
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
  }
  #Preparation{
    padding-bottom: 90px;
    .preparation{
      padding-top:5% !important;
    }
    ol {
      padding:0;
      list-style: none;
      counter-reset: li;
    }
    li {
      position: relative;
      background: $bgBlock;
      border: $borderBlock;
      padding: 12px 25px 18px;
      margin: 12px 50px 25px 60px;
      transition-duration: 0.3s;
      border-radius: $borderRadius;
      &:hover {
        background: rgba(17, 31, 40, 0.95);
        cursor: default;
      }
      &:before {
        line-height: 32px;
        position: absolute;
        top: 15px;
        left: -40px;
        width: 40px;
        text-align: center;
        font-size: 1.2rem;
        font-weight: bold;
        color: white;
        background: #2b6584;
        counter-increment: li;
        content: counter(li);
        transition-duration: 0.2s;
      }
      &:hover:before {
        width:46px;
      }
      &:after {
        position: absolute;
        left: 0;
        top: 15px;
        content: "";
        height: 0;
        width: 0;
        border: 16px solid transparent;
        border-left-color: #2b6584;
        transition-duration: 0.2s
      }
      &:hover:after {
        margin-left: 6px;
      }
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
      top:-15%;
    }
  }
  #Portfolio h2, #Tourneys h2{
    text-shadow: #293655 3px 0 120px;
    color: $colorText;
  }
  #FormEntry{
    padding-bottom: 50px;
    .aboutMoney{
      //margin-bottom: 0 !important;
      margin: 0 auto 3% !important;
      display: block;
      text-align: center;
    }
    .money{
      font-size: 2.5rem !important;
      color: #3c88b5;
    }
    h2{
      color: #3c88b5;
      padding-bottom: 1%;
    }
    .block{
      padding: 3% 2% 0;
      color: $colorText;
      border-radius: $borderRadius;
    }
    button{
      width: 100%;
      text-align: center;
      border-radius: $borderRadius;
      margin: 6% auto 2%;
      border: none;
      display: block;
      padding: 2% 0;
      сolor: rgba(255, 255, 255, 0.75);
      background: rgba(60, 136, 181, 0.43);
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
      width: 80%;
      padding: 2% 5% 2%;
      @include block;
      border-radius: $borderRadius;
      margin: 0 auto 3%;
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
      font-family: $fontFamily;
      border-bottom: 1px solid #293655;
      color: $colorText;
    }
    input::placeholder, select:optional {
      color: rgba(142, 154, 175, 0.8);
    }
  }
  #Tourneys{
    padding-bottom: 40px;
    img{
      filter: brightness(89%);
    }
    .col .row{
      @include block;
      color: $colorText;
      margin-right: 2%;
      border-radius: $borderRadius;
    }
    .col-5{
      padding: 4px;
    }
    .col .col{
      text-align: center;
      padding: 6% 3% 3%;
    }
    hr{
      margin: .5rem 0;
      border-top: 1px solid $colorText;
    }
  }
  #Portfolio{
    padding-bottom: 40px;
    /*блоки с картинками*/
    .flex-container > img {
      width: 16.5%;
      height: 100%;
      margin: 0 1.5% 2.5% 1.5% !important;
      box-shadow: 0 1px 8px 1px #071935;
      /*при наведении*/
      &:hover{
        box-shadow: 0 1px 8px 1px #293655;
      }
    }
  }
  #Contacts{
    padding-bottom: 40px;
    .flex-container{
      padding: 2% 0;
      & > div {
        @include block;
        border-radius: $borderRadius;
        padding: 2.5%;
        width: 100%;
        height: 100%;
        margin: 0 0 4% 0 !important;
        p{
          margin: 0 !important;
        }
      }
    }
    a{
      color:  $colorText;
    }
    svg{
      fill: $colorText;
      width: 35px;
      height: 35px;
      margin-right: 2%;
      margin-top: -1.5%;
      float: left;
    }
    .text{
      margin-left: -4%;
    }
    .col-4{
      padding: 0 !important;
    }
  }
  @media screen and (min-width: 992px) and (max-width: 1200px){
    .name_company{
      font-size: 1.4rem;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 992px){
    .name_company{
      font-size: 1.3rem;
    }
  }
  @media screen and (min-width: 500px) and (max-width: 768px){
    .name_company{
      font-size: 1rem;
    }
  }
</style>
