import { BrowserRouter, Route, Routes } from 'react-router-dom';

import GlobalStyles from './assets/styles/GlobalStyles';
import theme from './assets/styles/theme';
import { ThemeProvider } from 'styled-components';
import Main from './pages/Main';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Header />
        <Routes>
          <Route path="" element={<Main />}></Route>
        </Routes>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
