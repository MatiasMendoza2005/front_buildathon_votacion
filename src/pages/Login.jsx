import LoginForm from '../components/forms/LoginForm';
import { useEffect, useRef } from 'react';

const Login = () => {
  const belts = useRef([]);

  useEffect(() => {
    // Animación continua de los cinturones
    const animate = () => {
      belts.current.forEach((belt, index) => {
        const direction = index % 2 === 0 ? 1 : -1; // Dirección alternada
        belt.style.transform = `translateX(${direction * (Date.now() / 100 % 100)}%)`;
      });
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center overflow-hidden relative bg-gray-50">
      {/* Cinturones de imágenes */}
      {[0, 1, 2, 3].map((belt) => (
        <div 
          key={belt}
          ref={el => belts.current[belt] = el}
          className={`absolute flex space-x-8 ${[
            'top-10',    // Primer cinturón cerca del borde superior
            'top-1/3',   // Segundo cinturón
            'bottom-1/3', // Tercer cinturón
            'bottom-10'  // Cuarto cinturón cerca del borde inferior
          ][belt]}`}
          style={{
            animation: `${belt % 2 === 0 ? 'moveRight' : 'moveLeft'} ${30 + belt * 5}s linear infinite`
          }}
        >
          {[...Array(10)].map((_, i) => (
            <div key={i} className="w-32 h-32 flex-shrink-0">
              <img 
                src={`/src/assets/images/logo.jpg`} 
                alt="" 
                className="w-full h-full object-contain opacity-20"
              />
            </div>
          ))}
        </div>
      ))}

      {/* Formulario de login */}
      <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-md w-full max-w-md relative z-10">
        <h1 className="text-2xl font-bold text-center mb-6">Iniciar Sesión</h1>
        <LoginForm />
      </div>

      {/* Animaciones CSS */}
      <style jsx>{`
        @keyframes moveRight {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes moveLeft {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};

export default Login;