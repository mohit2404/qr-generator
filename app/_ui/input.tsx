import { ChangeEvent } from "@/app/_lib/types";

type Props = {
  keyName: string;
  label: string;
  type: string;
  value: string;
  placeholder: string;
  hadleOnChange: (event: ChangeEvent) => void;
  withTextArea?: boolean;
};

export default function Input({
  keyName,
  label,
  type,
  value,
  placeholder,
  hadleOnChange,
  withTextArea,
}: Props) {
  return (
    <div className="space-y-1">
      <label htmlFor={keyName} className="font-medium">
        {label}
      </label>
      <input
        type={type}
        name={keyName}
        value={value}
        onChange={hadleOnChange}
        placeholder={placeholder}
        className="h-10 w-full rounded-md border-2 p-4"
      />

      {withTextArea && (
        <>
          <label htmlFor={"message"} className="font-medium">
            Enter your Message
          </label>
          <textarea
            name="message"
            cols={4}
            className="w-full rounded-md border-2 p-4"
            placeholder="Enter your message"
            onChange={hadleOnChange}
          />
        </>
      )}
    </div>
  );
}
