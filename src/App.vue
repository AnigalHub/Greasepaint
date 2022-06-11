<template>
  <div id="app">
    <div class="rr">
      <Navbar/>
      <Home/>
      <About/>
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

export default {
  name: 'App',
  components: {
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
  .rr{
    background:url("../public/123.png");
    background-attachment: fixed;

    background-repeat: no-repeat;

  }
  #Home{

    .floating-button {
      border: 2px solid rgba(135, 146, 165, 0.21);
      border-radius: 8px;
      font-family: "Forum", cursive;
      text-align: center;
      background: rgb(15 27 35 / 55%);
      transition: 0.3s;
      padding: 1% 2%;
      box-shadow: 0 1px 10px rgb(78 106 159 / 40%);
      color: #8e9aaf;
    }
    p:first-child{
      padding: 12% 0 2%;
      font-family: 'Rubik Dirt', cursive;
      color: #457490;
      font-size: 2.9rem;
      line-height: 1;
    }
    img{
      padding-top: 3%;
      //margin-left: 10%;
    }
    button{
      margin-top: 8px;
      font-size: 1.6rem;
      background: transparent;
    }
    .grid{
      grid-template-columns: 59% 41%;
    }
  }
  /*название компании "Аваконт" в логотипе*/
  .name_company{
    font-size: 1.9rem;
    letter-spacing: 3px;
    padding: 0 7px !important;
    color: #5fafdc !important;
    font-weight: 500;
    font-family: 'Londrina Outline', cursive;
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
  #About{
    .about{
      padding-top: 8% !important;
    }
    .grid{
      grid-template-columns: 38% 62%;
    }
    ol{
      border: 2px solid rgba(135, 146, 165, 0.21);
      border-radius: 8px;
      font-family: "Forum", cursive;
      background: rgb(15 27 35 / 55%);
      transition: 0.3s;
      padding: 3% 6%;
      box-shadow: 0 1px 10px rgb(78 106 159 / 40%);
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
      width: 80%;
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
