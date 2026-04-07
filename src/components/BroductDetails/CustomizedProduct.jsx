import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

const CustomizedProduct = ({count , setCount ,setSugar ,setIce ,setMilk ,sugar ,ice ,milk , smallScreen }) => {
    
  return (<div className="Customized">
          <h2 className={`text-color1 text-xl font-bold ${smallScreen ? 'mt-0' : 'mt-5 '}`}>Customized recipe</h2>
          <div className="w-full h-1 bg-hover opacity-25 rounded-2xl mt-2"></div>

          <div className={`Vanilla flex items-center justify-between mt-5 border-2 border-gray-300 rounded-lg px-2 ${smallScreen ? 'py-1.5' : 'py-2'} relative`}>
            <label className="absolute -top-3 left-3 bg-white px-2 text-sm text-gray-500 font-medium z-10">Ice Options</label>
            {count > 1 && <label 
              className="absolute -top-3 right-3 bg-white px-2 py-0 text-sm text-colorGreen font-medium z-10"
            >
              Customize
            </label>}
            <div className="text">
              <h3 className="text-color1">Ice Cubes count</h3>
            </div>
            <div className={`countVanilla flex items-center  ${smallScreen ? 'gap-2' : 'gap-3'} `}>
              <button disabled={count === 0} className={`minuesVanilla  ${smallScreen ? 'w-5 h-5 text-sm' : 'w-6 h-6'}  bg-color1 flex items-center justify-center  
              rounded-full ${count === 1 ? 'opacity-50  cursor-default' : 'cursor-pointer '} `}
              onClick={() => setCount(count > 1 ? count - 1 : 1)}><FaMinus /></button>
              <span className="countVanillaNumber text-color1">{count}</span>
              <button className={`plusVanilla ${smallScreen ? 'w-5 h-5 text-sm' : 'w-6 h-6'} flex items-center justify-center bg-color1 cursor-pointer rounded-full`} onClick={() => setCount(count + 1)}><FaPlus /></button>
            </div>
          </div>

          <div className={`vanilla relative ${smallScreen ? 'mt-4' : 'mt-10'} `}> 
            <select 
              id="sugar-select" 
              name="sugar"
              value={sugar}
              onChange={(e) => {
                setSugar(e.target.value)
              }}
              className={`border-2 border-gray-300 rounded-lg px-2 ${smallScreen ? 'py-1' : 'py-2'} w-full  text-color1
                        focus:outline-none focus:ring-2 focus:ring-color1 focus:border-transparent duration-300 bg-white`}
            >
              <option value="" disabled className="bg-white text-base font-normal">Choose Sugar...</option>
              
              <option value="No" className=" bg-white text-base font-normal">No Sugar</option>
              <option value="Low" className=" bg-white text-base font-normal">Low Sugar</option>
              <option value="Medium" className=" bg-colorGray text-color1 text-base font-normal">Medium Sugar</option>
              <option value="High" className=" bg-white text-base font-normal">Extra Sugar</option>
            </select>
            

            <label 
              htmlFor="sugar-select" 
              className="absolute -top-3 left-3 bg-white px-2 text-sm text-gray-500 font-medium z-10"
            >
              Sugar Level
            </label>

            {sugar !== "Medium" && <label 
              htmlFor="sugar-select" 
              className="absolute -top-3 right-3 bg-white px-2 text-sm text-colorGreen font-medium z-10"
            >
              Customize
            </label>}
          </div>

          <div className={`vanilla relative ${smallScreen ? 'mt-4' : 'mt-10'} `}> 
            <select 
              id="ice-select" 
              name="ice"
            value= {ice}
              onChange={(e) => {
                setIce(e.target.value)
              }
            }
              defaultValue="Medium" 
              className={`border-2 border-gray-300 rounded-lg px-2 ${smallScreen ? 'py-1' : 'py-2'} w-full  text-color1
                        focus:outline-none focus:ring-2 focus:ring-color1 focus:border-transparent duration-300 bg-white`}
            >
              <option value="" disabled className="bg-white text-base font-normal">Choose Ice Level...</option>
              
              <option value="Low" className=" bg-white text-base font-normal">Low Ice</option>
              <option value="Medium" className=" bg-colorGray text-color1 text-base font-normal">Medium Ice</option>
              <option value="High" className=" bg-white text-base font-normal">Extra Ice</option>
            </select>
            

            <label 
              htmlFor="sugar-select" 
              className="absolute -top-3 left-3 bg-white px-2 text-sm text-gray-500 font-medium z-10"
            >
              Ice Level
            </label>

            {ice !== "Medium" && <label 
              htmlFor="ice-select" 
              className="absolute -top-3 right-3 bg-white px-2 text-sm text-colorGreen font-medium z-10"
            >
              Customize
            </label>}
          </div>

          <div className={`vanilla relative ${smallScreen ? 'mt-4' : 'mt-10'} `}> 
            <select 
              id="milk-select" 
              name="milk"
              value = {milk}
              onChange={
                (e) => {
                  setMilk(e.target.value);
                }
              }
              defaultValue="Skimmed" 
              className={`border-2 border-gray-300 rounded-lg px-2 ${smallScreen ? 'py-1' : 'py-2'} w-full  text-color1
                        focus:outline-none focus:ring-2 focus:ring-color1 focus:border-transparent bg-white`}
            >
              <option value="" disabled className="text-base font-normal bg-white">Choose a flavor...</option>
              
              <option value="No" className="bg-white text-base font-normal">No Milk</option>
              <option value="Skimmed" className="bg-colorGray text-color1 text-base font-normal">Skimmed Milk</option>
              <option value="Full" className="bg-white text-base font-normal">Full Fat Milk</option>
              <option value="Almond" className="bg-white text-base font-normal">Almond Milk</option>
              <option value="Oat" className="bg-white text-base font-normal">Oat Milk</option>
            </select>

            <label 
              htmlFor="milk-select" 
              className="absolute -top-3 left-3 bg-white px-2 text-sm text-gray-500 font-medium z-10"
            >
              Milk Type
            </label>

            {milk !== "Skimmed" && <label 
              htmlFor="milk-select" 
              className="absolute -top-3 right-3 bg-white px-2 text-sm text-colorGreen font-medium z-10"
            >
              Customize
            </label>}
          </div>
          
        </div>
  )
}

export default CustomizedProduct