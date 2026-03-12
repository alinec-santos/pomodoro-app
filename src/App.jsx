import Timer from "./components/Timer";
import Tasks from "./components/Tasks";

function App() {
  return (
    <div className="bg-slate-900 min-h-screen text-white flex flex-col items-center pt-10">

      <Timer />

      {/* Divider */}
      <div className="w-full border-t border-white/10 mt-8 mb-8" />

      <Tasks />

    </div>
  );
}

export default App;