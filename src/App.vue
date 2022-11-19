<template>
  <div id="app">
    <div class="background">
      <Navbar/>
      <Home/>
      <About/>
      <Preparation/>
      <FormEntry/>
      <Tournaments/>
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
import Preparation from "@/components/Preparation";

const axios = require('axios');
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
    Navbar,
    Home,
  },
  data(){
    return{

    }
  },
  methods: {
    getData(){
      axios.get('https://nbcpro.ru/events/')
      .then(resp =>{
        console.log({status:resp.status, data: resp.data})
        resp.data
      })
      .catch(error =>{
        console.log(error)
      })
    }
  },
  computed:{
     // parse(){
      // axios.get('https://nbcpro.ru/events/')
      //     .then(response => {
      //         // console.log(response.data)
      //         const root = parse(response.data)
      //         const all = root.querySelectorAll('.product-info')
      //         const all_title = root.querySelectorAll('.product-title')
      //         const all_price = root.querySelectorAll('.price-with-discount')
      //         //  console.log(all_title);console.log(all_price);console.log(all)
      //         for (let i=0; i< all.length ; i++){
      //             let title =  all_title[i].childNodes[1].childNodes[0]._rawText;
      //             let price = all_price[i].childNodes[0]._rawText;
      //             console.log(title + ": "+ price.split('&')[0] + "руб");
      //         }
      //         console.log("  ")
      //     })
      //     .catch(
      //         error => console.log(error)
      //     );
      // console.log('wesdf')
    },
  created(){
    // console.log(navigator.userAgent)
    // axios
    //     .defaults
    //     .headers
    //     .common['user-agent'] = navigator.userAgent;
  this.getData()
  }
}
</script>

