import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {AppRoutes} from './routes';
import {store} from './store/index';

function App() {
  return (
      <Provider store={store}>
          <Router>
              <div className="App">
                  <div className="container">
                      <AppRoutes/>
                  </div>
              </div>
          </Router>
      </Provider>
  );
}

export default App;