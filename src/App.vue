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
  /*вся страница*/
  #app{
    height: 100%;
    margin: 0 !important;
    padding: 0 !important;
    background: rgba(10, 15, 24);
    color: #6b7688;
  }
  /*контейнер на блоки посередине экрана*/
  .container{
    padding-right: 15px !important;
    padding-left: 15px !important;
  }
  .background{
    //background: url("../public/126.png") no-repeat fixed;
    background: url("../public/fog-1.png") repeat fixed;
  }
  /*название компании "Аваконт" в логотипе*/
  .name_company{
    font-size: 1.5rem;
    letter-spacing: 2px;
    padding: 0 7px !important;
    color: #2b6584 !important;
    font-weight: 500;
    font-family: 'Forum', cursive;
  }
  img{
    display: block;
    width: 100%;
  }
  .grid{
    display: grid;
    column-gap: normal;
  }
  p,button,ol,input{
    color: #8e9aaf;
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
  #Home{
    padding-bottom: 240px;
    .imgBg{
      z-index: 3;
      width: 130%;
      height: 145%;
      left: -5%;
      position: absolute;
      top:-15%;
      background-image: radial-gradient(ellipse 50% 50%, rgba(20, 102, 141, 0.55), transparent );
    }
    p,a{
      font-size: 2rem;
      line-height: 2.2rem;
      letter-spacing: .5px;
      text-align: center;
    }
    p:first-child{
      padding: 140px 0 0;
      position: relative;
      text-transform: uppercase;
      font-family: 'Rubik Dirt', cursive;
      color: #457490;
      text-shadow: 1px 1px 5px #032645;
      letter-spacing: 1.2px;
      font-size: 3.3rem;
      line-height: 3.8rem;
    }
    img{
      padding-top: 4%;
      width: 100%;
      //margin: 0 auto;
      z-index: 4;
      position: absolute;
    }
  }
  #About{
    padding-bottom: 90px;
    .about{
      padding-top: 6% !important;
      .col-2 img{
        width: 110%;
        margin: 0 0 0 -20%;
        filter: invert(0.3);
        position: relative;
      }
    }
    .important{
      padding: 1%;
      background: rgba(24, 57, 80, 0.3);
      border: 2px solid rgba(67, 103, 167, 0.21);
      border-radius: 8px;
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
      width: 100%;
      filter: brightness(80%);
      float: left;
      margin: 8% 10px;
      padding: 5px;
      background: rgba(24, 57, 80, 0.3);
      border: 2px solid rgba(67, 103, 167, 0.21);
      border-radius: 8px;
      position: relative;
    }
    img{
      z-index: 4;
      position: absolute;
      width: 90%;
    }
    .imgBg{
      z-index: 3;
      width: 130%;
      height: 135%;
      left: -10%;
      position: absolute;
      top:-10%;
      background-image: radial-gradient(ellipse 47% 48%, rgba(20, 102, 141, 0.55), transparent );
    }
  }
  #Preparation{
    .about{
      padding-top:5% !important;
    }
    ol {
      padding:0;
      list-style: none;
      counter-reset: li;
    }
    li {
      position: relative;
      background: rgba(24, 57, 80, 0.3);
      border: 2px solid rgba(67, 103, 167, 0.21);
      //box-shadow: 0 1px 4px rgba(78, 106, 159, 0.24);
      padding: 12px 25px 18px;
      margin: 12px 50px 25px 60px;
      transition-duration: 0.3s;
      border-radius: 8px;
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
      background-image: radial-gradient(ellipse 52% 50%, #14668d, transparent);
    }
  }
  #Portfolio h2, #Tourneys h2{
    text-shadow: #293655 3px 0 120px;
    color: #8e9aaf;
  }
  h2{
    padding: 2%;
    font-size: 1.8rem !important;
    text-align: center;
  }
  #FormEntry{
    h2{
      color: #3c88b5;
      padding-bottom: 1%;
    }
    .block{
      padding: 3% 2% 0;
      color: #8e9aaf;
      border-radius: 8px;
    }
    button{
      width: 100%;
      text-align: center;
      border-radius: 8px;
      padding: 1%;
    }
    img{
      z-index: 4;
      position: absolute;
      width: 90%;
    }
    .imgBg{
      z-index: 3;
      width: 130%;
      height: 125%;
      left: -10%;
      position: absolute;
      top:-15%;
      background-image: radial-gradient(ellipse 47% 48%, rgba(20, 102, 141, 0.55), transparent );
    }
    form{
      width: 80%;
      padding: 0 4% 0;
      background: rgba(24, 57, 80, 0.3);
      border: 2px solid rgba(67, 103, 167, 0.21);
      border-radius: 8px;
      margin: 0 auto 3%;
    }
    input{
      border-top: none !important;
      border-left: none !important;
      border-right: none !important;
      width: 100%;
      font-size: 1.35rem !important;
      background: transparent;
      padding: 2%;
      margin-bottom: 6%;
      font-family: 'Forum', cursive;
      border-bottom: 1px solid #293655;
    }
    input::-webkit-input-placeholder {
      color: rgba(142, 154, 175, 0.8);
    }
    button{
      width: 80%;
      margin: 4% auto 2%;
      border: none;
      display: block;
      padding: 2% 0;
      color: rgba(255, 255, 255, 0.75);
      background: rgba(60, 136, 181, 0.43);
      font-size: 1.5rem;
    }
  }
  #Tourneys{
    img{
      filter: brightness(89%);
    }
    .col .row{
      background: rgba(24, 57, 80, 0.3);
      border: 2px solid rgba(67, 103, 167, 0.21);
      color: #8e9aaf;
      margin-right: 2%;
      border-radius: 8px;
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
      border-top: 1px solid #8e9aaf;
    }
  }
  h1,h2,p, #FormEntry button, li, input{
    font-family: 'Forum', cursive;
    font-weight: 300;
    z-index: 7;
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
