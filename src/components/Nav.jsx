export default function Nav() {
  return (
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
  )
}
