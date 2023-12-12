import { useState } from 'react';

export default function Metrics() {
  return(
    <section className="info flex flex-col bg-blue-500 col-span-5 p-5">
      <div className="flex flex-col justify-center items-center flex-1">
        <img src="/images/icons/weather/day/185.svg"  alt="Current Weather" className="h-auto w-32" />
        <h1 className="text-3xl">Overcast</h1>
      </div>

      <div className="grid grid-cols-2 flex-1">
        <div className="flex justify-center items-center gap-2">
          <img src="/images/icons/weather/atlas/strong-wind.svg" alt="Wind Speed" className="h-auto w-10" />
          <h1>Wind Speed</h1>
        </div>
        <div className="flex justify-center items-center gap-2">
          <img src="/images/icons/weather/day/185.svg" alt="" className="h-auto w-10" />
          <h1>Pressure</h1>
        </div>
        <div className="flex justify-center items-center gap-2">
          <img src="/images/icons/weather/atlas/rain-drops.svg" alt="Humidity" className="h-auto w-10" />
          <h1>Humidity</h1>
        </div>
        <div className="flex justify-center items-center gap-2">
          <img src="/images/icons/weather/day/185.svg" alt="" className="h-auto w-10" />
          <h1>Precipitations</h1>
        </div>
      </div>
    </section>
  )
}