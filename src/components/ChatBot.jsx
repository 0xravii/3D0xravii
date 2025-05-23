import React, { useState, useEffect, useRef } from 'react';
import { 
  FaLinkedin, 
  FaGithub, 
  FaInstagram, 
  FaTwitter, 
  FaPaperPlane, 
  FaFileDownload, 
  FaCalendarCheck,
  FaTimesCircle,
  FaWindowMinimize,
  FaUserCircle
} from 'react-icons/fa';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [category, setCategory] = useState('general');
  const [showDetails, setShowDetails] = useState(false);
  const [feedbackRating, setFeedbackRating] = useState(null);
  const [conversationHistory, setConversationHistory] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showHistory, setShowHistory] = useState(false);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Categories for better organization
  const categories = [
    { id: 'general', name: 'General' },
    { id: 'experience', name: 'Experience' },
    { id: 'skills', name: 'Skills' },
    { id: 'projects', name: 'Projects' },
    { id: 'contact', name: 'Contact' }
  ];

  // Expanded suggested questions by category
  const suggestedQuestions = {
    general: [
      "👋 Who are you?",
      "🎓 What's your background?",
      "📄 Show me your resume",
      "🌱 What are your future goals?"
    ],
    experience: [
      "💼 Tell me about your experience",
      "🔍 What do you do at Symbiosys Technologies?",
      "👥 Tell me about the Resethacker community",
      "🏢 What companies have you worked with?"
    ],
    skills: [
      "💪 What are your strongest skills?",
      "🔒 What security tools do you use?",
      "📊 Rate your technical skills",
      "🧠 What soft skills do you have?"
    ],
    projects: [
      "🚀 What projects have you worked on?",
      "🔐 Tell me about a security project",
      "🌐 Any open source contributions?",
      "🏆 What was your biggest achievement?"
    ],
    contact: [
      "📱 How can I contact you?",
      "📆 Can I schedule a meeting?",
      "🤝 I'd like to collaborate",
      "💬 Are you open to job opportunities?"
    ]
  };

  // Enhanced bot responses
  const botResponses = {
    "who are you": "👋 Hi! I'm Ravi, a 🔒 Security Researcher, 📝 Smart Contract Auditor, and the leader of the Resethacker community in Andhra Pradesh, focused on cybersecurity education and empowerment.",
    "background": "🎓 I have a strong background in cybersecurity with a focus on penetration testing and blockchain security. I'm passionate about educating others and building a strong cybersecurity community.",
    "resume": "📄 You can view my resume [here](http://localhost:5173/0xravii/Cybersecurity%20and%20Software.pdf). Would you like me to highlight any specific section for you?",
    "goals": "🌱 My future goals include expanding the Resethacker community nationally, contributing more to open-source security tools, and helping organizations build stronger security postures.",
    "experience": "💼 I'm currently working as a Security Analyst and Ethical Hacker intern at Symbiosys Technologies. I also lead the Resethacker community, helping over 10,000 individuals pursue cybersecurity careers.",
    "symbiosys": "🔍 At Symbiosys Technologies, I conduct vulnerability assessments, perform penetration testing, and develop security solutions for clients across various industries.",
    "resethacker": "👥 Resethacker is a community I founded to empower aspiring cybersecurity professionals. We provide training, resources, and networking opportunities to help individuals launch their security careers.",
    "companies": "🏢 I've collaborated with several companies on security assessments, including local startups and mid-sized enterprises looking to enhance their security posture.",
    "skills": "💪 My core strengths include penetration testing, blockchain security, vulnerability assessment, and smart contract auditing. I'm certified in CEH v12 and Professional Penetration Testing.",
    "tools": "🔒 I'm proficient with various security tools including Burp Suite, Metasploit, Nmap, Wireshark, and custom scripting tools I've developed for specific security testing scenarios.",
    "technical skills": "📊 My technical skills include:\n- Penetration Testing: ⭐⭐⭐⭐⭐\n- Smart Contract Auditing: ⭐⭐⭐⭐\n- Network Security: ⭐⭐⭐⭐\n- Python Scripting: ⭐⭐⭐⭐\n- Blockchain Security: ⭐⭐⭐⭐⭐",
    "soft skills": "🧠 I have strong communication skills which help me explain complex security concepts to non-technical stakeholders. I'm also a good team player with leadership experience from managing the Resethacker community.",
    "projects": "🚀 I've worked on various cybersecurity projects including vulnerability assessments, penetration testing, and security validation for different organizations. Would you like to hear about a specific project?",
    "security project": "🔐 One of my notable projects was developing a framework for auditing ERC-20 smart contracts that reduced assessment time by 40% while improving detection of common vulnerabilities.",
    "open source": "🌐 I've contributed to several open-source security tools, including improvements to web application scanning modules and developing custom plugins for popular security frameworks.",
    "achievement": "🏆 My biggest achievement was discovering a critical vulnerability in a widely-used DeFi protocol, which could have resulted in significant financial loss. I responsibly disclosed it and helped implement the fix.",
    "contact": "📱 You can reach me through:\n📞 Phone: +917989999344\n📧 Email: molletiravikumar798@gmail.com\n💼 LinkedIn: Let's connect and collaborate!",
    "schedule": "📆 I'd be happy to meet with you! Please send me your preferred date and time, and I'll confirm my availability. Alternatively, you can use the scheduling button below.",
    "collaborate": "🤝 I'm always open to collaboration opportunities, especially in the cybersecurity and blockchain space. Let's discuss how we can work together!",
    "job": "💬 I'm currently open to exploring new career opportunities in cybersecurity, particularly in roles focused on penetration testing, security research, or blockchain security.",
    "certifications": "🏆 I hold several certifications including CEH v12 (Certified Ethical Hacker), Professional Penetration Testing certification, and blockchain security credentials.",
    "default": "🤔 Thanks for your interest! Feel free to ask me about my cybersecurity journey, projects, or the Resethacker community I'm building. If you need specific information, please let me know."
  };

  // Function to scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Save conversation history to local storage
  useEffect(() => {
    if (messages.length > 1) {
      const timestamp = new Date().toISOString();
      const historyCopy = [...conversationHistory];
      const existingIndex = historyCopy.findIndex(h => 
        h.id === messages[0].sessionId
      );
      
      if (existingIndex >= 0) {
        historyCopy[existingIndex] = {
          ...historyCopy[existingIndex],
          messages: messages.filter(m => m.sessionId === messages[0].sessionId),
          lastUpdated: timestamp
        };
      } else if (messages[0].sessionId) {
        historyCopy.push({
          id: messages[0].sessionId,
          messages: messages.filter(m => m.sessionId === messages[0].sessionId),
          lastUpdated: timestamp,
          preview: messages[1]?.text.substring(0, 30) + '...'
        });
      }
      
      setConversationHistory(historyCopy);
      localStorage.setItem('chatHistory', JSON.stringify(historyCopy));
    }
  }, [messages]);

  // Load conversation history from local storage
  useEffect(() => {
    const storedHistory = localStorage.getItem('chatHistory');
    if (storedHistory) {
      setConversationHistory(JSON.parse(storedHistory));
    }
  }, []);

  // Initial welcome message
  useEffect(() => {
    if (isFirstLoad && isOpen) {
      const sessionId = `session-${Date.now()}`;
      setMessages([{ 
        text: "👋 Hi! I'm Ravi's AI assistant. How can I help you today?", 
        isBot: true,
        timestamp: new Date().toISOString(),
        sessionId
      }]);
      setIsFirstLoad(false);
    }
  }, [isOpen, isFirstLoad]);

  // Automatically open chat after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Handle chat submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input;
    const sessionId = messages.length > 0 ? messages[0].sessionId : `session-${Date.now()}`;
    
    setMessages(prev => [...prev, { 
      text: userMessage, 
      isBot: false,
      timestamp: new Date().toISOString(),
      sessionId
    }]);
    
    setInput('');
    setIsTyping(true);

    // Find response based on keywords
    setTimeout(() => {
      setIsTyping(false);
      let response = botResponses.default;
      const userMessageLower = userMessage.toLowerCase();
      
      // Search for matching keywords in responses
      for (const [key, value] of Object.entries(botResponses)) {
        if (userMessageLower.includes(key)) {
          response = value;
          break;
        }
      }
      
      setMessages(prev => [...prev, { 
        text: response, 
        isBot: true,
        timestamp: new Date().toISOString(),
        sessionId
      }]);
    }, 1500);
  };

  // Handle suggested question click
  const handleSuggestedQuestion = (question) => {
    const cleanQuestion = question.substring(question.indexOf(" ") + 1);
    const sessionId = messages.length > 0 ? messages[0].sessionId : `session-${Date.now()}`;
    
    setMessages(prev => [...prev, { 
      text: question, 
      isBot: false,
      timestamp: new Date().toISOString(),
      sessionId
    }]);
    
    setIsTyping(true);
    
    setTimeout(() => {
      setIsTyping(false);
      
      // Match question with response
      let response = botResponses.default;
      for (const [key, value] of Object.entries(botResponses)) {
        if (cleanQuestion.toLowerCase().includes(key)) {
          response = value;
          break;
        }
      }
      
      setMessages(prev => [...prev, { 
        text: response, 
        isBot: true,
        timestamp: new Date().toISOString(),
        sessionId
      }]);
    }, 1000);
  };

  // Handle emoji reaction
  const handleEmojiClick = (emoji) => {
    const sessionId = messages.length > 0 ? messages[0].sessionId : `session-${Date.now()}`;
    
    setMessages(prev => [...prev, { 
      text: `${emoji} Thanks for the reaction! Is there anything else you'd like to know?`, 
      isBot: true,
      timestamp: new Date().toISOString(),
      sessionId
    }]);
  };

  // Handle meeting scheduling
  const handleScheduleMeeting = () => {
    const sessionId = messages.length > 0 ? messages[0].sessionId : `session-${Date.now()}`;
    
    setMessages(prev => [...prev, { 
      text: "📅 I'd be happy to schedule a meeting with you. Please provide your preferred date, time, and topic of discussion.", 
      isBot: true,
      timestamp: new Date().toISOString(),
      sessionId
    }]);
  };

  // Handle feedback submission
  const handleFeedbackSubmit = (rating) => {
    setFeedbackRating(rating);
    const sessionId = messages.length > 0 ? messages[0].sessionId : `session-${Date.now()}`;
    
    setMessages(prev => [...prev, { 
      text: `Thank you for your ${rating === 'positive' ? 'positive' : 'constructive'} feedback! ${rating === 'positive' ? '😊' : '🙏'}`, 
      isBot: true,
      timestamp: new Date().toISOString(),
      sessionId
    }]);
  };

  // Load specific conversation
  const loadConversation = (conversationId) => {
    const conversation = conversationHistory.find(c => c.id === conversationId);
    if (conversation) {
      setMessages(conversation.messages);
      setShowHistory(false);
    }
  };

  // Clear conversation
  const clearConversation = () => {
    const sessionId = `session-${Date.now()}`;
    setMessages([{ 
      text: "👋 Starting a fresh conversation! How can I help you today?", 
      isBot: true,
      timestamp: new Date().toISOString(),
      sessionId
    }]);
  };

  // Filter history based on search term
  const filteredHistory = conversationHistory.filter(conversation => {
    return conversation.messages.some(message => 
      message.text.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div style={{ display: 'block' }}>  {/* Replace jsx={true} with appropriate CSS */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
        {/* Floating action button */}
        <button
          onClick={() => {
            setIsOpen(!isOpen);
            setIsMinimized(false);
            if (inputRef.current && isOpen === false) {
              setTimeout(() => inputRef.current.focus(), 100);
            }
          }}
          className="bg-[#915EFF] hover:bg-[#7140d1] text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Chat with Ravi"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"} />
          </svg>
        </button>

        {/* Chat window */}
        {isOpen && (
          <div className={`absolute ${isMinimized ? 'h-14' : 'h-[600px]'} bottom-16 right-0 w-96 bg-white rounded-lg shadow-2xl overflow-hidden transition-all duration-300 fade-in border border-gray-200`}>
            {/* Header with control buttons */}
            <div className="bg-[#915EFF] text-white p-3 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                  <FaUserCircle className="text-[#915EFF] text-xl" />
                </div>
                <h3 className="font-bold">💬 Chat with Ravi</h3>
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="text-white hover:text-gray-200 transition-colors"
                  aria-label={isMinimized ? "Expand" : "Minimize"}
                >
                  <FaWindowMinimize size={16} />
                </button>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-gray-200 transition-colors"
                  aria-label="Close"
                >
                  <FaTimesCircle size={16} />
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Conversation history view */}
                {showHistory ? (
                  <div className="h-[calc(600px-120px)] bg-gray-50 p-4 overflow-y-auto">
                    <div className="mb-4 flex items-center justify-between">
                      <h4 className="font-medium">Conversation History</h4>
                      <button 
                        onClick={() => setShowHistory(false)}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        Back to Chat
                      </button>
                    </div>
                    
                    <input
                      type="text"
                      placeholder="Search conversations..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
                    />
                    
                    {filteredHistory.length > 0 ? (
                      <div className="space-y-2">
                        {filteredHistory
                          .sort((a, b) => new Date(b.lastUpdated) - new Date(a.lastUpdated))
                          .map((conversation) => (
                            <div 
                              key={conversation.id} 
                              onClick={() => loadConversation(conversation.id)}
                              className="p-3 bg-white rounded-lg shadow-sm hover:shadow-md cursor-pointer border border-gray-200"
                            >
                              <p className="text-sm font-medium truncate">{conversation.preview}</p>
                              <p className="text-xs text-gray-500">
                                {new Date(conversation.lastUpdated).toLocaleString()}
                              </p>
                            </div>
                          ))}
                      </div>
                    ) : (
                      <p className="text-center text-gray-500 my-4">No conversation history found</p>
                    )}
                  </div>
                ) : (
                  <>
                    {/* Tabs for question categories */}
                    <div className="bg-gray-100 p-2 overflow-x-auto flex gap-2 border-b border-gray-200">
                      {categories.map((cat) => (
                        <button
                          key={cat.id}
                          onClick={() => setCategory(cat.id)}
                          className={`px-3 py-1 text-sm rounded-full whitespace-nowrap ${
                            category === cat.id 
                              ? 'bg-[#915EFF] text-white' 
                              : 'bg-white text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {cat.name}
                        </button>
                      ))}
                    </div>

                    {/* Message area with padding at top for questions */}
                    <div className="h-[calc(600px-184px)] overflow-y-auto p-4 space-y-4 bg-gray-50">
                      {/* Suggested Questions - Fixed position at top with padding */}
                      <div className="space-y-2 mb-6 bg-gray-50 pt-2 pb-3">
                        <p className="text-gray-600 text-sm font-medium">Suggested Questions:</p>
                        <div className="grid grid-cols-1 gap-2">
                          {suggestedQuestions[category].map((question, idx) => (
                            <button
                              key={idx}
                              onClick={() => handleSuggestedQuestion(question)}
                              className="text-left p-2 rounded bg-white hover:bg-gray-100 text-gray-700 text-sm transition-colors border border-gray-200 shadow-sm hover:shadow w-full"
                            >
                              {question}
                            </button>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        {/* Messages */}
                        {messages.map((msg, idx) => (
                          <div key={idx} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'} mt-2`}>
                            <div 
                              className={`max-w-[80%] p-3 rounded-lg shadow-sm ${
                                msg.isBot 
                                  ? 'bg-white text-gray-800 border border-gray-200'
                                  : 'bg-[#915EFF] text-white'
                              }`}
                            >
                              <div dangerouslySetInnerHTML={{ __html: msg.text.replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="underline">$1</a>') }} />
                              {msg.isBot && idx === messages.length - 1 && (
                                <div className="mt-2 flex gap-1 justify-end">
                                  {['👍', '❤️', '😊', '🙏'].map((emoji) => (
                                    <button
                                      key={emoji}
                                      onClick={() => handleEmojiClick(emoji)}
                                      className="hover:scale-125 transition-transform"
                                    >
                                      {emoji}
                                    </button>
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* End of message area */}
                    {/* Input area and other components go here */}
                  </>
                )}
              </>
            )}

            {/* Social Links in footer */}
            <div className="p-3 bg-gray-100 border-t border-gray-200 flex justify-between items-center">
              <h4 className="text-xs text-gray-600">Connect with Ravi:</h4>
              <div className="flex gap-3">
                <a href="https://www.linkedin.com/in/ravi-kumar-molleti-2a566721b/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#915EFF] transition-colors">
                  <FaLinkedin size={16} />
                </a>
                <a href="https://github.com/0xravii" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#915EFF] transition-colors">
                  <FaGithub size={16} />
                </a>
                <a href="https://instagram.com/0xravii" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#915EFF] transition-colors">
                  <FaInstagram size={16} />
                </a>
                <a href="https://twitter.com/0xravii" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#915EFF] transition-colors">
                  <FaTwitter size={16} />
                </a>
              </div>
            </div>
          </div>
        )}

        {/* CSS for typing indicator */}
        <style jsx>{`
          .fade-in {
            animation: fadeIn 0.3s ease-in-out;
          }
          
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          .typing-indicator {
            display: flex;
            align-items: center;
            gap: 3px;
          }
          
          .typing-indicator span {
            display: block;
            width: 8px;
            height: 8px;
            background-color: #915EFF;
            border-radius: 50%;
            animation: typing 1.4s infinite both;
          }
          
          .typing-indicator span:nth-child(2) {
            animation-delay: 0.2s;
          }
          
          .typing-indicator span:nth-child(3) {
            animation-delay: 0.4s;
          }
          
          @keyframes typing {
            0% { transform: scale(1); }
            50% { transform: scale(1.5); }
            100% { transform: scale(1); }
          }
          
          .hover-grow {
            transition: transform 0.2s ease;
          }
          
          .hover-grow:hover {
            transform: scale(1.1);
          }
        `}</style>
      </div>
    </div>
  )
};

export default ChatBot;