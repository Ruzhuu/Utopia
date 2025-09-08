import { useState, useRef, useEffect } from "react";

import ditherKnight from "./ditherKnight.svg";
import redGlobe from "./redGlobe.svg";
import ellipse10 from "./Ellipse 10.svg";
import ellipse11 from "./Ellipse 11.svg";
import ellipse12 from "./Ellipse 12.svg";
import ellipse13 from "./Ellipse 13.svg";
import ellipse14 from "./Ellipse 14.svg";
import ellipse15 from "./Ellipse 15.svg";
import utopiaLogo from "./UTOPIA.svg";
import frame from "./Frame.svg";

import "./App.css";

export default function App() {
  const [flipDeg, setFlipDeg] = useState(0);
  const [snakesActive, setSnakesActive] = useState(false);

  const canvasRef = useRef(null);
  const coinRef = useRef(null);
  const snakes = useRef([]);

  // 🔧 Tunable constants
  const GRID = 50;
  const TRAIL_LENGTH = 6;
  const MOVE_DELAY = 20; // higher = slower (move once every N frames)
  const WAVE_FREQ = 2;
  const WAVE_AMP = 2;

  const onFlip = () => {
    const nextDeg = flipDeg + 180;
    setFlipDeg(nextDeg);
    setSnakesActive((nextDeg / 180) % 2 === 1);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    function snap(v) {
      return Math.round(v / GRID) * GRID;
    }

    function getCoinCenter() {
      if (!coinRef.current) {
        return {
          x: snap(window.innerWidth / 2),
          y: snap(window.innerHeight / 2),
        };
      }
      const rect = coinRef.current.getBoundingClientRect();
      return {
        x: snap(rect.left + rect.width / 2),
        y: snap(rect.top + rect.height / 2),
      };
    }

    function spawnSnake() {
      const { x, y } = getCoinCenter();
      const angle = Math.random() * 2 * Math.PI;
      snakes.current.push({ x, y, baseAngle: angle, t: 0, path: [] });
    }

    let frame;
    let frameCount = 0;

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (snakesActive && Math.random() < 0.01) spawnSnake();

      frameCount++;
      snakes.current.forEach((s) => {
        // only move every MOVE_DELAY frames
        if (frameCount % MOVE_DELAY === 0) {
          s.t += 0.05; // wiggle time step
          const wiggle = Math.sin(s.t * WAVE_FREQ) * WAVE_AMP;
          const angle = s.baseAngle + wiggle;

          s.x = snap(s.x + Math.cos(angle) * GRID);
          s.y = snap(s.y + Math.sin(angle) * GRID);

          s.path.push({ x: s.x, y: s.y });
          if (s.path.length > TRAIL_LENGTH) s.path.shift();
        }

        s.path.forEach((p, i) => {
          const alpha = i / s.path.length;
          ctx.fillStyle = `rgba(230,200,200,${alpha})`;
          ctx.fillRect(p.x, p.y, GRID, GRID);
        });
      });

      frame = requestAnimationFrame(animate);
    }

    animate();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [snakesActive]);


// 🔴 NEW EFFECT: spawn snakes right after flip (with slight delay)
useEffect(() => {
  if (snakesActive) {
    const timeout = setTimeout(() => {
      const snap = (v) => Math.round(v / GRID) * GRID;

      function getCoinCenter() {
        if (!coinRef.current) {
          return {
            x: snap(window.innerWidth / 2),
            y: snap(window.innerHeight / 2),
          };
        }
        const rect = coinRef.current.getBoundingClientRect();
        return {
          x: snap(rect.left + rect.width / 2),
          y: snap(rect.top + rect.height / 2),
        };
      }

      for (let i = 0; i < 1; i++) {
        const { x, y } = getCoinCenter();
        const angle = Math.random() * 2 * Math.PI;
        snakes.current.push({ x, y, baseAngle: angle, t: 0, path: [] });
      }
    }, ); // ⏱ 50 ms delay

    return () => clearTimeout(timeout);
  }
}, [snakesActive]);


  return (
    <div className="App">
      <header className="Stage">
        <div
          className="coin"
          ref={coinRef}
          onClick={onFlip}
          style={{ "--flip": `${flipDeg}deg` }}
        >
          {/* FRONT */}
          <div className="spin spin--knight">
            <img
              src={ditherKnight}
              alt="knight"
              className="flip flip--knight"
            />
          </div>
          <div className="spin spin--globe">
            <img src={redGlobe} alt="globe" className="flip flip--globe" />
          </div>
          <div className="spin spin--globe">
            <img
              src={ellipse10}
              alt="ellipse10"
              className="flip flip--ellipse"
              style={{ width: "5px" }}
            />
            <img
              src={ellipse11}
              alt="ellipse11"
              className="flip flip--ellipse"
              style={{ width: "530px" }}
            />
            <img
              src={ellipse12}
              alt="ellipse12"
              className="flip flip--ellipse"
              style={{ width: "540px" }}
            />
            <img
              src={ellipse13}
              alt="ellipse13"
              className="flip flip--ellipse"
              style={{ width: "550px" }}
            />
            <img
              src={ellipse14}
              alt="ellipse14"
              className="flip flip--ellipse"
              style={{ width: "560px" }}
            />
            <img
              src={ellipse15}
              alt="ellipse15"
              className="flip flip--ellipse"
              style={{ width: "570px" }}
            />
          </div>
          {/* BACK */}
            <div className="spin spin--frame">
              <img
                src={frame}
                alt="frame"
                className="flip flip--back back-frame"
              />
            </div>

            {/* BACK ELLIPSES */}
          <div className="spin spin--globe">
            <img
              src={ellipse10}
              alt="ellipse10-back"
              className="flip flip--back flip--ellipse"
              style={{ width: "500px" }}
            />
            <img
              src={ellipse11}
              alt="ellipse11-back"
              className="flip flip--back flip--ellipse"
              style={{ width: "530px" }}
            />
            <img
              src={ellipse12}
              alt="ellipse12-back"
              className="flip flip--back flip--ellipse"
              style={{ width: "540px" }}
            />
            <img
              src={ellipse13}
              alt="ellipse13-back"
              className="flip flip--back flip--ellipse"
              style={{ width: "550px" }}
            />
            <img
              src={ellipse14}
              alt="ellipse14-back"
              className="flip flip--back flip--ellipse"
              style={{ width: "560px" }}
            />
            <img
              src={ellipse15}
              alt="ellipse15-back"
              className="flip flip--back flip--ellipse"
              style={{ width: "570px" }}
            />
          </div>


          {/* BRAND */}
          <div className="brand">
            <img src={utopiaLogo} alt="UTOPIA" />
          </div>
        </div>
      </header>
      <canvas ref={canvasRef} className="snake-canvas"></canvas>
    </div>
  );
}
