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
    background: #0a0f18;
    color: #6b7688;
  }
  /*контейнер на блоки посередине экрана*/
  .container{
    padding-right: 15px !important;
    padding-left: 15px !important;
  }
  .background{
    background: url("../public/123.png") no-repeat fixed;
  }
  .list2a {
    margin-bottom: 8px;
    padding:0;
    list-style: none;
    counter-reset: li;
  }
  .list2a li {
    position: relative;
    border: 2px solid rgba(67, 103, 167, 0.21);
    background: rgba(15, 27, 35, 0.55);
    box-shadow: 0 1px 4px rgba(78, 106, 159, 0.24);
    padding: 6px 0 6px 18px;
    margin: 12px 50px 15px 60px;
    transition-duration: 0.3s;
    border-radius: 8px;
  }
  .list2a li:hover {
    background: #FFF;
  }
  .list2a li:before {
    line-height: 32px;
    position: absolute;
    top: 15px;
    left:-40px;
    width:40px;
    text-align:center;
    font-size: 16px;
    font-weight: bold;
    color: #FFF;
    background: #2b6584;
    counter-increment: li;
    content: counter(li);
    transition-duration: 0.2s;
  }
  .list2a li:hover:before {
    width:46px;
  }
  .list2a li:after {
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
  .list2a li:hover:after {
    margin-left: 6px;
  }
  #Home{
    p,li,button,ol{
      font-size: 2rem;
      line-height: 2.2rem;
      letter-spacing: .5px;
      text-align: center;
      margin-left: -3%;
    }
    .floating-button {
      border-bottom: 2px solid rgba(135, 146, 165, 0.21);
      border-top: none;
    }
    p:first-child{
      padding: 140px 0 5%;
      position: relative;
      z-index: 1;
      text-transform: uppercase;
      font-family: 'Rubik Dirt', cursive;
      color: #457490;

      letter-spacing: 1px;
      font-size: 3.3rem;
      line-height: 3.8rem;
    }
    img{
      //margin-left: 10%;
    }
    button{
      margin: 10% auto 0;
      display: block;
      font-size: 1.6rem;
      background: transparent;
    }
    .grid{
      grid-template-columns: 40% 60%;
    }
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
  @media screen and (min-width: 992px) and (max-width: 1200px){
    .name_company{
      font-size: 1.4rem;
    }
    #Home{
      h1{
        padding: 12% 0 4%;
        font-size: 2.15rem;
        line-height: 2rem;
      }
      p,li,button{
        font-size: 1.6rem;
        line-height: 1.6rem;
      }
    }
  }
  @media screen and (min-width: 768px) and (max-width: 992px){
    .name_company{
      font-size: 1.3rem;
    }
    #Home{
      .grid{
        grid-template-columns: 68% 32%;
      }
      h1{
        padding: 4% 0 4%;
        font-size: 1.45rem;
        line-height: 1.6rem;
      }
      p,li,button{
        font-size: 1.3rem;
        line-height: 1.4rem;
      }
    }
  }
  @media screen and (min-width: 500px) and (max-width: 768px){
    .name_company{
      font-size: 1rem;
    }
    #Home{
      .grid{
        grid-template-columns: 65% 35%;
      }
      h1{
        padding: 5% 0 2%;
        font-size: 1rem;
        line-height: 1.1rem;
      }
      p,li,button{
        font-size: 1rem;
        line-height: 1.1rem;
      }
      p{
        margin-bottom: 2% !important;
      }
    }
  }
  #Home, #About, #FormEntry{
    img{
      //background: radial-gradient( #293655, #1a2238, transparent, transparent);
    }
  }
  #Preparation{
    .about{
      padding-top:9% !important;
    }
  }
  #About{
    .about{
      padding-top: 6% !important;
    }
    .grid{
      grid-template-columns: 38% 62%;
    }
    ol{
      font-family: "Forum", cursive;
      transition: 0.3s;
      padding: 0 3%;
      margin-bottom: 4%;

      color: #8e9aaf;
      li{
        padding-bottom: 3%;
      }
    }
  }
  #Portfolio, #FormEntry{
    padding: 25px 0;
  }
  #FormEntry{
    form{
      width: 60%;
      margin: 0 auto;
    }
    input{
      border-top: none !important;
      border-left: none !important;
      border-right: none !important;
      width: 100%;
      font-size: 1.45rem !important;
      background: transparent;
      padding: 14px 0 15px 7px;
      border-bottom: 1px solid #293655;
    }
    button{
      margin-top: 10%;
      width: 100%;
      border: none;
      box-shadow: 0 1px 8px 1px #293655;
      background: #071935;
      font-size: 1.6rem;
    }
  }
  img{
    display: block;
    width: 100%;
  }
  .grid{
    display: grid;
    column-gap: normal;
  }
  h1,h2,p, #Home button, #FormEntry button, li,ol, input{
    font-family: 'Forum', cursive;
    font-weight: 300;
  }
  h1,p,button,li,input{
    color: #8e9aaf;
  }
  p{
    margin-bottom: 4% !important;
  }
  p,li,button,ol{
    font-size: 1.5rem;
    line-height: 1.5rem;
  }
  input{
    line-height: 1.2rem;
  }
  button{
    text-align: center;
    border-radius: 7px;
    //height: 50px;
    padding: 1%;
  }

</style>
