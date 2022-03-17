import { BrowserRouter as Router} from 'react-router-dom';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

test('renders learn react link', () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  );

  expect(getByTestId('mainContainer')).toBeVisible();
});
