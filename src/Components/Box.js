import React ,{useState,useEffect} from'react'
import icon1 from "../assets/icon1.PNG"
import icon2 from "../assets/icon2.PNG"
import icon3 from "../assets/icon3.PNG"
import icon4 from "../assets/icon4.PNG"

function Box() {

    // for iconbox1
    const [popCard, setPopCard] = useState("hidden");
    const [fade, setFade] = useState(true);
   //for icon  box 2
    const [popCard1, setPopCard1] = useState("hidden");
    const [fade1, setFade1] = useState(true);
    // for icon box4
    const [popCard2, setPopCard2] = useState("hidden");
    const [fade2, setFade2] = useState(true);
    
    
    // by clicking it will show the message Ward-2A
    const handleWardClick = () => {
        setPopCard("inline-block");
        setFade(true);
      };

    // by double click it will show the message premier-league 
      const handleRoomClick = () => {
        setPopCard1("inline-block");
        setFade1(true);
      };
    // by click it will show the message payment
      const handlePaymentClick = () => {
        setPopCard2("inline-block");
        setFade2(true);
      };
      
      // for close the box
      const handleXClick = () => {
        setPopCard("hidden");
        setFade(false);
      };
      //for close the box
      const handleClick = () => {
        setPopCard1("hidden");
        setFade1(false);
      };
      //for close the box
      const handlePClick = () => {
        setPopCard2("hidden");
        setFade2(false);
      };

      const [color, setColor] = useState("yellow");

      const click = color => {
        setColor(color);
      };
    

      
  return (
    
       <>     
   <div className='flex justify-center align-items mt-8'>
         {/* icon box1 */}
          <div className='box-border h-48 w-48 p-4 bg-indigo-400 rounded-xl mx-6'>

                <div className='flex flex-col justify-center items-center'>
                
                    <img className='h-16 w-12' src={icon1} alt="" />
                    <div className=''>
                     
                    <p className='text-white text-xl mt-4 cursor-pointer' onClick={handleWardClick}>Ward</p>
                     
                    </div>
                </div>
                
            </div>
       
  
           {/* icon box-2    */}
            <div className='box-border h-48 w-48 p-4 bg-pink-400 rounded-xl mx-6'>
                <div className='flex flex-col justify-center items-center'>
                
                    <img className='h-16 w-12' src={icon2} alt="" />
                    <p className='text-white text-xl mt-4 cursor-pointer' onDoubleClick={ handleRoomClick }>Room</p>
                </div>
                
            </div>
       
               {/* icon box 3 */}
            <div className='box-border h-48 w-48 p-4 rounded-xl mx-6 bg-yellow-400 cursor-pointer' onClick={() => {click("blue")}}
 >
                <div className='flex flex-col justify-center items-center'>
                
                    <img className='h-16 w-12' src={icon3} alt="" /> 
                    <p className='text-white text-xl mt-4'>Bed Id</p>
                </div>
                
            </div>
       

          {/* icon box-4 */}
            <div className='box-border h-48 w-48 p-4 bg-green-400 rounded-xl mx-6'>
                <div className='flex flex-col justify-center items-center'>
                
                    <img className='h-16 w-12' src={icon4} alt="" />
                    <p className='text-white text-xl mt-4 cursor-pointer'onClick={handlePaymentClick}>Payment</p>
                </div>
                
            </div>
       

    </div>
   {/* out-put of clicking on first icon box */}
    <div className="p-10">
        <div
          className={
            popCard +
            " w-[30%] flex-col border my-10 pb-3 rounded-3xl shadow-lg transition duration-300 ease-in-out" +
            `${fade === true ? "opacity-100" : "opacity-0"}`
          }
        >
          <div className="flex justify-end">
            <button className="mt-2 mr-2 border p-2" onClick={handleXClick}>
              Close
            </button>
          </div>
          <div className="space-y-2 text-3xl text-center mt-5 mb-10 mx-5 text-red-500">
            <h1>Ward 2A</h1>
            
          </div>
        </div>
      </div>
      {/* output of icon box 2 */}
      <div className="p-10">
        <div
          className={
            popCard1 +
            " w-[30%] flex-col border my-2 ml-16 pb-3 rounded-3xl shadow-lg transition duration-300 ease-in-out" +
            `${fade1 === true ? "opacity-100" : "opacity-0"}`
          }
        >
          <div className="flex justify-end">
            <button className="mt-2 mr-2 border p-2" onClick={handleClick}>
              Close
            </button>
          </div>
          <div className="space-y-2 text-3xl text-center mt-5 mb-10 mx-5 text-red-500">
            <h1>Premier Single</h1>
            
          </div>
        </div>
      </div>
{/* output of iconbox4 */}
      <div className="p-10">
        <div
          className={
            popCard2 +
            " w-[30%] flex-col border my-2 ml-32 pb-3 rounded-3xl shadow-lg transition duration-300 ease-in-out" +
            `${fade2 === true ? "opacity-100" : "opacity-0"}`
          }
        >
          <div className="flex justify-end">
            <button className="mt-2 mr-2 border p-2" onClick={handlePClick}>
              Close
            </button>
          </div>
          <div className="space-y-2 text-3xl text-center mt-5 mb-10 mx-5 text-red-500">
            <h1>Payment</h1>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Box
