import HomePage from '@containers/HomePage';
import PeoplePage from '@containers/PeoplePage';
import PersonPage from '@containers/PersonPage'
import NotFoundPage from '@containers/NotFoundPage';
import FavoritePage from '@containers/FavoritePage';
import SearchPage from '@containers/SearchPage';
import ErrorMessage from '@components/ErrorMessage';

const routesConfig = [
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/people',
        element: <PeoplePage />
    },
    {
        path: '/people/:id',
        element: <PersonPage />
    },
    {
        path: '/favorites',
        element: <FavoritePage />
    },
    {
        path: '/search',
        element: <SearchPage />
    },
    {
        path: '/fail',
        element: <ErrorMessage />
    },
    {
        path: '/not-found',
        element: <NotFoundPage />
    },
    {
        path: '/*',
        element: <NotFoundPage />
    },
]

export default routesConfig;