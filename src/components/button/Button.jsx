import rightArrow from "/src/assets/Group 212.png"

export default function Button( {children, className} ){
   return (
        <div className={className}>
            <span>{children}</span> 
            <div className="w-[10px] h-[10px]">
                <img className="w-full h-full" src={rightArrow} alt="arrow" />
            </div>
        </div>
   )
}