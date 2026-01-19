import WhiteLogo from '../assets/ieee-logo-white.png';

export default function Footer() {
  return (
    <footer className="bg-ieeeDark text-white py-6 mt-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <img src={WhiteLogo} alt="IEEE Logo" className="h-10 mb-4 md:mb-0" />
        <p className="text-center md:text-left text-sm">
          LINK CAMP 2025 is an IEEE LINK student initiative. IEEE and the IEEE logo are trademarks of The Institute of Electrical and Electronics Engineers, Inc.
        </p>
      </div>
    </footer>
  );
}
