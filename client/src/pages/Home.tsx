import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className="bg-ieeeLight flex flex-col items-center justify-center text-center py-32">
      <h1 className="text-4xl md:text-6xl font-bold text-ieeeBlue mb-6">
        LINK CAMP 2025
      </h1>
      <p className="text-xl md:text-2xl mb-8 text-textDark">
        An IEEE LINK initiative for student networking, learning, and leadership
      </p>
      <Link
        to="/register"
        className="bg-ieeeBlue text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-ieeeDark transition"
      >
        Register Now
      </Link>
    </section>
  );
}
