import { useEffect, useRef, useState } from 'react';
import { useHablo } from '../store';
import { useUi } from '../lib/useUi';

export function InstallPrompt() {
  const { t } = useUi();
  const showInstall = useHablo((s) => s.showInstall);
  const setShowInstall = useHablo((s) => s.setShowInstall);
  const [showHelp, setShowHelp] = useState(false);
  const deferredRef = useRef<any>(null);

  useEffect(() => {
    const onBeforeInstall = (e: any) => {
      e.preventDefault();
      deferredRef.current = e;
    };
    window.addEventListener('beforeinstallprompt', onBeforeInstall);
    const dismissed = localStorage.getItem('hablo_install_dismissed');
    const standalone = window.matchMedia && window.matchMedia('(display-mode: standalone)').matches;
    let timer: number | undefined;
    if (!dismissed && !standalone) {
      timer = window.setTimeout(() => setShowInstall(true), 900);
    }
    return () => {
      window.removeEventListener('beforeinstallprompt', onBeforeInstall);
      if (timer) clearTimeout(timer);
    };
  }, [setShowInstall]);

  if (!showInstall) return null;

  const dismiss = () => {
    try {
      localStorage.setItem('hablo_install_dismissed', '1');
    } catch {
      /* storage unavailable */
    }
    setShowInstall(false);
  };

  const install = async () => {
    const d = deferredRef.current;
    if (d) {
      try {
        d.prompt();
        await d.userChoice;
        deferredRef.current = null;
        setShowInstall(false);
      } catch {
        setShowHelp(true);
      }
    } else {
      setShowHelp(true);
    }
  };

  return (
    <div onClick={dismiss} style={{ position: 'fixed', inset: 0, zIndex: 100, background: 'rgba(0,0,0,.45)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
      <div onClick={(e) => e.stopPropagation()} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 22, padding: 30, maxWidth: 400, width: '100%', textAlign: 'center', boxShadow: '0 30px 70px rgba(0,0,0,.35)' }}>
        <div style={{ width: 76, height: 76, borderRadius: 20, margin: '0 auto', background: 'linear-gradient(145deg,var(--accent),#E0A030)', position: 'relative', boxShadow: '0 10px 24px rgba(0,0,0,.2)' }}>
          <div style={{ position: 'absolute', top: 27, left: 22, width: 11, height: 11, borderRadius: '50%', background: '#fff' }} />
          <div style={{ position: 'absolute', top: 27, right: 22, width: 11, height: 11, borderRadius: '50%', background: '#fff' }} />
          <div style={{ position: 'absolute', bottom: 20, left: '50%', transform: 'translateX(-50%)', width: 24, height: 12, borderBottom: '3px solid #fff', borderRadius: '0 0 18px 18px' }} />
        </div>
        <div style={{ fontSize: 20, fontWeight: 800, marginTop: 18, color: 'var(--ink)' }}>{t.installTitle}</div>
        <div style={{ fontSize: 14, color: 'var(--muted)', marginTop: 8, lineHeight: 1.5 }}>{t.installBody}</div>
        {showHelp && <div style={{ fontSize: 12.5, color: 'var(--ink-2)', background: 'var(--panel)', borderRadius: 12, padding: 12, marginTop: 14, lineHeight: 1.45 }}>{t.installHelp}</div>}
        <div onClick={install} style={{ marginTop: 20, background: 'var(--accent)', color: '#fff', fontWeight: 800, fontSize: 15, padding: 14, borderRadius: 14, cursor: 'pointer' }}>{t.installBtn}</div>
        <div onClick={dismiss} style={{ marginTop: 10, color: 'var(--muted)', fontWeight: 700, fontSize: 13.5, cursor: 'pointer' }}>{t.installLater}</div>
      </div>
    </div>
  );
}
