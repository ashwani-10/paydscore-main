import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { BarChart2, Eye, Zap, TrendingUp, ArrowRight, Clock } from 'lucide-react';
import { SharedNavbar } from '../components/SharedNavbar';
import { SharedFooter } from '../components/SharedFooter';
import './InfoPage.css';

const PREVIEW_CARDS = [
    { label: 'Avg Delay — Real Estate', value: '67d', ctx: '↑ 12% from last quarter', color: '#EF4444' },
    { label: 'Cleanest Payer Vertical', value: 'Tech/SaaS', ctx: '12d avg · 94% on-time rate', color: '#10B981' },
    { label: 'Most Active Region', value: 'Mumbai', ctx: '3,400+ reports logged', color: '#4F46E5' },
];

const FEATURES = [
    {
        icon: <BarChart2 size={22} color="#2563EB" />,
        cls: 'blue',
        title: 'Vertical Benchmarks',
        body: 'Know exactly how your industry\'s payment culture compares — weekly, updated by community data.',
    },
    {
        icon: <Eye size={22} color="#D97706" />,
        cls: 'amber',
        title: 'Repeat Defaulter Alerts',
        body: 'Get notified when a company you\'ve worked with gets flagged by others in your network.',
    },
    {
        icon: <TrendingUp size={22} color="#059669" />,
        cls: 'green',
        title: 'Market Trend Reports',
        body: 'Monthly digest of payment behaviour trends across verticals, sectors, and cities.',
    },
    {
        icon: <Zap size={22} color="#7C3AED" />,
        cls: 'purple',
        title: 'Pre-pitch Intel',
        body: 'Before you accept a new brief, query any company for their full payment history and risk score.',
    },
];


export default function IntelPage() {
    return (
        <div className="ip-page">
            <SharedNavbar />

            {/* ─── Coming Soon Hero ─── */}
            <div className="ip-coming-hero">
                <div style={{ maxWidth: '720px', margin: '0 auto' }}>
                    <div className="ip-eyebrow" style={{ margin: '0 auto 24px', background: '#F1F5F9', color: '#64748B' }}>
                        <Clock size={14} /> Phase 2 Intelligence
                    </div>
                    <h1 className="ip-h1" style={{ textAlign: 'center' }}>
                        Market <em>Intelligence</em><br />for India's B2B economy.
                    </h1>
                    <p className="ip-hero-sub" style={{ textAlign: 'center', margin: '0 auto' }}>
                        Real-time payment behaviour data, vertical benchmarks, and pre-pitch client intel — powered by a community of verified contributors.
                    </p>
                </div>

                {/* Blurred preview cards */}
                <div className="ip-intel-preview-grid" style={{ maxWidth: '900px', margin: '48px auto 0' }}>
                    {PREVIEW_CARDS.map((card) => (
                        <div className="ip-intel-card" key={card.label}>
                            <div className="ip-intel-card-label">{card.label}</div>
                            <div className="ip-intel-card-value" style={{ color: card.color }}>{card.value}</div>
                            <div className="ip-intel-card-ctx">{card.ctx}</div>
                        </div>
                    ))}
                </div>
                <p style={{ textAlign: 'center', fontSize: '12px', color: 'rgba(255,255,255,0.4)', marginTop: '16px' }}>
                    Preview data is illustrative. Real intelligence unlocks after launch.
                </p>
            </div>

            {/* ─── Features ─── */}
            <div className="ip-section">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="ip-eyebrow-dark">What's coming</div>
                    <h2 className="ip-h2">Data you <em>actually need.</em></h2>
                    <p className="ip-lead">
                        Intel is Paydscore's market intelligence layer — turning raw payment data into actionable insights for every contributor.
                    </p>
                    <div className="ip-value-list">
                        {FEATURES.map((f, i) => (
                            <motion.div
                                className="ip-value-item"
                                key={i}
                                initial={{ opacity: 0, x: -16 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                            >
                                <div className={`ip-value-icon ${f.cls}`}>{f.icon}</div>
                                <div>
                                    <div className="ip-value-title">{f.title}</div>
                                    <div className="ip-value-body">{f.body}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* ─── Waitlist Form Section ─── */}
            <div className="ip-band-green">
                <div className="ip-section">
                    <motion.div
                        initial={{ opacity: 0, y: 32 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="ip-waitlist-card" style={{ textAlign: 'center' }}>
                            <Zap size={40} className="text-emerald-500 mb-6 mx-auto" />
                            <h2 className="ip-waitlist-title">
                                Secure your spot in the <em>Intelligence Queue.</em>
                            </h2>
                            <p className="ip-waitlist-sub" style={{ maxWidth: '600px', margin: '0 auto 32px' }}>
                                We're rolling out Phase 2 market intel to verified contributors first. Join the waitlist today to be among the first to access vertical-specific benchmarks.
                            </p>
                            <Link 
                                to="/waitlist" 
                                className="ip-btn ip-btn-dark"
                            >
                                Join the Waitlist <ArrowRight size={18} className="ml-2" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* ─── CTA ─── */}
            <div className="ip-cta-strip">
                <div className="ip-cta-title">While you wait — log your first claim.</div>
                <div className="ip-cta-sub">Build your financial reputation and unlock the existing ledger today.</div>
                <a href="https://claims.paydscore.com" className="ip-btn ip-btn-dark">
                    Share experience <ArrowRight size={16} />
                </a>
            </div>

            <SharedFooter />
        </div>
    );
}
