import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Dashboard.css';
import {
    Search, Activity
} from 'lucide-react';

// ═══════════════════════════════════════════════════════════════════════
// STYLED SVG ASSETS
// ═══════════════════════════════════════════════════════════════════════
const AbstractCircles = () => (
    <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="pd-card-graphic">
        <circle cx="100" cy="100" r="80" stroke="url(#paint0_linear)" strokeWidth="40" strokeOpacity="0.3" />
        <circle cx="100" cy="100" r="40" fill="url(#paint1_linear)" fillOpacity="0.2" />
        <defs>
            <linearGradient id="paint0_linear" x1="20" y1="20" x2="180" y2="180" gradientUnits="userSpaceOnUse">
                <stop stopColor="#34D399" />
                <stop offset="1" stopColor="#10B981" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="paint1_linear" x1="60" y1="60" x2="140" y2="140" gradientUnits="userSpaceOnUse">
                <stop stopColor="#34D399" />
                <stop offset="1" stopColor="#ECFDF5" />
            </linearGradient>
        </defs>
    </svg>
);

const AbstractWaves = () => (
    <svg width="250" height="200" viewBox="0 0 250 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="pd-card-graphic">
        <path d="M0 100 Q 62.5 50, 125 100 T 250 100" stroke="#34D399" strokeWidth="8" strokeOpacity="0.2" fill="none"/>
        <path d="M0 130 Q 62.5 80, 125 130 T 250 130" stroke="#10B981" strokeWidth="8" strokeOpacity="0.1" fill="none"/>
        <path d="M0 160 Q 62.5 110, 125 160 T 250 160" stroke="#A7F3D0" strokeWidth="8" strokeOpacity="0.3" fill="none"/>
    </svg>
);

// ═══════════════════════════════════════════════════════════════════════
// SAMPLE (FICTIONAL) DATA — for preview / expectation setting
// All companies below are entirely fictional. Any resemblance to real
// entities is coincidental. Data is illustrative only.
// ═══════════════════════════════════════════════════════════════════════
const SAMPLE_COMPANIES = [
    {
        name: 'Apex Media Group Pvt. Ltd.',
        city: 'Mumbai', industry: 'Media & Entertainment',
        score: 34, risk: 'High risk', riskColor: '#DC2626', riskBg: '#FEF2F2',
        reports: 14, avgDelay: 58, trend: 'Worsening',
        lastReported: '2 days ago',
        note: 'Multiple agencies report invoices ignored beyond 60 days. Dispute rate high.',
    },
    {
        name: 'Horizon D2C Solutions Ltd.',
        city: 'Bengaluru', industry: 'D2C / E-commerce',
        score: 61, risk: 'Medium risk', riskColor: '#D97706', riskBg: '#FFFBEB',
        reports: 7, avgDelay: 26, trend: 'Stable',
        lastReported: '9 days ago',
        note: 'Usually pays within Net-45 window. Occasional delays on larger retainers.',
    },
    {
        name: 'Meridian Real Estate Ventures',
        city: 'Delhi', industry: 'Real Estate',
        score: 21, risk: 'High risk', riskColor: '#DC2626', riskBg: '#FEF2F2',
        reports: 22, avgDelay: 71, trend: 'Worsening',
        lastReported: '1 day ago',
        note: 'Repeat offender — reported independently by 6 agencies. Pattern of ghosting.',
    },
    {
        name: 'Solaris Tech Pvt. Ltd.',
        city: 'Hyderabad', industry: 'Tech / SaaS',
        score: 84, risk: 'Low risk', riskColor: '#059669', riskBg: '#ECFDF5',
        reports: 4, avgDelay: 9, trend: 'Improving',
        lastReported: '14 days ago',
        note: 'Consistent on-time payments. No dispute history. Trusted by verified agencies.',
    },
    {
        name: 'Cascade FMCG Brands Ltd.',
        city: 'Pune', industry: 'FMCG',
        score: 55, risk: 'Medium risk', riskColor: '#D97706', riskBg: '#FFFBEB',
        reports: 9, avgDelay: 31, trend: 'Stable',
        lastReported: '5 days ago',
        note: 'Pays eventually but requires follow-up. PO delays common.',
    },
];

