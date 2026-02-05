

export function ShoeSection() {
    return (
        <>
            <section id="hero" className='bg-[url("/images/shoe-background.png")] bg-cover bg-no-repeat bg-right md:bg-contain pt-36 section-container'>
                <div className="flex md:items-center max-w-6xl mx-auto justify-between md:flex-row  flex-col">
                    <h1 className="text-4xl md:text-6xl font-display font-bold md:leading-18 leading-12.5">The<br />Shoe<br /> Company</h1>

                    <div className="">
                        <img className="max-w-xl w-full" src="./images/shoe-image.png" alt="" />
                    </div>
                </div>
            </section>

            <section id="how-it-works" className="section-container pt-20  pointer-events-none ">
                <h1 className="text-center font-bold text-3xl max-w-md mx-auto mb-12 font-display
                ">Have they finally made the perfect workout shoe?</h1>

                <div className="max-w-2xl mx-auto pt-60 xl:pt-12 relative ">
                    <img className="max-w-xl w-full rotate-6 xl:rotate-0 p-10 media506:p-0" src="./images/how-it-works-image 1.png" alt="shoe" />

                    <div className=" max-w-[200px] xl:max-w-62.5 absolute top-0 xl:-translate-x-full">
                        <h3 className="text-lg media670:text-2xl font-display font-bold">THE HEEL</h3>
                        <p className="text-xs media670:text-lg font-display">
                            The heel is well-built, has appropriate elevation and is not too rigid.
                        </p>

                        <img className="w-32 xl:ml-auto max-w-[150px] rotate-45 xl:rotate-0
                        translate-y-10" src="./images/left.png" alt="" />

                    </div>

                    <div className=" max-w-[200px] xl:max-w-62.5 absolute top-16 right-0 xl:-right-15
                    media380:translate-y-7 media380:translate-x-5">
                        <img className="w-32 media670:w-auto -ml-15 xl:-ml-32 max-w-[150px] translate-y-full media670:translate-y-60 xl:translate-y-0
                          rotate-[120deg] xl:rotate-0 translate-x-10" src="./images/right.png" alt="" />
                        <h3 className="text-lg media670:text-2xl font-bold -mt-20 media670:-mt-10 xl:-mt-20 font-display">THE FRONT</h3>
                        <p className="text-xs media670:text-lg font-display">
                            The front is comfortable and adjusts well to the shape of your foot.
                        </p>
                    </div>

                    <div className=" max-w-[200px] xl:max-w-62.5 absolute -bottom-14">
                        <img className="w-32 media670:w-auto ml-35 max-w-[150px]" src="./images/middle.png" alt="" />
                        <h3 className="text-lg media670:text-2xl font-display font-bold -mt-15 xl:-mt-10">TRACTION</h3>
                        <p className="text-xs media670:text-lg font-display">
                            The shoe has good traction and doesn't slip easily.
                        </p>
                    </div>
                </div>

            </section>

            <section id="about" className=" mt-30 md:mt-40 md:flex md:gap-15 section-container relative  pointer-events-none">

                <div className="max-w-[600px] md:mx-0">
                    <img className="" src="./images/Group 14.png" alt="" />
                </div>

                <div className="max-w-[400px] flex flex-col justify-center gap-4 mx-auto md:mx-0 items-center">
                    <h1 className="w-full text-2xl media850:text-3xl lg:text-4xl text-center  md:text-start absolute md:static top-0 font-display font-bold">About Us!</h1>

                    <p className="w-full text-[12px] media670:text-[13px] media850:text-[14px] lg:text-[16px] font-display">For each one of those shoe sweethearts out there, THE SHOE COMPANY offer the one-stop goal to pick the correct match of footwear.
                    </p>

                    <p className="w-full text-[12px] media670:text-[13px] media850:text-[14px] lg:text-[16px] font-display">
                        Gone are the days when you needed to go from store to store to locate the correct style and size for yourself.
                    </p>

                    <p className="w-full text-[12px] media670:text-[13px] media850:text-[14px] lg:text-[16px] font-display">
                        At THE SHOE COMPANY,  you can locate a vast accumulation of dashing footwear in all sizes and styles, all inside a couple of snaps.
                    </p>

                    <p className="w-full text-[12px] media670:text-[13px] media850:text-[14px] lg:text-[16px] font-display">
                        Simple right? Not just we are here to spare your time, we are putting forth you the most dazzling footwear alternatives from all the first-rate brands like DAVINCHI, PRINCESS, and SIGNATURE. At ‘Organization Name’, we offer men, ladies, and child’s shoes perfect for any and each event.
                    </p>
                </div>
            </section>

<section
  id="testimonials"
  className="section-container pointer-events-none mt-15 flex items-center justify-center bg-cover md:bg-contain min-h-[400px]"
  style={{ backgroundImage: "url('/images/what-people-say.png')" }}
>

                <div>
                    <h1 className="text-center text-3xl md:text-5xl max-w-[330px] md:max-w-2xl mx-auto font-display font-bold">What People are saying about THE SHOE COMPANY ?</h1>
                </div>

                <div className="flex flex-col md:flex-row gap-10 md:gap-20 items-center justify-center mt-20 md:mt-30">

                    <div className="items-center text-center">
                        <img src="./images/r1.png" alt="" />
                        <p className="text-[12px] media670:text-[13px] media850:text-[14px] lg:text-[16px] max-w-[250px] mt-5 font-display">“Looking for shoes that are built just for you? THE SHOE COMPANY is the way to go. Love the design and build quality.”</p>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <img src="./images/Group 4.png" alt="" />
                        <p className="text-[12px] media670:text-[13px] media850:text-[14px] lg:text-[16px] max-w-[250px] mt-5 font-display">“Looking for shoes that are built just for you? THE SHOE COMPANY is the way to go. Love the design and build quality.”</p>
                    </div>

                    <div className="items-center text-center">
                        <img src="./images/r3.png" alt="" />
                        <p className="text-[12px] media670:text-[13px] media850:text-[14px] lg:text-[16px] max-w-[250px] mt-5 font-display">“Looking for shoes that are built just for you? THE SHOE COMPANY is the way to go. Love the design and build quality.”</p>
                    </div>
                </div>

            </section>

            <section id="contacts" className=" section-container  pointer-events-none mt-5 md:mt-15 md:flex md:gap-15 section-container
            items-center justify-center">

                <div className="max-w-[600px] mb-5 md:mb-0 font-display">
                    <h1 className="font-bold">Contact US</h1>
                    <p>
                        HE SHOE COMPANY,<br />
                        Dallas, Texas, USA<br />
                        +1 5590 1120 9910<br />
                    </p>

                    <div className="flex mt-6 gap-2">
                        <img src="./images/Vector.png" alt="" />
                        <img src="./images/instagram.png" alt="" />
                        <img src="./images/twitch.png" alt="" />
                        <img src="./images/youtube.png" alt="" />
                    </div>
                </div>

                <div>
                    <img className="w-full" src="./images/contact.png" alt="" />
                </div>
            </section>
        </>
    )
}