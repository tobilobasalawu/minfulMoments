const Buttons = ({ variant = "primary", size = "large", onClick, children }) => {
  const buttonStyles = {
    primary: {
      large: "w-[160px] h-[40px] bg-[#1814E4] text-background text-[14px] rounded-[4px]",
      small: "w-[103px] h-[40px] bg-[#1814E4] text-background text-[14px] rounded-[4px]"
    },
    secondary: {
      large: "w-[160px] h-[40px] border border-[#000000] text-[#000000] text-[14px] rounded-[4px]",
      small: "w-[103px] h-[40px] border border-[#000000] text-[#000000] text-[14px] rounded-[4px]"
    }
  };

  return (
    <button 
      className={buttonStyles[variant][size]}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Buttons;