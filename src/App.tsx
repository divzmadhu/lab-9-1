
import AlertBox from './components/AlertBox/AlertBox';

import "./App.css";

// For Testing optional props
//Option 1: Use an array of sample data

// const alerts = [
//   {
//     id: 1,
//     type: "success" as const,
//     message: "Saved successfully!",
//   },
//   {
//     id: 2,
//     type: "error" as const,
//     message: "Something went wrong!",
//   },
//   {
//     id: 3,
//     type: "warning" as const,
//     message: "Please check your input!",
//   },
// ];

export default function App(){
  return(
    <AlertBox
    type ="success"
    message ="Saved Successfully"
     onClose = {()=>alert("Alert closed!")}
     >
    <strong>Your changes have been saved</strong>
   
   
    </AlertBox>
    

    
   
  );
}

 