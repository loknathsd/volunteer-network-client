 import React from 'react';
 import Event from '../Event/Event'


 const events = [
     {
         name : 'Child Support',
         image : 'childSupport.png'
     },
     {
        name : 'Refuse Shelter',
        image : 'refuseShelter.png'
    },
    {
        name : 'Food Charity',
        image : 'foodCharity.png'
    },
    {
        name:'Host a clothing swap',
        image:'clothSwap.png'
    },
    {
        name:'Host a river clean-up',
        image:'riverClean.png'
    },
    {
        name:'Clean water for children',
        image:'cleanWater.png'
    },
    {
        name:'Good Education',
        image:'goodEducation.png'
    },
    {
        name:'New books for children',
        image:'newBooks.png'
    },
    {
        name:'Host a study group',
        image:'studyGroup.png'
    },
    {
        name:'Build birdhouses for your neighbors',
        image:'birdHouse.png'
    },
    {
        name:'Organize books at the library',
        image:'libraryBooks.png'
    },  {
        name:'Give a seminar on driving safety',
        image:'driveSafety.png'
    }
 ]
 
 const Home = () => {
     return (
         <div className="row ">
             {
                 events.map(event=><Event event={event}></Event>)
             }
         </div>
     );
 };
 
 export default Home;