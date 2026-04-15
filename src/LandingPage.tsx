import './LandingPage.css';

const LandingPage = () => {
    return (
        <div className="landing-body">
            <div className="landing-card">
                <div className="landing-logo-container">
                    <img src="https://paydscore-documents.s3.ap-south-1.amazonaws.com/logo.jpeg" alt="Paydscore Logo"
                        className="landing-logo-img" />
                </div>

                <h1>The Search Engine is currently locked.</h1>

                <p>We are seeding India’s first B2B Payment Reliability Ledger. The public search engine goes live soon, but
                    access is earned, not bought.</p>

                <div className="landing-cta-section">
                    <p className="landing-cta-text"><strong>Unlock Lifetime Access</strong></p>
                    <p className="landing-cta-text" style={{ fontSize: '17px', fontWeight: 500, marginTop: 0 }}>Contribute one payment
                        experience to the database today to guarantee your unrestricted access when the platform launches.</p>
                    <a href="https://claims.paydscore.com" className="landing-cta-link"
                        style={{ display: 'inline-block', marginTop: '16px', padding: '12px 24px', background: 'var(--accent-green)', color: 'white', borderRadius: '8px' }}>Log
                        a Ledger Entry</a>
                </div>

                <div className="landing-footer">
                    <div className="landing-check-box">
                        <svg className="landing-check-icon" viewBox="0 0 10 7" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 3.5L3.5 6L9 1" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"
                                strokeLinejoin="round" />
                        </svg>
                    </div>
                    Stay tuned: <a href="https://paydscore.com">paydscore.com</a>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
