import React from "react";
import './CFooter.css';


export const CFooter = (props) => {
    let date = new Date();
    return(
        <div>
            <h5>
                Prog. JS, przykładowy serwis React. Dzisiaj mamy:
                {date.toLocaleDateString('pl-PL')}
                <br/>
                Stan pogody: {props.weather}, temperatura: {props.temp}
                <br/>
                {props.children}
            </h5>
        </div>
    );
};





// stara wersja zakomentowana
// function CFooter(){
//     let date = new Date();
//     return (
//         <div>
//             <h5>
//                 Prog. JS, przykładowy serwis React. Dzisiaj mamy: {date.toString()}
//             </h5>
//         </div>
//     );
// }

// NOWA WERSJA – FUNKCJA STRZAŁKOWA
//export const CFooter = () => {
//    let date = new Date();
  //  return(
    //    <div>
      //      <h5>
        //        Prog. JS, przykładowy serwis React. Dzisiaj mamy: {" "}
          //      {date.toString()}{ " " }
            //</h5>
        //</div>
    //);
//}

// export default CFooter;


