import { useState } from "react";

export default function Search({ filterSearch }) {
  // state to store the search query
  const [search, setSearch] = useState("");

  // update the search query
  const handleChange = (e) => {
    if (e.target.value === "") {
      filterSearch(e, "");
    }
    setSearch(e.target.value);
  };

  // filter the data based on the search query and update the search results
  // call the filterSearch function passed as a prop from the parent component
  const handleSubmit = (e) => {
    filterSearch(e, search);
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-row mt-8">
          <input
            onChange={handleChange}
            name="search"
            type="text"
            placeholder="Search"
            className="border-2 border-gray-300 rounded-md p-2  m-2 w-52 md:w-96  focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent shadow-md transition duration-500 ease-in-out"
          />
          <button className="hidden md:block" type="submit">
            <p className="text-3xl">🔍</p>
          </button>
        </div>
      </form>
    </section>
  );
}
