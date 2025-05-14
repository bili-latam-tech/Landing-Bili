import { useEffect, useRef } from 'react';

interface SuccessModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  message: string;
  buttonText?: string;
}

export default function SuccessModal({ open, onClose, title, message, buttonText = '¡Entendido!' }: SuccessModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    document.body.classList.add('overflow-hidden');
    buttonRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'Tab' && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        } else if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.classList.remove('overflow-hidden');
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center">
      <div
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity cursor-pointer"
        aria-hidden="true"
        onClick={onClose}
      />
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        tabIndex={-1}
        className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl w-full max-w-xs sm:max-w-md mx-4 p-5 sm:p-8 animate-fade-in-up"
        style={{ zIndex: 1010 }}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-2 rounded-full text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Cerrar"
          style={{ touchAction: 'manipulation' }}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center justify-center h-16 w-16 rounded-full bg-green-100 dark:bg-green-900 mb-5 mt-2">
            <svg className="h-8 w-8 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2 leading-snug" id="modal-title">{title}</h3>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-7 sm:mb-6 leading-relaxed">{message}</p>
          <button
            ref={buttonRef}
            type="button"
            className="w-full inline-flex justify-center rounded-lg border border-transparent shadow-sm px-6 py-3 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
            onClick={onClose}
          >
            {buttonText}
          </button>
        </div>
      </div>
      <style jsx global>{`
        .animate-fade-in-up {
          animation: fadeInUp 0.3s cubic-bezier(0.4,0,0.2,1);
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
} 