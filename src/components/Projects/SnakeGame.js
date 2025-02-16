import { useEffect, useRef } from "react"

function SnakeGamePage() {

    const iframeRef = useRef(null);

    useEffect(() => {
      const iframe = iframeRef.current;
      if (iframe) {
        iframe.onload = () => {
          iframe.contentWindow.focus();
        };
      }
    }, []);
  
    return (
        <div style={{ width: "100vw", height: "100vh", margin: 0, padding: 0 }}>
            <iframe
                ref={iframeRef}
                src="/snake-game.html"
                title="Snake Game"
                width="100%"
                height="200%"
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    paddingTop: "40px",
                    width: "100%",
                    height: "100%",
                }}
            />
        </div>
    );
}

export default SnakeGamePage