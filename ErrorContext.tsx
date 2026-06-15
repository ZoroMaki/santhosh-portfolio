import { createContext, useContext, useState, ReactNode } from 'react';
import { ErrorModal } from './ErrorModal';

const ErrorContext = createContext<(message: string) => void>(() => {});

export function ErrorProvider({ children }: { children: ReactNode }) {
  const [message, setMessage] = useState<string | null>(null);

  return (
    <ErrorContext.Provider value={setMessage}>
      {children}
      {message && <ErrorModal message={message} onClose={() => setMessage(null)} />}
    </ErrorContext.Provider>
  );
}

export function useErrorModal() {
  return useContext(ErrorContext);
}
