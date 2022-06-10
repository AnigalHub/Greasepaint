<template>
  <div id="app">
    <Navbar/>
    <Home/>
<!--    <About/>-->
<!--    <FormEntry/>-->
<!--    <Tourneys/>-->
<!--    <Portfolio/>-->
<!--    <Contacts/>-->
<!--    <MyFooter/>-->
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
  *,*:before,*:after{
    box-sizing: border-box;
  }
  body{
    font-family: sans-serif;
  }
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

  #Home{
    img{
      padding-top: 5%;
      //margin-left: 10%;
    }
    button{
      margin-top: 3%;
      font-size: 1.7rem;
      border: 2px solid #8792a5;
      background: transparent;
    }
    .grid{
      grid-template-columns: 60% 42%;
    }
  }
  /*название компании "Аваконт" в логотипе*/
  .name_company{
    font-size: 1.6rem;
    color: #1767aa;
    font-weight: 300;
    letter-spacing: 2px;
    font-family: 'Peralta', cursive;
    //font-family: 'Bitter', serif;
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
      background: radial-gradient( #293655, #1a2238, #0a0f18, #0a0f18);
    }
  }
  #About{
    .grid{
      grid-template-columns: 40% 60%;
    }
    .about{
      padding: 8% 0 0 55px!important;
    }
  }
  #Portfolio, #FormEntry{
    padding: 25px 0;
  }
  #FormEntry{
    form{
      padding-top: 10%;
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
    height: 100%;
  }
  .grid{
    display: grid;
    column-gap: normal;
  }
  h1,h2,p, #Home button, #FormEntry button, li, input{
    font-family: 'Forum', cursive;
    font-weight: 300;
  }
  h1{
    padding: 15% 0 4%;
    font-size: 2.35rem;
    text-shadow: #293655 3px 0 120px;
  }
  h1,p,button,li,input{
    color: #8e9aaf;
  }
  p{
    margin-bottom: 4% !important;
  }
  p,li,button{
    font-size: 1.7rem;
    line-height: 1.8rem;
  }
  input{
    line-height: 1.2rem;
  }
  button{
    text-align: center;
    border-radius: 7px !important;
    //height: 50px;
    padding: 1%;
  }

</style>
