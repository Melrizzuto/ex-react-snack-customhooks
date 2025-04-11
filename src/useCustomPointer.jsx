import { useState, useEffect } from "react";

function useCustomPointer(customComponent) {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({
                x: e.clientX,
                y: e.clientY,
            });
        };

        document.addEventListener("mousemove", handleMouseMove);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div
            style={{
                position: "fixed",
                left: position.x,
                top: position.y,
                transform: "translate(-50%, -50%)",
                cursor: "none"
            }}
        >
            {customComponent}
        </div>
    );
}

export default useCustomPointer;
