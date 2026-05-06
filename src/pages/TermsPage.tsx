import { motion } from 'framer-motion';
import { SharedNavbar } from '../components/SharedNavbar';
import { SharedFooter } from '../components/SharedFooter';

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-[#F8FAFC]">
            <SharedNavbar />
            
            <div className="max-w-4xl mx-auto px-6 py-20 lg:py-32">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-widest rounded-full mb-6">
                        Legal Framework
                    </span>
                    <h1 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4 leading-tight">
                        Terms and Conditions
                    </h1>
                    <p className="text-slate-500 font-medium mb-12">
                        Last Updated: 23-03-2026
                    </p>

                    <div className="prose prose-slate max-w-none">
                        <section className="mb-12">
                            <h2 className="text-xl font-bold text-slate-900 mb-6 uppercase tracking-tight border-b pb-2">Preamble and Binding Agreement</h2>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                This document lays out the terms, conditions, rules, operational mandates, and limitations of liability, as may be amended and supplemented from time to time (collectively, the "Terms"), which shall be exclusively applicable to the provision of access to the Paydscore platform, the Paydscore database, the Payment Experience Index, and any other products, dashboards, and services rendered by Paydscore (collectively referred to as the "Products and Services" or the "Platform").
                            </p>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                These Terms apply to any individual, independent professional, freelancer, partnership firm, company (as defined in the Companies Act, 2013), body corporate, co-operative society, trust, or association of persons whether incorporated or not, and shall include their heirs, representatives, successors, and assigns, as permitted and applicable, who access the Platform, submit data, read data, or claim a corporate profile (collectively referred to as "Persons" or "Users"). The words, "I", "We", "us", "me", "my", "myself", "customer" and "consumer" refer to the Person(s) utilizing the Platform. Reference to the masculine gender shall include the feminine and neutral gender or any other legal entity.
                            </p>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                I/We acknowledge and expressly agree with the following terms and conditions: I/We have read, understood and agree to abide by these Terms including any changes thereto made by Paydscore in its sole discretion, from time to time, which changes shall be made available on Paydscore's website. I/We agree that the Terms form a valid, legally binding contract between myself/ourselves and Paydscore. Paydscore may, at its sole discretion, amend the Products and Services and/or the Terms, either wholly or partially, at any time without the requirement of any prior notice or consent. A printed version of these Terms and of any notice given in electronic form shall be valid and admissible in judicial or administrative proceedings based upon or relating to these Terms to the same extent and subject to the same conditions as any other documents and records originally generated and maintained in printed form.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-xl font-bold text-slate-900 mb-6 uppercase tracking-tight border-b pb-2">Section 1: Exhaustive Definitions</h2>
                            <ul className="space-y-4">
                                <li className="text-slate-600 leading-relaxed">
                                    <strong className="text-slate-900">"Commercial Entity"</strong> refers to the business, agency, corporate counterparty, or client whose payment timelines, defaults, and history are being logged, aggregated, or displayed on the Platform.
                                </li>
                                <li className="text-slate-600 leading-relaxed">
                                    <strong className="text-slate-900">"Data Furnisher"</strong> refers to the independent professional, freelancer, or verified User who voluntarily, independently, and without solicitation submits factual Ledger Entries regarding a Commercial Entity to the Platform.
                                </li>
                                <li className="text-slate-600 leading-relaxed">
                                    <strong className="text-slate-900">"DPD Matrix"</strong> refers to the Days Past Due categorization utilized by the Platform to objectively classify the accounting status of a payment (e.g., 000, 030, 060, 090, SUB).
                                </li>
                                <li className="text-slate-600 leading-relaxed">
                                    <strong className="text-slate-900">"Ledger Entry"</strong> refers to the specific, immutable record of a transaction submitted by a Data Furnisher, including but not limited to invoice details, DPD classification, contextual tags, and redacted documentary evidence.
                                </li>
                                <li className="text-slate-600 leading-relaxed">
                                    <strong className="text-slate-900">"Payment Experience Index"</strong> refers to the aggregated, mathematically derived metrics reflecting a Commercial Entity's historical payment behavior based exclusively on the collation of Ledger Entries.
                                </li>
                                <li className="text-slate-600 leading-relaxed">
                                    <strong className="text-slate-900">"Notice of Default"</strong> refers to the automated, electronic intimation sent by the Platform to a Commercial Entity warning them of a pending Ledger Entry prior to public publication.
                                </li>
                                <li className="text-slate-600 leading-relaxed">
                                    <strong className="text-slate-900">"Dispute Taxonomy"</strong> refers to the strictly defined, categorized codes through which a Commercial Entity may formally object to a Ledger Entry (e.g., Identity Theft, Quality Dispute, Already Settled).
                                </li>
                            </ul>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-xl font-bold text-slate-900 mb-6 uppercase tracking-tight border-b pb-2">Section 2: Statutory Intermediary Immunity & "As-Is" Provision</h2>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                <strong className="text-slate-900">2.1. Absolute Passive Intermediary Designation:</strong> I/We acknowledge, understand, and explicitly agree that by providing the Products and Services, Paydscore is acting strictly as a passive facilitator and technology intermediary under Section 79 of the Information Technology Act, 2000, read alongside the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021. Paydscore does not initiate the transmission of Ledger Entries, does not select the receiver of such transmissions, and does not editorially select or modify the information contained in any Ledger Entry.
                            </p>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                <strong className="text-slate-900">2.2. Reliance on Third-Party Data ("As-Is" Basis):</strong> I/We agree and understand that any and all information contained in the Ledger Entries, the Payment Experience Index, and the Products and Services has been collated by Paydscore based exclusively on the information provided by independent Data Furnishers. Consequently, Paydscore shall not be responsible for the accuracy, completeness, veracity, or legal validity of any and all such information as provided. Paydscore shall reproduce the information submitted to it by Data Furnishers on a strict "as is" basis.
                            </p>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                <strong className="text-slate-900">2.3. Disavowal of Views and Liability:</strong> I/We also understand that the information is current and up to date only to such extent as provided by the Data Furnishers and is subject to changes and amendments made thereafter. Any information contained herein does not reflect the views, opinions, or editorial stance of Paydscore, its directors, investors, or employees. Paydscore shall incur no liability and shall not be required to indemnify me/us or any Commercial Entity for any loss, damages, claims, tortious interference, or expenses incurred due to incorrect reports provided due to incorrect information, malice, or documents provided by Data Furnishers, or if for any technical reason, an incorrect report is generated.
                            </p>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                <strong className="text-slate-900">2.4. Unilateral Right of Rejection and Termination:</strong> Paydscore shall have the absolute right to terminate the provision of the Platform or any part thereof, at its sole discretion at any time. Further, notwithstanding the Terms contained herein, Paydscore reserves the right to reject any Ledger Entry, Request Form, or Profile Claim made due to any reason whatsoever and shall not be required to specify such reason for rejecting the same to the User.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-xl font-bold text-slate-900 mb-6 uppercase tracking-tight border-b pb-2">Section 3: Request Forms, KYC, and Authentication "Insufficiencies"</h2>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                <strong className="text-slate-900">3.1. General KYC Compliance:</strong> I/We agree to strictly comply with the Know Your Customer (KYC) and authentication requirements as required by Paydscore and specified from time to time. Any application, submission, or claim made by me/us that is incomplete, circumvents the authentication protocols, or fails the verification layers shall not be considered a valid application and will be summarily rejected without providing any reason whatsoever.
                            </p>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                <strong className="text-slate-900">3.2. Data Furnisher Authentication:</strong> To ensure data integrity, all Data Furnishers must authenticate their professional identity using the LinkedIn OAuth integration prior to submitting a Ledger Entry. I/We understand that Paydscore authenticates the identity of the user to prevent automated abuse (Sybil attacks) but does not verify the substantive truth of the Ledger Entry itself. If Paydscore detects suspicious activity, Paydscore reserves the right to demand secondary identification (including government-issued ID) before permitting platform access.
                            </p>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                <strong className="text-slate-900">3.3. Commercial Entity Authentication:</strong> Representatives seeking to claim a Commercial Entity profile to access analytics, monitor the Payment Experience Index, or dispute Ledger Entries must undergo a rigid verification process. The representative must verify their identity using an official, active corporate domain email address matching the Commercial Entity's public registry (e.g., name@corporate-domain.com).
                            </p>
                            <p className="text-slate-600 leading-relaxed mb-4 font-bold text-slate-900">
                                3.4. Rejection Criteria (Insufficiencies):
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-4">
                                <li>The LinkedIn OAuth profile provided by a Data Furnisher appears to be a bot, burner account, or lacks sufficient professional history as determined by Paydscore's automated risk-scoring.</li>
                                <li>The corporate email domain provided by a Commercial Entity representative is a generic domain (e.g., @gmail.com, @yahoo.com) or a temporary/burner domain.</li>
                                <li>The Corporate Identification Number (CIN) or GSTIN provided does not match the public records of the Ministry of Corporate Affairs (MCA) or the GST Portal.</li>
                                <li>The documentary evidence uploaded by a Data Furnisher fails to redact end-client names or proprietary trade secrets, thereby exposing the Platform to NDA breach liabilities.</li>
                                <li>The language used in any Ledger Entry or dispute rebuttal contains profanity, slurs, or subjective defamatory attacks rather than objective accounting facts.</li>
                                <li>The User fails to accept the Digital Personal Data Protection (DPDP) Act consent mandates.</li>
                                <li>Any other reasons as defined and updated by Paydscore, from time to time, in its sole discretion.</li>
                            </ul>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                <strong className="text-slate-900">3.5. Consequences of Incorrect Information:</strong> I/We understand that if, due to the provision of wrong or incomplete information provided by me/us during the authentication process, an incorrect Report or Index is generated, Paydscore shall in no manner be responsible for the same. Paydscore shall not be liable for any legal notices, damages, or claims arising from mistaken corporate identity caused by a Data Furnisher inputting the wrong GSTIN or URL.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-xl font-bold text-slate-900 mb-6 uppercase tracking-tight border-b pb-2">Section 4: Submission of Ledger Entries & The 14-Day Resolution Protocol</h2>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                <strong className="text-slate-900">4.1. The Pre-Publication Cooling-Off State:</strong> I/We acknowledge and strictly understand that upon the successful submission of a Ledger Entry or payment default report by a Data Furnisher, the data does not immediately populate on the public-facing Platform. To ensure fairness and adherence to principles of natural justice, every Ledger Entry is placed into a mandatory, system-enforced fourteen (14) day "Cooling-Off" or "Resolution" state. Paydscore possesses no manual override to bypass this period.
                            </p>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                <strong className="text-slate-900">4.2. Notice of Default & Right of Reply:</strong> During this 14-day period, Paydscore’s automated systems will electronically transmit a "Notice of Default" to the verified public domain address of the relevant Commercial Entity. This Notice serves to inform the Commercial Entity of the pending publication of the DPD metrics and provides a secure, one-time link allowing the Commercial Entity to formally resolve, acknowledge, or dispute the entry prior to public dissemination.
                            </p>
                            <p className="text-slate-600 leading-relaxed mb-4 font-bold text-slate-900">
                                4.3. Automated Publication Mechanics (The 15th Day Rule):
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-4">
                                <li><strong className="text-slate-900">a) Failure to Respond:</strong> If the Commercial Entity ignores the Notice of Default, fails to access the secure link, or otherwise fails to formally dispute the claim within the strict fourteen (14) day window, the Ledger Entry will automatically and irreversibly be published to the public ledger on the fifteenth (15th) day. Paydscore shall bear no liability for reputational damage arising from a Commercial Entity's failure to utilize their Right of Reply.</li>
                                <li><strong className="text-slate-900">b) Formal Dispute:</strong> If the Commercial Entity formally disputes the claim within the 14-day window using the Platform's rigid Dispute Taxonomy, the Ledger Entry will proceed to publication, but it will be permanently affixed with a prominent "Under Dispute" watermark.</li>
                                <li><strong className="text-slate-900">c) Resolution Status:</strong> If the Commercial Entity settles the outstanding invoice, the Data Furnisher is legally obligated to log back into the Platform and update the Ledger Entry status to "Settled."</li>
                            </ul>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                <strong className="text-slate-900">4.4. Section 65B Audit Trails (The Immutable Log):</strong> For every action taken regarding a Ledger Entry, including submission, the dispatch of the Notice of Default, and any subsequent disputes filed by a Commercial Entity, Paydscore maintains a rigid, unalterable timestamp and IP log. I/We understand that these server logs are maintained in strict compliance with Section 65B of the Indian Evidence Act, 1872, and will be produced in any court of law to prove that Paydscore acted entirely via automated triggers with zero human or editorial interference.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-xl font-bold text-slate-900 mb-6 uppercase tracking-tight border-b pb-2">Section 5: Obligations & Strict Prohibitions for Data Furnishers</h2>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                <strong className="text-slate-900">5.1. Truth Attestation & Criminal Liability:</strong> I/We solemnly affirm, declare, and undertake that all Ledger Entries submitted are factually true, mathematically accurate, supported by contemporaneous documentary evidence, and are strictly related to professional, commercial transactions. I/We explicitly confirm that I/we am/are not acting as a competitor to the Commercial Entity, nor am/are I/we acting with "Malice" as defined under Indian Tort Law. I/We completely understand that submitting fabricated, malicious, or coerced data to this Platform constitutes a criminal offense under Section 356 (Criminal Defamation) and Section 336 of the Bharatiya Nyaya Sanhita (BNS).
                            </p>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                <strong className="text-slate-900">5.2. Mandatory Redaction of Evidence (NDA & Copyright Protection):</strong> Before uploading any documentary evidence to support a Ledger Entry, I/We agree to permanently redact and black-out all end-client names, proprietary trade secrets, confidential pricing matrices, and proprietary project titles. I/We acknowledge that uploading unredacted confidential information may constitute a breach of Non-Disclosure Agreements (NDAs) or copyright infringement. Paydscore assumes zero liability for, and I/we completely indemnify Paydscore against, any legal action arising from my/our failure to properly redact uploaded evidence.
                            </p>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                <strong className="text-slate-900">5.3. Prohibition on Synthetic and AI-Generated Data:</strong> I/We declare under penalty of perjury that no document, image, invoice, or text uploaded to the Platform has been synthetically generated, altered, manipulated, or deepfaked using Artificial Intelligence (AI) tools or digital image editing software.
                            </p>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                <strong className="text-slate-900">5.4. Strict Prohibition on Extortion and Debt Collection:</strong> I/We acknowledge that Paydscore is strictly a historical financial data ledger and a reporting utility. It is not a debt collection agency, a mediation forum, or a recovery agent. I/We shall not use this Platform, or the threat of posting a Ledger Entry on this Platform, to extort, coerce, negotiate with, or blackmail any Commercial Entity into paying a disputed sum. Any evidence of extortionate behavior, threats, or demands for ransom in exchange for deleting a Ledger Entry will result in immediate account termination, IP banning, and the proactive reporting of my/our details to the appropriate law enforcement authorities.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-xl font-bold text-slate-900 mb-6 uppercase tracking-tight border-b pb-2">Section 6: Commercials, Payments, and Regulatory Compliance</h2>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                <strong className="text-slate-900">6.1. Current Commercial Structure (Free Access):</strong> As of the current version of the Products and Services, access to the Platform, including the submission of Ledger Entries by Data Furnishers and the claiming of profiles by Commercial Entities, is provided completely free of charge.
                            </p>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                <strong className="text-slate-900">6.2. Strict Prohibition on Financial Intermediation (RBI Compliance):</strong> I/We understand and acknowledge that Paydscore does not operate a payment gateway, does not provide escrow services for disputed funds, and does not facilitate the transfer of money between Commercial Entities and Data Furnishers. Paydscore is not a Payment Aggregator or a Payment Gateway under the regulations and guidelines of the Reserve Bank of India (RBI). Any and all financial settlements, invoice clearances, or compensatory payments must occur entirely off-platform between the two respective parties.
                            </p>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                <strong className="text-slate-900">6.3. Future Modifications to Commercials:</strong> While the current services are provided free of charge, the charges for any future Subscribed Products and Services shall be as stipulated by Paydscore from time to time, and I/we agree to pay the same if I/we opt to utilize those specific premium services. Paydscore reserves the right to charge Commercial Entities for premium analytics, detailed footprint reports, or API access to the Payment Experience Index in the future.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-xl font-bold text-slate-900 mb-6 uppercase tracking-tight border-b pb-2">Section 7: Data Sovereignty and DPDP Act 2023 Compliance</h2>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                <strong className="text-slate-900">7.1. Data Localization and Sovereignty:</strong> I/We acknowledge and explicitly consent that all Platform data are securely hosted on Amazon Web Services (AWS) EC2 instances and NeonDB cloud databases located strictly within the Asia Pacific (Mumbai) region, ensuring full, uninterrupted compliance with Indian data residency and sovereignty mandates. Paydscore does not export or process your data in foreign jurisdictions.
                            </p>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                <strong className="text-slate-900">7.2. Integration with Privacy Policy:</strong> I/We acknowledge that the collection, processing, and storage of my/our personal data is governed strictly by Paydscore’s Privacy Policy. By accepting these Terms, I/We grant free, specific, informed, unconditional, and unambiguous consent to the processing of my/our data as fully detailed in the Privacy Policy, compliant with Section 6 of the Digital Personal Data Protection (DPDP) Act, 2023.
                            </p>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                <strong className="text-slate-900">7.3. The Erasure vs. Retention Legal Mandate:</strong> I/We understand that under the DPDP Act, 2023, Users retain the right to withdraw consent and request the erasure of their personal data. However, I/We explicitly acknowledge and agree that upon the deletion of an account, while public-facing personal data will be immediately severed from the frontend, Paydscore is statutorily mandated by Rule 3(1)(g) of the Information Technology (Intermediary Guidelines) Rules, 2021, to securely archive the underlying transaction logs, IP addresses, and registration data in a backend vault for a mandatory period of one hundred and eighty (180) days.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-xl font-bold text-slate-900 mb-6 uppercase tracking-tight border-b pb-2">Section 8: Exhaustive Disclaimer of Warranties and Limitation of Liability</h2>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                <strong className="text-slate-900">8.1. Absolute Disclaimer of Warranties ("As-Is" Provision):</strong> I/We acknowledge, understand, and agree that the Platform is provided on a strict "AS-IS" and "AS-AVAILABLE" basis. Paydscore, its founders, directors, and affiliates expressly disclaim all warranties of any kind.
                            </p>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                <strong className="text-slate-900">8.2. Limitation of Liability:</strong> To the maximum extent permitted by applicable Indian law, in no event shall Paydscore, its founders, directors, employees, investors, or agents be held liable for any direct, indirect, punitive, incidental, special, consequential, or exemplary damages.
                            </p>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                <strong className="text-slate-900">8.3. Cap on Liability:</strong> Paydscore’s total, aggregate liability for any and all claims shall be strictly limited to Indian Rupees Zero (₹0), reflecting the free, non-monetized nature of the current platform architecture.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-xl font-bold text-slate-900 mb-6 uppercase tracking-tight border-b pb-2">Section 9: Mandatory Indemnification</h2>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                I/We agree to aggressively defend, fully indemnify, and hold harmless Paydscore from and against any and all losses, damages, liabilities, claims, demands, suits, penalties, costs, and expenses resulting directly or indirectly from any breach by me/us of these Terms or any violation of applicable laws committed by me/us while utilizing the Platform.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-xl font-bold text-slate-900 mb-6 uppercase tracking-tight border-b pb-2">Section 10: Miscellaneous Provisions</h2>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                <strong className="text-slate-900">10.1. Severability:</strong> If any provision of these Terms is declared void or unenforceable, the remaining provisions shall remain in full force and effect.
                            </p>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                <strong className="text-slate-900">10.4. Grievance Redressal:</strong> In strict accordance with Rule 3(2) of the IT Rules, 2021, Paydscore has instituted a Grievance Redressal Mechanism. Any complaints must be formally addressed to the Grievance Officer at grievances@paydscore.com.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-xl font-bold text-slate-900 mb-6 uppercase tracking-tight border-b pb-2">Section 11: Governing Law, Exclusive Jurisdiction, and Arbitration</h2>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                These Terms shall be governed by the laws of the Republic of India. Any dispute shall be referred to and finally resolved by mandatory, binding arbitration to be conducted by a sole arbitrator in Mumbai, Maharashtra, India.
                            </p>
                        </section>
                    </div>
                </motion.div>
            </div>

            <SharedFooter />
        </div>
    );
}
