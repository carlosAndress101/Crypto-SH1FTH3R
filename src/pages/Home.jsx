import { Outlet } from "react-router-dom";
import Logo from "../components/Logo";
import Navegation from "../components/Navegation";
import { CryptoProvider } from "../context/CryptoContext";
import { TrendingProvider } from "../context/TrendingContext";

function Home() {
  return (
    <CryptoProvider>
      <TrendingProvider>
      <main className="w-full h-full flex flex-col first-letter:content-center items-center relative text-white font-nunito">
        <div className="w-screen h-screen bg-gray-300 fixed -z-10" />
        <Logo />
        <Navegation />
        <Outlet />
      </main>
      </TrendingProvider>
    </CryptoProvider>
  );
}

export default Home;
