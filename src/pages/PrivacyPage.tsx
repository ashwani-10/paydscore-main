import { motion } from 'framer-motion';
import { SharedNavbar } from '../components/SharedNavbar';
import { SharedFooter } from '../components/SharedFooter';

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-[#F8FAFC]">
            <SharedNavbar />
            
            <div className="max-w-4xl mx-auto px-6 py-20 lg:py-32">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-600 text-xs font-bold uppercase tracking-widest rounded-full mb-6">
                        Data Protection
                    </span>
                    <h1 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4 leading-tight">
                        Privacy Policy and Notice of Data Processing
                    </h1>
                    <p className="text-slate-500 font-medium mb-12">
                        Last Updated: 23-03-2026
                    </p>

                    <div className="prose prose-slate max-w-none">
                        <section className="mb-12">
                            <h2 className="text-xl font-bold text-slate-900 mb-6 uppercase tracking-tight border-b pb-2">Preamble</h2>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                The purpose of this comprehensive policy is to maintain the absolute privacy of, and legally protect, the personal information of independent professionals, freelancers, corporate representatives, and end-users (collectively, "Data Principals" or "Users") of Paydscore ("we", "us", "our", "Paydscore", or the "Data Fiduciary").
                            </p>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                This Privacy Policy is published in strict compliance with the provisions of the Digital Personal Data Protection Act, 2023 ("DPDP Act") and the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021 ("IT Rules, 2021").
                            </p>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                You hereby acknowledge having read and unequivocally accepted the terms of this Privacy Policy by use of this Website and/or otherwise by virtue of expressly consenting to provide us with your Personal Information.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-xl font-bold text-slate-900 mb-6 uppercase tracking-tight border-b pb-2">1. Definitions under Applicable Law</h2>
                            <ul className="space-y-4">
                                <li className="text-slate-600 leading-relaxed">
                                    <strong className="text-slate-900">"Data Fiduciary"</strong> means any person who alone or in conjunction with other persons determines the purpose and means of processing of personal data.
                                </li>
                                <li className="text-slate-600 leading-relaxed">
                                    <strong className="text-slate-900">"Data Principal"</strong> means the individual to whom the personal data relates (i.e., you, the User).
                                </li>
                                <li className="text-slate-600 leading-relaxed">
                                    <strong className="text-slate-900">"Personal Data"</strong> means any data about an individual who is identifiable by or in relation to such data.
                                </li>
                            </ul>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-xl font-bold text-slate-900 mb-6 uppercase tracking-tight border-b pb-2">2. Information We Collect and How</h2>
                            <p className="text-slate-600 leading-relaxed mb-4 font-bold text-slate-900">2.1. Information Provided by Data Furnishers:</p>
                            <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-6">
                                <li><strong className="text-slate-900">Authentication Data:</strong> We utilize LinkedIn OAuth for identity verification. We collect your public LinkedIn profile identifier, professional name, and associated email address.</li>
                                <li><strong className="text-slate-900">Transactional Data:</strong> Details regarding the invoices, contracts, and payment timelines you voluntarily submit as a Ledger Entry.</li>
                            </ul>
                            
                            <p className="text-slate-600 leading-relaxed mb-4 font-bold text-slate-900">2.3. Information We Collect Automatically (Telemetry & Security):</p>
                            <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-6">
                                <li>Internet Protocol (IP) address from which you access the Websites.</li>
                                <li>Timestamp logs of your login events and Ledger Entry submissions.</li>
                                <li>Browser type, device type, and operating system.</li>
                            </ul>
                            <p className="text-slate-600 leading-relaxed">
                                This automatic data collection is mandatory to maintain an immutable audit trail under Section 65B of the Indian Evidence Act, 1872.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-xl font-bold text-slate-900 mb-6 uppercase tracking-tight border-b pb-2">3. Purpose of Collection</h2>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                Paydscore processes your data exclusively for the following declared purposes:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-slate-600">
                                <li>Authentication and Integrity (Identity verification).</li>
                                <li>Statutory Notice Mechanisms (Automated notifications).</li>
                                <li>Platform Operations (Cloud hosting and database management).</li>
                                <li>Legal Compliance (Court orders and law enforcement requests).</li>
                            </ul>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-xl font-bold text-slate-900 mb-6 uppercase tracking-tight border-b pb-2">4. Disclosure and Sharing of Information</h2>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                Paydscore functions as a secure data ledger. We do not sell, trade, or rent your Personal Information to third parties. Disclosure is limited to:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-slate-600">
                                <li><strong className="text-slate-900">Data Processors:</strong> Amazon Web Services (AWS) and NeonDB.</li>
                                <li><strong className="text-slate-900">Legal Mandates:</strong> Good faith belief that it is necessary to comply with a court order or law enforcement request.</li>
                            </ul>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-xl font-bold text-slate-900 mb-6 uppercase tracking-tight border-b pb-2">5. Data Sovereignty and Localization</h2>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                <strong className="text-slate-900">5.1. Absolute Data Localization:</strong> All Platform databases and transactional ledgers are hosted strictly within the Asia Pacific (Mumbai) region on AWS EC2 and NeonDB servers. Paydscore does not export your Personal Data in foreign jurisdictions.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-xl font-bold text-slate-900 mb-6 uppercase tracking-tight border-b pb-2">7. The Right to Erasure vs. Statutory Retention</h2>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                <strong className="text-slate-900">7.3. The 180-Day Statutory Retention Rule:</strong> Under Rule 3(1)(g) of the Information Technology (Intermediary Guidelines) Rules, 2021, Paydscore is statutorily mandated to securely archive registration data, IP logs, and associated Ledger Entries in an encrypted, offline backend vault for a mandatory period of one hundred and eighty (180) days for potential law enforcement investigation.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-xl font-bold text-slate-900 mb-6 uppercase tracking-tight border-b pb-2">9. Your Rights as a Data Principal</h2>
                            <ul className="list-disc pl-6 space-y-2 text-slate-600">
                                <li>Right to Access (Summary of data processed).</li>
                                <li>Right to Correction (Updating inaccurate data).</li>
                                <li>Right to Erasure (Subject to 180-day retention rule).</li>
                                <li>Right to Nominate (Representative in case of incapacity).</li>
                            </ul>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-xl font-bold text-slate-900 mb-6 uppercase tracking-tight border-b pb-2">11. Grievance Redressal</h2>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                All privacy-related requests, data erasure requests, and statutory grievances must be directed to the Grievance Officer at <strong className="text-slate-900">grievances@paydscore.com</strong>. We commit to acknowledging all written grievances within twenty-four (24) hours and resolving them within fifteen (15) days.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-xl font-bold text-slate-900 mb-6 uppercase tracking-tight border-b pb-2">12. Governing Law and Jurisdiction</h2>
                            <p className="text-slate-600 leading-relaxed">
                                This Privacy Policy is governed exclusively by the laws of the Republic of India. Any legal proceeding shall be subject to the absolute and exclusive jurisdiction of the competent courts situated in Mumbai, Maharashtra, India.
                            </p>
                        </section>
                    </div>
                </motion.div>
            </div>

            <SharedFooter />
        </div>
    );
}
