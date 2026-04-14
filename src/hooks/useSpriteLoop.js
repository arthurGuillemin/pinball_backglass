import { useEffect, useRef } from "react";

export function useSpriteLoop(frames, fps = 10, imgRef, loop = true, onComplete = null) {
  const index = useRef(0);
  const last = useRef(0);

  useEffect(() => {
    function loopFn(time) {
      const interval = 1000 / fps;

      if (time - last.current > interval) {
        last.current = time;

        index.current++;

        if (index.current >= frames.length) {
          if (loop) {
            index.current = 0;
          } else {
            index.current = frames.length - 1;

            if (onComplete) {
              onComplete();
            }

            return; 
          }
        }

        if (imgRef.current) {
          imgRef.current.src = frames[index.current];
        }
      }

      requestAnimationFrame(loopFn);
    }

    const id = requestAnimationFrame(loopFn);
    return () => cancelAnimationFrame(id);
  }, [frames, fps, imgRef, loop, onComplete]);
}
