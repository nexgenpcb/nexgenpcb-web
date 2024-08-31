import Image from 'next/image';

interface cardDataType {
    imgSrc: string;
    heading: string;
    percent: string;
    subheading: string;
}

const cardData: cardDataType[] = [
    
    {
        imgSrc: './assets/buyers/projectcompleted.svg',
        percent: '300+',
        heading: "Projects completed",
        subheading: "Delivered high-quality PCBs that meet rigorous standards across various industries.",
    },
    {
        imgSrc: '/assets/buyers/worldwide.png',
        percent: '19+',
        heading: "Nations",
        subheading: "Strong multinational presence, with partnerships spanning multiple continents",
    },
    {
        imgSrc: './assets/buyers/happybuyers.svg',
        percent: '80%',
        heading: "Happy Customers",
        subheading: "Experience exceptional product quality, reliable service, and innovative solutions",
    },
    {
        imgSrc: './assets/buyers/teammembers.svg',
        percent: '50+',
        heading: "Engineering Team",
        subheading: "Highly skilled professionals dedicated to innovative design and fabrication.",
    }

]

const Buyers = () => {
    return (
        <div className='mx-auto max-w-7xl py-16 px-6'>
            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-y-20 gap-x-5'>
                {cardData.map((items, i) => (
                    <div className='flex flex-col justify-center items-center' key={i}>
                        <div className='flex justify-center border border-border  p-2 w-10 rounded-lg'>
                            <Image src={items.imgSrc} alt={items.imgSrc} width={30} height={30} />
                        </div>
                        <h2 className='text-4xl lg:text-6xl text-black font-semibold text-center mt-5'>{items.percent}</h2>
                        <h3 className='text-2xl text-black font-semibold text-center lg:mt-6'>{items.heading}</h3>
                        <p className='text-lg font-normal text-black text-center text-opacity-50 mt-2'>{items.subheading}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Buyers;
