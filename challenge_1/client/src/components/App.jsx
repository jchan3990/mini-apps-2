import React, { useState } from 'react';
import SearchBar from './SearchBar.jsx';

const App = () => {
  const [events, setEvents] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [pageCount, setPageCount] = useState(1);

  const handleSearch = (event) => {
    event.preventDefault();
    loadPageCount();
    loadEvents(1);
    resetKeyword();
  };

  const loadPageCount = async () => {
    let response = await fetch(`/events?q=${keyword}`);
    let result = await response.json();
    setPageCount(Math.ceil(result.length / 10));
  };

  const loadEvents = async (page) => {
    let response = await fetch(`/events?q=${keyword}&_page=${page}`);
    let result = await response.json();
    setEvents(result);
  };

  const resetKeyword = () => {
    setKeyword('');
    document.getElementById("search").reset();
  };

  return (
    <div>
      <SearchBar handleSearch={handleSearch} setKeyword={setKeyword} />
      <EventsList events={events} />
      <ReactPaginate
          previousLabel={"prev"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={(event) => loadEvents(event.selected + 1)}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
    </div>
  )
};

export default App;