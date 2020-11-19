import React from 'react';

const Home = ({logged_in}) => {

  return(
<div>
     { !logged_in ?
        (
        <div>
            <p>
              Fake Home
            </p>
        </div>
      
      ) : (
        <div>
          <p>
            Real Home
          </p>
        </div>
      )
     }

    </div>
  )
}

export default Home;