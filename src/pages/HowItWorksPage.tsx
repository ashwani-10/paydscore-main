import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { FileText, Search, Award, ChevronDown, ArrowRight, CheckCircle, Lock } from 'lucide-react';
import { SharedNavbar } from '../components/SharedNavbar';
import { SharedFooter } from '../components/SharedFooter';
import './InfoPage.css';

const FAQS = [
    {
        q: 'Will my client know it was me who reported them?',
        a: 'Your personal and agency identity is strictly secured. When you log a delayed payment, the brand’s finance team is notified of the delay amount and the invoice timeframe, but your name is never published on the public ledger. We act as a neutral intermediary so you don\'t have to burn bridges.',
    },
    {
        q: 'Do I need to upload my invoice or contract right now?',
        a: 'No. You can log your payment experience in 60 seconds without uploading any documents today. While we recommend uploading redacted proof later to give your claim maximum weight, it is completely optional to get started.',
    },
    {
        q: 'Can I get in legal trouble for reporting a bad client?',
        a: 'No. Paydscore is not a venting board or a review site; it is a factual financial ledger. By reporting objective data (e.g., "Payment was due Day 30, received Day 90"), you are simply logging math. We operate under Section 79 of the IT Act (Safe Harbour), ensuring a legally compliant environment for data furnishers.',
    },
    {
        q: 'What happens after I submit a delayed payment claim?',
        a: 'We initiate a 14-Day Resolution Window. The brand\'s finance team receives an automated, professional alert from our system stating a delay has been logged against them. They are given 14 days to clear your invoice or file a formal dispute before the data impacts their public Payment Reliability Score.',
    },
    {
        q: 'Why do I have to submit data just to get access to the platform?',
        a: 'We operate on a "Give Data to Get Data" model. To keep the platform free of bots, PR agencies, and spam, the Paydscore database is strictly gated. By contributing just one past payment experience (good or bad) today, you prove you are a real participant in the service economy and unlock free, lifetime access to the search engine.',
    },
    {
        q: 'What if my client actually pays on time? Should I still log them?',
        a: 'Yes. We are building a fair, objective credit score for the corporate world. If you have a client who respects Net-30 and pays fast, logging a "Green Flag" helps them build a strong Payment Reliability Score and helps other freelancers find good clients.',
    },
];

