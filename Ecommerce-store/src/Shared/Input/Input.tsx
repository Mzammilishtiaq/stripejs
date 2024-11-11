import { ReactNode } from 'react'

export interface InputType {
    type: string;
    value: any;
    placeholder: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    InputClass: string;
    icon: ReactNode;
    iconClass: string;
    styleClass: any
}

function Input({
    type,
    value,
    placeholder,
    onChange,
    InputClass,
    icon,
    iconClass,
    // styleClass
}: InputType) {
    return (
        <div className={'full flex bg-gray-200'}>
            <div className={iconClass}>{icon}</div>
            <input type={type} value={value} placeholder={placeholder} onChange={onChange} className={InputClass} />
        </div>
    )
}

export default Input
