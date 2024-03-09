import "./Button.css";

interface BtnProps {
  className: string;
  children: string;
  handleOnClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type: "submit" | "reset" | "button";
}

const Button = ({ className, children, handleOnClick, type }: BtnProps) => {
  return (
    <>
      <button className={className} onClick={handleOnClick} type={type}>
        {children}
      </button>
    </>
  );
};

export default Button;
