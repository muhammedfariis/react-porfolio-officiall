import { useEffect } from "react";
import { CheckCircle, XCircle, AlertTriangle, Info } from "lucide-react";

const icons = {
  success: <CheckCircle className="w-6 h-6" />,
  error: <XCircle className="w-6 h-6" />,
  warning: <AlertTriangle className="w-6 h-6" />,
  info: <Info className="w-6 h-6" />,
};

const colors = {
  success: "bg-green-500/20 border-green-400 text-green-200",
  error: "bg-red-500/20 border-red-400 text-red-200",
  warning: "bg-yellow-500/20 border-yellow-400 text-yellow-200",
  info: "bg-blue-500/20 border-blue-400 text-blue-200",
};
const AlertBox = ({
  type = "info",
  message = "Message",
  show,
  onClose,
   duration = 3000,

})=>{
   
    if(!show) return
    
    useEffect(()=>{

    const timer = setTimeout(()=>{
       onClose()
    },duration)

    return ()=>clearTimeout(timer)

    },[show , duration , onClose])

    
  return (
    <div className="flex justify-center items-center top-6 right-6 z-50 animate-slideIn">
      <div
        className={`flex items-center  gap-3 px-4 py-3 rounded-xl border backdrop-blur-xl shadow-2xl ${colors[type]}`}
      >
        {icons[type]}
        <p className="font-medium">{message}</p>

        <button
          onClick={onClose}
          className="ml-2 text-lg opacity-70 hover:opacity-100"
        >
          ✕
        </button>
      </div>
    </div>
  );

}

export default AlertBox