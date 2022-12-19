import { BrowserRouter, Route, Routes } from 'react-router-dom';

import GlobalStyles from './assets/styles/GlobalStyles';
import theme from './assets/styles/theme';
import { ThemeProvider } from 'styled-components';
import Main from './pages/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import Products from './pages/Products';
import SignUp from './pages/SignUp';
import Notice from './pages/Notice';
import Events from './pages/Events';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/notice" element={<Notice />}></Route>
          <Route path="/events" element={<Events />}></Route>
        </Routes>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
