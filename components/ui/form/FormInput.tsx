import { IconType } from "react-icons";

interface FormInputProps {
    name: string,
    defaultValue?: string,
    type: string,
    icon: JSX.Element,
    placeholder: string
}

const FormInput:React.FC<FormInputProps> = ({name,icon, type, placeholder, defaultValue})=> {
    return (
        <label className="input input-bordered input-sm flex items-center gap-2 p-6">
            {icon}
            <input defaultValue={defaultValue} type={type} name={name} placeholder={placeholder} className="grow" />
        </label>
    )
}

export default FormInput;
