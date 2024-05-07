import React from 'react';
import Image from 'next/image';

const FeatureTags = () => {
    const tags = [
        { name: 'Brain Tumor', icon: '/black arrow.svg' },
        { name: 'Sarcoma', icon: '/black arrow.svg' },
        { name: 'Spinal Treatments', icon: '/black arrow.svg' },
        { name: 'Skin Care', icon: '/black arrow.svg' },
        { name: 'Giloma', icon: '/black arrow.svg' },
        { name: 'Heart Disease', icon: '/black arrow.svg' },
        { name: 'Lung Diseases', icon: '/black arrow.svg' },
        { name: 'Hair Treatments', icon: '/black arrow.svg' }
    ];

    return (
        <div className='bg-[#f5f5f5]'>
            <div className='flex justify-center py-8'>
                <h2 className='text-2xl font-bold text-blue-900'>Featured Tags</h2>
            </div>
            <div className='flex flex-col md:flex-row justify-between'>
                <div className='relative text-blue-950'>
                    <Image src='/census-concept-photographed-city-building.png' width={500} height={500} alt='building' className='px-10'/>
                    <div className='bg-white  border rounded-2xl absolute bottom-1 right-0 md:bottom-20 md:left-96 w-2/6 md:w-2/5 px-1 py-2 md:p-4 font-semibold'>
                        <Image src='/loupe-search-svgrepo-com.svg' className='w-2/6 md:w-2/5' width={60} height={60} alt='magnifier'/>
                        <p className='text-xl md:text-4xl mt-2  p-2'>+5K</p>
                        <p className='text-xs md:text-md'>Daily Users Medical Searching For Cases</p>
                    </div>
                </div>
                <div></div>
                <div className='font-semibold grid grid-cols-2 md:grid-cols-2 gap-4 w-full md:w-1/2 h-full mt-8 '>
                    {tags.map((tag, index) => (
                        <div key={index} className='border rounded-xl hover:bg-slate-200 p-2 flex justify-between items-center md:h-20 '>
                            <p className='text-blue-900 text-sm md:text-xl cursor-pointer'>{tag.name}</p>
                            <div className='border bg-white rounded-lg p-2 cursor-pointer'>
                                <Image src={tag.icon} width={32} height={32} alt='arrow'/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeatureTags;
