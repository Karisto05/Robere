import { useState } from 'react';
import message from '../assets/message.svg'
import close from '../assets/close.svg'
import messanger from '../assets/messanger.svg'
import line from '../assets/line.svg'

interface MessageMenuProps {
  isHidden: boolean;
}

const MessageMenu = ({ isHidden }: MessageMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  if (isHidden) {
    return null;
  }

  return (
    <div className="fixed bottom-7 right-7 z-50">
      {/* Chat Options */}
      <div className={`flex flex-col gap-2 mb-2 transition-all duration-300 ${isOpen ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4 pointer-events-none'}`}>
        <button className="w-[53px] h-[53px] rounded-full bg-[#00B900] text-white flex items-center justify-center shadow-lg hover:bg-opacity-90 transition-colors">
          <a href="https://line.me/R/ti/p/%40robere">
          <span className="text-xl"><img src={line} alt="line" className="h-14 w-14"/></span>
          </a>
        </button>
        <button className="w-[53px] h-[53px] rounded-full bg-[#0084FF] text-white flex items-center justify-center shadow-lg hover:bg-opacity-90 transition-colors">
          <a href="https://m.me/RobereThailandOfficial">
          <span className="text-xl"><img src={messanger} alt="messanger" className="h-14 w-14"/></span>
          </a>
        </button>
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-[53px] h-[53px] rounded-full bg-[#0a1f75] text-white flex items-center justify-center shadow-lg hover:bg-opacity-90 transition-transform duration-500"
        style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
      >
        {isOpen ? (
          // <X className="w-6 h-6" />
          <img src={close} alt='close'/>
        ) : (
          // <MessageCircle className="w-6 h-6" />
          <img src={message} alt="message" />
        )}
      </button>
    </div>
  );
};

export default MessageMenu;