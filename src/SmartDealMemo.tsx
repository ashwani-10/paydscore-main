import React, { useState, useId } from 'react';
import { Link } from 'react-router-dom';
import './SmartDealMemo.css';

// ─── Types ────────────────────────────────────────────────────────────────────
interface MemoForm {
  agencyName: string;
  agencyEmail: string;
  brandName: string;
  brandEmail: string;
  projectScope: string;
  totalAmount: string;
  paymentTermsDays: string;
  invoiceDueDate: string;
  hasWaterfall: boolean;
  vendorName: string;
  vendorEmail: string;
  vendorAmount: string;
}

const emptyForm: MemoForm = {
  agencyName: '',
  agencyEmail: '',
  brandName: '',
  brandEmail: '',
  projectScope: '',
  totalAmount: '',
  paymentTermsDays: '30',
  invoiceDueDate: '',
  hasWaterfall: false,
  vendorName: '',
  vendorEmail: '',
  vendorAmount: '',
};

// ─── Helpers ─────────────────────────────────────────────────────────────────
function formatINR(val: string): string {
  const n = parseFloat(val.replace(/,/g, ''));
  if (isNaN(n)) return val;
  return n.toLocaleString('en-IN');
}

function generateMemoId(): string {
  return 'PS-' + Math.random().toString(36).toUpperCase().slice(2, 10);
}

// ─── Step indicator ───────────────────────────────────────────────────────────
const steps = ['The Players', 'The Terms', 'Waterfall'];

function StepDots({ current }: { current: number }) {
  return (
    <div className="sdm-step-dots">
      {steps.map((label, i) => (
        <div key={i} className={`sdm-step-dot-item ${i <= current ? 'active' : ''}`}>
          <div className={`sdm-step-dot ${i < current ? 'done' : i === current ? 'current' : ''}`}>
            {i < current ? (
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M2 5l2.5 2.5L8 3" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : (
              <span>{i + 1}</span>
            )}
          </div>
          <span className="sdm-step-label">{label}</span>
          {i < steps.length - 1 && <div className={`sdm-step-line ${i < current ? 'done' : ''}`} />}
        </div>
      ))}
    </div>
  );
}

// ─── Document Preview ─────────────────────────────────────────────────────────
function parseLocalDate(dateStr: string): Date {
  const [y, m, d] = dateStr.split('-').map(Number);
  return new Date(y, m - 1, d);
}

