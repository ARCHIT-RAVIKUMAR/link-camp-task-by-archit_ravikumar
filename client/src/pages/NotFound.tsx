import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center h-[60vh] text-center px-4">
      <h1 className="text-6xl font-bold text-ieeeBlue mb-4">404</h1>
      <p className="text-textDark mb-6">Page not found</p>
      <Link
        to="/"
        className="bg-ieeeBlue text-white px-6 py-3 rounded-md hover:bg-ieeeDark transition"
      >
        Go Home
      </Link>
    </section>
  );
}
