import { Navigate, Route, Routes } from "react-router-dom";

import { MainLayout } from './layouts';
import { CarsPage, NotFoundPage, SingleCarPage } from './pages';

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<Navigate to={"cars"}/>}/>
          <Route path="cars/:carId" element={<SingleCarPage/>}/>
          <Route path="cars" element={<CarsPage/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
        </Route>
      </Routes>
  );
};

export default App;
