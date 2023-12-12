import { useState } from 'react'
import Overview from './components/Overview'
import Metrics from './components/Metrics'

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
            <section className="weekly bg-green-900 col-span-8 p-5 flex flex-col justify-around">
                <h1 className="text-center text-3xl">Forecast & History</h1>
                <div className="flex flex-grow justify-around items-center">
                  <div className="flex flex-col items-center text-center gap-2">
                    <img src="/images/icons/weather/day/113.svg" alt="Weather Morning" className="h-auto w-32" />
                    <h2 className="text-2xl">24° C</h2>
                    <h4>Monday</h4>
                  </div>

                  <div className="flex flex-col items-center text-center gap-2">
                    <img src="/images/icons/weather/day/113.svg" alt="Weather Morning" className="h-auto w-32" />
                    <h2 className="text-2xl">27° C</h2>
                    <h4>Tuesday</h4>
                  </div>

                  <div className="flex flex-col items-center text-center gap-2">
                    <img src="/images/icons/weather/day/113.svg" alt="Weather Morning" className="h-auto w-32" />
                    <h2 className="text-2xl">23° C</h2>
                    <h4>Wednesday</h4>
                  </div>

                  <div className="flex flex-col items-center text-center gap-2">
                    <img src="/images/icons/weather/day/113.svg" alt="Weather Morning" className="h-auto w-32" />
                    <h2 className="text-2xl">20° C</h2>
                    <h4>Thursday</h4>
                  </div>

                  <div className="flex flex-col items-center text-center gap-2">
                    <img src="/images/icons/weather/day/113.svg" alt="Weather Morning" className="h-auto w-32" />
                    <h2 className="text-2xl">20° C</h2>
                    <h4>Friday</h4>
                  </div>

                  <div className="flex flex-col items-center text-center gap-2">
                    <img src="/images/icons/weather/day/113.svg" alt="Weather Morning" className="h-auto w-32" />
                    <h2 className="text-2xl">20° C</h2>
                    <h4>Saturday</h4>
                  </div>
                </div>
            </section>

            <section className="alerts bg-orange-400 col-span-4 flex flex-col items-center p-5">
              <h1 className="text-4xl">Alerts</h1>
              <div className="flex flex-grow items-center">
                <ul>
                  <li>Alert 1</li>
                  <li>Alert 2</li>
                  <li>Alert 3</li>
                  <li>Alert 4</li>
                  <li>Alert 5</li>
                  <li>Alert 6</li>
                </ul>
              </div>
            </section>
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
