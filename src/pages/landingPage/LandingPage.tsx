import BgImage from "../../assets/svgs/bgImage.svg";
import SdCara from "../../assets/svgs/sd_cara_1.svg";
export default function LandingPage() {
  return (
    <>
      <div
        className="w-lg min-w-lg mx-auto h-screen flex justify-center "
        style={{ backgroundImage: `url(${BgImage})` }}
      >
        <img src={SdCara} className=" w-1/2 animate-jump-in animate-ease-out" />
      </div>
    </>
  );
}
