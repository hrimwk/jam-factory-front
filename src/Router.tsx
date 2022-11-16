import { BrowserRouter, Route, Routes } from 'react-router-dom';

import GlobalStyles from './assets/styles/GlobalStyles';
import theme from './assets/styles/theme';
import { ThemeProvider } from 'styled-components';

function App() {

  return (
    <BrowserRouter>
    <GlobalStyles/>
    <ThemeProvider theme={theme}/>
      <Routes>
        <Route path="" element=""></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
