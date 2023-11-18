import React from 'react'
import Card from './Card'

function Workshop() {

    let workshopData = [
        {
            id: 1,
            img: "./assets/HSSE/Asset 3.png",
            desc: "Systems, Processes & Assurance – Be Good not Lucky"
        },
        {
            id: 2,
            img: "./assets/HSSE/Asset 4.png",
            desc: "The Leaders Role in Delivering Success – What Type of Leader is Needed"
        },
        {
            id: 3,
            img: "./assets/HSSE/Asset 5.png",
            desc: "Human Reliability – Why Things Go Wrong and What Can We Do?"
        },
        {
            id: 4,
            img: "./assets/HSSE/Asset 6.png",
            desc: "Creating a Learning Culture –The Way We Choose Do Things Around Here"
        },
    ]

  return (
    <div className='workshop_container' >
        <div>
            <h2 style={{textAlign: "center" , marginBottom: "60px"}}> 
                Workshop
            </h2>
        </div>
        <div className='cards'> 
            {workshopData.map((data) => {
                return(

                    <Card id={data.id}  desc={data.desc} image={data.img}/>
                )
            })}
            
            
            
        </div>
        
    </div>
    
  )
}

export default Workshop