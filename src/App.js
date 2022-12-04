import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HelloReact from './components/HelloReact';

const App = () => {
  return (
    <>
      <Toaster position='bottom-center' />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HelloReact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
