import { priceOptions } from "@/reusable/options";
import { AiOutlineClose } from "react-icons/ai"

const MobileOrderingTab = ({ open, closeOrdering, selectedOrdering, setSelectedOrdering  }) => {

    return (
        <div className={`${!open ? '-left-full' : 'left-0'} fixed w-screen h-screen bg-white top-0 bottom-0 transition-all transition-200`}>
            <div className="flex justify-between items-center p-6 border-b-2 border-cadastra-gray ">
                <span className="text-2xl text-cadastra-gray-dark">ORDENAR</span>
                <button onClick={closeOrdering}><AiOutlineClose className="text-2xl" /></button>
            </div>
            <div>
            {priceOptions.map((opt) => (
                <div key={opt.value} className={`flex p-6 text-lg ${selectedOrdering === opt.value ? 'bg-cadastra-orange text-white' : 'bg-white text-black'}`} onClick={() => {
                    setSelectedOrdering(selectedOrdering === opt.value ? null : opt.value)
                    closeOrdering()
                }}>
                    {opt.label}
                </div>
            ))} 
            </div>
        </div>
    )
}
export default MobileOrderingTab