import { useState, useRef, useEffect } from "react";
import { BsChatDots, BsXLg, BsSend } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import { generateChatResponse, type ChatMessage } from "../../lib/gemini";

const Chatbot = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  
  const getGreetingKey = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "chat_welcome_morning";
    if (hour < 18) return "chat_welcome_afternoon";
    return "chat_welcome_evening";
  };

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Add the initial localized welcome message on mount
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          id: "welcome-1",
          text: getGreetingKey(),
          sender: "bot",
          timestamp: new Date(),
        },
      ]);
    }
  }, [messages.length]);

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const toggleChat = () => setIsOpen((prev) => !prev);

  const handleSendMessage = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    
    const trimmedInput = inputValue.trim();
    if (!trimmedInput) return;

    // Add user message
    const newUserMsg: ChatMessage = {
      id: Date.now().toString(),
      text: trimmedInput,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newUserMsg]);
    setInputValue("");
    setIsTyping(true);

    try {
      const botText = await generateChatResponse([...messages, newUserMsg]);

      const botReply: ChatMessage = {
        id: Date.now().toString(),
        text: botText,
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botReply]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [...prev, {
        id: Date.now().toString(),
        text: t("chat_error_network"),
        sender: "bot",
        timestamp: new Date(),
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end pointer-events-none">
      {/* Chat Window */}
      <div
        className={`pointer-events-auto transition-all duration-300 transform origin-bottom-right mb-4 w-[350px] sm:w-[400px] h-[500px] max-h-[80vh] bg-bg-base border border-border-base rounded-2xl shadow-2xl flex flex-col overflow-hidden ${
          isOpen ? "scale-100 opacity-100 translate-y-0" : "scale-95 opacity-0 translate-y-4 pointer-events-none absolute bottom-16 right-0"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-gradient-to-r from-primary to-secondary text-white shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm relative">
              <span className="text-xl font-bold">V</span>
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-primary rounded-full"></span>
            </div>
            <div>
              <h3 className="font-bold text-[15px]">{t("chat_title")}</h3>
              <p className="text-xs text-white/80 flex items-center gap-1">
                {t("chat_subtitle")}
              </p>
            </div>
          </div>
          <button
            onClick={toggleChat}
            className="p-2 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Close chat"
          >
            <BsXLg />
          </button>
        </div>

        {/* Message List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-bg-secondary custom-scrollbar">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-3 text-[14px] leading-relaxed shadow-sm ${
                  msg.sender === "user"
                    ? "bg-primary text-white rounded-br-sm"
                    : "bg-bg-base text-text-base border border-border-base rounded-bl-sm"
                }`}
              >
                {msg.id === "welcome-1" ? t(msg.text) : msg.text}
                <div
                  className={`text-[10px] mt-1 ${
                    msg.sender === "user" ? "text-white/70 text-right" : "text-text-muted"
                  }`}
                >
                  {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-bg-base border border-border-base rounded-2xl rounded-bl-sm px-4 py-3 max-w-[80%] shadow-sm">
                <div className="flex gap-1 items-center h-5">
                  <div className="w-1.5 h-1.5 bg-text-muted rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                  <div className="w-1.5 h-1.5 bg-text-muted rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="w-1.5 h-1.5 bg-text-muted rounded-full animate-bounce"></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-bg-base border-t border-border-base shrink-0">
          <form
            onSubmit={handleSendMessage}
            className="flex items-center gap-2 bg-bg-secondary rounded-full border border-border-base p-1 pl-4 transition-colors focus-within:border-primary/50 focus-within:ring-2 focus-within:ring-primary/20"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={t("chat_placeholder")}
              className="flex-1 bg-transparent border-none focus:outline-none text-[14px] text-text-base placeholder:text-text-muted h-10"
            />
            <button
              type="submit"
              disabled={!inputValue.trim()}
              className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-secondary transition-colors disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
              aria-label="Send message"
            >
              <BsSend className="ml-[-2px] mt-[1px]" />
            </button>
          </form>
        </div>
      </div>

      {/* Floating Button */}
      <button
        onClick={toggleChat}
        className={`pointer-events-auto w-14 h-14 rounded-full bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/30 flex items-center justify-center hover:-translate-y-1 hover:shadow-xl transition-all duration-300 z-50 ${
          isOpen ? "scale-0 opacity-0 relative" : "scale-100 opacity-100 relative"
        }`}
        aria-label="Open chat"
      >
        <BsChatDots className="text-2xl" />
        {/* Notification dot */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-red-500 border-2 border-bg-base rounded-full animate-pulse"></span>
      </button>
    </div>
  );
};

export default Chatbot;
