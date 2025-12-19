import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI } from '@google/genai';
import {
  GEMINI_MODEL_NAME,
  PORTFOLIO_SUMMARY_FOR_AI,
  INITIAL_SUGGESTED_QUESTIONS,
} from '../constants';

interface AIConversationAssistantProps {
  onClose: () => void;
}

interface Message {
  text: string;
  sender: 'user' | 'ai';
  id: number;
  isStreaming?: boolean;
}

const AIConversationAssistant: React.FC<AIConversationAssistantProps> = ({
  onClose,
}) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [suggestedQuestions, setSuggestedQuestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<any>(null); // To store the chat session

  // Scroll to the latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Initialize chat session on mount
  useEffect(() => {
    const initializeChat = async () => {
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        chatRef.current = ai.chats.create({
          model: GEMINI_MODEL_NAME,
          config: {
            systemInstruction: PORTFOLIO_SUMMARY_FOR_AI,
          },
        });

        // Add an initial greeting from the AI and suggest questions
        setMessages([
          {
            id: 0,
            sender: 'ai',
            text: "Hello! I'm Mesuli's AI assistant, ready to help you explore his professional portfolio. Feel free to ask me anything about his experience, skills, or projects. Here are a few ideas to get you started:",
          },
        ]);
        setSuggestedQuestions(INITIAL_SUGGESTED_QUESTIONS);
      } catch (error) {
        console.error('Failed to initialize AI chat:', error);
        setMessages((prev) => [
          ...prev,
          {
            id: prev.length,
            sender: 'ai',
            text: 'I apologize, but I am having trouble connecting right now. Please try again later.',
          },
        ]);
      }
    };

    initializeChat();
  }, []); // Run only once on mount

  const sendMessage = async (messageText: string) => {
    if (messageText.trim() === '' || isLoading) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: messageText,
      sender: 'user',
    };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);
    setSuggestedQuestions([]); // Clear suggestions when user sends a message
    setShowSuggestions(false); // Hide suggestions panel when user acts

    try {
      if (!chatRef.current) {
        throw new Error('AI chat not initialized.');
      }

      const streamingResponse = await chatRef.current.sendMessageStream({
        message: messageText,
      });

      let accumulatedText = '';
      let currentAiMessageId: number | undefined;

      for await (const chunk of streamingResponse) {
        const textChunk = chunk.text;
        if (textChunk) {
          accumulatedText += textChunk;

          setMessages((prev) => {
            const newMessages = [...prev];
            if (currentAiMessageId === undefined) {
              currentAiMessageId = newMessages.length + 1;
              newMessages.push({
                id: currentAiMessageId,
                text: accumulatedText,
                sender: 'ai',
                isStreaming: true,
              });
            } else {
              const existingMessageIndex = newMessages.findIndex(
                (msg) => msg.id === currentAiMessageId,
              );
              if (existingMessageIndex !== -1) {
                newMessages[existingMessageIndex] = {
                  ...newMessages[existingMessageIndex],
                  text: accumulatedText,
                  isStreaming: true,
                };
              }
            }
            return newMessages;
          });
        }
      }

      // After stream completes, parse for suggestions
      let finalAiText = accumulatedText;
      const suggestionsMarker = '**Suggestions:**';
      const newSuggestions: string[] = [];
      if (finalAiText.includes(suggestionsMarker)) {
        const parts = finalAiText.split(suggestionsMarker);
        finalAiText = parts[0].trim();
        const suggestionsBlock = parts[1];
        if (suggestionsBlock) {
          suggestionsBlock
            .trim()
            .split('\n')
            .forEach((line) => {
              const cleanedLine = line.replace(/^- /, '').trim();
              if (cleanedLine) {
                newSuggestions.push(cleanedLine);
              }
            });
        }
      }
      setSuggestedQuestions(newSuggestions);
      if (newSuggestions.length > 0) {
        setShowSuggestions(true);
      }

      // Mark the last AI message as not streaming and update its text
      setMessages((prev) => {
        const newMessages = [...prev];
        const lastAiMessageIndex = newMessages.findIndex(
          (msg) => msg.id === currentAiMessageId,
        );
        if (lastAiMessageIndex !== -1) {
          newMessages[lastAiMessageIndex] = {
            ...newMessages[lastAiMessageIndex],
            text: finalAiText,
            isStreaming: false,
          };
        }
        return newMessages;
      });
    } catch (error) {
      console.error('Error sending message to AI:', error);
      setMessages((prev) => [
        ...prev,
        {
          id: prev.length,
          sender: 'ai',
          text: 'I apologize, an error occurred while processing your request. Please try again.',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
    setInput('');
  };

  const handleSuggestionClick = (question: string) => {
    sendMessage(question);
  };

  return (
    <div
      className="fixed bottom-24 right-6 w-full max-w-md h-[80vh] md:h-[600px] bg-panel-bg/95 backdrop-blur-xl
                 rounded-xl shadow-2xl border border-border-military flex flex-col z-50 transform transition-transform duration-300 ease-out animate-slide-in-bottom"
      aria-modal="true"
      role="dialog"
      aria-label="Mesuli's AI Assistant Chat Window"
    >
      <div className="flex justify-between items-center p-4 bg-gradient-to-r from-primary to-secondary text-white rounded-t-xl">
        <h3 className="text-lg font-orbitron font-semibold flex items-center">
          <svg
            className="w-6 h-6 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            ></path>
          </svg>
          Mesuli's AI Assistant
        </h3>
        <button
          onClick={onClose}
          className="text-white hover:text-dark-bg transition-colors duration-200"
          aria-label="Close chat assistant"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <div className="flex-grow p-4 space-y-4 overflow-y-auto custom-scrollbar">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${
              msg.sender === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-lg shadow-md animate-chat-bubble-in ${
                msg.sender === 'user'
                  ? 'bg-secondary text-white ml-auto'
                  : 'bg-dark-bg text-text-main border border-border-military mr-auto'
              }`}
            >
              {msg.text}
              {msg.isStreaming && (
                <span className="ml-1 animate-pulse-fade inline-block">.</span>
              )}
            </div>
          </div>
        ))}
        {isLoading && messages[messages.length - 1]?.sender !== 'ai' && (
          <div className="flex justify-start">
            <div className="bg-dark-bg text-text-main border border-border-military p-3 rounded-lg shadow-md max-w-[80%] animate-chat-bubble-in">
              Thinking
              <span className="inline-block animate-pulse-fade">...</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {!isLoading && suggestedQuestions.length > 0 && showSuggestions && (
        <div className="px-4 pb-4 pt-3 border-t border-border-military">
          <div className="flex justify-between items-center mb-3 px-1">
            <h4 className="text-sm font-semibold text-text-muted">
              Try asking one of these:
            </h4>
            <button
              onClick={() => setShowSuggestions(false)}
              className="p-1 text-text-muted rounded-full hover:bg-dark-bg hover:text-secondary transition-colors"
              aria-label="Close suggestions"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-col gap-2">
            {suggestedQuestions.map((q, i) => (
              <button
                key={i}
                onClick={() => handleSuggestionClick(q)}
                className="w-full text-left px-4 py-3 bg-dark-bg text-text-main text-sm rounded-lg border border-border-military hover:border-secondary transition-all duration-200 transform hover:scale-[1.02] flex items-center gap-3"
                aria-label={`Ask: ${q}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.546-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="flex-1">{q}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      <form
        onSubmit={handleFormSubmit}
        className="p-4 border-t border-border-military bg-dark-bg rounded-b-xl flex"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me about Mesuli's portfolio..."
          className="flex-grow p-3 rounded-full bg-panel-bg text-text-main border border-transparent
                     focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-200 placeholder-text-muted/50"
          aria-label="Chat input field"
        />
        <button
          type="submit"
          className="ml-3 p-3 bg-secondary text-white rounded-full hover:bg-white hover:text-primary transition-colors duration-300
                     flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-secondary"
          aria-label="Send message"
          disabled={isLoading || input.trim() === ''}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 transform rotate-90 -mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default AIConversationAssistant;