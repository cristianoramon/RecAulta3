import './styles.css';

import { PostsProvider } from '../../contexts/PostsProvider';
import { Posts } from '../../components/Posts';
import { CounterProvider } from '../../contexts/CounterProvider';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (


    // <PostsProvider><p>oi </p></PostsProvider>
    // <CounterProvider><div>oi</div></CounterProvider>
    // <PostsProvider>
    //   <div>oi</div>
    // </PostsProvider>

    // <CounterProvider>

    //   <div>oi</div>
    // </CounterProvider>
    
    <CounterProvider>
      <PostsProvider>
        <div>
          <Posts />
        </div>
      </PostsProvider>
    </CounterProvider>
  );
};


export default App;

