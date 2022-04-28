import { Outlet } from "react-router-dom";

import { CarForm } from '../../components';

export const MainLayout = () => {
  return (
      <div>
        <CarForm/>
        <hr/>
        <Outlet/>
      </div>
  );
}
