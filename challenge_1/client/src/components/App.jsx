import React, { useState } from 'react';

const App = (props) => (
  const [events, setEvents] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [pageCount, setPageCount] = useState(1);

  return(
    <div>
      <SearchForm />
    </div>
  )
)

export default App;