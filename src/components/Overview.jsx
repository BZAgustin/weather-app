export default function Overview({ location, weather }) {
  return(
    <section className="dashboard flex flex-col justify-center bg-red-400 col-span-7 p-5">
      <div className="flex justify-center">
        <div className="flex gap-5 rounded-full bg-red-500 p-5">
          <img src="/images/icons/weather/day/113.svg" alt="Climate Icon" className="h-auto w-24" />
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-3xl">{weather.temp_c}° C</h1>
            <h3 className="text-xl">{location.region} - {location.country}</h3>
            <h3 className="text-xs">{location.localtime}</h3>
          </div>
        </div>
      </div>

      <hr className="mt-5 mb-5 m-auto w-1/2" />

      <div className="flex justify-around">
        <div className="flex flex-col items-center text-center">
          <img src="/images/icons/weather/day/113.svg" alt="Weather Morning" className="h-auto w-16" />
          <h2 className="text-2xl">24° C</h2>
          <h4>Morning</h4>
        </div>

        <div className="flex flex-col items-center text-center">
          <img src="/images/icons/weather/day/113.svg" alt="Weather Morning" className="h-auto w-16" />
          <h2 className="text-2xl">27° C</h2>
          <h4>Noon</h4>
        </div>

        <div className="flex flex-col items-center text-center">
          <img src="/images/icons/weather/day/113.svg" alt="Weather Morning" className="h-auto w-16" />
          <h2 className="text-2xl">23° C</h2>
          <h4>Afternoon</h4>
        </div>

        <div className="flex flex-col items-center text-center">
          <img src="/images/icons/weather/day/113.svg" alt="Weather Morning" className="h-auto w-16" />
          <h2 className="text-2xl">20° C</h2>
          <h4>Night</h4>
        </div>
      </div>

      <div className=""></div>
    </section>
  )
}