import * as Dialog from '@radix-ui/react-dialog';

type Props = { open: boolean; html: string; onClose: () => void };

export function EmailPreviewDialog({ open, html, onClose }: Props) {
  return (
    <Dialog.Root open={open} onOpenChange={(o) => !o && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 1000 }}
        />
        <Dialog.Content
          style={{
            position: 'fixed', top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)', background: '#fff',
            borderRadius: 6, width: '90%', maxWidth: 700, maxHeight: '80vh',
            overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.25)', zIndex: 1001,
          }}
        >
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            background: '#5fa2dd', color: '#fff', padding: '10px 16px',
          }}>
            <Dialog.Title style={{ margin: 0, fontSize: 16 }}>Email Preview</Dialog.Title>
            <button onClick={onClose} aria-label="Close"
              style={{ background: 'transparent', border: 'none', color: '#fff',
                       fontSize: 18, cursor: 'pointer' }}>
              ✕
            </button>
          </div>

          {/* render the returned HTML safely-scoped */}
          <div
            style={{ padding: 16, overflow: 'auto', maxHeight: 'calc(80vh - 100px)' }}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}


<EmailPreviewDialog
  open={oasisOpen}
  html={oasisHtml}
  onClose={() => setOasisOpen(false)}
/>
