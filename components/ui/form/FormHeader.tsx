interface FormHeaderProps {
  children: React.ReactNode;
}

const FormHeader: React.FC<FormHeaderProps> = ({ children }) => {
  return (
    <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold text-dark mb-4 tracking-wide">
      {children}
    </h1>
  );
};

export default FormHeader;
