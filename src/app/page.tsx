
"use client";

import { useState } from "react";

const initialTasks = [
  { id: 1, title: "Naplánovat si den", time: "09:00", done: true },
  { id: 2, title: "Dokončit důležitý úkol", time: "11:00", done: false },
  { id: 3, title: "Přečíst 10 stran knihy", time: "16:00", done: false },
  { id: 4, title: "Naplánovat zítřek", time: "19:00", done: false },
];

const initialHabits = [
  { id: 1, title: "Vypít dostatek vody", emoji: "💧", done: true },
  { id: 2, title: "Číst alespoň 10 minut", emoji: "📚", done: false },
  { id: 3, title: "Věnovat se pohybu", emoji: "🌿", done: false },
];

export default function Home() {
  const [tasks, setTasks] = useState(initialTasks);
  const [habits, setHabits] = useState(initialHabits);
  const [newTask, setNewTask] = useState("");

  const completedTasks = tasks.filter((task) => task.done).length;
  const completedHabits = habits.filter((habit) => habit.done).length;
  const progress =
    tasks.length === 0
      ? 0
      : Math.round((completedTasks / tasks.length) * 100);

  function addTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!newTask.trim()) return;

    setTasks([
      ...tasks,
      {
        id: Date.now(),
        title: newTask.trim(),
        time: "Bez času",
        done: false,
      },
    ]);
    setNewTask("");
  }

  return (
    <main className="min-h-screen bg-[var(--planora-bg)] text-[var(--planora-text)] md:flex">
      <aside className="flex w-full flex-col border-b border-[#e7ebe3] bg-white p-5 md:min-h-screen md:w-64 md:border-b-0 md:border-r md:p-7">
     <a
            href="#prehled"
            className="rounded-xl bg-[var(--planora-primary)] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[var(--planora-primary-hover)]"
          >
            ✳ &nbsp; Přehled
          </a>
          <a
            href="#ukoly"
            className="rounded-xl px-4 py-3 text-sm text-gray-600 hover:bg-gray-50"
          >
            ✓ &nbsp; Moje úkoly
          </a>


        <p className="mb-4 mt-10 text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">
          Pracovní prostor
        </p>

       
        <nav className="flex gap-2 overflow-x-auto md:flex-col">
          <a
            href="#prehled"
            className="rounded-xl bg-[var(--planora-primary)] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[var(--planora-primary-hover)]"
          >
            ✳ &nbsp; Přehled
          </a>

          <a
            href="#ukoly"
            className="rounded-xl px-4 py-3 text-sm text-gray-600 hover:bg-gray-50"
          >
            ✓ &nbsp; Moje úkoly
          </a>

          <a
            href="#cile"
            className="rounded-xl px-4 py-3 text-sm text-gray-600 hover:bg-gray-50"
          >
            ◎ &nbsp; Moje cíle
          </a>

          <a
            href="#navyky"
            className="rounded-xl px-4 py-3 text-sm text-gray-600 hover:bg-gray-50"
          >
            ↗ &nbsp; Návyky
          </a>
        </nav>

        <div className="mt-auto hidden rounded-2xl bg-[#f4f7ef] p-4 md:mt-12 md:block">
          <span className="text-2xl">🌱</span>
          <p className="mt-3 text-sm font-semibold">Malé kroky, velký růst.</p>
          <p className="mt-1 text-xs leading-5 text-gray-500">
            Nemusíš zvládnout všechno. Stačí začít.
          </p>
        </div>
      </aside>

      <section id="prehled" className="min-w-0 flex-1 p-5 md:p-10 lg:p-12">
        <header className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm text-gray-500">Tvůj osobní prostor</p>
            <h1 className="mt-1 text-3xl font-bold tracking-tight md:text-4xl">
              Ahoj, pojďme růst. 🌿
            </h1>
            <p className="mt-2 text-sm text-gray-500">
              Každý malý krok se počítá.
            </p>
          </div>
          <div className="rounded-xl border border-[#e7ebe3] bg-white px-4 py-3 text-sm">
            <span className="mr-2">📅</span>
            Dnešní plán
          </div>
        </header>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          <div className="rounded-2xl border border-[#e7ebe3] bg-white p-5">
            <p className="text-sm text-gray-500">Dokončené úkoly</p>
            <div className="mt-3 flex items-end justify-between">
              <p className="text-3xl font-bold">
                {completedTasks}
                <span className="text-lg font-normal text-gray-400">
                  {" "}/ {tasks.length}
                </span>
              </p>
              <span className="text-2xl">✅</span>
            </div>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-gray-100">
              <div
                className="h-full rounded-full bg-[#78ad7c] transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="mt-2 text-xs text-gray-400">{progress} % hotovo</p>
          </div>

          <div className="rounded-2xl border border-[#e7ebe3] bg-white p-5">
            <p className="text-sm text-gray-500">Splněné návyky</p>
            <p className="mt-3 text-3xl font-bold">
              {completedHabits}
              <span className="text-lg font-normal text-gray-400">
                {" "}/ {habits.length}
              </span>
            </p>
            <p className="mt-4 text-sm text-gray-500">
              Každé opakování se počítá. 🌱
            </p>
          </div>

          <div className="rounded-2xl bg-[#e5f0df] p-5 sm:col-span-2 xl:col-span-1">
            <p className="text-sm text-[#527254]">Myšlenka dne</p>
            <p className="mt-3 text-lg font-semibold leading-7">
              „Nemusíš být dokonalý. Stačí být o krok dál.“
            </p>
            <p className="mt-3 text-xs text-[#527254]">
              Věnuj dnešku to nejlepší, co můžeš.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-6 xl:grid-cols-[1.4fr_1fr]">
          <section id="ukoly" className="rounded-2xl border border-[#e7ebe3] bg-white p-5 md:p-7">
            <div className="flex items-center justify-between gap-3">
              <div>
                <h2 className="text-xl font-bold">Moje úkoly</h2>
                <p className="mt-1 text-sm text-gray-500">
                  Jeden úkol po druhém.
                </p>
              </div>
              <span className="rounded-full bg-[#f1f5ed] px-3 py-1 text-xs font-medium text-[#527254]">
                {completedTasks} / {tasks.length}
              </span>
            </div>

            <form onSubmit={addTask} className="mt-6 flex gap-2">
              <input
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Přidat nový úkol..."
                aria-label="Nový úkol"
                className="min-w-0 flex-1 rounded-xl border border-[#e3e8df] bg-[#fafbf8] px-4 py-3 text-sm outline-none transition focus:border-[#78ad7c]"
              />
              <button
                type="submit"
                className="rounded-xl bg-[#426e49] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#34583a]"
              >
                + Přidat
              </button>
            </form>

            <div className="mt-5 divide-y divide-[#f0f1ed]">
              {tasks.map((task) => (
                <label key={task.id} className="flex cursor-pointer items-center gap-3 py-4">
                  <input
                    type="checkbox"
                    checked={task.done}
                    onChange={() =>
                      setTasks(
                        tasks.map((item) =>
                          item.id === task.id
                            ? { ...item, done: !item.done }
                            : item
                        )
                      )
                    }
                    className="h-5 w-5 accent-[#527e58]"
                  />
                  <span className={`min-w-0 flex-1 text-sm ${task.done ? "text-gray-400 line-through" : "text-gray-700"}`}>
                    {task.title}
                    <span className="mt-1 block text-xs text-gray-400">
                      {task.time}
                    </span>
                  </span>
                  {task.done && <span className="text-sm text-[#5e9265]">Hotovo</span>}
                </label>
              ))}
            </div>
          </section>

          <section id="navyky" className="rounded-2xl border border-[#e7ebe3] bg-white p-5 md:p-7">
            <h2 className="text-xl font-bold">Moje návyky</h2>
            <p className="mt-1 text-sm text-gray-500">
              Co dnes uděláš pro sebe?
            </p>

            <div className="mt-5 space-y-3">
              {habits.map((habit) => (
                <label
                  key={habit.id}
                  className={`flex cursor-pointer items-center gap-3 rounded-xl border p-4 transition ${
                    habit.done
                      ? "border-[#dcebd8] bg-[#f5f9f2]"
                      : "border-[#edf0e9] bg-white"
                  }`}
                >
                  <span className="text-xl">{habit.emoji}</span>
                  <span className="flex-1 text-sm font-medium">{habit.title}</span>
                  <input
                    type="checkbox"
                    checked={habit.done}
                    onChange={() =>
                      setHabits(
                        habits.map((item) =>
                          item.id === habit.id
                            ? { ...item, done: !item.done }
                            : item
                        )
                      )
                    }
                    aria-label={`Splnit návyk: ${habit.title}`}
                    className="h-5 w-5 accent-[#527e58]"
                  />
                </label>
              ))}
            </div>

            <div id="cile" className="mt-6 rounded-xl bg-[#f7f8f4] p-4">
              <p className="text-sm font-semibold">🎯 Můj hlavní cíl</p>
              <p className="mt-2 text-sm text-gray-600">
                Každý den udělat něco pro svůj budoucí já.
              </p>
            </div>
          </section>
        </div>

        <footer className="py-8 text-center text-xs text-gray-400">
          Planora · Tvůj prostor pro růst 🌱
        </footer>
      </section>
    </main>
  );
}
