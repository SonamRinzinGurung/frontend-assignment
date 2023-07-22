export default function Error({ error }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl text-red-600">An error has occurred:</h1>
      <p className="text-lg text-red-600">{error.message}</p>
    </div>
  );
}
