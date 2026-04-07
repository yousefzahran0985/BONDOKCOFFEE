
export default function Mybutton({title}){
  return(
      <button className="
      px-6.75 py-2 bg-color2 text-[15px] cursor-pointer hover:bg-hover duration-300
      lg:text-[19px] lg:px-8.75 lg:py-2.5 
      md:self-start 
      ">
        {title}
      </button>
  )
}