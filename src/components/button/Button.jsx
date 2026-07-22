import rightArrow from "/src/assets/Group 212.png"

export default function Button( {children, className, ...rest} ){
   return (
        <div className={className} {...rest}>
            <span>{children}</span> 
            <div className="w-[10px] h-[10px]">
                <img className="w-full h-full" src={rightArrow} alt="arrow" />
            </div>
        </div>
   )
}