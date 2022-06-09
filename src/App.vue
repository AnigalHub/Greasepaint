<template>
  <div id="app">
    <Navbar/>
    <Home/>
    <About/>
    <FormEntry/>
    <Tourneys/>
    <Portfolio/>
    <Contacts/>
    <MyFooter/>
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

  #Home{
    img{
      margin-top: 2%;
      margin-left: 10%;
      background: radial-gradient( #293655, #1a2238, #0a0f18, #0a0f18);
    }
  }
  img{
    width: 100%;
    height: 100%;
  }
  .grid{
    display: grid;
    grid-template-columns: 55% 45%;
    column-gap: normal;
  }
  h1,p, button{
    font-family: 'Forum', cursive;
    font-weight: 300;
  }
  h1{
    padding: 15% 0 5%;
    font-size: 2.35rem;
    color: #8e9aaf;
    text-shadow: #293655 3px 0 120px;
  }
  p{
    font-size: 1.8rem;
    line-height: 2rem;
    margin-bottom: 6%;
  }
  button{
    border: 2px solid #8792a5;
    font-size: 1.7rem;
    color: #8e9aaf;
    border-radius: 7px;
    margin-top: 2%;
    padding: 1%;
    background: transparent;
  }

</style>
