import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function App() {

  return (
    <>
      <section className="container px-24 py-4">
        <div className="flex flex-col max-w-[370px] flex-wrap p-[16px] bg-[#081116]">
            <img src="/assets/images/AIR-FORCE-1-07.png" alt="" className="block max-h-[300px] mb-[16px] object-cover" />
            <div className="flex flex-col flex-wrap gap-[8px]">
                <h4 className="text-[20px] font-medium text-white">Nike Air Force &apos;07</h4>
                <span className="font-medium text-[#eaeaea] text-[14px]">Men&apos;s Shoe</span>
                <span className="font-medium text-white text-[20px]">Rp. 1.549.000</span>
            </div>
            <div className="mt-[16px]">
                <button className="inline-flex items-center justify-center gap-[8px] p-[16px] bg-[#6173E6]">
                  <FontAwesomeIcon icon={faCartShopping} className="mb-0 text-white"/>
                  <span className="text-white font-medium">Add to cart</span>
                </button>
            </div>
        </div>
      </section>
    </>
  )
}

export default App
