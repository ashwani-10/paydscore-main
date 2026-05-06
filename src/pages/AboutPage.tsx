import { motion } from 'framer-motion';
import { Shield, Scale, Users, Eye, ArrowRight } from 'lucide-react';
import { SharedNavbar } from '../components/SharedNavbar';
import { SharedFooter } from '../components/SharedFooter';
import './InfoPage.css';

const VALUES = [
    {
        icon: <Shield size={22} color="#059669" />,
        cls: 'green',
        title: 'Facts only. No opinions.',
        body: 'Every entry on Paydscore must be backed by documentation. We reject anything that cannot be verified. This is a financial ledger — not a grievance forum.',
    },
    {
        icon: <Scale size={22} color="#2563EB" />,
        cls: 'blue',
        title: 'Both sides are heard.',
        body: 'Any entity that receives a Red Flag gets 14 days to respond with their own documentation. We don\'t publish until the dispute window has passed.',
    },
    {
        icon: <Users size={22} color="#D97706" />,
        cls: 'amber',
        title: 'Community-owned intelligence.',
        body: 'No single party controls the data. The ledger is built by thousands of independent contributors — making it impossible to manipulate at scale.',
    },
    {
        icon: <Eye size={22} color="#7C3AED" />,
        cls: 'purple',
        title: 'Privacy by design.',
        body: 'Your identity is verified internally but never exposed publicly without consent. You control your profile visibility at all times.',
    },
];


export default function AboutPage() {
    return (
        <div className="ip-page">
            <SharedNavbar />

            {/* ─── Hero ─── */}
            <div className="ip-hero">
                <div className="ip-hero-inner">
                    <div className="ip-eyebrow">Our Mission</div>
                    <h1 className="ip-h1">
                        Built to protect the<br />
                        <em>independent professional.</em>
                    </h1>
                    <p className="ip-hero-sub">
                        Paydscore exists because the B2B payment problem in India has been invisible for too long. We're making it visible — with facts, not anger.
                    </p>
                </div>
            </div>

            {/* ─── The Problem ─── */}
            <div className="ip-section">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="ip-eyebrow-dark">The Problem</div>
                    <h2 className="ip-h2">82% of invoices. Delayed. <em>Right now.</em></h2>
                    <p className="ip-lead">
                        Across India's creative, tech, and professional services sector, tens of thousands of freelancers and agencies are owed money they'll likely never collect. Not because the legal system is broken — but because there's no shared intelligence. Every professional walks into every engagement blind.
                    </p>
                    <div className="ip-pullquote">
                        <div className="ip-pullquote-text">
                            &ldquo;A client that didn&apos;t pay one agency is statistically very likely to not pay the next one.&rdquo;
                        </div>
                        <div className="ip-pullquote-cite">
                            The core problem Paydscore solves.
                        </div>
                    </div>
                    <p style={{ fontSize: '16px', color: '#4A5568', lineHeight: 1.8 }}>
                        Paydscore is the system connecting those stories. A community ledger where verified payment experiences — good and bad — accumulate into a shared intelligence layer that every contributor can access.
                    </p>
                </motion.div>
            </div>

            {/* ─── Values Grid ─── */}
            <div className="ip-band">
                <div className="ip-section">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="ip-eyebrow-dark">Our Principles</div>
                        <h2 className="ip-h2">How we <em>operate.</em></h2>
                        <p className="ip-lead">
                            Paydscore is not a complaint board. These are the principles we built the platform on — and the ones we'll never compromise.
                        </p>
                        <div className="ip-value-list">
                            {VALUES.map((v, i) => (
                                <motion.div
                                    className="ip-value-item"
                                    key={i}
                                    initial={{ opacity: 0, x: -16 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1, duration: 0.5 }}
                                >
                                    <div className={`ip-value-icon ${v.cls}`}>{v.icon}</div>
                                    <div>
                                        <div className="ip-value-title">{v.title}</div>
                                        <div className="ip-value-body">{v.body}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* ─── Legal Compliance ─── */}
            <div className="ip-section">
                <div className="ip-about-grid">
                    <motion.div
                        initial={{ opacity: 0, x: -32 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="ip-eyebrow-dark">Legal Framework</div>
                        <h2 className="ip-h2">Built within <em>India's laws.</em></h2>
                        <p style={{ fontSize: '16px', color: '#4A5568', lineHeight: 1.8 }}>
                            Paydscore is not a vigilante system. We've built the platform specifically to operate within the legal framework that governs factual information sharing in India.
                        </p>
                        <p style={{ fontSize: '16px', color: '#4A5568', lineHeight: 1.8, marginTop: '16px' }}>
                            Our moderation processes, dispute resolution windows, and data handling policies are designed to ensure every entry on the ledger is defensible.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 32 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.7, delay: 0.15 }}
                    >
                        <div className="ip-compliance-card">
                            <div className="ip-compliance-title">Legal Alignment</div>
                            <div className="ip-compliance-list">
                                {[
                                    { title: 'Section 79, IT Act 2000', body: 'Safe harbour for intermediaries hosting factual user-generated content.' },
                                    { title: 'DPDP Act 2023', body: 'Data protection principles applied to all personally identifiable information on the platform.' },
                                    { title: 'No anonymous submissions', body: 'Every reporter is identity-verified before their entry is published.' },
                                    { title: '14-day dispute window', body: 'Reported entities have 14 days to respond with counter-documentation before an entry is confirmed.' },
                                    { title: 'Facts-only policy', body: 'Opinions, speculation, and emotionally-driven content are rejected at moderation.' },
                                ].map((item, i) => (
                                    <div className="ip-compliance-item" key={i}>
                                        <div className="ip-compliance-dot" />
                                        <div>
                                            <div style={{ fontWeight: 700, fontSize: '14px', color: '#FFFFFF', marginBottom: '2px' }}>{item.title}</div>
                                            <div className="ip-compliance-text">{item.body}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>


            {/* ─── CTA ─── */}
            <div className="ip-cta-strip">
                <div className="ip-cta-title">Believe in honest finance?</div>
                <div className="ip-cta-sub">Join the community that's making India's B2B payment culture more transparent.</div>
                <a href="https://claims.paydscore.com" className="ip-btn ip-btn-dark">
                    Share experience <ArrowRight size={16} />
                </a>
            </div>

            <SharedFooter />
        </div>
    );
}
