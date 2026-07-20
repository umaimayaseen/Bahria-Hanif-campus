import React, {useEffect, useState} from 'react';


function Home (){

    useEffect( () => {
      alert("wellcome to our home page ")
    }, []);
    // [] yeh batata hai ke is callback function ko kab kab chalana hai. Agar khali chorenge [], toh iska matlab hai: "Sirf tab chalo jab component screen par pehli dafa aaye    


    const [count, setCount ] = useState(0) 
    return(
        <div style={{ padding: '40px', textAlign: 'center'}}>
            <h1> Wellcome to my home page Hommies!!!!!</h1>

            <p>Count : {count}</p>
             <button onClick={() => setCount(count + 1)}> Click me to count </button>

        </div>
    )
}

export default Home;