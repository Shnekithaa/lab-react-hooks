import React, { useContext, useEffect, useState } from 'react';
import UseContext from './components/UseContext';

export const ToggleTheme = React.createContext()


const App = () => {

  const [state,setState] = useState(true)

  const handleToggle = ()=>{
    setState(state=>!state)
  }


  const [text, setText] = useState(false);
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    alert("content button is clicked");
  }, [text]);

  

  return (
    <div>
      <ToggleTheme.Provider value={state}>
      <button onClick={handleToggle}>Toggle</button>
      <UseContext/>
    </ToggleTheme.Provider>
      {text &&
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ipsum provident ducimus dolor recusandae voluptate rerum quis, veritatis necessitatibus placeat iste architecto corrupti non sit laborum beatae a! Vel, sapiente.</p>
}
      <button onClick={() => setText(!text)}>Content</button>
      <h2>{likes}</h2>
      <button onClick={() => setLikes((prev) => prev+1)}>Like</button>
    </div>
  );
}

export default App;

