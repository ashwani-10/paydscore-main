import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, ArrowRight, Shield, Star, Award, Zap } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';
import { SharedNavbar } from '../components/SharedNavbar';
import { SharedFooter } from '../components/SharedFooter';

const FORMSPREE_ID = 'xykokoga';

const VERTICALS = [
    'Creative Agency', 'SaaS / Tech', 'Freelancer', 'Event Operations',
    'Digital Marketing', 'PR & Communications', 'Legal & Compliance',
    'Architecture & Design', 'Production House', 'Consultant', 'Other',
];

export default function WaitlistPage() {
    const [state, handleSubmit] = useForm(FORMSPREE_ID);
    const [validationErrors, setValidationErrors] = useState<{name?: string; email?: string}>({});

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);
        const name = formData.get('name') as string;
        const email = formData.get('email') as string;

        const errors: {name?: string; email?: string} = {};

        if (name.trim().length < 2) {
            errors.name = 'Name must be at least 2 characters';
        }

        // Allowed all emails as requested

        setValidationErrors(errors);

        if (Object.keys(errors).length === 0) {
            handleSubmit(e);
        }
    };

    return (
        <div className="min-h-screen bg-[#F8FAFC] flex flex-col">
            <SharedNavbar />

            <div className="flex-1 flex flex-col items-center justify-center px-5 py-12 lg:py-24">
                <div className="w-full max-w-[1100px] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    
                    {/* Left Side: Social Proof & Context */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="hidden lg:block"
                    >
                        <span className="inline-block px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-black uppercase tracking-widest rounded-full mb-6">
                            Phase 2 Rollout
                        </span>
                        <h1 className="text-4xl lg:text-5xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tight">
                            Build your <br/><em>Financial Authority.</em>
                        </h1>
                        <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-md">
                            Join 4,000+ MSMEs and freelancers waiting for the next generation of B2B payment reliability tools.
                        </p>

                        <div className="space-y-6">
                            {[
                                { icon: <Star className="text-amber-400" />, title: 'Priority Access', sub: 'Be the first to claim your verified handle and score.' },
                                { icon: <Zap className="text-indigo-500" />, title: 'Smart Deal Memos', sub: 'Generate legally-compliant agreements in one click.' },
                                { icon: <Award className="text-emerald-500" />, title: 'Market Intel', sub: 'Unlock vertical-specific payment benchmarks.' }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 items-start">
                                    <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center flex-shrink-0 border border-slate-100">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <div className="font-bold text-slate-900">{item.title}</div>
                                        <div className="text-sm text-slate-500">{item.sub}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Side: The Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="w-full max-w-[500px] mx-auto"
                    >
                        <div className="bg-white rounded-[32px] shadow-[0_32px_64px_-16px_rgba(15,23,42,0.1)] border border-slate-100 p-8 md:p-10 lg:p-12 relative overflow-hidden">
                            {/* Decorative element */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-full -mr-16 -mt-16 opacity-50" />
                            
                            <AnimatePresence mode="wait">
                                {state.succeeded ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center py-8 relative z-10"
                                    >
                                        <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-8">
                                            <CheckCircle size={48} className="text-emerald-500" />
                                        </div>
                                        <h2 className="text-3xl font-black text-slate-900 mb-4">You're on the list!</h2>
                                        <p className="text-slate-600 leading-relaxed mb-10">
                                            We've recorded your spot. You'll receive a personal invite as soon as we open up Phase 2 onboarding for your vertical.
                                        </p>
                                        <div className="flex flex-col gap-4">
                                            <Link
                                                to="/home"
                                                className="w-full h-14 bg-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
                                            >
                                                Return to Home
                                            </Link>
                                        </div>
                                    </motion.div>
                                ) : (
                                    <motion.div key="form" initial={{ opacity: 1 }} exit={{ opacity: 0 }} className="relative z-10">
                                        <div className="lg:hidden mb-8 text-center">
                                            <span className="inline-block px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-black uppercase tracking-widest rounded-full mb-4">
                                                Early Access
                                            </span>
                                            <h1 className="text-2xl font-black text-slate-900 leading-tight">
                                                Join the <em>Waitlist.</em>
                                            </h1>
                                        </div>

                                        <form onSubmit={handleFormSubmit} className="space-y-6">
                                            <input type="hidden" name="_subject" value="Paydscore Consolidated Waitlist" />
                                            
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-slate-700 ml-1" htmlFor="name">Full Name *</label>
                                                <input
                                                    id="name"
                                                    name="name"
                                                    className="w-full h-14 px-5 rounded-2xl border-2 border-slate-100 focus:border-emerald-500 outline-none transition-all font-medium text-slate-900 bg-slate-50/50 focus:bg-white"
                                                    type="text"
                                                    placeholder="Your name"
                                                    required
                                                />
                                                {validationErrors.name && <div className="text-rose-500 text-xs ml-1">{validationErrors.name}</div>}
                                                <ValidationError field="name" prefix="Name" errors={state.errors} className="text-rose-500 text-xs ml-1" />
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-slate-700 ml-1" htmlFor="email">Work Email *</label>
                                                <input
                                                    id="email"
                                                    name="email"
                                                    className="w-full h-14 px-5 rounded-2xl border-2 border-slate-100 focus:border-emerald-500 outline-none transition-all font-medium text-slate-900 bg-slate-50/50 focus:bg-white"
                                                    type="email"
                                                    placeholder="you@agency.com"
                                                    required
                                                />
                                                {validationErrors.email && <div className="text-rose-500 text-xs ml-1">{validationErrors.email}</div>}
                                                <ValidationError field="email" prefix="Email" errors={state.errors} className="text-rose-500 text-xs ml-1" />
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-slate-700 ml-1" htmlFor="company">Company / Agency</label>
                                                <input
                                                    id="company"
                                                    name="company"
                                                    className="w-full h-14 px-5 rounded-2xl border-2 border-slate-100 focus:border-emerald-500 outline-none transition-all font-medium text-slate-900 bg-slate-50/50 focus:bg-white"
                                                    type="text"
                                                    placeholder="Your company name"
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-slate-700 ml-1" htmlFor="vertical">Your Vertical *</label>
                                                <select
                                                    id="vertical"
                                                    name="vertical"
                                                    className="w-full h-14 px-5 rounded-2xl border-2 border-slate-100 focus:border-emerald-500 outline-none transition-all font-medium text-slate-900 bg-slate-50/50 focus:bg-white"
                                                    required
                                                    defaultValue=""
                                                >
                                                    <option value="" disabled>Select your vertical</option>
                                                    {VERTICALS.map(v => (
                                                        <option key={v} value={v}>{v}</option>
                                                    ))}
                                                </select>
                                                <ValidationError field="vertical" prefix="Vertical" errors={state.errors} className="text-rose-500 text-xs ml-1" />
                                            </div>

                                            <button
                                                type="submit"
                                                className="w-full h-14 bg-emerald-500 text-white font-bold rounded-2xl hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-3 active:scale-[0.98] mt-4"
                                                disabled={state.submitting}
                                            >
                                                {state.submitting ? 'Joining...' : (
                                                    <>Secure Early Access <ArrowRight size={18} /></>
                                                )}
                                            </button>
                                            
                                            <div className="flex items-center justify-center gap-4 pt-4 border-t border-slate-100">
                                                <div className="flex items-center gap-1.5">
                                                    <Shield size={14} className="text-slate-400" />
                                                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Encrypted</span>
                                                </div>
                                                <div className="w-1 h-1 rounded-full bg-slate-200" />
                                                <div className="flex items-center gap-1.5">
                                                    <Star size={14} className="text-slate-400" />
                                                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Spam Free</span>
                                                </div>
                                            </div>
                                        </form>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>
            </div>

            <SharedFooter />
        </div>
    );
}
