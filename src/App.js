import { RouterProvider, } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import Main from './Layout/Main';
import { routes } from './Routes/Route/Route';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <RouterProvider router={routes}>
          <Main></Main>
        </RouterProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
