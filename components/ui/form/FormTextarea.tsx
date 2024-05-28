interface FormTextareaProps {
  name: string;
  defaultValue?: string;
  placeholder: string;
}

const FormTextarea: React.FC<FormTextareaProps> = ({ name, placeholder, defaultValue }) => {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      defaultValue={defaultValue}
      className="textarea textarea-bordered w-full"
    ></textarea>
  );
};

export default FormTextarea;
