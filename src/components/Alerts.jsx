import { useState } from 'react'

export default function Alerts({ alerts }) {
  return (
    <section className="alerts bg-orange-400 col-span-4 flex flex-col items-center p-5">
      <h1 className="text-4xl">Alerts</h1>
      <div className="flex flex-grow items-center">
        {alerts.length ? (
          <ul>
            <li>Alert 1</li>
            <li>Alert 2</li>
            <li>Alert 3</li>
            <li>Alert 4</li>
            <li>Alert 5</li>
            <li>Alert 6</li>
          </ul>
        ) : (
          <p>No alerts issued for this region</p>
        )}
      </div>
    </section>
  )
}