npm i @radix-ui/react-alert-dialog @hookform/resolvers

import * as AlertDialog from '@radix-ui/react-alert-dialog';

type Props = { open: boolean; message: string; onClose: () => void };

export function ValidationAlert({ open, message, onClose }: Props) {
  return (
    <AlertDialog.Root open={open} onOpenChange={(o) => !o && onClose()}>
      <AlertDialog.Portal>
        {/* dimmed backdrop */}
        <AlertDialog.Overlay
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 1000 }}
        />
        {/* centered dialog */}
        <AlertDialog.Content
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)', // <- centering
            background: '#fff',
            borderRadius: 8,
            padding: 24,
            maxWidth: 360,
            width: '90%',
            textAlign: 'center', // <- message centered
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
            zIndex: 1001,
          }}
        >
          <AlertDialog.Title style={{ margin: '0 0 8px', fontSize: 18 }}>
            Validation error
          </AlertDialog.Title>
          <AlertDialog.Description style={{ margin: '0 0 20px' }}>
            {message}
          </AlertDialog.Description>
          <AlertDialog.Action asChild>
            <button style={{ padding: '8px 24px' }} onClick={onClose}>
              OK
            </button>
          </AlertDialog.Action>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}
