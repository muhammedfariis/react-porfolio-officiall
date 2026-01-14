
function NavButton({onClick , text}){
  return(
    <button
       onClick={onClick}
       className="bg-blue-950 hover:bg-transparent hover:border-2  hover:border-blue-950 
       h-8 w-20 text-sm hover:text-blue-950 text-white rounded-2xl
       "
    >
     {text}

    </button>
  )
 

}

export default NavButton
