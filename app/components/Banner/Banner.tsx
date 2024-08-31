"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";



const Banner = () => {

    const [gotoSection, setGoToSection] = useState(false);

useEffect(()=>{
if(gotoSection){
    const targetElement = document.getElementById('about');
    if (targetElement) {
        const offset = -100; // Adjust this value as needed
        const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition + offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
      // Optionally, reset the state after scrolling
      setGoToSection(false);
}
}, [gotoSection])


    return (
        <main>
            <div className="px-6 lg:px-8">
                <div className="mx-auto max-w-7xl pt-16 sm:pt-20 pb-20 banner-image">
                    <div className="text-center">
                        <h1 className="text-4xl font-semibold text-navyblue sm:text-5xl  lg:text-7xl md:4px lh-96">
                            Innovating PCB Solutions <br /> for the Future.
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-bluegray">
                            Specializing in Flexible and High-Density Interconnect (HDI) PCBs <br /> Engage with us to learn more.
                        </p>
                    </div>


                    <div className="text-center mt-5">
                        <button type="button"  onClick={()=>{setGoToSection(true)}} className='text-15px text-white font-medium bg-blue py-5 px-9 mt-2 leafbutton'>
                            What sets us apart
                        </button>
                        <button type="button" className='text-15px ml-4 mt-2 text-blue transition duration-150 ease-in-out hover:text-white hover:bg-blue font-medium py-5 px-16 border border-lightgrey leafbutton'>
                            More info
                        </button>

                    </div>
                    {gotoSection && 
                    <Link key={"services"} href={"#services"} ></Link>
                    }

                    <Image className="pt-12 rounded-3xl" src={'/assets/pcb.jpg'} alt="banner-image" width={1200} height={598} />
                </div>
            </div>
        </main>
    )
}

export default Banner;
