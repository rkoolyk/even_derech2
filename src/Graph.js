
import React from 'react'
import { Chart } from 'react-charts'
import './Graph.css'

export function Graph() {
   const data = React.useMemo(
       () => [
          {
             label: 'Series 1',
             data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
          },
          {
             label: 'Series 2',
             data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]

          }
       ],
       []
   )

   const axes = React.useMemo(
       () => [
          { primary: true, type: 'linear', position: 'bottom'},
          { type: 'linear', position: 'left'}
       ],
       []
   )

       // A react-chart hyper-responsively and continuously fills the available
       // space of its parent element automatically
       return(
           <div className="Graph"
               style={{
                   width: '800px',
                   height: '250px'
               }}
           >
               <Chart className="graph" data={data} axes={axes} />
           </div>
       );

}

export default Graph;



