"use client";
import { useFormStatus } from "react-dom";
import { GoIssueClosed } from "react-icons/go";

interface FormSubmitButtonProps {
  title: string;
}

const FormSubmitButton: React.FC<FormSubmitButtonProps> = ({ title }) => {
  const { pending: isLoading } = useFormStatus();

  return (
    <button className="btn btn-outline btn-ghost flex justify-center items-center btn-primary shadow-md">
      <span>{title}</span>
      {isLoading ? (
        <span className="loading loading-dots loading-sm"></span>
      ) : (
        <GoIssueClosed className="h-5 w-5" />
      )}
    </button>
  );
};

export default FormSubmitButton;
