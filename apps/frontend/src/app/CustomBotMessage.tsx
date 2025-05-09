import { createChatBotMessage } from "react-chatbotify";
import ReactMarkdown from "react-markdown";
import { linkifyDocuments } from "./utils/linkifyDocuments";

// Custom bot message renderer
const CustomBotMessage = ({ message }) => (
  <div className="bot-message">
    <ReactMarkdown>
      {linkifyDocuments(message)}
    </ReactMarkdown>
  </div>
);
