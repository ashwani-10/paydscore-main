import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const NAV_LINKS = [
    { label: 'How It Works', to: '/how-it-works' },
    { label: 'Intel', to: '/intel' },
    { label: 'About', to: '/about' },
];

export function SharedNavbar() {
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 8);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);



    const isActive = (to: string) => location.pathname === to;

    return (
        <>
            {/* Spacer to prevent content jump under fixed header */}
            <div className="hp-nav-spacer" style={{ height: '64px' }} />

            <header
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 200,
                    background: scrolled ? 'rgba(255,255,255,0.98)' : '#FFFFFF',
                    backdropFilter: scrolled ? 'blur(20px)' : 'none',
                    borderBottom: '1px solid #E2E8F0',
                    boxShadow: scrolled ? '0 4px 24px rgba(14,30,54,0.08)' : 'none',
                    transition: 'all 0.3s ease',
                }}
            >

                <div style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    padding: '0 24px',
                    height: '64px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '24px',
                }}>
                    {/* Logo */}
                    <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0 }}>
                        <img src="/logo-wordmark.png" alt="Paydscore" style={{ height: '28px', width: 'auto' }} />
                    </Link>

                    {/* Desktop nav links */}
                    <nav style={{ display: 'flex', alignItems: 'center', gap: '4px' }} className="desktop-nav">
                        {NAV_LINKS.map(link => (
                            <Link
                                key={link.to}
                                to={link.to}
                                style={{
                                    fontSize: '14px',
                                    fontWeight: 600,
                                    color: isActive(link.to) ? '#1C2C4A' : '#64748B',
                                    padding: '8px 14px',
                                    borderRadius: '10px',
                                    textDecoration: 'none',
                                    background: isActive(link.to) ? '#F1F5F9' : 'transparent',
                                    transition: 'all 0.2s ease',
                                    fontFamily: 'Inter, sans-serif',
                                }}
                                onMouseEnter={e => { (e.target as HTMLElement).style.background = '#F1F5F9'; (e.target as HTMLElement).style.color = '#1C2C4A'; }}
                                onMouseLeave={e => { if (!isActive(link.to)) { (e.target as HTMLElement).style.background = 'transparent'; (e.target as HTMLElement).style.color = '#64748B'; } }}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop CTAs */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }} className="desktop-nav">
                        <a
                            href="https://claims.paydscore.com"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '6px',
                                fontSize: '14px',
                                fontWeight: 700,
                                color: '#1C2C4A',
                                background: '#6FEFB3',
                                padding: '10px 20px',
                                borderRadius: '12px',
                                textDecoration: 'none',
                                transition: 'all 0.2s ease',
                                fontFamily: 'Inter, sans-serif',
                            }}
                            onMouseEnter={e => { (e.currentTarget).style.background = '#4de8a0'; (e.currentTarget).style.boxShadow = '0 8px 24px rgba(111,239,179,0.4)'; }}
                            onMouseLeave={e => { (e.currentTarget).style.background = '#6FEFB3'; (e.currentTarget).style.boxShadow = 'none'; }}
                        >
                            Contribute <ArrowUpRight size={14} />
                        </a>
                    </div>


                </div>

                {/* ─── Mobile pill-strip nav (below main bar) ─── */}
                <div
                    className="mobile-pill-strip"
                    style={{
                        borderTop: '1px solid #F1F5F9',
                        padding: '8px 16px',
                        overflowX: 'auto',
                        display: 'none',
                        gap: '8px',
                        scrollbarWidth: 'none',
                        WebkitOverflowScrolling: 'touch',
                    }}
                >
                    {NAV_LINKS.map(link => (
                        <Link
                            key={link.to}
                            to={link.to}
                            style={{
                                flexShrink: 0,
                                fontSize: '13px',
                                fontWeight: 600,
                                color: isActive(link.to) ? '#1C2C4A' : '#64748B',
                                background: isActive(link.to) ? '#1C2C4A' : '#F1F5F9',
                                padding: '7px 16px',
                                borderRadius: '100px',
                                textDecoration: 'none',
                                display: 'inline-block',
                                whiteSpace: 'nowrap',
                                transition: 'all 0.2s ease',
                                fontFamily: 'Inter, sans-serif',
                                ...(isActive(link.to) ? { color: '#6FEFB3' } : {}),
                            }}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <a
                        href="https://claims.paydscore.com"
                        style={{
                            flexShrink: 0,
                            fontSize: '13px',
                            fontWeight: 700,
                            color: '#1C2C4A',
                            background: '#6FEFB3',
                            padding: '7px 16px',
                            borderRadius: '100px',
                            textDecoration: 'none',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px',
                            whiteSpace: 'nowrap',
                            fontFamily: 'Inter, sans-serif',
                        }}
                    >
                        Contribute <ArrowUpRight size={12} />
                    </a>
                </div>
            </header>



            <style>{`
                @media (max-width: 768px) {
                    .hp-nav-spacer { height: 110px !important; }
                    .desktop-nav { display: none !important; }
                    .mobile-pill-strip { 
                        display: flex !important; 
                        background: ${scrolled ? 'rgba(255,255,255,0.98)' : '#FFFFFF'};
                    }
                }
            `}</style>

        </>
    );
}
