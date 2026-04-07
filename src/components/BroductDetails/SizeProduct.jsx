export default function SizeProduct({ size, setSize ,smallScreen}) {
  const sizeOptions = [
    { 
      id: "small", 
      name: "Small", 
      volume: "236 ml", 
      bgSize: "22px" 
    },
    { 
      id: "medium", 
      name: "Medium", 
      volume: "354 ml", 
      bgSize: "27px" 
    },
    { 
      id: "large", 
      name: "Large", 
      volume: "473 ml", 
      bgSize: "30px" 
    },
    { 
      id: "extra-large", 
      name: "ExtraLarge", 
      volume: "591 ml", 
      bgSize: "35px" 
    }
  ];

  return (
    <div className="product-details ">
      <h2 className="text-color1 text-xl font-bold mt-5">Size options</h2>
      <div className="h-1 bg-hover opacity-25 rounded-2xl mt-2 mb-5"></div>
      <div className="flex lg:gap-7 gap-4 justify-center items-start">
        {sizeOptions.map((option) => (
          <div key={option.id} className="flex flex-col items-center gap-">
            <input 
              type="radio" 
              name="size" 
              id={option.id} 
              value={option.id} 
              className="peer hidden" 
              checked={option.name === size}
              onChange={() => setSize(option.name)}
            />
            
            <label 
              htmlFor={option.id}
              style={{ backgroundSize: smallScreen  ? `${parseInt(option.bgSize) - 3}px` : option.bgSize }}

              className={` ${smallScreen ? 'w-14 h-14' : 'w-17 h-17'} flex items-center justify-center rounded-full border-2 border-gray-300 cursor-pointer transition
                        peer-checked:border-color1
                        bg-[url('https://www.starbucks.com/app-assets/55e7819f7cf8e1959ec3.svg')] 
                        peer-checked:bg-[url('https://www.starbucks.com/app-assets/04342268ae304f7757dd.svg')] peer-checked:bg-hoverGreenboild
                        bg-no-repeat bg-center`}
            >
            </label>

            <div className="text-center">
              <p className="text-sm font-medium text-gray-800">{option.name}</p>
              <p className="text-sm  text-gray-500">{option.volume}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}