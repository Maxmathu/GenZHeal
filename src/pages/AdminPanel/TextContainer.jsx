// import React from 'react';

// import onlineIcon from '../../images/onlineIcon.png';

// import './TextContainer.css';

// const TextContainer = ({ users }) => (
//   <div className="textContainer">
//     <div>
//       {/* <h1>Realtime Chat Application <span role="img" aria-label="emoji">💬</span></h1>
//       <h2>Created with React, Express, Node and Socket.IO <span role="img" aria-label="emoji">❤️</span></h2>
//       <h2>Try it out right now! <span role="img" aria-label="emoji">⬅️</span></h2> */}
//     </div>
//     {
//       users
//         ? (
//           <div>
//             <h1>People currently chatting:</h1>
//             <div className="activeContainer">
//               <h2>
//                 {users.map(({name}) => (
//                   <div key={name} className="activeItem">
//                     {name}
//                     <img alt="Online Icon" src={onlineIcon}/>
//                   </div>
//                 ))}
//               </h2>
//             </div>
//           </div>
//         )
//         : null
//     }
//   </div>
// );

// export default TextContainer;
import React from 'react';
import onlineIcon from '../../images/onlineIcon.png';
import './TextContainer.css';

const TextContainer = ({ users, onContactSelect, selectedContact }) => (
  <div className="textContainer">
    <div>
      <h1>Available Contacts:</h1>
      <div className="activeContainer">
        <h2>
          {users.map(({ name }) => (
            <div
              key={name}
              className={`activeItem ${selectedContact === name ? 'selected' : ''}`}
              onClick={() => onContactSelect(name)}
            >
              {name}
              <img alt="Online Icon" src={onlineIcon} />
            </div>
          ))}
        </h2>
      </div>
    </div>
  </div>
);

export default TextContainer;
