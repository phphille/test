import PhotoGrid from './components/PhotoGrid';
import Single from './components/Single';

// import Grid from './Grid'
// import { fetchPopularRepos } from './api'
// fetchInitialData: (path = '') => fetchPopularRepos(path.split('/').pop())
const routes =  [
  {
    path: '/',
    exact: true,
    component: PhotoGrid,
    isIndexRoute: true
  },
  {
    path: '/view/:postId',
    component: Single,
  }
]

export default routes