function FaqItem({ item }: { item: typeof FAQS[0] }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="ip-faq-item">
            <div className="ip-faq-q" onClick={() => setOpen(!open)}>
                {item.q}
                <ChevronDown size={18} className={`ip-faq-chevron ${open ? 'open' : ''}`} />
            </div>
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        style={{ overflow: 'hidden' }}
                    >
                        <div className="ip-faq-a">{item.a}</div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function HowItWorksPage() {
    return (
        <div className="ip-page">
            <SharedNavbar />

            {/* ─── Hero ─── */}
            <div className="ip-hero">
                <div className="ip-hero-inner">
                    <div className="ip-eyebrow">Platform Guide</div>
                    <h1 className="ip-h1">
                        How <em>Paydscore</em><br />actually works.
                    </h1>
                    <p className="ip-hero-sub">
                        Three steps. Built on reciprocity. Every contribution unlocks access — and makes the system stronger for everyone in India's B2B ecosystem.
                    </p>
                </div>
            </div>

            {/* ─── Steps ─── */}
            <div className="ip-section-wide">
                <div className="ip-steps">
                    {/* Step 01 */}
                    <motion.div
                        className="ip-step"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="ip-step-num">01</div>
                        <div className="ip-step-icon green">
                            <FileText size={32} color="#059669" />
                        </div>
                        <h3 className="ip-step-title">Log Experience</h3>
                        <p className="ip-step-body">
                            Share a past client interaction in under 3 minutes. On-time or delayed — both build the community ledger.
                        </p>
                        <div className="ip-step-detail" style={{ background: 'transparent', border: 'none', padding: '0' }}>
                            <ul className="ip-step-detail-list">
                                <li style={{ fontSize: '13px' }}>Invoice details</li>
                                <li style={{ fontSize: '13px' }}>Payment status</li>
                                <li style={{ fontSize: '13px' }}>Email/PDF proof</li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Step 02 */}
                    <motion.div
                        className="ip-step"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <div className="ip-step-num">02</div>
                        <div className="ip-step-icon blue">
                            <Search size={32} color="#2563EB" />
                        </div>
                        <h3 className="ip-step-title">Unlock Ledger</h3>
                        <p className="ip-step-body">
                            Get lifetime access to India's growing B2B payment database. Search any company by name.
                        </p>
                        <div className="ip-step-gate" style={{ background: '#DBEAFE', color: '#2563EB', marginTop: 'auto' }}>
                            <Lock size={14} /> One log to unlock
                        </div>
                    </motion.div>

                    {/* Step 03 */}
                    <motion.div
                        className="ip-step"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="ip-step-num">03</div>
                        <div className="ip-step-icon amber">
                            <Award size={32} color="#D97706" />
                        </div>
                        <h3 className="ip-step-title">Build Authority</h3>
                        <p className="ip-step-body">
                            Strengthen your credibility with a shareable financial profile. Let clients verify your reliability.
                        </p>
                        <div className="ip-step-detail" style={{ background: 'transparent', border: 'none', padding: '0' }}>
                            <ul className="ip-step-detail-list">
                                <li style={{ fontSize: '13px' }}>Verified logs</li>
                                <li style={{ fontSize: '13px' }}>Collection cycles</li>
                                <li style={{ fontSize: '13px' }}>Public Identity</li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* ─── Smart Deal Memo Band ─── */}
            <div className="ip-band">
                <div className="ip-section">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="ip-eyebrow-dark">Bonus Feature</div>
                        <h2 className="ip-h2">Smart Deal Memo: <em>protect every invoice.</em></h2>
                        <p className="ip-lead">
                            Before you start a new project, generate a Smart Deal Memo — a legally-compliant payment agreement that seamlessly tracks if your client goes silent. Think of it as an invoice with built-in accountability.
                        </p>
                        <div className="ip-value-list">
                            {[
                                { title: 'Auto-generated on project start', body: 'Fill in your client name, invoice amount, and due date. We generate a memo in one click — no legal jargon required.' },
                                { title: '14-day automated alert', body: 'If the payment is overdue and you trigger a Red Flag, Paydscore sends an automated 14-day alert to the client — timestamped and legally documented.' },
                                { title: 'Permanent paper trail', body: 'Every notice is recorded on the ledger. This gives you evidence if you ever need to escalate to legal channels.' },
                            ].map((v, i) => (
                                <div className="ip-value-item" key={i}>
                                    <div className="ip-value-icon green">
                                        <CheckCircle size={20} color="#059669" />
                                    </div>
                                    <div>
                                        <div className="ip-value-title">{v.title}</div>
                                        <div className="ip-value-body">{v.body}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* ─── FAQ ─── */}
            <div className="ip-section">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="ip-eyebrow-dark">FAQ</div>
                    <h2 className="ip-h2">Common questions, <em>answered.</em></h2>
                    <p className="ip-lead">Everything you need to know before your first entry.</p>
                    <div className="ip-faq">
                        {FAQS.map((item, i) => (
                            <FaqItem key={i} item={item} />
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* ─── CTA ─── */}
            <div className="ip-cta-strip">
                <div className="ip-cta-title">Ready to log your first entry?</div>
                <div className="ip-cta-sub">Takes under 3 minutes. Unlocks lifetime ledger access.</div>
                <a href="https://claims.paydscore.com" className="ip-btn ip-btn-dark">
                    Share experience <ArrowRight size={16} />
                </a>
            </div>

            <SharedFooter />
        </div>
    );
}