const INDUSTRY_BREAKDOWN = [
    { industry: 'Real estate', avgDelay: 67 },
    { industry: 'Media & entertainment', avgDelay: 51 },
    { industry: 'FMCG', avgDelay: 34 },
    { industry: 'D2C / e-comm', avgDelay: 22 },
    { industry: 'BFSI', avgDelay: 18 },
    { industry: 'Tech / SaaS', avgDelay: 12 },
];

export default function Dashboard() {
    const [query, setQuery] = useState('');
    const [selectedCompany, setSelectedCompany] = useState<typeof SAMPLE_COMPANIES[0] | null>(null);
    const searchRef = useRef<HTMLDivElement>(null);

    const filtered = query.trim().length >= 1
        ? SAMPLE_COMPANIES.filter(c =>
            c.name.toLowerCase().includes(query.toLowerCase()) ||
            c.industry.toLowerCase().includes(query.toLowerCase()) ||
            c.city.toLowerCase().includes(query.toLowerCase())
          )
        : [];

    // Close dropdown on outside click
    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
                if (!selectedCompany) setQuery('');
            }
        };
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, [selectedCompany]);

    return (
        <div className="pd-page">
            <header className="pd-navbar">
                <div className="pd-navbar-inner">
                    <a href="/" className="pd-nav-logo">
                        <span style={{ fontSize: '20px', fontWeight: 800, color: '#152238', letterSpacing: '-0.5px' }}>
                            payd<span style={{ color: '#10B981' }}>score</span>
                        </span>
                    </a>
                    <a href="/" className="pd-nav-link">Log a Report</a>
                </div>
            </header>

            <main className="pd-main">
                {/* ─── Hero / Introduction ────────────────────────────── */}
                <section className="pd-section pd-hero pd-section-center" style={{ marginTop: '0px' }}>
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                        
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#FFF9E6', color: '#92400E', padding: '6px 16px', borderRadius: '30px', fontSize: '13px', fontWeight: 600, marginBottom: '24px', border: '1px solid #FDE68A' }}>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1.5L8.5 5.5H12.5L9.25 7.75L10.5 11.5L7 9.25L3.5 11.5L4.75 7.75L1.5 5.5H5.5L7 1.5Z" fill="#F59E0B"/></svg>
                            Preview · Real data launching soon
                        </div>

                        <h1 className="pd-hero-title">
                            Know if a client pays<br /><span>before you say yes.</span>
                        </h1>
                        <p className="pd-section-desc" style={{ fontSize: '20px', maxWidth: '680px' }}>
                            A B2B payment intelligence ledger — built from real experiences shared by agencies and freelancers across India.
                        </p>

                        {/* ── Search ── */}
                        <div ref={searchRef} style={{ position: 'relative', width: '100%', maxWidth: '560px' }}>
                            <div className="pd-search-wrap" style={{ maxWidth: '100%' }}>
                                <div className="pd-search-box">
                                    <Search size={20} color="#10B981" />
                                    <input
                                        id="dashboard-search"
                                        type="text"
                                        placeholder="Search any company..."
                                        className="pd-search-input"
                                        value={query}
                                        onChange={e => { setQuery(e.target.value); setSelectedCompany(null); }}
                                        autoComplete="off"
                                    />
                                    {query && (
                                        <button onClick={() => { setQuery(''); setSelectedCompany(null); }} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#94A3B8', fontSize: '18px', lineHeight: 1, padding: '0 4px', flexShrink: 0 }} aria-label="Clear search">×</button>
                                    )}
                                </div>
                                <button className="pd-search-btn" onClick={() => {
                                    const match = SAMPLE_COMPANIES.find(c => c.name.toLowerCase().includes(query.toLowerCase()));
                                    if (match) setSelectedCompany(match);
                                    else if (filtered.length > 0) setSelectedCompany(filtered[0]);
                                }}>
                                    Check client
                                </button>
                            </div>

                            {/* Dropdown suggestions */}
                            {query.trim().length >= 1 && !selectedCompany && (
                                <div style={{ position: 'absolute', top: 'calc(100% + 6px)', left: 0, right: 0, background: '#fff', borderRadius: '16px', boxShadow: '0 8px 32px rgba(0,0,0,0.12)', border: '1px solid #E2E8F0', overflow: 'hidden', zIndex: 50 }}>
                                    {filtered.length > 0 ? filtered.map(c => (
                                        <button key={c.name} onClick={() => setSelectedCompany(c)} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 20px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', borderBottom: '1px solid #F1F5F9', fontFamily: 'inherit' }}>
                                            <div>
                                                <div style={{ fontSize: '14px', fontWeight: 600, color: '#152238' }}>{c.name}</div>
                                                <div style={{ fontSize: '12px', color: '#94A3B8', marginTop: '2px' }}>{c.city} · {c.industry}</div>
                                            </div>
                                            <div style={{ textAlign: 'right', flexShrink: 0, marginLeft: '16px' }}>
                                                <div style={{ fontSize: '20px', fontWeight: 800, color: c.riskColor, lineHeight: 1 }}>{c.score}</div>
                                                <div style={{ fontSize: '10px', fontWeight: 700, color: c.riskColor, background: c.riskBg, padding: '2px 8px', borderRadius: '10px', marginTop: '3px' }}>{c.risk}</div>
                                            </div>
                                        </button>
                                    )) : (
                                        <div style={{ padding: '16px 20px', fontSize: '13px', color: '#94A3B8' }}>No sample match — real data arrives at launch.</div>
                                    )}
                                    <div style={{ padding: '10px 20px', background: '#F8FAFC', fontSize: '11px', color: '#94A3B8', borderTop: '1px solid #E2E8F0' }}>
                                        Showing sample / illustrative data only · Real ledger launching soon
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Sample company result card */}
                        {selectedCompany && (
                            <motion.div
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                                style={{ width: '100%', maxWidth: '560px', marginTop: '20px' }}
                            >
                                {/* Sample badge */}
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px', justifyContent: 'center' }}>
                                    <div style={{ height: '1px', flex: 1, background: '#E2E8F0' }} />
                                    <span style={{ fontSize: '11px', fontWeight: 600, color: '#F59E0B', background: '#FFFBEB', border: '1px solid #FDE68A', padding: '3px 12px', borderRadius: '20px', whiteSpace: 'nowrap' }}>Sample data · Illustrative only</span>
                                    <div style={{ height: '1px', flex: 1, background: '#E2E8F0' }} />
                                </div>

                                <div style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: '20px', padding: '24px 28px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
                                    {/* Header */}
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                                        <div>
                                            <div style={{ fontSize: '20px', fontWeight: 800, color: '#152238' }}>{selectedCompany.name}</div>
                                            <div style={{ fontSize: '13px', color: '#64748B', marginTop: '4px' }}>{selectedCompany.city} · {selectedCompany.industry} · {selectedCompany.reports} reports · Last reported {selectedCompany.lastReported}</div>
                                        </div>
                                        <div style={{ textAlign: 'right', flexShrink: 0, marginLeft: '20px' }}>
                                            <div style={{ fontSize: '40px', fontWeight: 800, color: selectedCompany.riskColor, lineHeight: 1 }}>{selectedCompany.score}</div>
                                            <div style={{ fontSize: '12px', fontWeight: 700, color: selectedCompany.riskColor, background: selectedCompany.riskBg, padding: '3px 12px', borderRadius: '20px', display: 'inline-block', marginTop: '6px' }}>{selectedCompany.risk}</div>
                                        </div>
                                    </div>

                                    {/* Stats row */}
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '16px' }}>
                                        <div style={{ background: '#F8FAFC', borderRadius: '12px', padding: '12px 14px' }}>
                                            <div style={{ fontSize: '11px', color: '#94A3B8', marginBottom: '4px', fontWeight: 600 }}>AVG DELAY</div>
                                            <div style={{ fontSize: '20px', fontWeight: 800, color: '#152238' }}>{selectedCompany.avgDelay}d</div>
                                        </div>
                                        <div style={{ background: '#F8FAFC', borderRadius: '12px', padding: '12px 14px' }}>
                                            <div style={{ fontSize: '11px', color: '#94A3B8', marginBottom: '4px', fontWeight: 600 }}>TOTAL REPORTS</div>
                                            <div style={{ fontSize: '20px', fontWeight: 800, color: '#152238' }}>{selectedCompany.reports}</div>
                                        </div>
                                        <div style={{ background: '#F8FAFC', borderRadius: '12px', padding: '12px 14px' }}>
                                            <div style={{ fontSize: '11px', color: '#94A3B8', marginBottom: '4px', fontWeight: 600 }}>TREND</div>
                                            <div style={{ fontSize: '15px', fontWeight: 700, color: selectedCompany.trend === 'Improving' ? '#059669' : selectedCompany.trend === 'Worsening' ? '#DC2626' : '#D97706' }}>{selectedCompany.trend}</div>
                                        </div>
                                    </div>

                                    {/* Note */}
                                    <div style={{ fontSize: '13px', color: '#475569', lineHeight: 1.7, paddingLeft: '12px', borderLeft: '3px solid #E2E8F0', marginBottom: '20px' }}>
                                        {selectedCompany.note}
                                    </div>

                                    {/* Launching soon CTA */}
                                    <div style={{ background: 'linear-gradient(135deg, #F0FDF4, #ECFDF5)', border: '1px solid #A7F3D0', borderRadius: '14px', padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap' }}>
                                        <div>
                                            <div style={{ fontSize: '13px', fontWeight: 700, color: '#065F46', marginBottom: '3px' }}>Real data is on its way.</div>
                                            <div style={{ fontSize: '12px', color: '#047857', lineHeight: 1.6 }}>Log a payment experience to help build the ledger — and be first to access verified reports when we launch.</div>
                                        </div>
                                        <a href="/" style={{ background: '#10B981', color: '#fff', padding: '10px 18px', borderRadius: '10px', fontSize: '13px', fontWeight: 700, textDecoration: 'none', whiteSpace: 'nowrap', flexShrink: 0 }}>Log a report →</a>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        <div style={{ marginTop: '16px', fontSize: '13px', color: '#64748B' }}>
                            Try: {['Apex Media', 'Horizon D2C', 'Meridian Real Estate', 'Solaris Tech'].map((s, i, arr) => (
                                <React.Fragment key={s}>
                                    <span style={{ color: '#10B981', cursor: 'pointer', fontWeight: 600 }} onClick={() => { setQuery(s); const match = SAMPLE_COMPANIES.find(c => c.name.toLowerCase().includes(s.toLowerCase())); if (match) setSelectedCompany(match); }}>{s}</span>
                                    {i < arr.length - 1 && ', '}
                                </React.Fragment>
                            ))}
                        </div>
                    </motion.div>
                </section>

                <section className="pd-section">
                    <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 600, color: '#94A3B8', marginBottom: '24px' }}>Market intelligence · Illustrative data based on industry research</div>
                    <div className="pd-grid-3">
                        <motion.div className="pd-card pd-card-hover" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <AbstractCircles />
                            <div className="pd-stat-block">
                                <span className="pd-stat-label" style={{ color: '#DC2626' }}>The problem</span>
                                <span className="pd-stat-value" style={{ color: '#B91C1C', fontSize: '48px', margin: '8px 0' }}>₹12.4 Cr</span>
                                <span className="pd-stat-context" style={{ fontWeight: 600, color: '#152238', marginBottom: '8px' }}>stuck in delayed payments — reported by agencies and freelancers on this platform alone.</span>
                                <p style={{ fontSize: '14px', color: '#64748B', lineHeight: 1.6, paddingLeft: '12px', borderLeft: '2px solid #E2E8F0', marginTop: '8px' }}>
                                    This isn't a bad-luck problem. It's a systemic one. Brands routinely treat Net-30 as a suggestion. Without data, you have no way of knowing which ones do.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div className="pd-card pd-card-hover" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                            <AbstractCircles />
                            <div className="pd-stat-block">
                                <span className="pd-stat-label" style={{ color: '#D97706' }}>How common is this?</span>
                                <span className="pd-stat-value" style={{ color: '#B45309', fontSize: '48px', margin: '8px 0' }}>38%</span>
                                <span className="pd-stat-context" style={{ fontWeight: 600, color: '#152238', marginBottom: '8px' }}>of clients on the ledger have at least one delayed payment report against them.</span>
                                <p style={{ fontSize: '14px', color: '#64748B', lineHeight: 1.6, paddingLeft: '12px', borderLeft: '2px solid #E2E8F0', marginTop: '8px' }}>
                                    More than 1 in 3. Blind trust isn't just risky — it's statistically expensive. You need data before you sign.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div className="pd-card pd-card-hover" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                            <AbstractCircles />
                            <div className="pd-stat-block">
                                <span className="pd-stat-label" style={{ color: '#eab308' }}>How long do delays last?</span>
                                <span className="pd-stat-value" style={{ color: '#ca8a04', fontSize: '48px', margin: '8px 0' }}>47 days</span>
                                <span className="pd-stat-context" style={{ fontWeight: 600, color: '#152238', marginBottom: '8px' }}>is the average delay beyond the invoice due date across all reported clients.</span>
                                <p style={{ fontSize: '14px', color: '#64748B', lineHeight: 1.6, paddingLeft: '12px', borderLeft: '2px solid #E2E8F0', marginTop: '8px' }}>
                                    Even clients who eventually pay can hurt your cash flow badly. A "good client" who takes 47 extra days to pay is still a cash flow problem.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* ─── Story Step 2: Industry Risk ───────────────────── */}
                <section className="pd-section">
                    <motion.div className="pd-card" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                        <AbstractWaves />
                        <span className="pd-stat-label" style={{ display: 'block', marginBottom: '16px', color: '#059669' }}>Where risk is highest</span>
                        <h2 className="pd-section-title">Industry risk</h2>
                        <p className="pd-section-desc">
                            Some industries consistently delay longer and dispute more than others. Before accepting a project, check how their industry typically behaves — not just the brand itself.
                        </p>
                        
                        <div className="pd-elegant-bar-container">
                            {INDUSTRY_BREAKDOWN.map((ind, i) => (
                                <div className="pd-elegant-bar-row" key={ind.industry}>
                                    <div className="pd-elegant-bar-header">
                                        <span>{ind.industry}</span>
                                        <span className="pd-elegant-bar-val" style={{ color: ind.avgDelay >= 50 ? '#DC2626' : (ind.avgDelay >= 30 ? '#D97706' : '#10B981') }}>{ind.avgDelay}d avg delay</span>
                                    </div>
                                    <div className="pd-elegant-bar-track">
                                        <motion.div 
                                            className="pd-elegant-bar-fill" 
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${(ind.avgDelay / 70) * 100}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: i * 0.1 }}
                                            style={{ 
                                                background: ind.avgDelay >= 50 ? 'linear-gradient(90deg, #FCA5A5, #EF4444)' : 
                                                            ind.avgDelay >= 30 ? 'linear-gradient(90deg, #FDE047, #F59E0B)' : undefined 
                                            }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </section>

                {/* ─── Story Step 3: Repeat Offenders & Live Signal ──────── */}
                <section className="pd-section">
                    <div className="pd-grid-2">
                        <motion.div className="pd-card pd-card-hover" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <span className="pd-stat-label" style={{ display: 'block', marginBottom: '16px', color: '#B91C1C' }}>Repeat offenders</span>
                            <span className="pd-stat-value" style={{ color: '#DC2626', fontSize: '48px', display: 'block', marginBottom: '12px' }}>26%</span>
                            <p className="pd-section-desc" style={{ marginBottom: '16px', color: '#152238', fontWeight: 600 }}>of clients on the ledger have been reported by more than one independent agency or freelancer.</p>
                            <p style={{ fontSize: '14px', color: '#64748B', lineHeight: 1.6, marginBottom: '32px' }}>
                                It's not bad luck. Some clients are patterns, not exceptions. When 3 different agencies report the same brand — that's signal, not coincidence.
                            </p>
                            
                            <div className="pd-repeat-vis">
                                {[
                                    { label: 'Reported once', pct: '74%', width: '74%', color: '#94A3B8' },
                                    { label: 'Reported 2–4×', pct: '19%', width: '19%', color: '#F59E0B' },
                                    { label: 'Reported 5× or more', pct: '7%', width: '7%', color: '#EF4444' }
                                ].map(item => (
                                    <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                                        <div style={{ fontSize: '13px', color: '#475569', width: '130px', flexShrink: 0 }}>{item.label}</div>
                                        <div style={{ flex: 1, height: '8px', background: '#F1F5F9', borderRadius: '4px', overflow: 'hidden' }}>
                                            <motion.div initial={{ width: 0 }} whileInView={{ width: item.width }} viewport={{ once: true }} transition={{ duration: 1 }} style={{ height: '100%', background: item.color, borderRadius: '4px' }} />
                                        </div>
                                        <div style={{ fontSize: '14px', fontWeight: 700, color: '#152238', minWidth: '36px', textAlign: 'right' }}>{item.pct}</div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div className="pd-card pd-card-hover" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} style={{ background: '#ECFDF5', borderColor: '#A7F3D0', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                           <span className="pd-stat-label" style={{ display: 'block', marginBottom: '24px', color: '#059669' }}>Live signal</span>
                           <Activity size={48} color="#10B981" style={{ marginBottom: '32px' }} />
                           <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                               <span style={{ fontSize: '64px', fontWeight: 800, color: '#059669', lineHeight: 1, letterSpacing: '-2px' }}>17</span>
                               <div style={{ fontSize: '20px', color: '#152238', lineHeight: 1.6, fontWeight: 500 }}>
                                   <strong>new payment delay reports</strong> added in the last 24 hours. The data is live. This problem isn't slowing down.
                               </div>
                           </div>
                        </motion.div>
                    </div>
                </section>

                {/* ─── How It Works ─────────────────────────────────────── */}
                <section id="how-it-works" className="pd-section">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                        <span style={{ display: 'block', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600, color: '#10B981', marginBottom: '12px' }}>How it works</span>
                        <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#152238', letterSpacing: '-0.5px', marginBottom: '6px' }}>Three steps. Zero guesswork.</h2>
                        <p style={{ fontSize: '15px', color: '#64748B', margin: 0 }}>Built on reciprocity — share one data point, gain access to thousands.</p>
                    </motion.div>

                    <div className="pd-hiw-flow">

                        {/* Step 01 */}
                        <motion.div className="pd-hiw-card pd-hiw-green"
                            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                            <div className="pd-hiw-icon-wrap pd-hiw-icon-green">
                                <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
                                    <rect x="8" y="6" width="22" height="28" rx="3" fill="#A7F3D0"/>
                                    <rect x="12" y="13" width="8" height="2" rx="1" fill="#059669"/>
                                    <rect x="12" y="18" width="14" height="2" rx="1" fill="#059669"/>
                                    <rect x="12" y="23" width="10" height="2" rx="1" fill="#059669"/>
                                    <circle cx="33" cy="33" r="9" fill="#10B981"/>
                                    <path d="M29 33l3 3 5-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <div className="pd-hiw-step-num" style={{ color: '#059669' }}>STEP 01</div>
                            <div className="pd-hiw-title">Log a payment experience</div>
                            <p className="pd-hiw-desc" style={{ borderLeftColor: 'rgba(16,185,129,0.3)' }}>
                                Tell us about a past client — paid on time, late, or still waiting. One honest report takes under 2 minutes and never requires filing a complaint.
                            </p>
                            <div className="pd-hiw-badge" style={{ background: '#10B981', color: '#fff' }}>⏱ Under 2 min</div>
                        </motion.div>

                        {/* Arrow */}
                        <motion.div className="pd-hiw-arrow" initial={{ opacity: 0, scale: 0.7 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                                <path d="M6 18h24M22 11l7 7-7 7" stroke="#A7F3D0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </motion.div>

                        {/* Step 02 */}
                        <motion.div className="pd-hiw-card pd-hiw-blue"
                            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15, duration: 0.5 }}>
                            <div className="pd-hiw-icon-wrap pd-hiw-icon-blue">
                                <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
                                    <circle cx="20" cy="20" r="11" stroke="#3B82F6" strokeWidth="2" fill="#BFDBFE"/>
                                    <circle cx="20" cy="20" r="5" fill="#3B82F6"/>
                                    <path d="M28 28l7 7" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round"/>
                                    <path d="M17 20h6M20 17v6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                                </svg>
                            </div>
                            <div className="pd-hiw-step-num" style={{ color: '#3B82F6' }}>STEP 02</div>
                            <div className="pd-hiw-title">Search any company</div>
                            <p className="pd-hiw-desc" style={{ borderLeftColor: 'rgba(59,130,246,0.3)' }}>
                                Your report unlocks lifetime access to the full ledger. Search any brand before you pitch — see their payment score, average delay, and risk trend.
                            </p>
                            <div className="pd-hiw-badge" style={{ background: '#3B82F6', color: '#fff' }}>🔓 Lifetime access</div>
                        </motion.div>

                        {/* Arrow */}
                        <motion.div className="pd-hiw-arrow" initial={{ opacity: 0, scale: 0.7 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.35 }}>
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                                <path d="M6 18h24M22 11l7 7-7 7" stroke="#C7D2FE" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </motion.div>

                        {/* Step 03 */}
                        <motion.div className="pd-hiw-card pd-hiw-purple"
                            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.5 }}>
                            <div className="pd-hiw-icon-wrap pd-hiw-icon-purple">
                                <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
                                    <path d="M22 4L7 10v12c0 9 7 16 15 18 8-2 15-9 15-18V10L22 4z" fill="#DDD6FE" stroke="#8B5CF6" strokeWidth="1.5"/>
                                    <path d="M15 22l5 5 9-10" stroke="#7C3AED" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <div className="pd-hiw-step-num" style={{ color: '#8B5CF6' }}>STEP 03</div>
                            <div className="pd-hiw-title">Protect future deals</div>
                            <p className="pd-hiw-desc" style={{ borderLeftColor: 'rgba(139,92,246,0.3)' }}>
                                Use a Smart Deal Memo to lock payment terms on new projects. Paydscore monitors due dates and escalates automatically — so you don't have to chase.
                            </p>
                            <div className="pd-hiw-badge" style={{ background: '#8B5CF6', color: '#fff' }}>⚡ Auto-monitored</div>
                        </motion.div>

                    </div>
                </section>

                {/* ─── Footer CTA ───────────────────────────────────────── */}
                <motion.section 
                    className="pd-footer-cta"
                    initial={{ opacity: 0, scale: 0.95 }} 
                    whileInView={{ opacity: 1, scale: 1 }} 
                    viewport={{ once: true }}
                    style={{ background: '#FFFFFF', border: '1px solid rgba(52, 211, 153, 0.3)', color: '#152238', padding: '60px 40px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                >
                    <h2 style={{ fontSize: '32px', color: '#152238', marginBottom: '16px' }}>Check any client before you work with them.</h2>
                    <p style={{ color: '#475569', maxWidth: '600px', fontSize: '18px', marginBottom: '40px' }}>Log one past payment experience — good or bad — and get lifetime access to the full ledger.</p>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '24px', padding: '24px 32px', width: '100%', maxWidth: '480px', marginBottom: '40px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                            <div style={{ textAlign: 'left' }}>
                                <div style={{ fontSize: '20px', fontWeight: 800, color: '#152238' }}>Apex Media Group Pvt. Ltd.</div>
                                <div style={{ fontSize: '14px', color: '#64748B', marginTop: '4px' }}>Mumbai · 14 reports · Last reported 2 days ago</div>
                                <div style={{ fontSize: '11px', color: '#94A3B8', marginTop: '6px', fontStyle: 'italic' }}>Sample · Illustrative only</div>
                            </div>
                            <div style={{ textAlign: 'right' }}>
                                <div style={{ fontSize: '32px', fontWeight: 800, color: '#DC2626', lineHeight: 1 }}>34</div>
                                <div style={{ fontSize: '12px', color: '#DC2626', background: '#FEF2F2', padding: '4px 12px', borderRadius: '20px', fontWeight: 700, display: 'inline-block', marginTop: '6px' }}>High risk</div>
                            </div>
                        </div>
                    </div>

                    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
                        <a href="/" className="pd-footer-btn" style={{ background: '#10B981', color: '#FFF' }}>
                            Log a Payment Experience
                        </a>
                        <button
                            id="how-it-works-btn"
                            className="pd-footer-btn"
                            style={{ background: 'transparent', color: '#152238', border: '1px solid #CBD5E1', boxShadow: 'none', cursor: 'pointer', fontFamily: 'inherit' }}
                            onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                        >
                            How it works
                        </button>
                    </div>
                    <div style={{ fontSize: '13px', color: '#94A3B8', marginTop: '32px', fontWeight: 500 }}>
                        Section 79 compliant · DPDP Act aligned · Your data is never sold.
                    </div>
                </motion.section>

            </main>
        </div>
    );
}
