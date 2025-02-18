import Input from "../../assets/input/Input.svg";

export interface TextInputProps {
  label: string;
  placeholder: string;
  maxLength: number;
}

export default function TextInput({
  label,
  placeholder,
  maxLength,
}: TextInputProps) {
  return (
    <div className=" flex flex-col gap-2">
      <p className=" text-base">{label}</p>
      <div className="relative">
        <img src={Input} className="w-full" />
        <div className="px-6">
          <input
            type="text"
            className="absolute w-fit top-1/2 transform -translate-y-1/2 text-2xl z-10 outline-none"
            placeholder={placeholder}
            maxLength={maxLength}
          />
        </div>
      </div>
    </div>
  );
}
