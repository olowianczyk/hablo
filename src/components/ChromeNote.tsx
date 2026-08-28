import { useUi } from '../lib/useUi';
import { isRecognitionSupported } from '../lib/speech';

/** Chrome is the only browser shipping SpeechRecognition — say so before the user taps the mic. */
export function ChromeNote() {
  const { t } = useUi();
  const supported = isRecognitionSupported();
  return (
    <div
      role="note"
      style={{
        display: 'flex', gap: 9, alignItems: 'flex-start', margin: '12px 0', padding: '10px 13px', borderRadius: 12,
        fontSize: 12.5, lineHeight: 1.45, fontWeight: 600,
        background: supported ? 'var(--panel-soft)' : 'var(--warn-soft)',
        color: supported ? 'var(--muted)' : 'var(--warn)',
      }}
    >
      <span aria-hidden="true" style={{ fontWeight: 800 }}>i</span>
      <span>{supported ? t.chromeNote : t.recUnsupported}</span>
    </div>
  );
}
