import * as AlertDialog from '@radix-ui/react-alert-dialog';

type Props = { open: boolean; message: string; onClose: () => void };

export function ValidationAlert({ open, message, onClose }: Props) {
  return (
    <AlertDialog.Root open={open} onOpenChange={(o) => !o && onClose()}>
      <AlertDialog.Portal>
        <AlertDialog.Overlay
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 1000 }}
        />
        <AlertDialog.Content
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: '#fff',          // body white
            borderRadius: 6,
            width: '90%',
            maxWidth: 380,
            overflow: 'hidden',          // keeps header corners rounded
            boxShadow: '0 10px 30px rgba(0,0,0,0.25)',
            zIndex: 1001,
          }}
        >
          {/* Header: title left, X far right */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: '#5fa2dd',     // header color
              color: '#fff',
              padding: '10px 16px',
            }}
          >
            <AlertDialog.Title style={{ margin: 0, fontSize: 16, textAlign: 'left' }}>
              Alert
            </AlertDialog.Title>
            <button
              onClick={onClose}
              aria-label="Close"
              style={{
                background: 'transparent',
                border: 'none',
                color: '#fff',
                fontSize: 18,
                lineHeight: 1,
                cursor: 'pointer',
                padding: 0,
              }}
            >
              ✕
            </button>
          </div>

          {/* Body: left-aligned text on white */}
          <AlertDialog.Description
            style={{ margin: 0, padding: '20px 16px', textAlign: 'left', color: '#333' }}
          >
            {message}
          </AlertDialog.Description>

          {/* Footer: gray OK button */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '0 16px 16px' }}>
            <AlertDialog.Action asChild>
              <button
                onClick={onClose}
                style={{
                  background: '#e0e0e0',  // light gray OK
                  border: '1px solid #ccc',
                  borderRadius: 4,
                  padding: '6px 20px',
                  cursor: 'pointer',
                }}
              >
                OK
              </button>
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}
