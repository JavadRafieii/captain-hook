import Bg1 from "/presale-bg-3.jpg";
import BgMobile1 from "/presale-bg-3-mobile.jpg";
import Bg2 from "/presale-bg-4.jpg";
import BgMobile2 from "/presale-bg-4-mobile.jpg";
import Container from "../container/Container";
import BigButton from "../bigButton/BigButton";
import Treasure from "/treasure.png";

function Capt() {
    return (
        <>
            <div className="relative">
                <div className="absolute z-10 left-0 bottom-[100px] sm:bottom-[450px] md:bottom-[600px] lg:bottom-[-65px] xl:bottom-0 w-full">
                    <Container>
                        <h3 className="ribeye-regular text-white text-4xl text-center">$CAPT TOKEN</h3>
                        <div className="w-full max-w-[850px] mx-auto p-5 my-5 rounded-[12px] bg-[#ffffff1c]">
                            <p className="open-sans-Medium text-white text-lg text-center mb-3">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos tempore et dolore, suscipit, fugit eveniet quas nam asperiores temporibus ipsam ratione. Tempore ipsa vel beatae iure, alias incidunt dolor voluptate dicta ipsum? Assumenda unde officiis iure? Modi quos ex ipsa expedita explicabo nobis rerum numquam fuga aliquam, totam architecto reprehenderit.
                            </p>
                        </div>
                        <div className="flex justify-center">
                            <BigButton text={"Buy $CAPT Now"} link={"#"} />
                        </div>
                    </Container>
                </div>
                <img src={Bg1} alt="background CAPT TOKEN" loading="lazy" className="hidden lg:block w-full" />
                <img src={BgMobile1} alt="background CAPT TOKEN" loading="lazy" className="lg:hidden w-full" />
            </div>
            <div className="relative">
                <figure className="absolute z-20 w-[800px] h-[760px] left-[calc(50%-400px)] top-[calc(50%-380px)] scale-[.5] sm:scale-[.7] md:scale-[.8] lg:scale-[.6] xl:scale-[1] xxl:scale-[1.2]">
                    <img src={Treasure} alt="treasure" loading="lazy" className="w-full h-full"/>
                </figure>
                <img src={Bg2} alt="background CAPT TOKEN" loading="lazy" className="hidden lg:block w-full" />
                <img src={BgMobile2} alt="background CAPT TOKEN" loading="lazy" className="lg:hidden w-full" />
            </div>
        </>
    );
}

export default Capt;