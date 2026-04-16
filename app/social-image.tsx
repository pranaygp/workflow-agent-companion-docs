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
        backgroundColor: '#000',
        color: '#fff',
        fontFamily: 'sans-serif',
        padding: '48px',
        flexDirection: 'column',
      }}
    >
      {/* Top: Vercel triangle + workshop label */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
        }}
      >
        {/* Vercel-style triangle */}
        <svg
          width="22"
          height="20"
          viewBox="0 0 76 65"
          fill="white"
        >
          <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" />
        </svg>
        <div
          style={{
            display: 'flex',
            fontSize: '20px',
            color: '#888',
            letterSpacing: '0.02em',
          }}
        >
          Workflow GA Workshop
        </div>
      </div>

      {/* Center: Title + subtitle */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          justifyContent: 'center',
          gap: '16px',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: '72px',
            lineHeight: 1.05,
            fontWeight: 700,
            letterSpacing: '-0.04em',
          }}
        >
          {title}
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: '28px',
            lineHeight: 1.4,
            color: '#666',
            letterSpacing: '-0.01em',
          }}
        >
          {subtitle}
        </div>
      </div>


    </div>
  );
}