function MemoDocument({ form, memoId }: { form: MemoForm; memoId: string }) {
  const dueDateFormatted = form.invoiceDueDate
    ? parseLocalDate(form.invoiceDueDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })
    : '___________';

  const today = new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });

  return (
    <div className="sdm-doc" id="sdm-document">
      {/* Header */}
      <div className="sdm-doc-header">
        <div className="sdm-doc-logo">payd<span>score</span></div>
        <div className="sdm-doc-meta">
          <div className="sdm-doc-meta-row">
            <span>Tracking ID</span>
            <span className="sdm-doc-tracking-id">#{memoId}</span>
          </div>
          <div className="sdm-doc-meta-row">
            <span>Generated</span>
            <span>{today}</span>
          </div>
        </div>
      </div>

      <div className="sdm-doc-title">Smart Deal Memo</div>
      <div className="sdm-doc-subtitle">Commercial Agreement & Payment Terms</div>

      <div className="sdm-doc-divider" />

      {/* Parties */}
      <div className="sdm-doc-section">
        <div className="sdm-doc-section-label">Parties to this agreement</div>
        <div className="sdm-doc-parties">
          <div className="sdm-doc-party">
            <div className="sdm-doc-party-role">Service Provider (Agency)</div>
            <div className="sdm-doc-party-name">{form.agencyName || '___________'}</div>
            <div className="sdm-doc-party-email">{form.agencyEmail || ''}</div>
          </div>
          <div className="sdm-doc-party-arrow">→</div>
          <div className="sdm-doc-party">
            <div className="sdm-doc-party-role">Client Entity (Brand)</div>
            <div className="sdm-doc-party-name">{form.brandName || '___________'}</div>
            <div className="sdm-doc-party-email">{form.brandEmail || ''}</div>
          </div>
        </div>
      </div>

      <div className="sdm-doc-divider" />

      {/* Scope & Terms */}
      <div className="sdm-doc-section">
        <div className="sdm-doc-section-label">Project scope</div>
        <div className="sdm-doc-scope">{form.projectScope || '___________'}</div>
      </div>

      <div className="sdm-doc-terms-row">
        <div className="sdm-doc-term-box">
          <div className="sdm-doc-term-label">Total Fee</div>
          <div className="sdm-doc-term-value">₹{form.totalAmount ? formatINR(form.totalAmount) : '—'}</div>
        </div>
        <div className="sdm-doc-term-box">
          <div className="sdm-doc-term-label">Payment Terms</div>
          <div className="sdm-doc-term-value">Net-{form.paymentTermsDays || '30'}</div>
        </div>
        <div className="sdm-doc-term-box">
          <div className="sdm-doc-term-label">Due Date</div>
          <div className="sdm-doc-term-value">{dueDateFormatted}</div>
        </div>
      </div>

      {/* Waterfall block */}
      {form.hasWaterfall && form.vendorName && (
        <>
          <div className="sdm-doc-divider" />
          <div className="sdm-doc-section">
            <div className="sdm-doc-section-label">Waterfall sub-contractor</div>
            <div className="sdm-doc-parties">
              <div className="sdm-doc-party">
                <div className="sdm-doc-party-role">Outsourced Vendor</div>
                <div className="sdm-doc-party-name">{form.vendorName}</div>
                <div className="sdm-doc-party-email">{form.vendorEmail || ''}</div>
              </div>
              {form.vendorAmount && (
                <div className="sdm-doc-party">
                  <div className="sdm-doc-party-role">Vendor Fee</div>
                  <div className="sdm-doc-party-name">₹{formatINR(form.vendorAmount)}</div>
                </div>
              )}
            </div>
          </div>
        </>
      )}

      <div className="sdm-doc-divider" />

      {/* Legal Clauses */}
      <div className="sdm-doc-clause">
        <div className="sdm-doc-clause-title">Statutory & Ledger Compliance Notice</div>
        <div className="sdm-doc-clause-text">
          This commercial agreement is secured via Paydscore Infrastructure (Tracking ID #{memoId}). Both parties acknowledge that adherence to the agreed payment timeline (Net-{form.paymentTermsDays || '30'}) is tracked for corporate compliance and market intelligence. Delays exceeding the stipulated due date ({dueDateFormatted}) are subject to the Paydscore 14-Day Escrow protocol, which may result in a public ledger entry impacting the client entity's Payment Reliability Score.
        </div>
      </div>

      {form.hasWaterfall && (
        <div className="sdm-doc-clause">
          <div className="sdm-doc-clause-title">Upstream Dependency Notice</div>
          <div className="sdm-doc-clause-text">
            This sub-contract is linked to a primary upstream invoice. The Agency's liability to disburse funds to the Vendor is executed upon receipt of cleared funds from the primary Client Entity. In the event of upstream default, the Paydscore system will verify the bottleneck and protect the Agency's Reliability Score while pursuing the primary Client.
          </div>
        </div>
      )}

      {/* Signatures */}
      <div className="sdm-doc-divider" />
      <div className="sdm-doc-sig-row">
        <div className="sdm-doc-sig">
          <div className="sdm-doc-sig-line" />
          <div className="sdm-doc-sig-name">{form.agencyName || 'Agency'}</div>
          <div className="sdm-doc-sig-role">Service Provider</div>
        </div>
        <div className="sdm-doc-sig">
          <div className="sdm-doc-sig-line" />
          <div className="sdm-doc-sig-name">{form.brandName || 'Brand'}</div>
          <div className="sdm-doc-sig-role">Client Entity · Acknowledge</div>
        </div>
      </div>

      {/* Trust Badge */}
      <div className="sdm-doc-trust">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ flexShrink: 0 }}>
          <path d="M6 1L7.5 4.5L11 5L8.5 7.5L9 11L6 9.5L3 11L3.5 7.5L1 5L4.5 4.5L6 1Z" fill="#1D9E75" />
        </svg>
        <span>Secured by Paydscore · Section 79, IT Act 2000 · Paydscore is a neutral data intermediary and is not a party to this agreement.</span>
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function SmartDealMemo() {
  const [wizardStep, setWizardStep] = useState(0); // 0, 1, 2 = form steps; 3 = preview
  const [form, setForm] = useState<MemoForm>(emptyForm);
  const [memoId] = useState(generateMemoId);
  const [errors, setErrors] = useState<Partial<Record<keyof MemoForm, string>>>({});

  const uid = useId();

  const set = (field: keyof MemoForm, value: string | boolean) =>
    setForm(prev => ({ ...prev, [field]: value }));

  // ── Validation ──
  const validateStep = (s: number): boolean => {
    const errs: Partial<Record<keyof MemoForm, string>> = {};
    if (s === 0) {
      if (!form.agencyName.trim()) errs.agencyName = 'Required';
      if (!form.brandName.trim()) errs.brandName = 'Required';
      if (form.brandEmail && !/\S+@\S+\.\S+/.test(form.brandEmail)) errs.brandEmail = 'Invalid email';
    }
    if (s === 1) {
      if (!form.projectScope.trim()) errs.projectScope = 'Required';
      if (!form.totalAmount.trim()) errs.totalAmount = 'Required';
      if (!form.invoiceDueDate) errs.invoiceDueDate = 'Required';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const next = () => {
    if (!validateStep(wizardStep)) return;
    if (wizardStep < 2) setWizardStep(s => s + 1);
    else setWizardStep(3);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const back = () => {
    if (wizardStep > 0) setWizardStep(s => s - 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrint = () => window.print();

  // ── Copy link stub ──
  const [copied, setCopied] = useState(false);
  const copyLink = () => {
    const fake = `${window.location.origin}/memo/${memoId.toLowerCase()}`;
    navigator.clipboard.writeText(fake).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  // ─────────────────────────────────────────────────────────────────────────────
  return (
    <div className="sdm-root">
      {/* Nav */}
      <nav className="sdm-nav">
        <div className="sdm-nav-inner">
          <Link to="/" className="sdm-wordmark">payd<span>score</span></Link>
          <div className="sdm-nav-pill">
            <div className="sdm-live-dot" />
            Smart Deal Memo
          </div>
        </div>
      </nav>

      <main className="sdm-main">
        {/* ── Hero ── */}
        {wizardStep < 3 && (
          <div className="sdm-hero">
            <div className="sdm-badge">
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M6.5 1.5L8 5H11.5L8.75 7.5L9.75 11L6.5 9.25L3.25 11L4.25 7.5L1.5 5H5L6.5 1.5Z" fill="#1D9E75" />
              </svg>
              Free · No card required
            </div>
            <h1 className="sdm-hero-h">Stop getting ghosted.<br />Use a Smart Deal Memo.</h1>
            <p className="sdm-hero-sub">
              Set your payment terms professionally — with a legal clause that deters delays before they happen.
              Every memo is tracked. Every due date is monitored.
            </p>
          </div>
        )}

        {/* ── Form Wizard ── */}
        {wizardStep < 3 ? (
          <div className="sdm-card">
            <StepDots current={wizardStep} />

            {/* Step 0 — The Players */}
            {wizardStep === 0 && (
              <div className="sdm-form-step">
                <div className="sdm-form-section-label">Who are the parties?</div>

                <div className="sdm-field-group">
                  <label className="sdm-label" htmlFor={`${uid}-agency-name`}>Your agency / studio name <span className="sdm-req">*</span></label>
                  <input
                    id={`${uid}-agency-name`}
                    className={`sdm-input ${errors.agencyName ? 'has-err' : ''}`}
                    placeholder="e.g. Pixel & Paper Studios"
                    value={form.agencyName}
                    onChange={e => set('agencyName', e.target.value)}
                  />
                  {errors.agencyName && <div className="sdm-error">{errors.agencyName}</div>}
                </div>

                <div className="sdm-field-group">
                  <label className="sdm-label" htmlFor={`${uid}-agency-email`}>Your email</label>
                  <input
                    id={`${uid}-agency-email`}
                    className="sdm-input"
                    type="email"
                    placeholder="you@youragency.com"
                    value={form.agencyEmail}
                    onChange={e => set('agencyEmail', e.target.value)}
                  />
                </div>

                <div className="sdm-field-divider" />

                <div className="sdm-field-group">
                  <label className="sdm-label" htmlFor={`${uid}-brand-name`}>Client / brand name <span className="sdm-req">*</span></label>
                  <input
                    id={`${uid}-brand-name`}
                    className={`sdm-input ${errors.brandName ? 'has-err' : ''}`}
                    placeholder="e.g. Hindustan Lever Ltd."
                    value={form.brandName}
                    onChange={e => set('brandName', e.target.value)}
                  />
                  {errors.brandName && <div className="sdm-error">{errors.brandName}</div>}
                </div>

                <div className="sdm-field-group">
                  <label className="sdm-label" htmlFor={`${uid}-brand-email`}>Brand's acknowledgement email</label>
                  <input
                    id={`${uid}-brand-email`}
                    className={`sdm-input ${errors.brandEmail ? 'has-err' : ''}`}
                    type="email"
                    placeholder="accounts@brand.com"
                    value={form.brandEmail}
                    onChange={e => set('brandEmail', e.target.value)}
                  />
                  {errors.brandEmail && <div className="sdm-error">{errors.brandEmail}</div>}
                  <div className="sdm-helper">The brand will receive a secure link to acknowledge terms.</div>
                </div>
              </div>
            )}

            {/* Step 1 — The Terms */}
            {wizardStep === 1 && (
              <div className="sdm-form-step">
                <div className="sdm-form-section-label">What are the terms?</div>

                <div className="sdm-field-group">
                  <label className="sdm-label" htmlFor={`${uid}-scope`}>Project scope <span className="sdm-req">*</span></label>
                  <textarea
                    id={`${uid}-scope`}
                    className={`sdm-textarea ${errors.projectScope ? 'has-err' : ''}`}
                    placeholder="e.g. Social media content creation for Q3 2025 — 12 reels, 30 static posts, 4 campaign decks."
                    rows={3}
                    value={form.projectScope}
                    onChange={e => set('projectScope', e.target.value)}
                  />
                  {errors.projectScope && <div className="sdm-error">{errors.projectScope}</div>}
                </div>

                <div className="sdm-two-col">
                  <div className="sdm-field-group">
                    <label className="sdm-label" htmlFor={`${uid}-amount`}>Total fee (₹) <span className="sdm-req">*</span></label>
                    <div className="sdm-input-prefix-wrap">
                      <span className="sdm-input-prefix">₹</span>
                      <input
                        id={`${uid}-amount`}
                        className={`sdm-input with-prefix ${errors.totalAmount ? 'has-err' : ''}`}
                        placeholder="1,50,000"
                        value={form.totalAmount}
                        onChange={e => set('totalAmount', e.target.value)}
                        inputMode="numeric"
                      />
                    </div>
                    {errors.totalAmount && <div className="sdm-error">{errors.totalAmount}</div>}
                  </div>

                  <div className="sdm-field-group">
                    <label className="sdm-label" htmlFor={`${uid}-terms`}>Payment terms</label>
                    <select
                      id={`${uid}-terms`}
                      className="sdm-select"
                      value={form.paymentTermsDays}
                      onChange={e => set('paymentTermsDays', e.target.value)}
                    >
                      <option value="15">Net-15</option>
                      <option value="30">Net-30</option>
                      <option value="45">Net-45</option>
                      <option value="60">Net-60</option>
                    </select>
                  </div>
                </div>

                <div className="sdm-field-group">
                  <label className="sdm-label" htmlFor={`${uid}-due`}>Invoice due date <span className="sdm-req">*</span></label>
                  <input
                    id={`${uid}-due`}
                    className={`sdm-input ${errors.invoiceDueDate ? 'has-err' : ''}`}
                    type="date"
                    value={form.invoiceDueDate}
                    onChange={e => set('invoiceDueDate', e.target.value)}
                  />
                  {errors.invoiceDueDate && <div className="sdm-error">{errors.invoiceDueDate}</div>}
                  <div className="sdm-helper">Paydscore will automatically follow up 24 hours after this date.</div>
                </div>
              </div>
            )}

            {/* Step 2 — Waterfall */}
            {wizardStep === 2 && (
              <div className="sdm-form-step">
                <div className="sdm-form-section-label">Are you outsourcing part of this?</div>
                <p className="sdm-form-hint">If you're sub-contracting work to a freelancer or vendor, activate the Waterfall toggle. They'll receive an invite and a protected sub-contract linked to yours.</p>

                <div
                  className={`sdm-toggle-card ${form.hasWaterfall ? 'active' : ''}`}
                  onClick={() => set('hasWaterfall', !form.hasWaterfall)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={e => e.key === 'Enter' && set('hasWaterfall', !form.hasWaterfall)}
                  id="sdm-waterfall-toggle"
                  aria-pressed={form.hasWaterfall}
                >
                  <div className="sdm-toggle-left">
                    <div className="sdm-toggle-title">Enable Waterfall Sub-contract</div>
                    <div className="sdm-toggle-desc">Link a vendor's payment to this memo. Their delay protection activates automatically if the brand is late.</div>
                  </div>
                  <div className={`sdm-toggle-switch ${form.hasWaterfall ? 'on' : ''}`}>
                    <div className="sdm-toggle-thumb" />
                  </div>
                </div>

                {form.hasWaterfall && (
                  <div className="sdm-waterfall-fields">
                    <div className="sdm-field-group">
                      <label className="sdm-label" htmlFor={`${uid}-vendor-name`}>Vendor / freelancer name</label>
                      <input
                        id={`${uid}-vendor-name`}
                        className="sdm-input"
                        placeholder="e.g. Arjun Mehta"
                        value={form.vendorName}
                        onChange={e => set('vendorName', e.target.value)}
                      />
                    </div>
                    <div className="sdm-two-col">
                      <div className="sdm-field-group">
                        <label className="sdm-label" htmlFor={`${uid}-vendor-email`}>Vendor email</label>
                        <input
                          id={`${uid}-vendor-email`}
                          className="sdm-input"
                          type="email"
                          placeholder="vendor@email.com"
                          value={form.vendorEmail}
                          onChange={e => set('vendorEmail', e.target.value)}
                        />
                        <div className="sdm-helper">They'll receive an invite to track their payment.</div>
                      </div>
                      <div className="sdm-field-group">
                        <label className="sdm-label" htmlFor={`${uid}-vendor-amount`}>Vendor fee (₹)</label>
                        <div className="sdm-input-prefix-wrap">
                          <span className="sdm-input-prefix">₹</span>
                          <input
                            id={`${uid}-vendor-amount`}
                            className="sdm-input with-prefix"
                            placeholder="50,000"
                            value={form.vendorAmount}
                            onChange={e => set('vendorAmount', e.target.value)}
                            inputMode="numeric"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* No waterfall - simple confirmation */}
                {!form.hasWaterfall && (
                  <div className="sdm-no-waterfall">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="7" stroke="#1D9E75" strokeWidth="1.2" />
                      <path d="M5 8l2.5 2.5L11 5.5" stroke="#1D9E75" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>No sub-contractors — this is a direct deal. Your memo is still fully tracked and protected.</span>
                  </div>
                )}
              </div>
            )}

            {/* Nav buttons */}
            <div className="sdm-nav-btns">
              {wizardStep > 0 && (
                <button className="sdm-btn-back" onClick={back}>← Back</button>
              )}
              <button className="sdm-btn-next" onClick={next}>
                {wizardStep === 2 ? 'Generate Memo →' : 'Continue →'}
              </button>
            </div>
          </div>
        ) : (
          /* ── Preview / Output ── */
          <div className="sdm-preview-root">
            <div className="sdm-preview-header">
              <div>
                <div className="sdm-preview-title">Your memo is ready.</div>
                <div className="sdm-preview-sub">Send the link to <strong>{form.brandName || 'your client'}</strong> to acknowledge the terms. Paydscore will monitor the due date automatically.</div>
              </div>
              <div className="sdm-preview-actions">
                <button className="sdm-btn-copy" onClick={copyLink} id="sdm-copy-link">
                  {copied ? (
                    <>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 7l3 3L11.5 4" stroke="#1D9E75" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      Copied
                    </>
                  ) : (
                    <>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="4" y="4" width="7" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.2" /><path d="M3 10V3a1 1 0 011-1h6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" /></svg>
                      Copy link
                    </>
                  )}
                </button>
                <button className="sdm-btn-print" onClick={handlePrint} id="sdm-print-btn">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="2" y="5" width="10" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.2" /><path d="M4 5V3a1 1 0 011-1h4a1 1 0 011 1v2M4 11h6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" /></svg>
                  Download PDF
                </button>
                <button className="sdm-btn-new" onClick={() => { setForm(emptyForm); setWizardStep(0); window.scrollTo({ top: 0 }); }}>
                  New memo
                </button>
              </div>
            </div>

            {/* Status timeline */}
            <div className="sdm-status-row">
              <div className="sdm-status-item done">
                <div className="sdm-status-dot done" />
                <div className="sdm-status-text">
                  <div className="sdm-status-title">Memo created</div>
                  <div className="sdm-status-desc">Tracking ID #{memoId}</div>
                </div>
              </div>
              <div className="sdm-status-connector" />
              <div className="sdm-status-item pending">
                <div className="sdm-status-dot pending" />
                <div className="sdm-status-text">
                  <div className="sdm-status-title">Awaiting acknowledgement</div>
                  <div className="sdm-status-desc">Share link with {form.brandName || 'client'}</div>
                </div>
              </div>
              <div className="sdm-status-connector" />
              <div className="sdm-status-item future">
                <div className="sdm-status-dot future" />
                <div className="sdm-status-text">
                  <div className="sdm-status-title">Due date check-in</div>
                  <div className="sdm-status-desc">
                    {form.invoiceDueDate
                      ? parseLocalDate(form.invoiceDueDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' }) + ' + 24h'
                      : 'Scheduled'}
                  </div>
                </div>
              </div>
            </div>

            <MemoDocument form={form} memoId={memoId} />

            {/* Escrow info strip */}
            <div className="sdm-escrow-strip">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0 }}>
                <circle cx="7" cy="7" r="6" stroke="#1D9E75" strokeWidth="1.2" />
                <path d="M7 4v3.5l2 1.5" stroke="#1D9E75" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
              <span>If the brand doesn't pay within 24 hours of the due date, Paydscore will email you: <em>"Did {form.brandName || 'they'} pay you?"</em> — One click converts this memo into an active Ledger Claim.</span>
            </div>
          </div>
        )}

        {/* ── Why section (shown only on step 0) ── */}
        {wizardStep === 0 && (
          <div className="sdm-why-section">
            <div className="sdm-divider" />
            <div className="sdm-why-h">Why this works</div>

            <div className="sdm-insight">
              <div className="sdm-ins-tag" style={{ color: '#A32D2D' }}>The psychology</div>
              <div className="sdm-ins-number" style={{ color: '#A32D2D' }}>₹12.4 Cr</div>
              <div className="sdm-ins-what">stuck in delayed payments reported on this platform alone.</div>
              <div className="sdm-ins-why">A signed memo with a legal clause and a tracked ID changes the equation. Brands behave differently when they know the delay is on record.</div>
            </div>

            <div className="sdm-divider" />

            <div className="sdm-insight">
              <div className="sdm-ins-tag" style={{ color: '#085041' }}>The protection</div>
              <div className="sdm-ins-number" style={{ color: '#1D9E75' }}>14-Day</div>
              <div className="sdm-ins-what">Escrow protocol activates automatically if the due date passes without payment.</div>
              <div className="sdm-ins-why">You don't have to chase. Paydscore monitors the clock. If the brand is late, the system escalates — and their Payment Reliability Score takes the hit, not yours.</div>
            </div>

            <div className="sdm-divider" />

            <div className="sdm-insight">
              <div className="sdm-ins-tag" style={{ color: '#633806' }}>The waterfall shield</div>
              <div className="sdm-ins-number" style={{ color: '#BA7517' }}>3-way</div>
              <div className="sdm-ins-what">protection across Brand → Agency → Vendor in a single linked memo.</div>
              <div className="sdm-ins-why">If you're outsourcing and the brand goes dark, your vendor's payment is marked as upstream-delayed — your reliability score is protected automatically.</div>
            </div>

            <div className="sdm-divider" />
          </div>
        )}
      </main>

      <footer className="sdm-footer">
        <div className="sdm-wordmark">payd<span>score</span></div>
        <div className="sdm-footer-note">Section 79, IT Act 2000 · DPDP Act aligned · Paydscore is a neutral data intermediary · Your data is never sold.</div>
      </footer>
    </div>
  );
}
