// import { createPortal } from "preact/compat";
import { useEffect, useState } from "preact/hooks";
import "./game.css";

export function Game() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async function () {
      const { Runner } = await import("./runner");
      new Runner(".js-game-container", {
        handleStart() {
          document.documentElement.style.overflow = "hidden";
          document.documentElement.classList.add("playing");
          const el = document.querySelector(".js-game-container");
          el.scrollIntoView({ behavior: "smooth", block: "center" });
        },
        handleStop() {
          document.documentElement.style.overflow = "";
          document.documentElement.classList.remove("playing");
        },
      });
      setLoading(false);
    })();

    window.onkeydown = function (e) {
      if (e.keyCode == 32 && e.target == document.body) e.preventDefault();
    };
  }, []);

  return (
    <>
      <div class="game js-game-container / w-full h-full min-h-[150px] flex max-w-[600px] mx-auto">
        {loading && "Loading..."}
      </div>
      <div className="game-overlay" />
    </>
  );
}
