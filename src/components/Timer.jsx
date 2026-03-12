import { useState, useEffect } from "react";

function Timer(){

  const [timeLeft, setTimeLeft] = useState(1500); 
  const [isRunning,setIsRunning] = useState(false); 
  const [mode, setMode] = useState();
  const [sessions, setSessions] = useState(0);

    // start
  function startTimer(){
    setIsRunning(true);
  }

  //pausar
  function pauseTime(){
    setIsRunning(false);
  }

  //reset
  function resetTime(){
    setIsRunning(false);
    setTimeLeft(1500);
  }

  //modo focus
  function modeFocus(){
    setMode("focus");
    setTimeLeft(1500);
    setIsRunning(false)
  }

    //modo short break
  function modeShortBreak(){
    setMode("ShortBreak");
    setTimeLeft(300);
    setIsRunning(false)
  }

    //modo Long break
  function modeLongBreak(){
    setMode("LongBreak");
    setTimeLeft(900);
    setIsRunning(false)
  }

  //fazer o temporizador decrescer quando clicar em start/mudar de acordo com o número de sessões
  useEffect(() => {
    if (isRunning) {
        const interval = setInterval(() => {
        setTimeLeft((prev) => {
            if (prev <= 1) {
                clearInterval(interval);
                setIsRunning(false);

                if (mode === "focus") {
                    setSessions(prev => prev + 1);

                    if (sessions === 3) {
                    modeLongBreak();
                    setSessions(0);
                    } else {
                    modeShortBreak();
                    }

                } else if (mode === "shortBreak") {
                    modeFocus();

                } else if (mode === "longBreak") {
                    modeFocus();
                }

                return 0;
                }
            return prev - 1;
        });
        }, 1000);

        return () => clearInterval(interval);
    }
  }, [isRunning]);

//formatar o temporizador(minutos e segundos)
function formatTime(timeLeft){
  let minutes = String(Math.floor(timeLeft / 60)).padStart(2,'0'); 
  let seconds = String(timeLeft % 60).padStart(2,'0');

  return `${minutes}:${seconds}`;
}



//aqui começa a renderização
return (
  <div className="flex flex-col items-center pt-10 gap-4 text-white">
    {/* Mode buttons */}
    <div className="flex gap-2">
      <button
        onClick={modeFocus}
        className="px-4 py-1.5 bg-slate-700 rounded-full text-sm font-medium text-white"
      >
        Focus
      </button>
      <button
        onClick={modeShortBreak}
        className="px-4 py-1.5 text-slate-400 rounded-full text-sm hover:text-white transition-colors"
      >
        Short Break
      </button>
      <button
        onClick={modeLongBreak}
        className="px-4 py-1.5 text-slate-400 rounded-full text-sm hover:text-white transition-colors"
      >
        Long Break
      </button>
    </div>

    {/* Timer */}
    <h1 className="text-8xl font-bold text-red-400 tracking-widest">
      {formatTime(timeLeft)}
    </h1>

    {/* Controls */}
    <div className="flex gap-3">
      <button
        onClick={startTimer}
        className="px-8 py-2.5 border-2 border-white rounded-full text-white font-semibold hover:bg-white hover:text-slate-900 transition-all"
      >
        Start
      </button>

      <button
        onClick={resetTime}
        className="px-8 py-2.5 border-2 border-white/30 rounded-full text-white/70 font-semibold hover:border-white hover:text-white transition-all"
      >
        Reset
      </button>
        <button
        onClick={pauseTime}
        className="px-8 py-2.5 border-2 border-white rounded-full text-white font-semibold hover:bg-white hover:text-slate-900 transition-all"
      >
        Pause
      </button>
    </div>

    {/* Session counter */}
    <p className="text-slate-400 text-sm">Session {sessions}</p>
  </div>
);
}



export default Timer;