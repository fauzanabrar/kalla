import React from 'react';

interface GlobalFilterProps {
  filter?: any;
  setFilter?: any;
}

function GlobalFilter(props: Partial<GlobalFilterProps>) {
  const { filter, setFilter } = props;
  return (
    <div>
      <input
        type="text"
        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
        placeholder="Search"
        aria-label="Search"
        value={filter || ''}
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
}

export default GlobalFilter;
