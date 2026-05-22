'use client';

import { useState } from 'react';
import styles from './AIAssistant.module.css';

const quickReplies = [
  'I want to explore design styles',
  'I need a quotation',
  'Book a home measurement',
  'Track my order',
];

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Welcome to ARGO SPACE DESIGN. I\'m your personal design concierge. How may I assist you today?',
    },
  ]);
  const [inputValue, setInputValue] = useState('');

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = (text) => {
    if (!text.trim()) return;
    
    setMessages(prev => [...prev, { role: 'user', content: text }]);
    setInputValue('');

    // Simulated AI response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Thank you for your interest. Let me connect you with our design team for personalized assistance.',
      }]);
    }, 1000);
  };

  return (
    <div className={styles.aiAssistant} id="ai-assistant">
      {/* Chat Window */}
      <div className={`${styles.chatWindow} ${isOpen ? styles.chatWindowOpen : ''}`}>
        {/* Header */}
        <div className={styles.chatHeader}>
          <div className={styles.chatHeaderInfo}>
            <div className={styles.chatAvatar}>
              {/* Placeholder for AI avatar */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <div>
              <h6 className={styles.chatTitle}>ARGO Concierge</h6>
              <span className={styles.chatStatus}>Online</span>
            </div>
          </div>
          <button className={styles.chatClose} onClick={toggleChat} aria-label="Close chat">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div className={styles.chatMessages}>
          {messages.map((msg, i) => (
            <div key={i} className={`${styles.message} ${msg.role === 'user' ? styles.messageUser : styles.messageBot}`}>
              <p>{msg.content}</p>
            </div>
          ))}

          {/* Quick Replies */}
          {messages.length === 1 && (
            <div className={styles.quickReplies}>
              {quickReplies.map((reply, i) => (
                <button
                  key={i}
                  className={styles.quickReply}
                  onClick={() => sendMessage(reply)}
                >
                  {reply}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Input */}
        <div className={styles.chatInput}>
          <input
            type="text"
            placeholder="Type your message..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage(inputValue)}
            className={styles.chatInputField}
          />
          <button
            className={styles.chatSend}
            onClick={() => sendMessage(inputValue)}
            aria-label="Send message"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M22 2L11 13" />
              <path d="M22 2L15 22l-4-9-9-4 20-7z" />
            </svg>
          </button>
        </div>

        {/* WhatsApp CTA */}
        <a
          href="https://wa.me/6500000000"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.whatsappCta}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.025.507 3.932 1.396 5.608L.058 23.708a.5.5 0 00.632.632l5.843-1.247A11.942 11.942 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.94 9.94 0 01-5.322-1.534l-.382-.227-3.464.74.826-3.547-.248-.394A9.94 9.94 0 012 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z"/>
          </svg>
          Connect via WhatsApp
        </a>
      </div>

      {/* Toggle Button */}
      <button
        className={`${styles.toggleButton} ${isOpen ? styles.toggleButtonHidden : ''}`}
        onClick={toggleChat}
        aria-label="Open AI Assistant"
        id="ai-assistant-toggle"
      >
        <div className={styles.togglePulse}></div>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.toggleIcon}>
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      </button>
    </div>
  );
}
