import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import { LayoutContainer } from "./styles";

function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      {/* Outlet espaço para ser inserido um conteúdo, onde vai os childrens */}
      <Outlet />
    </LayoutContainer>
  );
}

export default DefaultLayout;
