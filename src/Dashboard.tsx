import { Link } from 'react-router-dom';
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
// MOCK DATA 
// ═══════════════════════════════════════════════════════════════════════
const INDUSTRY_BREAKDOWN = [
    { industry: 'Real estate', avgDelay: 67 },
    { industry: 'Media & entertainment', avgDelay: 51 },
    { industry: 'FMCG', avgDelay: 34 },
    { industry: 'D2C / e-comm', avgDelay: 22 },
    { industry: 'BFSI', avgDelay: 18 },
    { industry: 'Tech / SaaS', avgDelay: 12 },
];

export default function Dashboard() {
    return (
        <div className="pd-page">
            <header className="pd-navbar">
                <div className="pd-navbar-inner">
                    <Link to="/" className="pd-nav-logo">
                        <span style={{ fontSize: '20px', fontWeight: 800, color: '#152238', letterSpacing: '-0.5px' }}>
                            payd<span style={{ color: '#10B981' }}>score</span>
                        </span>
                    </Link>
                    <Link to="/" className="pd-nav-link">Log a Report</Link>
                </div>
            </header>

            <main className="pd-main">
                {/* ─── Hero / Introduction ────────────────────────────── */}
                <section className="pd-section pd-hero pd-section-center" style={{ marginTop: '0px' }}>
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                        
                        <div className="pd-live-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#ECFDF5', color: '#059669', padding: '6px 16px', borderRadius: '30px', fontSize: '14px', fontWeight: 600, marginBottom: '24px', border: '1px solid #A7F3D0' }}>
                            <div style={{ width: '8px', height: '8px', background: '#10B981', borderRadius: '50%', boxShadow: '0 0 8px rgba(16, 185, 129, 0.6)' }} />
                            17 new reports in the last 24 hours
                        </div>

                        <h1 className="pd-hero-title">
                            Know if a client pays<br /><span>before you say yes.</span>
                        </h1>
                        <p className="pd-section-desc" style={{ fontSize: '20px', maxWidth: '680px' }}>
                            India's first B2B payment ledger. Real experiences from real agencies and freelancers — so you stop finding out too late.
                        </p>

                        <div className="pd-search-wrap">
                            <div className="pd-search-box">
                                <Search size={20} color="#10B981" />
                                <input type="text" placeholder="Search any company..." className="pd-search-input" />
                            </div>
                            <button className="pd-search-btn">
                                Check client
                            </button>
                        </div>
                        <div style={{ marginTop: '16px', fontSize: '14px', color: '#64748B' }}>
                            Try: <span style={{ color: '#10B981', cursor: 'pointer', fontWeight: 600 }}>Hindustan Lever</span>, <span style={{ color: '#10B981', cursor: 'pointer', fontWeight: 600 }}>Dentsu Creative</span>, <span style={{ color: '#10B981', cursor: 'pointer', fontWeight: 600 }}>Star Sports</span>
                        </div>
                    </motion.div>
                </section>

                {/* ─── Story Step 1: The Core Metrics ──────────────────────── */}
                <section className="pd-section">
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
                                <div style={{ fontSize: '20px', fontWeight: 800, color: '#152238' }}>Dentsu Creative India</div>
                                <div style={{ fontSize: '14px', color: '#64748B', marginTop: '4px' }}>Mumbai · 29 claims · Last reported 3 days ago</div>
                            </div>
                            <div style={{ textAlign: 'right' }}>
                                <div style={{ fontSize: '32px', fontWeight: 800, color: '#DC2626', lineHeight: 1 }}>38</div>
                                <div style={{ fontSize: '12px', color: '#DC2626', background: '#FEF2F2', padding: '4px 12px', borderRadius: '20px', fontWeight: 700, display: 'inline-block', marginTop: '6px' }}>High risk</div>
                            </div>
                        </div>
                    </div>

                    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
                        <Link to="/" className="pd-footer-btn" style={{ background: '#10B981', color: '#FFF' }}>
                            Log a Payment Experience
                        </Link>
                        <Link to="/" className="pd-footer-btn" style={{ background: 'transparent', color: '#152238', border: '1px solid #CBD5E1', boxShadow: 'none' }}>
                            How it works
                        </Link>
                    </div>
                    <div style={{ fontSize: '13px', color: '#94A3B8', marginTop: '32px', fontWeight: 500 }}>
                        Section 79 compliant · DPDP Act aligned · Your data is never sold.
                    </div>
                </motion.section>

            </main>
        </div>
    );
}
