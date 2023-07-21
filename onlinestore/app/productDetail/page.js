export default function ProductDetail() {
  const productDetail = {
    title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    price: "123",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi eum eveniet pariatur voluptatem, impedit tempore est optio quis! Nostrum, sit?",
  };
  const { title, image, price, description } = productDetail;
  return (
    <div className="flex flex-col md:px-4 mt-6">
      <div className="flex items-center flex-col md:flex-row md:justify-evenly mx-4 bg-white rounded-lg shadow-md md:p-4">
        <div>
          <img src={image} alt={title} className="h-80 w-72 md:h-96 md:w-80" />
        </div>
        <div className="w-1/2 text-center md:text-left">
          <h1 className="font-display">{title}</h1>
          <p className="font-roboto font-medium text-2xl md:text-4xl mt-1 text-gray-800">
            ${price}
          </p>
        </div>
      </div>

      <div className="mx-4 mt-6">
        <h2 className="font-heading font-semibold">Description</h2>
        <hr className="my-2 bg-black shadow-lg" />
        <p className="text-lg md:text-2xl mt-2">{description}</p>
      </div>
    </div>
  );
}
