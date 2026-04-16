import { siteConfig } from '@/lib/site-config';

type SocialImageProps = {
  title: string;
  subtitle: string;
};

export function SocialImage({ title, subtitle }: SocialImageProps) {
  return (
    <div
      style={{
        display: 'flex',
        height: '100%',
        width: '100%',
        background: 'linear-gradient(135deg, #050816 0%, #0f172a 55%, #1e293b 100%)',
        color: '#f8fafc',
        fontFamily: 'sans-serif',
        padding: '64px',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: '100%',
          border: '1px solid rgba(148, 163, 184, 0.28)',
          borderRadius: '32px',
          padding: '56px',
          background: 'radial-gradient(circle at top right, rgba(59, 130, 246, 0.18), transparent 34%), rgba(15, 23, 42, 0.78)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <div
            style={{
              display: 'flex',
              height: '16px',
              width: '16px',
              borderRadius: '9999px',
              background: '#60a5fa',
              boxShadow: '0 0 32px rgba(96, 165, 250, 0.75)',
            }}
          />
          <div
            style={{
              display: 'flex',
              fontSize: '28px',
              color: '#cbd5e1',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            AI Engineer London
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            maxWidth: '820px',
          }}
        >
          <div
            style={{
              display: 'flex',
              fontSize: '86px',
              lineHeight: 1,
              fontWeight: 700,
              letterSpacing: '-0.04em',
            }}
          >
            {title}
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: '36px',
              lineHeight: 1.3,
              color: '#cbd5e1',
            }}
          >
            {subtitle}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: '16px',
            }}
          >
            {['Workflow SDK', 'AI SDK', 'Sandbox', 'Resumable Streams'].map((item) => (
              <div
                key={item}
                style={{
                  display: 'flex',
                  padding: '12px 20px',
                  borderRadius: '9999px',
                  border: '1px solid rgba(148, 163, 184, 0.28)',
                  background: 'rgba(15, 23, 42, 0.72)',
                  fontSize: '24px',
                  color: '#e2e8f0',
                }}
              >
                {item}
              </div>
            ))}
          </div>

          <div
            style={{
              display: 'flex',
              fontSize: '24px',
              color: '#94a3b8',
            }}
          >
            {siteConfig.url.replace('https://', '')}
          </div>
        </div>
      </div>
    </div>
  );
}
