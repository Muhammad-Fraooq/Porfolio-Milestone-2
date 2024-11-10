// componenets
'use client';
import { useEffect, useState, useMemo } from 'react';
// import './HeadingWi'; // Import the CSS file

const Animation: React.FC = () => {
  const [text, setText] = useState<string>('');
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(0);
  const [showCursor, setShowCursor] = useState<boolean>(true); // New state for cursor
  const typingTexts = useMemo(
    () => [
      'Website Developer',
      'YouTuber',
      'Website Designer',
      'Responsive Website',
      'UI & UX Designer',
    ],
    []
  );

  useEffect(() => {
    const handleTyping = () => {
      const currentText = typingTexts[index];
      if (!isDeleting) {
        // Typing effect
        setText((prev) => currentText.substring(0, prev.length + 1));

        // If full text has been typed, wait, then start deleting
        if (text === currentText) {
          setTimeout(() => {
            setIsDeleting(true);
            setShowCursor(false); // Hide cursor after typing
          }, 1000);
        }
      } else {
        // Deleting effect
        setText((prev) => prev.substring(0, prev.length - 1));

        // If text is fully deleted, move to the next text
        if (text === '') {
          setIsDeleting(false);
          setIndex((prevIndex) => (prevIndex + 1) % typingTexts.length);
          setShowCursor(true); // Show cursor during typing
        }
      }
    };

    const typingTimeout = setTimeout(handleTyping, isDeleting ? 100 : 200);

    // Cleanup timeout on unmount or when dependencies change
    return () => clearTimeout(typingTimeout);
  }, [text, isDeleting, typingTexts, index]);

  return (
    <h2 className={`typing-container ${showCursor ? 'show-cursor' : ''}`}>
      <span>{text}</span>
      <span className="cursor">|</span>
    </h2>
  );
};

export default Animation;
