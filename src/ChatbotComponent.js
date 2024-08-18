// import React, { useState } from 'react'; // Import React and useState
// import './ChatbotComponent.css'; // Ensure this path is correct
// import { sendMessageToChatbot } from './utils/chatbot'; // Ensure this path is correct

// function ChatbotComponent() {
//   const [message, setMessage] = useState('');
//   const [chatHistory, setChatHistory] = useState([]);
//   const [isOpen, setIsOpen] = useState(false); // State to manage chat visibility
//   const [isTyping, setIsTyping] = useState(false); // State to manage typing status

//   const handleSendMessage = async () => {
//     if (message.trim()) {
//       setChatHistory(prev => [...prev, { user: message }]);
//       setMessage('');

//       const reply = await sendMessageToChatbot(message);
//       setChatHistory(prev => [...prev, { bot: reply }]);
//     }
//   };

//   const handleInputChange = (e) => {
//     setMessage(e.target.value);
//     setIsTyping(true);
//   };

//   const handleInputBlur = () => {
//     setIsTyping(false);
//   };

//   const toggleChat = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       {isOpen && (
//         <div className="chatbot-container">
//           <div className="chatbot-header">
//             Ask AI
//             <button onClick={toggleChat} className="chatbot-close-btn">X</button>
//           </div>
//           <div className="chatbot-history">
//             {chatHistory.map((entry, index) => (
//               <div key={index} className={`chatbot-message ${entry.user ? 'user' : 'bot'}`}>
//                 {entry.user || entry.bot}
//               </div>
//             ))}
//           </div>
//           <div className="chatbot-input">
//             <input
//               type="text"
//               value={message}
//               onChange={handleInputChange}
//               onBlur={handleInputBlur}
//               placeholder="Type your message..."
//             />
//             <button onClick={handleSendMessage}>Send</button>
//           </div>
//         </div>
//       )}
//       {!isTyping && !isOpen && (
//         <button onClick={toggleChat} className="chatbot-icon">
//           Chat
//         </button>
//       )}
//     </>
//   );
// }

// export default ChatbotComponent;

import React, { useEffect } from 'react';

const ChatbotComponent = () => {
  useEffect(() => {
    // Inject the chatbot configuration script
    const script1 = document.createElement('script');
    script1.innerHTML = `
      window.embeddedChatbotConfig = {
        chatbotId: "QanSfVJJwjFHI_TPuavuh",
        domain: "www.chatbase.co"
      }
    `;
    document.body.appendChild(script1);

    // Inject the chatbot embed script
    const script2 = document.createElement('script');
    script2.src = "https://www.chatbase.co/embed.min.js";
    script2.setAttribute('chatbotId', 'QanSfVJJwjFHI_TPuavuh');
    script2.setAttribute('domain', 'www.chatbase.co');
    script2.defer = true;
    document.body.appendChild(script2);

    // Clean up the scripts when the component is unmounted
    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return (
    <div>
      {/* You can place additional HTML or styling here if needed */}
      <div id="chatbot-container"></div>
    </div>
  );
};

export default ChatbotComponent;