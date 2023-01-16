<template>
    <div class="home">
      <navigation/>
      <p v-if="userLogged">User loggued: {{userLogged}}</p>
      <section>
        <div id="video">
          <video autoplay="" muted="" style="object-fit: cover; background-size: cover; opacity: 1; width: 100%; height: 80%; position: relative; top: 0px; left: 0px; display: block;" class="" loop="" preload="auto">
            <source src="//themes.muffingroup.com/be/burger3/wp-content/uploads/2022/11/beburger3-slider-video.mp4" type="video/mp4">
          </video>
        </div>
        <div id="group1">
          <h1 id="titulo1">Arizona</h1>
          <h1 id="titulo3">BURGER HOUSE</h1>
        </div>
      </section>
      <marquee-text :repeat="3" id="marquesina">
        {{ "NO ES SOLO COMIDA, ES AMOR EN CADA BOCADO — CALIDAD Y AMOR — HAMBURGUESAS UNICAS —".repeat(1) }}
      </marquee-text>
      <section id="secReserva">
        <br>
        <img v-bind:src="require('@/assets/images/imgReserva.jpg')" id="imgReserva"/>
        <Card id="card" style="width: 25em">
          <template #title>
            Haz tu reserva
          </template>
          <template #content>
            Disfruta de una atención inmediata sin fila y no te quedes sin disfritar nuestros super promos de enero, te esperamos con un amigable entrada de empanadas invitada por la casa.
          </template>
          <template #footer>
            <router-link to="/newBooking">
              <Button label="Reservar" id="btnISesion" class="p-button-success"/>
            </router-link>
          </template>
        </Card>
      </section>
    </div>
  </template>
  
  <script>
    import Card from 'primevue/card';
    import Button from 'primevue/button';
    import Navigation from "../components/navigationHeader";
    import auth from "@/logic/auth";
    import MarqueeText from 'vue-marquee-text-component';
  
    export default {
      name: "homeRes",
      components: {
        navigation: Navigation,
        Card,
        Button,
        MarqueeText
      },

      computed: {
        userLogged() {
          return auth.getUserLogged();
        }
      }
    };
  </script>
  
  <style>
    .home {
      width: 100%;
    }

    #marquesina {
      font-size: 28px;
      padding: 20px;
      letter-spacing: .3rem;
      font-family: 'Poppins', sans-serif;
    }

    #secReserva {
      display: inline-flex;
      width: 100%;
      background-image: url("@/assets/images/bgWalk.jpg");
    }

    #imgReserva {
     width: 50%;
    }

    #card {
      position: relative;
      display: flex;
      height: 40%;
      justify-content:center;
      align-items: center;
      text-align: center;
      box-shadow: 6px 19px 31px 0px rgba(0,0,0,0.1);
      border-radius: 20px;
      padding-top: 20px;
      padding: 30px;
      margin: auto;
    }

    #video {
      position: relative;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      overflow: hidden;
      object-fit: contain;
      overflow-clip-margin: content-box;
      overflow: clip;
      z-index: 10;
      display: block;
      opacity: 1;
    }

    #group1{
      z-index: 11;
      position: absolute;
      top: 50%;
      left: 50%;
      display: block;
      margin: auto;
      justify-content: center;
      align-items: center;
      text-align: center;
      color: rgb(255, 255, 255);
      width: 242px;
      height: 342px;
      transform: translate(-50%, -25%);
      opacity: 1;
    }

    #titulo3 {
      font-family: 'Inter', sans-serif;
      color: rgb(255, 255, 255);
      text-decoration: none;
      width: 364px;
      line-height: 58px;
      font-weight: 900;
      font-size: 68px;
      opacity: 1;
    }

    #titulo1{
      z-index: 9;
      font-family: "Mr Dafoe";
      height: auto;
      width: auto;
      color: rgb(255, 197, 71);
      text-decoration: none;
      white-space: nowrap;    
      line-height: 58px;
      letter-spacing: -3px;
      font-weight: 400;
      font-size: 68px;
      transform-origin: 50% 50%;
      opacity: 1;
      transform: translate(0px, 0px);
      visibility: visible;
    }

    #titulosP {
      position: absolute;
      display: block;
      pointer-events: auto;
      left: 152px;
      top: 29px;
      z-index: 9;
      visibility: visible;
      perspective: 601px;
    }
  </style>