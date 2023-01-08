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
      </section>
      <marquee-text :repeat="3" id="marquesina">
        {{ "NO ES SOLO COMIDA, ES AMOR EN CADA BOCADO — CALIDAD Y AMOR — HAMBURGUESAS UNICAS —".repeat(1) }}
      </marquee-text>
      <section id="secReserva">
        <br>
        <img id="imgReserva" src="@/assets/images/imgReserva.jpg"/>
        <Card id="card" style="width: 25em">
          <template #title>
            Haz tu reserva
          </template>
          <template #content>
            Disfruta de una atención inmediata sin fila y no te quedes sin disfritar nuestros super promos de enero, te esperamos con un amigable entrada de empanadas invitada por la casa.
          </template>
          <template #footer>
            <router-link to="/newBooking">
              <div class="form-group">
                <Button label="Reservar" id="btnISesion" class="p-button-success"></Button>
              </div>
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
      z-index: 9;
      display: block;
      opacity: 1;
    }
  </style>