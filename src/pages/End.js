import { useState, useEffect } from "react";

const End = () => {

    const [score, setScore] = useState(0);

    useEffect(() => {
        const storedScore = sessionStorage.getItem("score");
        if (storedScore) {
            setScore(parseInt(storedScore, 10));
        }
    }, []);

    return ( 
        <div className="end">
            <h1>Cestitamo! Zavrsili ste kviz!</h1>
            <h2>Rezultat: {score}/5</h2>
        </div>
        
     );
}
 
export default End;