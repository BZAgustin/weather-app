import { useState } from 'react'
import Overview from './components/Overview'
import Metrics from './components/Metrics'
import Weekly from './components/Weekly'
import Alerts from './components/Alerts'

function App() {
  return (
      <>
        <header className="flex justify-between bg-slate-300 p-6">
          <h1 className="text-red-700 text-xl">
            Title
          </h1>
          <search className="flex w-auto gap-2">
            <img src="/images/icons/search.png" alt="Search" />
            <input type="text" className="w-96 bg-transparent input-outer-shadow rounded-xl" />
          </search>
          <h2>
            Dark/Light
          </h2>
        </header>

        <main className="flex flex-col flex-grow">
          <div className="top-section grid grid-cols-12 flex-1">
            <Overview />
            <Metrics />
          </div>

          <div className="bottom-section grid grid-cols-12 flex-1">
            <Weekly />
            <Alerts />
          </div>
        </main>

        <footer className="p-3 text-center bg-slate-300">
            <h2>
              Copyright @ 2023
            </h2>
        </footer>
      </>
  )
}

export default App
