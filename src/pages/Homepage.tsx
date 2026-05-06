import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, AnimatePresence } from 'framer-motion';


import {
    TrendingUp, FileText, Lock, Search,
    CheckCircle, XCircle, Globe,
    Flag, ArrowRight, AlertTriangle, Activity, Clock
} from 'lucide-react';
import { SharedNavbar } from '../components/SharedNavbar';
import { SharedFooter } from '../components/SharedFooter';
import './Homepage.css';

// ─── Fictional / Illustrative Data ──────────────────────────────────────────
// All names below are entirely fictitious. Any resemblance to real entities is
// coincidental. This data is illustrative only — used to set user expectations.

const ILLUSTRATIVE_SCORECARDS = [
    { name: 'Creative Agency Pvt. Ltd.', meta: 'Mumbai · 14 reports', score: 34, risk: 'High Risk', color: '#DC2626', bg: '#FEF2F2' },
    { name: 'Logistics Grp Pvt. Ltd.', meta: 'Bengaluru · 4 reports', score: 84, risk: 'Low Risk', color: '#059669', bg: '#ECFDF5' },
    { name: 'Infrastructure Grp Pvt. Ltd.', meta: 'Delhi · 22 reports', score: 21, risk: 'High Risk', color: '#DC2626', bg: '#FEF2F2' },
];

const INDUSTRY_DELAYS = [
    { name: 'Real Estate', val: 67, color: '#EF4444', pct: 96 },
    { name: 'Media & Entertainment', val: 51, color: '#F59E0B', pct: 73 },
    { name: 'FMCG / D2C', val: 34, color: '#F59E0B', pct: 49 },
    { name: 'Tech / SaaS', val: 12, color: '#10B981', pct: 17 },
];



const VERTICALS = [
    'Creative Agencies', 'SaaS Vendors', 'Freelancers', 'Event Operations',
    'Digital Marketing', 'PR & Communications', 'Legal & Compliance',
    'Architecture & Design', 'Production Houses', 'Consultants'
];

// ─── Utility: Scroll Reveal Hook ────────────────────────────────────────────
function useScrollReveal() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });
    return { ref, isInView };
}

// ─── Animated Counter ────────────────────────────────────────────────────────
function AnimatedStat({ value, suffix = '', prefix = '' }: { value: number; suffix?: string; prefix?: string }) {
    const [display, setDisplay] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true });

    useEffect(() => {
        if (!inView) return;
        const start = Date.now();
        const duration = 1200;
        const tick = () => {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(Math.round(eased * value));
            if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
    }, [inView, value]);

    return <span ref={ref}>{prefix}{display}{suffix}</span>;
}



