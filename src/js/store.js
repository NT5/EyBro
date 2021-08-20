import { createStore, request } from 'framework7';

const store = createStore({
  state: {
    visitante: {},
    cuestionario: {
      cuestionario_id: -1,
      descripcion: '...',
      mensaje_bienvenida: '...',
      mensaje_despedida: '...',
      preguntas: [
        {
          id_pregunta: -1
        }
      ]
    },
    pregunta_actual: -1
  },
  getters: {
    visitante: ({ state }) => state.visitante,
    cuestionario: ({ state }) => state.cuestionario,
    pregunta_actual: ({ state }) => state.pregunta_actual,
    pregunta_siguiente: ({ state }) => {
      let actual = state.pregunta_actual;
      let index = state.cuestionario.preguntas.findIndex((arr) => { return arr.id_pregunta === actual.id_pregunta });
      return (index >= 0 && (index + 1) < state.cuestionario.preguntas.length ? state.cuestionario.preguntas[index + 1] : state.cuestionario.preguntas[0]);
    }
  },
  actions: {
    cargarCuestionario({ state, dispatch }, { cuestionario_id, api_url }) {
      let request_url = `${api_url}/cuestionarios/getCuestionarioById`;
      console.log(`[+] Pidiendo datos desde ${api_url}`);
      request({
        url: request_url,
        method: 'POST',
        contentType: 'application/x-www-form-urlencoded',
        dataType: 'json',
        data: {
          cuestionario_id: cuestionario_id
        }
      }).then((response) => {
        let cuestionario = response.data.cuestionario;

        state.cuestionario = cuestionario;

        let [primera_pregunta] = state.cuestionario.preguntas;
        dispatch('setPreguntaActual', primera_pregunta);
        console.log(cuestionario);

      }).catch((err) => {
        console.error(err);
      });
    },
    setPreguntaActual({ state }, pregunta) {
      state.pregunta_actual = pregunta;
    },
    setVisitante({ state }, visitante) {
      state.visitante = visitante;
    }
  },
});

export default store;
