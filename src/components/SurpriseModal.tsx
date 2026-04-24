import React, { useState, useEffect } from "react";

interface SurpriseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SurpriseModal: React.FC<SurpriseModalProps> = ({ isOpen, onClose }) => {
  const [sparkles, setSparkles] = useState<
    Array<{ id: number; x: number; y: number; delay: number }>
  >([]);
  const [showLetter, setShowLetter] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Create sparkles
      const sparklesData = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 2,
      }));
      setSparkles(sparklesData);

      // Show letter after sparkles animation
      setTimeout(() => setShowLetter(true), 1000);
    } else {
      setShowLetter(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="surprise-modal-overlay" onClick={onClose}>
      <div className="surprise-modal" onClick={(e) => e.stopPropagation()}>
        {/* Sparkles Animation */}
        <div className="modal-sparkles">
          {sparkles.map((sparkle) => (
            <div
              key={sparkle.id}
              className="modal-sparkle"
              style={{
                left: `${sparkle.x}%`,
                top: `${sparkle.y}%`,
                animationDelay: `${sparkle.delay}s`,
              }}
            >
              ✨
            </div>
          ))}
        </div>

        {/* Handwritten Love Letter */}
        <div className={`handwritten-letter ${showLetter ? "show" : ""}`}>
          <div className="letter-paper">
            <div className="letter-header">
              <h2 className="handwritten-title">To My Cute Baby… ❤️</h2>
            </div>
            <div className="handwritten-content">
              <p className="handwritten-line">
                Nammal randu perum ippol distance il aanenkilum,
                ente heart il nee eppozhum ente koode thanne undu.
              </p>
              <p className="handwritten-line">
                Oru divasam polum ninne orkkathe pokunnilla.
                Ninte message, ninte voice, ninte chiri 
                ellam ente divasam full aayi happy aakkum.
                nammal kurach dhoore aayirikkum,
                pakshey ente feelings ninakku vendi
                oru distance um ariyilla.
              </p>
              <p className="handwritten-line">
                Ninte koode samsarikunna aa kurachu minutes polum
                ente whole day ne beautiful aakkunnu.
                Nee undennu arinjappol thanne
                life kurachu koodi meaningful aayi maari.
              </p>
              <p className="handwritten-line">
                Nammal ippol akale aayalum,
                oru divasam nammal same place il
                oru cheriya smile ode nikkum ennu
                njaan always imagine cheyyum.
              </p>
              <p className="handwritten-line">
                Ath vare,
                ninte memories um, ninte love um
                enne strong aakkunnu.
                Words kondu parayan pattatha pole
                njaan ninne snehikkunnu.
                Distance nammale akattilla 
                athu nammale kooduthal strong aakkum.
              </p>
              <div className="handwritten-signature">
                Your's Baby...
                <br />
                <span className="signature-name">Sachiiii💋💋</span>
              </div>
            </div>
          </div>
        </div>

        <button className="close-modal" onClick={onClose}>
          ×
        </button>
      </div>
    </div>
  );
};

export default SurpriseModal;
