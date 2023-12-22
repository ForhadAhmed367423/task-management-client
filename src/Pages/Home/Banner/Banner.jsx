import swiper1 from './image/task-management-screenshot-1.png'
const Banner = () => {
    return (
        <div className='container mx-auto relative'>
            <img className='rounded-lg w-[100%]'  src={swiper1} alt="" />
            <div className='absolute lg:top-[330px] lg:right-[47%] top-[70px] right-[35%]'>
                <button className='login'>Explore More</button>
            </div>
        </div>
    );
};

export default Banner;