import SdCara from "../../assets/svgs/sd_cara_1.svg";
import Land from "../../assets/svgs/land.svg";
import StartBtn from "../../components/buttons/startBtn";
import LogoPixel from "../../assets/svgs/logo_pixel.svg";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const nav = useNavigate();

  const handle = () => {
    nav("/create");
  };

  return (
    <div className="w-lg min-w-sm mx-auto">
      <div className="h-screen overflow-y-auto snap-y snap-mandatory bg-linear-to-t from-[#00DAEB] to-[#004185]">
        {/* 첫 번째 섹션 - 메인 화면 */}
        <section className="h-screen snap-start">
          <div className="w-lg min-w-lg mx-auto h-screen flex flex-col justify-between  relative">
            <div className="flex flex-col justify-center items-center mt-50 gap-20">
              <img
                src={LogoPixel}
                className="w-1/2 animate-jump-in animate-ease-in-out"
              />
              <img
                src={SdCara}
                className="w-1/2 animate-jump-in animate-ease-in-out self-center"
              />
              <div className="animate-fade-down animate-duration-2000 animate-ease-in-out">
                <StartBtn onClick={handle} />
              </div>
            </div>
            <img
              src={Land}
              className="w-96 object-cover absolute bottom-0 left-1/2 transform -translate-x-1/2 -z-10"
            />
          </div>
        </section>

        {/* 두 번째 섹션 - 프로젝트 설명 */}
        <section className="h-screen snap-start">
          <div className="w-lg min-w-lg mx-auto h-full flex flex-col justify-center items-center p-8">
            <div className="text-white space-y-8 max-w-2xl">
              <h1 className="text-4xl font-bold mb-6 animate-fade-up animate-once animate-duration-1000 animate-delay-100">
                프로젝트 소개
              </h1>
              <p className="text-xl animate-fade-up animate-once animate-duration-1000 animate-delay-200">
                여행 체크리스트를 쉽고 재미있게 만들 수 있는 서비스입니다.
              </p>
              <p className="text-xl animate-fade-up animate-once animate-duration-1000 animate-delay-300">
                당신의 여행을 더욱 즐겁게 만들어드립니다.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
