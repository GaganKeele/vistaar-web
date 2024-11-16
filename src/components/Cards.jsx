import React from 'react';
// import './App.css'; // Assuming CSS is in App.css file

const courses = [
  { title: 'CODE DEBUGGER', time: '10:00am', venue: 'VCET', coordinator: 'Vilas D' },
  { title: 'QUIZ QUEST', time: '10:00am', venue: 'VCET', coordinator: 'Vilas D' },
  { title: 'SLIDESCAPE', time: '10:00am', venue: 'VCET', coordinator: 'Vilas D' },
  { title: 'REEL MAKING', time: '10:00am', venue: 'VCET', coordinator: 'Vilas D' },
  { title: 'KALA NIRVANA', time: '10:00am', venue: 'Vishweshwaryya hall', coordinator: 'Vilas D' },
  { title: 'MIND MAZE', time: '10:00am', venue: '5AI', coordinator: 'Vilas D' },
  { title: 'KNOWLEDGE KNOCKOUT', time: '10:00am', venue: '5AI', coordinator: 'Vilas D' },
  { title: 'BANG JAM', time: '10:00am', venue: 'VCET', coordinator: 'Vilas D' },
  { title: 'ARTELLIGENCE', time: '10:00am', venue: '109b lab', coordinator: 'Vilas D' },
  { title: 'TREASURE HUNT', time: '10:00am', venue: 'VCET campus', coordinator: 'Vilas D' },
  { title: 'BUILD A BOT', time: '10:00am', venue: 'Homi J Baba hall', coordinator: 'Vilas D' },
  { title: 'SCITRI BATTLE', time: '10:00am', venue: 'VCET', coordinator: 'Vilas D' },
  { title: 'DUMB CHARADES', time: '10:00am', venue: 'Sri Rama Sabha Bhavana', coordinator: 'Vilas D' },
  { title: 'COLLAGE MAKING', time: '10:00am', venue: 'Gym equipment area', coordinator: 'Vilas D' },
  { title: 'MAD ADS', time: '10:00am', venue: 'Vishweshwarayya Hall', coordinator: 'Vilas D' }
];

function Cards() {
  return (
    <div className="card-container">
      {courses.map((course, index) => (
      <a
      href={`/${course.title.replace(/\s+/g, '_').toUpperCase()}.html`}
      key={index}
      className="cards"
      style={{ textDecoration: 'none', color: 'white' }}
    >
      <div className="card-name">
        <h2>{course.title}</h2>
        <p>Time: {course.time}</p>
        <p>Venue: {course.venue}</p>
        <p>Coordinator: {course.coordinator}</p>
      </div>
    </a>
    
      ))}
    </div>
  );
}


export default Cards; 
