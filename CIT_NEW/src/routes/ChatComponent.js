import React, { useState, useEffect } from "react";
import AudioOnLoad from "../AudioOnLoad";

const ChatComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [speechSupported, setSpeechSupported] = useState(false);

  useEffect(() => {
    // Check if speech synthesis is supported by the browser


  }, []);

  useEffect(() => {
    // Cleanup speech synthesis on component unmount
    return () => {
      if (speechSupported) {
        window.speechSynthesis.cancel();
      }
    };
  }, [speechSupported]);

  const qaPairs = [
    {
      question: "branch",
      answer:
        "We offer a variety of undergraduate and programs including Mechanical Engineering, Civil Engineering, Electrical Engineering, Electronics Engineering, Computer Science, and more.",
    },
    {
      question: "Programs",
      answer:
        "We offer a variety of undergraduate and programs including Mechanical Engineering, Civil Engineering, Electrical Engineering, Electronics Engineering, Computer Science, and more.",
    },
    {
      question: "admission " ||"process",
      answer:
        "The admission process involves submitting an online application, providing required documents, and passing an entrance exam or interview. Detailed information can be found on our Admissions page.",
    },
    {
      question: "fees",
      answer:
        "Tuition fees vary depending on the program. Please visit our Fees and Funding page for detailed information.",
    },
    {
      question: "scholarships",
      answer:
        "Yes, we offer a variety of scholarships based on merit and financial need. Check our Scholarships page for more details.",
    },
    {
      question: "academic calendar",
      answer:
        "The academic calendar is available on our Academic Calendar page, which includes important dates and deadlines for the academic year.",
    },
    {
      question: "contact" || "contact number",
      answer: "You can contact us at +91 98298 04013 for any inquiries.",
    },
    {
      question: "courses" || "course",
      answer:
        "Our courses cover a wide range of subjects including engineering, mathematics, physics, and more. Explore our Courses page for detailed information.",
    },
    {
      question: "location" ,
      answer:
        "GQFW+72X, Danvav Village, Mount Abu Road, Aburoad, MDR 49, Rajasthan.",
    },
    {
      question: "facilities",
      answer:
        "Our campus offers state-of-the-art facilities including laboratories, libraries, sports complexes, and more to support your academic journey.",
    },
    { question: "hello" || "hi", answer: getGreeting() },
    {
      question: "vision",
      answer:
        "Our vision is to empower students through quality education, innovative research, and community engagement to address global challenges.",
    },
    {
      question: "notice",
      answer:
        "Please visit our Notice Board page for the latest updates and announcements.",
    },
  ];

  function getGreeting() {
    const currentTime = new Date().getHours();
    if (currentTime < 12) {
      return "Good morning! Welcome to CIT.";
    } else if (currentTime < 18) {
      return "Good afternoon! Welcome to CIT.";
    } else {
      return "Good evening! Welcome to CIT.";
    }
  }

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if(!isOpen){
      sendInitialMessage();
      setSpeechSupported("speechSynthesis" in window);

    }
    
  };

  const sendInitialMessage = () => {
    const initialMessage = "Hey! How can I help you today?";
    setMessages([{ text: initialMessage, sender: "bot" }]);
    speakResponse(initialMessage);
  };

  const handleSend = () => {
    if (input.trim() !== "") {
      setMessages([...messages, { text: input, sender: "user" }]);

      // Check if the input contains any relevant words
      const matchedQA = qaPairs.find((qa) =>
        qa.question
          .split("||")
          .some((word) =>
            input.toLowerCase().includes(word.toLowerCase().trim())
          )
      );

      const response =
        matchedQA?.answer ||
        "I'm sorry, I don't have the information you're looking for.";

      speakResponse(response); // Speak the response

      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: response, sender: "bot" },
        ]);
      }, 500);

      setInput("");
    }
  };

  const speakResponse = (text) => {
    if (speechSupported) {
      const utterance = new SpeechSynthesisUtterance(text);

      // Optional: Select a female voice (if available)
      const voices = window.speechSynthesis.getVoices();
      const femaleVoice = voices.find(
        (voice) =>
          voice.lang === "en-US" && voice.name === "Google US English Female"
      ); // Adjust voice name and language tag as per availability

      if (femaleVoice) {
        utterance.voice = femaleVoice;
      } else {
        console.warn("Female voice not found, using default voice.");
      }

      window.speechSynthesis.speak(utterance);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    
    <div className="App">
      
      <div className="fixed bottom-4 right-4 z-50">
        <button
          className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-lg"
          onClick={toggleChat}
        >
          {isOpen ? "✖️" : "💬"}
        </button>
        {isOpen && (
          <div className="mt-2">
            <div className="flex flex-col h-96 w-80 border border-gray-300 rounded-tl-lg shadow-lg bg-white">
              <div className="flex-grow p-4 overflow-auto bg-gray-100">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      message.sender === "user"
                        ? "justify-end"
                        : "justify-start"
                    } mb-4`}
                  >
                    <div
                      className={`p-3 rounded-lg ${
                        message.sender === "user"
                          ? "bg-blue-500 text-white"
                          : "bg-gray-300 text-black"
                      } max-w-xs`}
                    >
                      {message.text}
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 bg-white">
                <input
                  type="text"
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Type a message..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
                <button
                  className="mt-2 w-full p-2 bg-blue-500 text-white rounded-lg"
                  onClick={handleSend}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatComponent;
