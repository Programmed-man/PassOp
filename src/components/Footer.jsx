import UseAnimations from 'react-useanimations';
import heart from 'react-useanimations/lib/heart';

const Footer = () => {
    return (
        // Footer component
<div className='w-full bg-[#0F172A] text-white flex flex-col justify-center items-center p-5 mt-auto'>
            <div className="logo font-bold text-3xl">
                    <span className="text-[#10B981]">&lt;</span>
                    <span className='text-[#FFFFFF] text-3xl font-mono'>Pass<span className='text-[#10B981]'>Op</span></span>
                    <span className="text-[#10B981]"> /&gt;</span>
                </div>
            <div className='flex items-center mt-5'>
                <span className='font-mono text-xl'>Created with&nbsp;</span> <span className='text-red-600 cursor-pointer'><UseAnimations animation={heart} reverse={true} size={28} /></span> <span className='text-xl font-mono'>&nbsp;by MHI </span>
            </div>
        </div>
    )
}

export default Footer