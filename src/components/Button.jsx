

export const Button = ({
    label,
    icon,
    width = "w-auto",
    fontSize = "text-base",
    background = "bg-blue-600",
    hoverBackground = "hover:bg-blue-700",
    textColor = "text-white",
    hoverTextColor = "hover:text-white",
    border = "border",
    padding = "px-4 py-2",
    borderColor = "border-transparent",
    
    
    onClick,
}) => {
  return (
    <button className={`
      flex
      items-center
    rounded-lg 
    transition-all 
    duration-300 ease-in-out 
    ${width} 
    ${fontSize} 
    ${background} 
    ${hoverBackground} 
    ${textColor} 
    ${hoverTextColor} 
    ${border} 
    ${padding}
    ${borderColor}
    ${onclick}

    `}
    >
     {label}
     {icon}
    </button>
  )
}
