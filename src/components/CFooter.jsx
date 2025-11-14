import React from "react";
import './CFooter.css';


export const CFooter = () => {
  let date = new Date();

  return React.createElement(
    "div",
    { className: "footerDivClass" },
    React.createElement(
      "h5",
      { id: "footerText", className: "footerTextClass" },
      "Prog. JS, przykładowy serwis React. Dzisiaj mamy: " +
        date.toLocaleDateString("pl-PL")
    )
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


