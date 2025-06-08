import { Outlet } from 'react-router-dom';
import { Sidebar } from '../../widgets/Sidebar';

export default function GeneralLayout() {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  )
}
