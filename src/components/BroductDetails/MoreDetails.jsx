

const MoreDetails = ({ product }) => {
  return (
    <div className="ProductDetails md:pt-10 main-container flex lg:gap-40 gap-10 mb-20 md:flex-row flex-col">
      <div className="box1 flex-1">
        <div className="ingredients">
          <h2 className="text-color1 text-xl font-bold mt-5">Ingredients</h2>
          <div className="w-full h-1 bg-hover opacity-25 rounded-2xl mt-2 mb-5"></div>
          <div className="text-[#202020] mt-5 text-[14.5px] font-medium"><p 
              className="text-gray-600 text-sm" 
              dangerouslySetInnerHTML={{ __html: product.allergens }} 
            />
          </div>
        </div>
        <div className="allergens">
          <h2 className="text-color1 text-xl font-bold mt-5">Allergens</h2>
          <div className="w-full h-1 bg-hover opacity-25 rounded-2xl mt-2 mb-5"></div>
          <p className="text-black mt-5">Not available for this item</p>
          <p className="text-maingray mt-5">We cannot guarantee that any unpackaged products served in our stores are allergen-free because we use shared equipment to store,
            prepare, and serve them. Customers with allergies can find ingredient information for products on the labels
            of our packaged products or online at Starbucks.com/menu.
          </p>
        </div>
      </div>
      <div className="box2 flex-1">
          <h2 className="text-color1 text-xl font-bold mt-5">Nutrition</h2>
          <div className="w-full h-1 bg-hover opacity-25 rounded-2xl mt-2 mb-5"></div>
            <div className="text-black flex justify-between items-center py-1"><p className="">Calories {product.nutrition.calories}</p> <p>Calories from Fat {product.nutrition.fat}</p></div>
            <hr className="text-maingray opacity-30"/>
            <div className="text-black flex justify-between items-center py-1"><p>Total Fat {product.nutrition.fat} g</p> <p>{product.nutrition['fat-content']}</p></div>
            <hr className="text-maingray opacity-30"/>
            <div className="text-maingray pl-2 flex justify-between items-center py-1"><p>Saturated Fat 13 g</p> <p>65%</p></div>
            <hr className="text-maingray opacity-30"/>
            <div className="text-maingray pl-2 py-1"><p>Trans Fat 0.5 g</p></div>
            <hr className="text-maingray opacity-30"/>
            <div className="text-black flex justify-between items-center py-1"><p>Cholesterol {product.nutrition.cholesterol}</p> <p>18%</p></div>
            <hr className="text-maingray opacity-30"/>
            <div className="text-black flex justify-between items-center py-1"><p>Total Carbohydrates {product.nutrition.carbohydrates} g</p> <p>22%</p></div>
            <hr className="text-maingray opacity-30"/>
            <div className="text-maingray pl-2 py-1 flex justify-between items-center"><p>Dietary Fiber {product.nutrition.fiber} g</p> <p>7%</p></div>
            <hr className="text-maingray opacity-30"/>
            <div className="text-maingray pl-2 py-1"><p>Sugars 57 g</p></div>
            <hr className="text-maingray opacity-30"/>
            <p className="text-black py-1">Protein {product.nutrition.protein} g</p>
            <hr className="text-maingray opacity-30"/>
            <p className="text-black py-1">Caffeine {product.nutrition.caffeine}</p>
            <hr className="text-maingray opacity-30"/><br />
            <p className="text-maingray">2,000 calories a day is used for general nutrition advice,<br /> but calorie needs vary. <br /><br />
              ** Caffeine is an approximate value.↩<br /><br />
              Nutrition information is calculated based on our <br />standard recipes. Because our products may be<br /> customized, exact information may vary.
            </p>
      </div>
    </div>
  )
}

export default MoreDetails