<style lang="scss">
  $bgBlock: rgba(24, 57, 80, 0.35);
  $borderBlock: 2px solid rgba(67, 103, 167, 0.41);
  $fontFamily: 'Forum', cursive;
  $colorText: #d7dbe5;
  $bgImg: radial-gradient(ellipse 47% 48%, rgba(20, 102, 141, 0.55), transparent );
  $borderRadius: 8px;
  $hoverBgBlock: rgba(24, 57, 80, 0.5);
  $hoverEffectBlock:scale(1.03);

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
    //border: $borderBlock;
    border-radius: $borderRadius;
  }
  @mixin Col5WithImg768{
    .col-5{
      flex: 0 0 100%;
      max-width: 100%;
      img{
        width: 45%;
        margin: 0 auto;
        position: relative;
      }
    }
  }
  @mixin HomeLess768{
    h1{
      padding: 20% 0 0;
    }
    img{
      width: 130%;
    }
    .imgBg{
      left: -45%;
    }
    p{
      font-size: 1.2rem;
      line-height: 1.2rem;
    }
    p,.allButton{
      width: 380%;
    }
    button{
      margin: 2% 1.5%;
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
      .important{
        padding: 5px;
        margin: 1% 2% 2% 0;
        .col-2{
          padding-top: 0;
        }
      }
      .about {
        padding-top: 0 !important;
        padding-left: 0 !important;
        .col-2{
          flex: 0 0 10%;
          img {
            width: 70%;
            position: absolute;
            margin: 0 0 0 -40%;
          }
        }
      }
      .col-3{
        flex: 0 0 23%;
        padding: 0 5px !important;
      }
      .row .row:last-child .col{
        padding: 0 !important;
      }
      .imgLast{
        padding: 3%;
        width: 70%;
        margin: 0 10px 8% 0;
      }
    }
  }
  @mixin PreparationLess768{
    #Preparation{
      @include Col5WithImg768;
      padding-bottom: 10px;
      .preparation{
        padding-top: 0 !important;
      }
      .row:first-child{
        flex-direction: column;
      }
      li {
        padding: 18px 3px 18px 11px;
        margin: 8px 20px 8px 10px;
        &::before{
          font-size: .7rem;
          line-height: 18px;
          width: 20px;
          height: 18px;
          left: -20px;
          top: 14px;
        }
        &:hover:before {
          width: 26px;
        }
        &::after {
          top: 14px;
          border: 9px solid transparent;
          border-left-color: #2b6584;
        }
      }
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
      padding: 1% 4%;
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
      .tourney{
        flex-direction: column;
        .col:first-child{
          margin-bottom: 3%;
        }
      }
      img{
        filter: brightness(89%);
        height: auto;
        padding: 12% 0 0;
      }
      .date{
        padding: 2%;
      }
      .flex-container{
        flex-direction: column;
        & > div{
          width: 100%;
        }
      }
    }
  }
  @mixin PortfolioLess768{
    #Portfolio{
      padding-bottom: 10px;
      .flex-container > a {
        width: 22%;
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
    }
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
    letter-spacing: 2px;
    padding: 0 7px !important;
    color: #3798c5 !important;
    font-weight: 500;
    font-family: $fontFamily;
  }
  .text{
    font-size: 1.5rem;
    font-family: 'Forum', cursive;
    line-height: 1.8rem;
    font-weight: 600;
    float: left;
  }
  img{
    display: block;
    width: 100%;
  }
  p,button,ol,input,a{
    color: $colorText !important;
  }
  a{
    text-decoration: none !important;
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
  h2,p,#Home button, #FormEntry button, li, #FormEntry input, #FormEntry select{
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
    padding-bottom: 210px;
    .imgBg{
      background-image: radial-gradient(ellipse 47% 50%, rgba(20, 102, 141, 0.65), transparent );
      width: 100%;
      height: 120%;
      top:0;
    }
    p{
      font-size: 2rem;
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
      сolor: $colorText !important;
      background:  rgba(24, 57, 80, 0.7);
      border: none;
      font-size: 1.5rem;
      float: left;
      z-index: 10;
      &:hover{
        transform: $hoverEffectBlock;
        background:  rgba(24, 57, 80, 1);
      }
    }
    h1{
      padding: 30% 0 0;
      width: 140%;
      margin-left: -4%;
      position: relative;
      font-family: 'Rubik Dirt', sans-serif;
      letter-spacing: 1px;
      color: #3798c5;
      text-shadow: 2px 2px 2px #1a1818, 1px 1px 2px #032645;
      font-size: 3.6rem;
      line-height: 3.6rem;
      text-align: center;
      z-index: 10;
    }
    .css-typing
    {
      width: 155%;
      white-space:nowrap;
      overflow:hidden;
      animation: type 2s steps(50, end);
    }
    @keyframes type{
      from { width: 0; }
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
        width: 115%;
        margin: 0 0 0 -20%;
        position: relative;
      }
    }
    .important{
      padding: 5px;
      @include block;
      margin: 3% 0;
      .col{
        padding: 1%;
        p{
          margin: 0 !important;
        }
      }
      .col-2{
        padding-top: 1%;
        padding-bottom: 1%;
      }
    }
    .col-3{
      padding-left: 0 !important;
    }
    .imgLast{
      @include block;
      float: left;
      margin: 6% 2%;
      padding: 5px;
      position: relative;
      &:hover{
        transform: $hoverEffectBlock;
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
      top:-10%;
    }
  }
  #Preparation{
    padding-bottom: 60px;
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

      padding: 12px 25px 18px;
      margin: 12px 50px 25px 60px;
      transition-duration: 0.3s;
      border-radius: $borderRadius;
      &:hover {
        background: rgba(17, 31, 40, 0.95);
        cursor: default;
        transform: $hoverEffectBlock;
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
      z-index: 3;
      background-image: radial-gradient(ellipse 47% 48%, rgba(20, 102, 141, 0.55), transparent);
      position: absolute;
      width: 115%;
      height: 135%;
      left: -12%;
      top: -20%;
    }
  }
  #Portfolio h2, #Tournaments h2{
    text-shadow: #293655 3px 0 120px;
    color: $colorText;
  }
  #FormEntry{
    padding-bottom: 50px;
    .aboutMoney{
      box-shadow: 0px -1px 12px 2px rgba(34, 60, 80, 0.5) inset;
      margin: 6% auto 5% !important;
      display: block;
      line-height: 2rem;
      width: 100%;
      text-align: center;
      padding: 3% 2%;
    }
    .mx-datepicker {
      width: 100%;
      svg{
        display: none;
      }
    }
    .mx-datepicker-popup {
      border: none;
      box-shadow: none;
    }
    p{
      width: 85%;
      margin: 0 auto 3%;
    }
    .money{
      font-size: 2rem !important;
      color: #1496cf;
    }
    h2{
      color: #1496cf;
      padding-bottom: 1%;
    }
    button{
      width: 100%;
      text-align: center;
      border-radius: $borderRadius;
      margin: 3% auto 2%;
      border: none;
      display: block;
      padding: 2% 0;
      сolor: rgba(255, 255, 255, 0.95);
      background: rgba(60, 136, 181, 0.43);
      font-size: 1.5rem;
      &:hover{
        transform: $hoverEffectBlock;
      }
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
      width: 85%;
      margin: 0 auto 3%;
      padding: 2% 5% 2%;
      @include block;
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
      border-bottom: 1px solid #293655;
      color: #d7dbe5;
    }
    input::placeholder, select:optional {
      color: #e3e5ea;
    }
  }
  #Tournaments{
    padding-bottom: 40px;
    img{
      height: 100%;
    }
    .row{
      margin-bottom: 3%;
    }
    .col{
      padding:4% 2%;
    }
    .date{
      background: rgba(24, 57, 80, 0.7);
      padding: 2% 4%;
      color: #3c88b5;
      margin-bottom: 4% !important;
    }
    .flex-container > div {
      background: $bgBlock;
      border-radius: $borderRadius;
      width: 47%;
      margin: 0 auto 2%;
      &:hover{
        background: $hoverBgBlock;
        transform: $hoverEffectBlock;
      }
    }
    .manyTournaments{
      margin: 0 1.5%;
    }
  }
  #Portfolio{
    padding-bottom: 40px;
    /*блоки с картинками*/
    .flex-container > a {
      width: 16.5%;
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
    .flex-container{
      & > div {
        @include block;
        padding: 2%;
        width: 100%;
        height: 100%;
        margin: 0 0 4% 0 !important;
        &:hover{
          background: $hoverBgBlock;
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
      padding: 0 8px 0 0 !important;
    }
  }
  #MyFooter{
    padding: 1.5% 0 3.5%;
    background: black;
    svg{
      fill:#8e9aaf;
      width: 35px;
      margin-top: -1.5%;
      height: 35px;
      float: right;
      &:last-child {
        margin-top: -0.5%;
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
    p,a,button,ol, #Contacts div,.text{
      font-size: 1.3rem;
      line-height: 1.35rem;
    }
    #Home{
      h1{
        font-size: 3rem;
        line-height: 3rem;
      }
    }
    #FormEntry{
      .money{
        font-size: 1.5rem !important;
      }
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
    .name_company{
      font-size: 1.3rem;
    }
    p,a,button,ol, #Contacts div,.text{
      font-size: 1rem;
      line-height: 1.2rem;
    }
    h2{
      font-size: 1.35rem !important;
    }
    #Home{
      padding-bottom: 15%;
      h1{
        padding: 40% 0 0;
        font-size: 2.25rem;
        line-height: 2.5rem;
      }
      h1,p,.allButton{
        width: 165%;
      }
      .css-typing {
        width: 165%;
      }
      p{
        font-size: 1.2rem;
        line-height: 1.5rem;
      }
      button{
        font-size: 1.1rem;
      }
    }
    #About{
      padding-bottom: 6%;
      .about {
        padding-top: 0 !important;

        .col-2 img {
          width: 190%;
          margin: 0 0 0 -80%;
        }
      }
      .row .col-3{
        padding: 0 0 0 5px !important;
      }
      .row .row:last-child .col{
        padding: 0 0 0 10px !important;
      }
      .imgLast{
        padding: .5%;
        margin: 8% 10px 8% 0;
      }
    }
    #Preparation{
      padding-bottom: 6%;
      .preparation{
        padding-top: 0 !important;
      }
      li {
        padding: 8px 20px 8px;
        margin: 12px 10px 12px 30px;
         &::before{
           width: 30px;
           height: 28px;
           left: -30px;
         }
        &:hover:before {
          width: 36px;
        }
        &::after {
          border: 14px solid transparent;
          border-left-color: #2b6584;
        }
      }
    }
    #FormEntry{
      padding-bottom: 6%;
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
      .money{
        font-size: 1rem !important;
      }
    }
    #Tournaments{
      padding-bottom: 6%;
      .col {
        padding: 4% 1% 1%;
      }
    }
    #Contacts,#MyFooter{
      svg{
        margin-top: 1%;
        width: 17px;
        height: 17px;
      }
    }
  }
  @media screen and (min-width: 500px) and (max-width: 768px){
    .name_company{
      font-size: 1.2rem;
    }
    p,a,button,ol, #Contacts div, .text{
      font-size: 1.1rem;
      line-height: 1.1rem;
    }
    h2{
      font-size: 1.3rem !important;
      margin-bottom: 0 !important;
    }
    #Home{
      padding-bottom: 20%;
      @include HomeLess768;
      h1{
        width: 350%;
        font-size: 1.8rem;
        line-height: 1.6rem;
      }
      .css-typing {
        width: 350%;
      }
      img{
        margin-top: 15%;
        margin-left: -45%;
      }
      p{
        margin-top: 120%;
      }
      button{
        font-size: 1.2rem;
      }
    }
    @include AboutLess768;
    @include PreparationLess768;
    #FormEntry{
      @include FormEntryLess768;
      input,select{
        font-size: 1.2rem !important;
      }
      button{
        font-size: 1.2rem;
      }
      .money{
        font-size: 1.2rem !important;
      }
    }
    @include TournamentsLess768;
    @include PortfolioLess768;
    @include Contacts768;
    #Contacts, #MyFooter{
      svg{
        width: 24px;
        height: 24px;
        margin-top: -.5%;
      }
    }
  }
  @media screen and  (max-width: 500px){
    .name_company{
      font-size: 1.2rem;
    }
    p,a,button,ol, #Contacts div, .text{
      font-size: 1rem;
      line-height: 1rem;
    }
    h2{
      font-size: 1.2rem !important;
      margin-bottom: 0 !important;
    }
    #Home{
      padding-bottom: 15%;
      @include HomeLess768;
      h1{
        width: 380%;
        font-size: 1.8rem;
        line-height: 1.6rem;
      }
      .css-typing {
        width: 380%;
      }
      img{
        margin-top: 25%;
        margin-left: -50%;
      }
      p{
        margin-top: 120%;
      }
      button{
        font-size: 1rem;
      }
    }
    @include AboutLess768;
    @include PreparationLess768;
    #FormEntry{
      @include FormEntryLess768;
      input,select{
        font-size: 1rem !important;
      }
      button{
        font-size: 1rem;
      }
      .money{
        display: block;
        font-size: 1.2rem !important;
      }
    }
    @include TournamentsLess768;
    @include PortfolioLess768;
    @include Contacts768;
    #Contacts, #MyFooter{
      svg{
        width: 20px;
        height: 20px;
        margin-top: -.5%;
      }
    }
    #MyFooter{
      .text, svg:last-child{
        margin-top: -4%;
      }
    }
  }
</style>
