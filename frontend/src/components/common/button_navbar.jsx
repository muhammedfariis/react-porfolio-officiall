
function NavButton({onClick , text}){
  return(
    <button
       onClick={onClick}
       className="bg-blue-950 hover:bg-transparent hover:border-2  hover:border-white 
       h-12 w-30 text-sm hover:text-gray-300 text-white rounded-2xl 
       "
    >
     {text}

    </button>
  )
 

}

export default NavButton
