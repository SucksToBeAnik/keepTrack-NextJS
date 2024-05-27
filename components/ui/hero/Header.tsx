interface HeaderProps {
  children: React.ReactNode
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <h1 className="text-4xl md:text-5xl xl:text-6xl w-3/4 font-black text-dark mb-2 tracking-wide">
      {children}
    </h1>
  );
  
};

export default Header;
