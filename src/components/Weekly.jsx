import { format } from 'date-fns'

export default function Weekly({ forecast }) {
  return (
    <section className="weekly bg-green-900 col-span-8 p-5 flex flex-col justify-around">
      <h1 className="text-center text-3xl">Forecast & History</h1>
      <div className="flex flex-grow justify-around items-center">
        <div className="flex flex-col items-center text-center gap-2">
          <img src="/images/icons/weather/day/113.svg" alt="Weather Morning" className="h-auto w-32" />
          <h2 className="text-2xl">{forecast[0].day.avgtemp_c}° C</h2>
          <h4>{format(forecast[0].date, "d'/'M")}</h4>
        </div>

        <div className="flex flex-col items-center text-center gap-2">
          <img src="/images/icons/weather/day/113.svg" alt="Weather Morning" className="h-auto w-32" />
          <h2 className="text-2xl">{forecast[1].day.avgtemp_c}° C</h2>
          <h4>{format(forecast[1].date, "d'/'M")}</h4>
        </div>

        <div className="flex flex-col items-center text-center gap-2">
          <img src="/images/icons/weather/day/113.svg" alt="Weather Morning" className="h-auto w-32" />
          <h2 className="text-2xl">{forecast[2].day.avgtemp_c}° C</h2>
          <h4>{format(forecast[2].date, "d'/'M")}</h4>
        </div>
      </div>
    </section>
  )
}