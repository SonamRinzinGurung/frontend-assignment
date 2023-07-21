export default function Search() {
  return (
    <div className="flex flex-row mt-8">
      <input
        type="text"
        placeholder="Search"
        className="border-2 border-gray-300 rounded-md p-2  m-2 w-52 md:w-96  focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent shadow-md transition duration-500 ease-in-out"
      />
      <button className="hidden md:block">
        <p className="text-3xl">🔍</p>
      </button>
    </div>
  );
}
