import TitleBoxStart from "../../assets/boxs/TitleStart.svg";
import TitleBoxCenter from "../../assets/boxs/TitleCenter.svg";
import TitleBoxEnd from "../../assets/boxs/TitleEnd.svg";
import TextInput from "../../components/inputs/textInput";

export default function CreatePage() {
  return (
    <div className="w-lg min-w-sm mx-auto">
      <div className="h-screen bg-linear-to-t from-[#00DAEB] to-[#004185] px-2 pt-2">
        {/* 상단타이틀 */}
        <img src={TitleBoxStart} className="w-full" />
        <div className="relative">
          <img src={TitleBoxCenter} className="w-full" />
          <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl z-10">
            여행생성
          </p>
        </div>
        <img src={TitleBoxEnd} className="w-full" />

        {/* 인풋 */}
        <TextInput
          label="여행이름 입력 (10글자 제한)"
          placeholder="여행 제목을 입력하세요"
          maxLength={10}
        />
      </div>
    </div>
  );
}
