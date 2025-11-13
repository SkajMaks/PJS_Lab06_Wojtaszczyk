import React from "react";

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
export const CFooter = () => {
    let date = new Date();
    return(
        <div>
            <h5>
                Prog. JS, przykładowy serwis React. Dzisiaj mamy: {" "}
                {date.toString()}{ " " }
            </h5>
        </div>
    );
}

// export default CFooter;


