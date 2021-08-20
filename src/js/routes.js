
import HomePage from '../pages/home.f7';
import AboutPage from '../pages/about.f7';
import NotFoundPage from '../pages/404.f7';

import CuestionarioPage from '../pages/cuestionario.f7';
import PreguntaCuestionarioPage from '../pages/pregunta-cuestionario.f7';
import CuestionarioDespedidaPage from '../pages/cuestionario-despedida.f7';

var routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/about/',
    component: AboutPage,
  },
  {
    path: '/cuestionario/',
    name: 'cuestionario',
    component: CuestionarioPage,
  },
  {
    path: '/pregunta-cuestionario/cuestionario/:id_cuestionario/pregunta/:id_pregunta',
    name: 'pregunta-cuestionario',
    component: PreguntaCuestionarioPage,
    options: {
      history: false,
      transition: 'f7-dive'
    }
  },
  {
    path: '/cuestionario-despedida/',
    name: 'cuestionario-despedida',
    component: CuestionarioDespedidaPage
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;