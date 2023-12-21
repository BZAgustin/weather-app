import { useState } from 'react'

export default function Weekly() {
  return (
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
      </div>
    </section>
  )
}