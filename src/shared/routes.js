import App from './components/App';
import Single from './components/Single';

// import Grid from './Grid'
// import { fetchPopularRepos } from './api'

const routes =  [
  {
    path: '/',
    exact: true,
    component: App,
  },
  {
    path: '/view/:postId',
    component: Single,
    // fetchInitialData: (path = '') => fetchPopularRepos(path.split('/').pop())
  }
]

export default routes
