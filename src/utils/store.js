import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        db: {},
        reserva: [],
        tipoReserva: []
    },

    getters: {
        database: state => state.db,
        reserva: state => state.reserva,
        tipoReserva: state => state.tipoReserva
    },

    mutations: {
        'SET_DATABASE': (state, db) => {
            state.db = db
        },

        'MODIFY_RESERVA': (state, reserva, tipoReserva) => {
            /* eslint-disable-next-line */
            let reservaFinded = state.reserva.find((item) => {
              return reserva.id === item.id
            })
            let tipoReservaFinded = state.tipoReserva.find((item) => {
                return tipoReserva.idReserva === item.idReserva
            })
            reservaFinded.fechaReserva = reserva.fechaReserva
            reservaFinded.horaReserva = reserva.horaReserva
            reservaFinded.cantPersonas = reserva.cantPersonas
            tipoReservaFinded.nombre = tipoReserva.nombre
            reservaFinded.desc = reserva.desc
          },
      
          'MODIFY_ESTADO': (state, reserva) => {
            let reservaFinded = state.reserva.find((item) => {
                return reserva.id === item.id
            })
            reservaFinded.estado = reserva.estado
          }
    }
})