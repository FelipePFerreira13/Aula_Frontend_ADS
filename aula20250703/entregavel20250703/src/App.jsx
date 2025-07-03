import { useState } from "react";
import "./App.css";
import { FaCat } from "react-icons/fa";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main className="bg-pink-300 w-screen h-screen flex flex-col">
        <section className="bg-white">
          <header className="text-center text-3xl font-bold text-fuchsia-900 bg-white flex items-center justify-center gap-2 h-[70px]">
            <FaCat />
            <h4 className="text-2xl">DudaSys</h4>
            <FaCat />
          </header>
        </section>
        <section className="flex flex-1 items-center justify-center">
          <div className="bg-white w-1/5 rounded-2xl">
            <form
              action="https://getform.io/f/avrynroa"
              method="POST"
              className="bg-white flex flex-col gap-2 w-[300px] p-8 rounded-lg shadow-sm"
            >
              <h2 className=" font-bold text-black text-center mb-4">
                Entrar na sua conta
              </h2>
              <input
                type="email"
                name="email"
                placeholder="Digite o email"
                className="text-black border border-gray-300 p-2 rounded focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-300"
              />

              <input
                type="pass"
                name="pass"
                className="text-black border border-gray-300 p-2 rounded focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-300"
                placeholder="Digite a senha"
              />

              <input type="hidden" name="_gotcha" className="hidden" />

              <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded cursor-pointer"
              >
                Entrar
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