// ─── Hero Section ────────────────────────────────────────────────────────────
function HeroSection() {
    return (
        <div className="hp-hero">
            {/* Left copy */}
            <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
                <div className="hp-hero-eyebrow-v2">
                    <div className="hp-eyebrow-tag">
                        <span className="hp-live-dot"></span>
                        LIVE LEDGER
                    </div>
                    <span className="hp-eyebrow-text">
                        India&apos;s B2B Payment Reliability Network
                    </span>
                </div>

                <h1 className="hp-hero-headline">
                    Know the score<br />
                    <em>before you sign.</em>
                </h1>

                <p className="hp-hero-sub">
                    Paydscore is a community-driven B2B payment intelligence ledger.
                    Log honest payment experiences. Build your financial reputation.
                    Search clients before you say yes.
                </p>

                <div className="hp-hero-actions">
                    <a href="https://claims.paydscore.com" className="hp-btn-primary green no-underline">
                        Contribute data
                        <ArrowRight size={16} />
                    </a>
                    <Link to="/waitlist" className="hp-btn-ghost no-underline border-none cursor-pointer flex items-center gap-2" style={{ height: '56px', padding: '0 32px' }}>
                        Join Waitlist
                        <ArrowRight size={16} />
                    </Link>
                </div>

                {/* New: Highlighted Search Mockup */}
                <div className="hp-hero-search-wrapper">
                    <div className="hp-hero-search-mock">
                        <div className="hp-hero-search-content">
                            <Search size={18} color="#94A3B8" />
                            <span className="hp-hero-search-text">
                                <span className="hidden sm:inline">Search any company (e.g. "Agency Grp Pvt Ltd")</span>
                                <span className="sm:hidden">Search any company...</span>
                            </span>
                        </div>
                        <div className="hp-hero-search-btn">
                            <Lock size={14} /> Locked
                        </div>
                    </div>
                    <div className="hp-hero-search-hint">
                        <Lock size={12} /> Log your first payment experience to unlock India's B2B ledger.
                    </div>
                    <div className="hp-hero-search-tags">
                        <span className="hp-tag green">Section 79 compliant</span>
                        <span className="hp-tag green">DPDP Act aligned</span>
                        <span className="hp-tag green">Facts only. Never opinions.</span>
                    </div>
                </div>
            </motion.div>

            {/* Right: scorecard preview */}
            <motion.div
                className="hp-hero-card"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
                <div className="hp-hero-card-label">Sample Ledger · Illustrative only</div>

                {ILLUSTRATIVE_SCORECARDS.map((c, i) => (
                    <motion.div
                        key={c.name}
                        className="hp-scorecard-item"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + i * 0.12 }}
                    >
                        <div>
                            <div className="hp-scorecard-name">{c.name}</div>
                            <div className="hp-scorecard-meta">{c.meta}</div>
                        </div>
                        <div style={{ textAlign: 'right', flexShrink: 0 }}>
                            <div className="hp-scorecard-score" style={{ color: c.color }}>{c.score}</div>
                            <div className="hp-scorecard-badge" style={{ color: c.color, background: c.bg }}>{c.risk}</div>
                        </div>
                    </motion.div>
                ))}

                <div className="hp-hero-card-note">
                    ⚠️ SAMPLE LEDGER: The data above is strictly for illustrative purposes to demonstrate platform functionality. Any resemblance to real entities is purely coincidental. Actual data populates only through authenticated user contributions.
                </div>
            </motion.div>
        </div>
    );
}

// ─── Manifesto Block ─────────────────────────────────────────────────────────
function ManifestoSection() {
    const { ref, isInView } = useScrollReveal();
    return (
        <div className="hp-band hp-manifesto-band">
            <motion.div
                ref={ref}
                className="hp-manifesto"
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7 }}
            >
                <p className="hp-manifesto-quote">
                    "This is not a place to<br />
                    <strong>vent frustration.</strong><br />
                    It is a place to log <strong>verified facts</strong> —<br />
                    and build a financial identity<br />
                    the market will respect."
                </p>
                <p className="hp-manifesto-sub">
                    Every entry on Paydscore is timestamped, document-backed, and legally attested.
                    One unverified claim never becomes a score. We are an open ledger — not a grievance portal.
                </p>
            </motion.div>
        </div>
    );
}

