import { useEffect, useState } from "react";

function useDate() {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);

        return () => clearInterval(interval); // cleanup
    }, []);

    return currentDate;
}

export default useDate;
