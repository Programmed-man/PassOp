import github from 'react-useanimations/lib/github';
import UseAnimations from 'react-useanimations';

const Navbar = () => {
    return (
        <nav className="bg-[#0F172A]">
  <div className="md:navcontainer w-full px-4 py-4 sm:py-5 flex justify-between items-center gap-2">

    <div className="logo font-bold text-2xl sm:text-3xl shrink-0 whitespace-nowrap">
      <span className="text-[#10B981]">&lt;</span>
      <span className="text-white font-mono">Pass<span className="text-[#10B981]">Op</span></span>
      <span className="text-[#10B981]"> /&gt;</span>
    </div>

    <a
      href="https://www.github.com"
      target="_blank"
      rel="noreferrer"
      className="text-white flex shrink-0 cursor-pointer items-center justify-center gap-1 bg-[#10B981] rounded-full px-3 py-1 ring-white ring-1 hover:bg-[#07a772]"
    >
      <UseAnimations animation={github} size={28} />
      <span className="font-bold text-sm sm:text-base">Github</span>
    </a>
  </div>
</nav>
    )
}

export default Navbar