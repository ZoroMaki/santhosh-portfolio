import { createContext, useContext, useState, useCallback, useMemo } from 'react';
import { AlertDialogBox } from './AlertDialogBox'; // your Radix "Alert" dialog

type Notify = { warn: (m: string) => void; error: (m: string) => void; info: (m: string) => void };

const NotifyContext = createContext<Notify | null>(null);

export function NotifyProvider({ children }: { children: React.ReactNode }) {
  const [msg, setMsg] = useState('');

  const warn  = useCallback((m: string) => setMsg(m), []);
  const error = useCallback((m: string) => setMsg(m), []);
  const info  = useCallback((m: string) => setMsg(m), []);

  const value = useMemo(() => ({ warn, error, info }), [warn, error, info]);

  return (
    <NotifyContext.Provider value={value}>
      {children}
      {/* one shared dialog for the whole app */}
      <AlertDialogBox open={!!msg} message={msg} onClose={() => setMsg('')} />
    </NotifyContext.Provider>
  );
}

export function useNotify(): Notify {
  const ctx = useContext(NotifyContext);
  if (!ctx) throw new Error('useNotify must be used within <NotifyProvider>');
  return ctx; // already memoized, safe in dependency arrays
}
