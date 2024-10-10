import { CiLocationArrow1 } from "react-icons/ci";
const MagicButton = () => {
  return (
    <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
      <span className="absolute inset-0 overflow-hidden rounded-full">
        <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </span>
      <div className="relative flex space-x-2 items-center z-[1000] rounded-full bg-zinc-950 py-0.5 sm:px-4 px-2 ring-1 ring-white/10 w-full h-12 sm:text-lg text-sm">
        <CiLocationArrow1 />

        <span>See my work</span>
        <svg
          fill="none"
          height="22"
          viewBox="0 0 24 24"
          width="22"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.75 8.75L14.25 12L10.75 15.25"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </svg>
      </div>
      <span className="absolute -bottom-0 left-[1.5rem] h-px w-[calc(100%-3rem)] bg-gradient-to-r from-purple text-center to-blue-800 transition-opacity duration-500 group-hover:opacity-40" />
    </button>
  );
};

export default MagicButton;
