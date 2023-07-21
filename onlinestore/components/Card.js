export default function Card({ title, image, price }) {
  return (
    <div
      className="flex flex-col items-center justify-between bg-white w-64 md:w-80 py-6 cursor-pointer rounded-lg shadow-md
    transition duration-500 ease-in-out transform hover:-translate-y-0 hover:scale-110"
      style={{ height: "500px" }}
    >
      <div className="">
        <img src={image} alt={title} className="w-52 h-52 md:w-60 md:h-60" />
      </div>
      <div className="flex flex-col items-center mt-2 p-2 text-center ">
        <h4 className="font-bold font-display">{title}</h4>
        <p className="text-lg md:text-2xl text-gray-600 mt-1">${price}</p>
      </div>
    </div>
  );
}
