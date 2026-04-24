import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const VALID_USERNAME = 'Geleluu0412';
const VALID_PASSWORD = '06052025';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [shake, setShake] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Small delay for a nice effect
    await new Promise((res) => setTimeout(res, 600));
    setLoading(false);

    if (username.trim() === VALID_USERNAME && password.trim() === VALID_PASSWORD) {
      sessionStorage.setItem('enchanted-logged-in', 'true');
      navigate('/home');
    } else {
      setError('Oops! Wrong name or secret word 💔');
      setShake(true);
      setTimeout(() => setShake(false), 600);
    }
  };

  return (
    <div className="login-page romantic-bg" style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
      {/* Floating Hearts */}
      <div className="floating-hearts">
        {[...Array(15)].map((_, i) => (
          <div key={i} className={`heart heart-${i + 1}`}>💖</div>
        ))}
      </div>

      {/* Twinkling Stars */}
      <div className="twinkling-stars">
        {[...Array(20)].map((_, i) => (
          <div key={i} className={`star star-${i + 1}`}>✨</div>
        ))}
      </div>

      {/* Login Card */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
      }}>
        <div
          className={shake ? 'login-card login-shake' : 'login-card'}
          style={{
            background: 'rgba(255, 255, 255, 0.12)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            borderRadius: '32px',
            padding: '3rem 2.5rem',
            width: '100%',
            maxWidth: '420px',
            border: '1.5px solid rgba(255, 255, 255, 0.3)',
            boxShadow: '0 30px 80px rgba(196, 69, 105, 0.35), 0 0 0 1px rgba(255,255,255,0.1)',
            animation: 'fadeInUp 0.8s ease-out',
          }}
        >
          {/* Heart Icon */}
          <div style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
            <span style={{
              fontSize: '64px',
              display: 'inline-block',
              animation: 'pulse 1.5s ease-in-out infinite',
              filter: 'drop-shadow(0 0 20px rgba(255, 107, 157, 0.9))',
            }}>💖</span>
          </div>

          {/* Title */}
          <h1 style={{
            textAlign: 'center',
            color: 'white',
            fontSize: '1.9rem',
            fontWeight: 800,
            marginBottom: '0.4rem',
            textShadow: '0 0 30px rgba(255, 107, 157, 0.8)',
            letterSpacing: '-0.5px',
          }}>
            Welcome Back
          </h1>
          <p style={{
            textAlign: 'center',
            color: 'rgba(255,209,220,0.9)',
            fontSize: '1rem',
            marginBottom: '2.2rem',
            fontStyle: 'italic',
          }}>
            My Love 🌹
          </p>

          <form onSubmit={handleLogin}>
            {/* Username Field */}
            <div style={{ marginBottom: '1.2rem' }}>
              <label style={{
                display: 'block',
                color: 'rgba(255,255,255,0.85)',
                fontSize: '0.85rem',
                fontWeight: 600,
                marginBottom: '0.5rem',
                letterSpacing: '0.04em',
              }}>
                💌 Your Name
              </label>
              <input
                id="login-username"
                type="text"
                value={username}
                onChange={(e) => { setUsername(e.target.value); setError(''); }}
                placeholder="Enter your name..."
                autoComplete="off"
                required
                style={{
                  width: '100%',
                  padding: '0.85rem 1.1rem',
                  background: 'rgba(255,255,255,0.15)',
                  border: '1px solid rgba(255,255,255,0.3)',
                  borderRadius: '14px',
                  color: 'white',
                  fontSize: '1rem',
                  outline: 'none',
                  transition: 'all 0.3s ease',
                  boxSizing: 'border-box',
                }}
                onFocus={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.22)';
                  e.currentTarget.style.borderColor = 'rgba(255,107,157,0.8)';
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(255,107,157,0.3)';
                }}
                onBlur={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              />
            </div>

            {/* Password Field */}
            <div style={{ marginBottom: '1.6rem', position: 'relative' }}>
              <label style={{
                display: 'block',
                color: 'rgba(255,255,255,0.85)',
                fontSize: '0.85rem',
                fontWeight: 600,
                marginBottom: '0.5rem',
                letterSpacing: '0.04em',
              }}>
                🔑 Secret Word
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  id="login-password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); setError(''); }}
                  placeholder="Enter secret word..."
                  autoComplete="new-password"
                  required
                  style={{
                    width: '100%',
                    padding: '0.85rem 3rem 0.85rem 1.1rem',
                    background: 'rgba(255,255,255,0.15)',
                    border: '1px solid rgba(255,255,255,0.3)',
                    borderRadius: '14px',
                    color: 'white',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'all 0.3s ease',
                    boxSizing: 'border-box',
                  }}
                  onFocus={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.22)';
                    e.currentTarget.style.borderColor = 'rgba(255,107,157,0.8)';
                    e.currentTarget.style.boxShadow = '0 0 20px rgba(255,107,157,0.3)';
                  }}
                  onBlur={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: 'absolute',
                    right: '0.9rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '1.1rem',
                    opacity: 0.7,
                  }}
                  title={showPassword ? 'Hide' : 'Show'}
                >
                  {showPassword ? '🙈' : '👁️'}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div style={{
                background: 'rgba(255,80,80,0.18)',
                border: '1px solid rgba(255,120,120,0.4)',
                borderRadius: '12px',
                padding: '0.7rem 1rem',
                color: '#ffb3b3',
                fontSize: '0.9rem',
                marginBottom: '1.2rem',
                textAlign: 'center',
                animation: 'fadeInUp 0.3s ease-out',
              }}>
                {error}
              </div>
            )}

            {/* Login Button */}
            <button
              id="login-submit"
              type="submit"
              disabled={loading}
              style={{
                width: '100%',
                padding: '1rem',
                background: loading
                  ? 'rgba(255,107,157,0.5)'
                  : 'linear-gradient(135deg, #ff6b9d, #c44569)',
                color: 'white',
                border: 'none',
                borderRadius: '50px',
                fontSize: '1.1rem',
                fontWeight: 700,
                cursor: loading ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 10px 30px rgba(255, 107, 157, 0.45)',
                letterSpacing: '0.03em',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={e => {
                if (!loading) {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 16px 40px rgba(255, 107, 157, 0.6)';
                }
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(255, 107, 157, 0.45)';
              }}
            >
              {loading ? '💫 Entering...' : '💕 Enter My World'}
            </button>
          </form>

          {/* Footer */}
          <p style={{
            textAlign: 'center',
            color: 'rgba(255,209,220,0.6)',
            fontSize: '0.78rem',
            marginTop: '1.8rem',
          }}>
            Made with 💖 just for you
          </p>
        </div>
      </div>

      <style>{`
        .login-shake {
          animation: shakeCard 0.55s cubic-bezier(.36,.07,.19,.97) both !important;
        }
        @keyframes shakeCard {
          10%, 90% { transform: translate3d(-4px, 0, 0); }
          20%, 80% { transform: translate3d(6px, 0, 0); }
          30%, 50%, 70% { transform: translate3d(-8px, 0, 0); }
          40%, 60% { transform: translate3d(8px, 0, 0); }
        }
        input::placeholder { color: rgba(255,255,255,0.45); }
      `}</style>
    </div>
  );
};

export default LoginPage;