// ─── Expectation Setter ───────────────────────────────────────────────────────
function ExpectationSection() {
    const { ref, isInView } = useScrollReveal();
    const [tab, setTab] = useState<'yes' | 'no'>('yes');

    const IS_ITEMS = [
        'A factual, document-backed ledger of B2B payment experiences — good and bad.',
        'A platform for freelancers, agencies & consultants to build a public financial identity.',
        'An intelligence tool that helps you vet clients before accepting projects.',
        'A platform building tools like Smart Deal Memos to automate your follow-ups.',
        'Community-driven, where credibility increases with verified contributions.',
    ];

    const IS_NOT_ITEMS = [
        'A place to post unverified allegations, personal opinions, or emotional accounts.',
        'An anonymous complaint board. Every reporter\'s identity is verified.',
        'A defamation tool. Reports that can\'t be document-backed are not published.',
        'A legal filing service. We surface facts, not judgements.',
        'A platform for vendors to target competitors or settle personal disputes.',
    ];

    return (
        <section className="hp-section">
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
            >
                <span className="hp-eyebrow">Before you begin</span>
                <h2 className="hp-h2">Know what <em>Paydscore is</em> — and what it isn't.</h2>
                <p className="hp-lead">
                    We built Paydscore to protect the independent professional.
                    That means precision matters more than volume.
                    Read this before you log your first entry.
                </p>

                {/* ── Desktop: 2-col side-by-side grid (unchanged) ─── */}
                <div id="what-is-paydscore" />
                <div className="hp-expectation-grid">
                    <div className="hp-expect-card yes">
                        <div className="hp-expect-header yes">
                            <CheckCircle size={24} color="#059669" />
                            Paydscore IS…
                        </div>
                        <ul className="hp-expect-list">
                            {IS_ITEMS.map((item, i) => (
                                <li key={i}>
                                    <span className="hp-expect-icon"><CheckCircle size={16} color="#10B981" /></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="hp-expect-card no">
                        <div className="hp-expect-header no">
                            <XCircle size={24} color="#E11D48" />
                            Paydscore is NOT…
                        </div>
                        <ul className="hp-expect-list">
                            {IS_NOT_ITEMS.map((item, i) => (
                                <li key={i}>
                                    <span className="hp-expect-icon"><XCircle size={16} color="#E11D48" /></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* ── Mobile: Tab toggle (IS / IS NOT) ─── */}
                <div className="hp-expect-tabs">
                    {/* Tab switcher bar */}
                    <div className="hp-expect-tab-bar">
                        <button
                            className={`hp-expect-tab-btn ${tab === 'yes' ? 'active-yes' : ''}`}
                            onClick={() => setTab('yes')}
                        >
                            <CheckCircle size={16} />
                            Paydscore IS
                        </button>
                        <button
                            className={`hp-expect-tab-btn ${tab === 'no' ? 'active-no' : ''}`}
                            onClick={() => setTab('no')}
                        >
                            <XCircle size={16} />
                            IS NOT
                        </button>
                    </div>

                    {/* Tab panel */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={tab}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.22 }}
                            className={`hp-expect-tab-panel ${tab === 'yes' ? 'panel-yes' : 'panel-no'}`}
                        >
                            <ul className="hp-expect-tab-list">
                                {(tab === 'yes' ? IS_ITEMS : IS_NOT_ITEMS).map((item, i) => (
                                    <li key={i} className="hp-expect-tab-item">
                                        <span className="hp-expect-tab-icon">
                                            {tab === 'yes'
                                                ? <CheckCircle size={18} color="#10B981" />
                                                : <XCircle size={18} color="#E11D48" />
                                            }
                                        </span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </motion.div>
        </section>
    );
}


// ─── Stats Row ────────────────────────────────────────────────────────────────

function StatsSection() {
    const { ref, isInView } = useScrollReveal();
    return (
        <div className="hp-band-green">
            <div className="hp-section" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="hp-eyebrow slate" style={{ textAlign: 'center', display: 'block', marginBottom: '32px' }}>
                        Market intelligence · Illustrative data based on industry research
                    </span>
                    <div className="hp-scroll-hint"><span className="hp-scroll-hint-dot" /> Swipe for more stats</div>
                    <div className="hp-stats-row hp-h-scroll">
                        <div className="hp-carousel-spacer" />
                        <div className="hp-stat-cell">
                            <div className="hp-stat-number red">
                                {isInView && <AnimatedStat value={47} suffix="d" />}
                            </div>
                            <div className="hp-stat-caption">Average payment delay beyond invoice due date across Indian MSMEs</div>
                            <div className="hp-stat-note">Industry research estimate</div>
                        </div>
                        <div className="hp-stat-cell">
                            <div className="hp-stat-number amber">
                                {isInView && <AnimatedStat value={38} suffix="%" />}
                            </div>
                            <div className="hp-stat-caption">of B2B clients have at least one delayed payment report against them</div>
                            <div className="hp-stat-note">More than 1 in 3</div>
                        </div>
                        <div className="hp-stat-cell">
                            <div className="hp-stat-number green">
                                {isInView && <AnimatedStat value={82} suffix="%" />}
                            </div>
                            <div className="hp-stat-caption">Recovery rate for claims logged on Paydscore within 14 days</div>
                            <div className="hp-stat-note">Community-reported efficiency</div>
                        </div>
                        <div className="hp-stat-cell">
                            <div className="hp-stat-number" style={{ color: '#4F46E5' }}>
                                {isInView && <AnimatedStat value={26} suffix="%" />}
                            </div>
                            <div className="hp-stat-caption">of clients are reported by more than one independent agency — a pattern, not a coincidence</div>
                            <div className="hp-stat-note">Repeat defaulters</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}




// ─── Flag Mechanic (Green / Red Flags) ───────────────────────────────────────
function FlagMechanicSection() {
    const { ref, isInView } = useScrollReveal();
    return (
        <section className="hp-section">
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
            >
                <span className="hp-eyebrow">How you contribute</span>
                <h2 className="hp-h2">Green Flags. Red Flags. <em>Real signals.</em></h2>
                <p className="hp-lead">
                    Paydscore uses a dual-flag system — not just a complaint box. Logging positive experiences is just as important as flagging chronic defaulters. Both build your credibility.
                </p>
            </motion.div>

            <div id="flags" className="hp-flag-grid hp-h-scroll">
                <div className="hp-carousel-spacer" />
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="hp-flag-card green"
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                        <div style={{ width: '44px', height: '44px', borderRadius: '14px', background: '#D1FAE5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <CheckCircle size={22} color="#059669" />
                        </div>
                        <div>
                            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '20px', fontWeight: 800, color: '#065F46' }}>Log a Green Flag</div>
                            <div style={{ fontSize: '13px', color: '#059669', marginTop: '2px', fontWeight: 600 }}>Build your brand reputation</div>
                        </div>
                    </div>
                    <p style={{ fontSize: '14px', color: '#065F46', lineHeight: 1.7, marginBottom: '20px' }}>
                        "My client paid in 12 days. Clear communication, professional finance team, zero follow-up needed." Log it — and boost the brand's score while growing your own credibility.
                    </p>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                        <span className="hp-tag green">On Time</span>
                        <span className="hp-tag green">Net-30 Honoured</span>
                        <span className="hp-tag green">Professional Finance Team</span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="hp-flag-card red"
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                        <div style={{ width: '44px', height: '44px', borderRadius: '14px', background: '#FFE4E6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Flag size={22} color="#E11D48" />
                        </div>
                        <div>
                            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '20px', fontWeight: 800, color: '#9F1239' }}>Log a Red Flag</div>
                            <div style={{ fontSize: '13px', color: '#E11D48', marginTop: '2px', fontWeight: 600 }}>Triggers 14-Day Resolution Window</div>
                        </div>
                    </div>
                    <p style={{ fontSize: '14px', color: '#9F1239', lineHeight: 1.7, marginBottom: '20px' }}>
                        "My client has been 60 days overdue and has gone dark." Log it with your invoice and email thread — Paydscore creates a factual, document-backed record that holds the brand accountable in the community ledger.
                    </p>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                        <span className="hp-tag red">Ghosted</span>
                        <span className="hp-tag red">60+ Days Overdue</span>
                        <span className="hp-tag amber">14-Day Notice Sent</span>
                    </div>
                </motion.div>
            </div>

            {/* Industry Verticals */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="hp-verticals-card"
            >
                <div style={{ marginBottom: '20px' }}>
                    <span className="hp-eyebrow">Industry Verticals</span>
                    <p style={{ fontSize: '14px', color: '#64748B' }}>
                        Colour-coded by vertical — like subreddits, but for your industry's payment culture.
                    </p>
                </div>
                <div className="hp-verticals-grid">
                    {VERTICALS.map(v => (
                        <span key={v} className="hp-vertical-chip">{v}</span>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}

// ─── Industry Risk Section ────────────────────────────────────────────────────
function IndustryRiskSection() {
    const { ref, isInView } = useScrollReveal();
    return (
        <div className="hp-band">
            <section className="hp-section">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 24 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="hp-eyebrow">Market intelligence</span>
                    <h2 className="hp-h2">Some industries pay slow. <em>Know before you pitch.</em></h2>
                    <p className="hp-lead">
                        Average payment delay by industry — illustrative data based on community research. Your vertical benchmark updates weekly once you're logged in.
                    </p>
                </motion.div>

                <div className="hp-industry-bars">
                    {INDUSTRY_DELAYS.map((ind, i) => (
                        <motion.div
                            key={ind.name}
                            className="hp-bar-row"
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.1 + i * 0.12, duration: 0.5 }}
                        >
                            <div className="hp-bar-label">{ind.name}</div>
                            <div className="hp-bar-track">
                                <motion.div
                                    className="hp-bar-fill"
                                    initial={{ width: 0 }}
                        animate={isInView ? { width: `${ind.pct}%` } : { width: 0 }}
                                    transition={{ delay: 0.2 + i * 0.12, duration: 1, ease: 'easeOut' }}
                                    style={{ background: ind.color }}
                                />
                            </div>
                            <div className="hp-bar-val" style={{ color: ind.color }}>{ind.val}d avg</div>
                        </motion.div>
                    ))}
                </div>

                {/* Benchmark card */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    style={{ marginTop: '32px', padding: '24px 28px', background: '#ECFDF5', border: '1px solid #A7F3D0', borderRadius: '20px', display: 'flex', alignItems: 'flex-start', gap: '16px' }}
                >
                    <Activity size={22} color="#059669" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                        <div style={{ fontSize: '15px', fontWeight: 700, color: '#065F46', marginBottom: '4px' }}>
                            Vertical Benchmarks — live after you contribute
                        </div>
                        <div style={{ fontSize: '14px', color: '#047857', lineHeight: 1.6 }}>
                            "The average payment delay in Digital Marketing this week is 42 days.
                            You are collecting <strong>12 days faster</strong> than the market average."
                            These benchmarks keep you informed — and keep bad payers accountable.
                        </div>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}

// ─── Dashboard Merge Preview ──────────────────────────────────────────────────


// ─── Community Intelligence Section ───────────────────────────────────────
function MarketTrendsSection() {
    const { ref, isInView } = useScrollReveal();

    const INSIGHTS = [
        {
            value: '67',
            unit: 'days',
            label: 'Actual avg. Days-to-Pay',
            sub: 'Brands agree to Net 30 — but the community data tells a different story.',
            accent: '#F59E0B',
            icon: <Clock size={20} />,
        },
        {
            value: '63',
            unit: '%',
            label: 'Involved scope creep',
            sub: 'Of all delayed or partial payments, the majority had unbilled work added post-agreement.',
            accent: '#F97316',
            icon: <AlertTriangle size={20} />,
        },
        {
            value: '1 in 4',
            unit: '',
            label: 'Freelancers reported a full default',
            sub: 'In the Creator economy, 25% of logged invoices are marked as ghosted or non-payment.',
            accent: '#EF4444',
            icon: <TrendingUp size={20} />,
        },
        {
            value: '34',
            unit: '%',
            label: 'Are Green Flags',
            sub: 'The ledger isn\'t just for chronic defaulters. A third of all logged experiences are on-time payments.',
            accent: '#10B981',
            icon: <CheckCircle size={20} />,
        },
    ];

    return (
        <section className="hp-section hp-trends-section">
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                style={{ marginBottom: '56px' }}
            >
                <span className="hp-eyebrow">Community Intelligence</span>
                <h2 className="hp-h2">What the data <em>actually</em> says.</h2>
                <p className="hp-lead" style={{ maxWidth: '640px' }}>
                    Every claim logged on Paydscore feeds into India's first real-time B2B payment intelligence layer. Here's what the community is uncovering.
                </p>
            </motion.div>

            <div className="hp-intel-grid">
                {INSIGHTS.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 28 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="hp-intel-card"
                    >
                        <div className="hp-intel-icon" style={{ color: item.accent, background: `${item.accent}12` }}>
                            {item.icon}
                        </div>
                        <div className="hp-intel-value">
                            {item.value}<span className="hp-intel-unit">{item.unit}</span>
                        </div>
                        <div className="hp-intel-label">{item.label}</div>
                        <p className="hp-intel-sub">{item.sub}</p>
                    </motion.div>
                ))}
            </div>

            {/* Bottom context bar */}
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="hp-intel-footer"
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Activity size={16} color="#059669" />
                    <span>Numbers above represent community-reported data. The more people contribute, the sharper these insights become.</span>
                </div>
                <Link 
                    to="/waitlist"
                    className="hp-btn-primary green no-underline border-none cursor-pointer text-sm"
                    style={{ height: '40px', padding: '0 20px', borderRadius: '12px' }}
                >
                    Get exclusive intel
                    <ArrowRight size={14} />
                </Link>
            </motion.div>
        </section>
    );
}

// ─── Testimonial Section ─────────────────────────────────────────────────────
const TESTIMONIALS = [
    {
        name: "Rohan S.",
        company: "Design Agency",
        hook: "“We had one invoice stuck for almost 6 months. Every time we followed up, it was the same thing — ‘it’s in process’, ‘finance will clear it this week’.”",
        detail: "I randomly came across their reels and it felt like finally someone is trying to build a system around this. Logging the claim wasn’t complicated. Shortly after, they replied properly for the first time and then cleared it.",
        author: "Founder, Creative Design Agency",
        initials: "RS"
    },
    {
        name: "Ananya K.",
        company: "Consultancy",
        hook: "“My biggest doubt was — is this going to turn into something bigger than I want? Because sometimes you just want your payment, not a full escalation.”",
        detail: "I spoke to them briefly and understood it’s more about visibility than confrontation. Logging it was actually very simple. And after that, the response from the client was very different. More direct, more serious.",
        author: "Independent Consultant",
        initials: "AK"
    },
    {
        name: "Manas P.",
        company: "Production House",
        hook: "“We weren’t dealing with a bad client overall, but the payment kept getting pushed. I didn’t want to escalate legally.”",
        detail: "Logged the claim after speaking to them. Honestly, much simpler than I expected. It just made the issue visible, and that itself changed how seriously it was handled.",
        author: "Director, Production House",
        initials: "MP"
    },
    {
        name: "Jatin D.",
        company: "Motion Studio",
        hook: "“For me, the biggest thing was mental load. The invoice wasn’t even huge, but it just sat there in my head.”",
        detail: "After seeing their content, I just tried it once. Turned out to be very simple. Just logging it somewhere felt like taking it out of my head and putting it where it belongs. And shortly after, it got resolved.",
        author: "Freelance Motion Designer",
        initials: "JD"
    }
];

function TestimonialSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [lastClickTime, setLastClickTime] = useState(0);

    const active = TESTIMONIALS[activeIndex];

    // Auto-switch logic
    useEffect(() => {
        const timeSinceLastClick = Date.now() - lastClickTime;
        // If the user clicked recently (within the last 100ms), wait 10s. 
        // Otherwise, use the standard 4s cycle.
        const delay = timeSinceLastClick < 100 ? 10000 : 4000;

        const timer = setTimeout(() => {
            setActiveIndex((current) => (current + 1) % TESTIMONIALS.length);
        }, delay);

        return () => clearTimeout(timer);
    }, [activeIndex, lastClickTime]);

    return (
        <section className="hp-section hp-testimonial-section">
            <div className="hp-container-lg">
                {/* Active Testimonial Area */}
                <div className="hp-testimonial-showcase">
                    <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="hp-testimonial-active-content"
                    >
                        <div className="hp-testimonial-quote-mark">“</div>
                        <h3 className="hp-testimonial-hook">
                            {active.hook.replace(/“|”/g, '')}
                        </h3>
                        <p className="hp-testimonial-detail">
                            {active.detail}
                        </p>
                        
                        <div className="hp-testimonial-active-author">
                            <div>
                                <div className="hp-testimonial-name">{active.name}</div>
                                <div className="hp-testimonial-title">{active.author}</div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Switcher Tabs */}
                <div className="hp-testimonial-tabs">
                    {TESTIMONIALS.map((t, i) => (
                        <button
                            key={i}
                            className={`hp-testimonial-tab ${activeIndex === i ? 'active' : ''}`}
                            onClick={() => {
                                setActiveIndex(i);
                                setLastClickTime(Date.now());
                            }}
                        >
                            <div className="hp-tab-name">{t.name}</div>
                            <div className="hp-tab-meta">
                                {t.company}
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}


// ─── Intermediate CTA Strip (NEW) ──────────────────────────────────────────
function IntermediateCta({ title, sub, btnText }: { title: string, sub: string, btnText?: string }) {
    return (
        <div className="hp-band-green">
            <div className="hp-section-sm" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '40px', flexWrap: 'wrap' }}>
                <div style={{ flex: '1', minWidth: '300px' }}>
                    <h3 className="hp-h3" style={{ marginBottom: '8px' }}>{title}</h3>
                    <p style={{ color: '#64748B', fontSize: '15px' }}>{sub}</p>
                </div>
                {btnText && (
                    btnText.toLowerCase().includes('contribute') || btnText.toLowerCase().includes('share') ? (
                        <a 
                            href="https://claims.paydscore.com"
                            className="hp-btn-primary green no-underline border-none cursor-pointer"
                        >
                            {btnText}
                            <ArrowRight size={16} />
                        </a>
                    ) : (
                        <Link 
                            to="/waitlist"
                            className="hp-btn-primary green no-underline border-none cursor-pointer"
                        >
                            {btnText}
                            <ArrowRight size={16} />
                        </Link>
                    )
                )}
            </div>
        </div>
    );
}

// ─── Profile & Join Section (Bento Grid) ───────────────────────────────────────
function JoinSection() {
    const { ref, isInView } = useScrollReveal();
    return (
        <div className="hp-band-green">
            <section className="hp-section">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 24 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}
                >
                    <span className="hp-eyebrow">Phase 2: Early Access</span>
                    <h2 className="hp-h2" style={{ textAlign: 'center' }}>
                        Don't just chase payments.<br />
                        <em>Build your financial authority.</em>
                    </h2>
                    <p style={{ fontSize: '17px', color: '#475569', lineHeight: 1.75, marginBottom: '60px' }}>
                        Join the waitlist for exclusive early access to our full suite of professional tools. 
                        We're building the future of B2B reputation in India.
                    </p>

                    <div className="hp-bento-grid">
                        <div className="hp-bento-card bento-hero">
                            <div className="hp-hiw-icon green"><FileText size={24} color="#059669" /></div>
                            <div className="hp-bento-badge">UPCOMING</div>
                            <h3 className="hp-h3">Smart Deal Memo</h3>
                            <p className="hp-hiw-body">Protect every invoice with automated tracking. Generate legally-compliant dispute records in one click. Waitlist priority.</p>
                            <div className="hp-bento-visual memo-peek">
                                <div className="peek-line"></div>
                                <div className="peek-line short"></div>
                                <div className="peek-tag">⚡ Seamlessly Tracked</div>
                            </div>
                        </div>
                        
                        <div className="hp-bento-card bento-wide">
                            <div className="hp-hiw-icon blue"><Globe size={24} color="#2563EB" /></div>
                            <div className="hp-bento-badge">UPCOMING</div>
                            <div>
                                <h3 className="hp-h3">Verified Profile</h3>
                                <p className="hp-hiw-body">A public financial credibility page at paydscore.com/v/your-name. Secure your handle today.</p>
                            </div>
                        </div>

                        <div className="hp-bento-card bento-tall">
                            <div className="hp-hiw-icon amber"><Search size={24} color="#D97706" /></div>
                            <h3 className="hp-h3">Full Ledger Access</h3>
                            <p className="hp-hiw-body">Search any company in India's B2B payment database. Available immediately after first log.</p>
                            <div className="hp-bento-search-preview">
                                <Search size={14} /> <span>Agency Grp Pvt Ltd...</span>
                            </div>
                        </div>

                        <div className="hp-bento-card">
                            <div className="hp-hiw-icon purple"><TrendingUp size={24} color="#7C3AED" /></div>
                            <div className="hp-bento-badge">UPCOMING</div>
                            <h3 className="hp-h3">Market Intelligence</h3>
                            <p className="hp-hiw-body">Weekly payment behavior trends specifically for your vertical and region.</p>
                        </div>
                    </div>

                    <div style={{ marginTop: '60px' }}>
                        <Link 
                            to="/waitlist"
                            className="hp-btn-primary green no-underline border-none cursor-pointer" 
                            style={{ display: 'inline-flex', width: 'auto' }}
                        >
                            Join Waitlist
                            <ArrowRight size={16} />
                        </Link>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}

// ─── CTA Banner ───────────────────────────────────────────────────────────────
function CtaBanner() {
    const { ref, isInView } = useScrollReveal();
    return (
        <section className="hp-section">
            <motion.div
                ref={ref}
                className="hp-cta-banner"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.7 }}
            >
                <div style={{ position: 'relative', zIndex: 1 }}>
                    <span style={{ display: 'block', fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: '16px' }}>
                        The open ledger is live
                    </span>
                    <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 900, color: '#FFFFFF', marginBottom: '16px', lineHeight: 1.1, letterSpacing: '-0.5px' }}>
                        Check any client before<br />you say yes.
                    </h2>
                    <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)', marginBottom: '40px', maxWidth: '480px', margin: '0 auto 40px', lineHeight: 1.7 }}>
                        Log one verified payment experience — good or bad — and get lifetime ledger access. Every contribution strengthens your reputation.
                    </p>
                    <div className="hp-cta-actions">
                        <a href="https://claims.paydscore.com" className="hp-btn-primary green no-underline" style={{ background: '#10B981' }}>
                            Share experience
                            <ArrowRight size={16} />
                        </a>
                    </div>
                    <div style={{ marginTop: '32px', fontSize: '13px', color: 'rgba(255,255,255,0.4)', fontWeight: 500 }}>
                        Section 79 compliant · DPDP Act aligned · Your data is never sold.
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

// ─── Footer (shared) ──────────────────────────────────────────────────────────

// ─── Main Export ──────────────────────────────────────────────────────────────
export default function Homepage() {
    // Scroll reveal for elements without framer-motion
    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
            { threshold: 0.15, rootMargin: '-60px' }
        );
        document.querySelectorAll('.hp-reveal').forEach(el => observer.observe(el));
        
        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div className="hp-page">
            <SharedNavbar />
            <HeroSection />
            <ExpectationSection />
            <ManifestoSection />
            <StatsSection />
            <IntermediateCta 
                title="Ready to check a client?" 
                sub="Log one verified payment experience and unlock India's B2B ledger forever."
                btnText="Contribute data"
            />
            <MarketTrendsSection />
            <TestimonialSection />

            <FlagMechanicSection />
            <IndustryRiskSection />
            <JoinSection />
            <CtaBanner />
            <SharedFooter />
        </div>
    );
}
