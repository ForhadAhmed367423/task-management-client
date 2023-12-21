import swiper1 from './image/task-management-screenshot-1.png'
const Banner = () => {
    return (
        <div className='container mx-auto relative'>
            <img className='rounded-lg'  src={swiper1} alt="" />
            <div className='absolute top-[330px] right-[47%]'>
                <button className='login'>Explore More</button>
            </div>
        </div>
    );
};

export default Banner;