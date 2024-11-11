import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import Sidebar from "src/components/Sidebar"

const LayoutAdmin = () => {

    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    console.log("Token:",token);

    
    
    useEffect (()=>{
        if(token === null){
            console.log("Khong co token");
            
             navigate('/login')
        }else{
            console.log("Có token");
            
        }
    },[token,navigate])
    return (
        <>
          
                
                <Sidebar >
                <Outlet />
                </Sidebar>
            
        </>

    )
}

export default LayoutAdmin

