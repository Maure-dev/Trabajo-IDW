import { Outlet } from "react-router-dom";

export default function MainOutletInterface() {
  return (
    <main className="h-[calc(100vh-12.1rem)] overflow-y-auto">
      <Outlet />
    </main>
  );
}
