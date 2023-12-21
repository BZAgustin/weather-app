import { useState, useEffect } from 'react'
import Overview from './components/Overview'
import Metrics from './components/Metrics'
import Weekly from './components/Weekly'
import Alerts from './components/Alerts'

function App() {
  const [location, setLocation] = useState(null)
  const [currentWeather, setCurrentWeather] = useState(null)
  const [hourly, setHourly] = useState(null)
  const [forecast, setForecast] = useState(null)
  const [alerts, setAlerts] = useState(null)
  const [loading, setLoading] = useState(true)
  const key = '223244cbdba14658867150217233105'

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${key}&q=london&days=3&aqi=no&alerts=yes`, {mode: 'cors'})
        const data = await response.json()
        setLocation(data.location)
        setCurrentWeather(data.current)
        setHourly(data.forecast.forecastday[0])
        setForecast(data.forecast.forecastday)
        setAlerts(data.alerts.alert)
        setLoading(false)
      } catch(error) {
        console.error('Error fetching data', error)
        setLoading(false)
      }    
    }

    fetchWeatherData()
  }, [])
  
  console.log(location)
  console.log(currentWeather)
  console.log(forecast)
  console.log(alerts)
  console.log(hourly)

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
          {loading ? (
            <p>Loading...</p>
          ) : (
            <>
              <div className="top-section grid grid-cols-12 flex-1">
                <Overview location={location} weather={currentWeather} hourly={hourly} />
                <Metrics weather={currentWeather} />
              </div>

              <div className="bottom-section grid grid-cols-12 flex-1">
                <Weekly forecast={forecast} />
                <Alerts alerts={alerts} />
              </div>
            </>
          )}
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
