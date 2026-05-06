import { Link } from 'react-router-dom';

export function SharedFooter() {
    return (
        <footer className="site-footer">
            <div className="site-footer-inner">
                <div className="site-footer-top">
                    <div>
                        <img src="/logo-wordmark.png" alt="paydscore" style={{ height: '24px', marginBottom: '8px' }} />
                        <div className="site-footer-copy">India&apos;s B2B Financial Identity Platform for MSMEs.</div>
                    </div>
                    <div className="site-footer-links">
                        <a href="https://claims.paydscore.com" className="site-footer-link">Share Experience</a>
                        <Link to="/intel" className="site-footer-link">Intel</Link>
                        <Link to="/terms" className="site-footer-link">Terms of Service</Link>
                        <Link to="/privacy" className="site-footer-link">Privacy Policy</Link>
                        <a href="mailto:grievance@paydscore.com" className="site-footer-link">
                            Grievance Redressal
                        </a>
                    </div>
                </div>

                {/* Grievance Information */}
                <div style={{ fontSize: '12px', color: '#94A3B8', lineHeight: 1.7 }}>
                    <strong style={{ color: '#64748B' }}>Grievance Officer:</strong> For any concerns regarding content published on the platform, data privacy, or dispute resolution, please contact our Grievance Officer at{' '}
                    <a href="mailto:grievance@paydscore.com" style={{ color: '#64748B', textDecoration: 'underline' }}>
                        grievance@paydscore.com
                    </a>
                    . We are committed to addressing all grievances within 72 hours of receipt, in accordance with the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021.
                </div>

                {/* IT Act Disclaimer */}
                <div className="site-footer-disclaimer">
                    Paydscore is an intermediary platform as defined under Section 2(1)(w) of the Information Technology Act, 2000. All ledger entries are user-generated and backed by documentary evidence. Paydscore does not independently verify, endorse, or adjudicate the factual accuracy of individual claims, nor does it act as a debt collection agency.
                </div>

                <div className="site-footer-bottom">
                    © {new Date().getFullYear()} Paydscore. Built with responsibility.
                </div>
            </div>
        </footer>
    );
}
