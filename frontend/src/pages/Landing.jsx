import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Leaf, Gift, Truck, MapPin, CheckCircle, BarChart3, ShieldCheck } from 'lucide-react';

export default function Landing() {
    return (
        <div className="min-h-screen bg-bg text-white font-sans overflow-hidden">
            {/* Navbar */}
            <nav className="w-full px-8 py-5 flex justify-between items-center bg-surface/80 backdrop-blur-md border-b border-border sticky top-0 z-50">
                <div className="flex items-center gap-3">
                    <Leaf className="w-8 h-8 text-primary" />
                    <div className="text-xl font-display font-bold tracking-tight">SMART FOOD<br /><span className="text-primary text-[10px] uppercase tracking-[0.2em]">Redistribution Network</span></div>
                </div>
                <div className="hidden md:flex gap-8 font-medium text-gray-400">
                    <Link to="/" className="text-primary font-bold">Home</Link>
                    <a href="#about" className="hover:text-white transition-colors">About</a>
                    <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
                    <a href="#impact" className="hover:text-white transition-colors">Impact</a>
                </div>
                <div>
                    <Link to="/login" className="bg-primary hover:bg-primary-light text-bg px-7 py-2.5 rounded-full font-bold shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all">Login</Link>
                </div>
            </nav>

            {/* Hero Section */}
            <main className="max-w-7xl mx-auto px-8 py-20 flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
                <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="flex-1 space-y-8 z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 bg-surface border border-border px-4 py-2 rounded-full text-sm font-medium text-gray-300"
                    >
                        <ShieldCheck className="w-4 h-4 text-primary" />
                        AI-Powered Shelf Life Prediction Active
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-display font-bold leading-tight"
                    >
                        Let's Reduce Waste<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-200">Feed More People.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-400 max-w-xl leading-relaxed"
                    >
                        Decentralizing food redistribution with smart expiry tracking, automated logistics, and real-time impact analytics.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="flex gap-4 pt-4"
                    >
                        <Link to="/login" className="bg-primary hover:bg-primary-light text-bg px-8 py-4 rounded-full font-bold shadow-[0_4px_30px_rgba(16,185,129,0.3)] transition-transform hover:-translate-y-1">Donate Food</Link>
                        <Link to="/login" className="bg-surface hover:bg-surface-hover border border-border px-8 py-4 rounded-full font-bold transition-colors">Partner as NGO</Link>
                    </motion.div>
                </div>

                <div className="flex-1 relative z-10 w-full">
                    <div className="w-full h-[450px] bg-surface rounded-[4rem] border border-border relative flex items-center justify-center p-8 overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>

                        <div className="absolute top-8 left-8 bg-surface-hover border border-border p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-pulse" style={{ animationDuration: '4s' }}>
                            <div className="bg-primary/20 p-3 rounded-full"><BarChart3 className="text-primary w-6 h-6" /></div>
                            <div><p className="text-xs text-gray-400 font-bold">CO₂ Reduced</p><p className="text-lg font-bold text-white">45.2 Kg</p></div>
                        </div>

                        <Truck className="w-48 h-48 text-primary/30" />

                        <div className="absolute bottom-12 right-8 bg-surface-hover border border-border p-4 rounded-2xl shadow-xl flex items-center gap-4">
                            <div className="bg-blue-500/20 p-3 rounded-full"><MapPin className="text-blue-400 w-6 h-6" /></div>
                            <div><p className="text-xs text-gray-400 font-bold">Smart Route</p><p className="text-sm font-bold text-white">Optimized Delivery</p></div>
                        </div>
                    </div>
                </div>
            </main>

            {/* How it Works Section */}
            <section id="how-it-works" className="max-w-7xl mx-auto px-8 py-24 text-center relative z-10">
                <h2 className="text-4xl font-display font-bold mb-16">The Intelligent Workflow</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {[
                        { step: '1', title: 'Smart Logging', desc: 'Log food details with AI shelf-life prediction.', icon: <Gift className="w-8 h-8 text-primary" /> },
                        { step: '2', title: 'Auto-Matching', desc: 'Instantly notify nearby verified NGOs.', icon: <MapPin className="w-8 h-8 text-primary" /> },
                        { step: '3', title: 'Secure Transit', desc: 'QR verified pickups by volunteers.', icon: <Truck className="w-8 h-8 text-primary" /> },
                        { step: '4', title: 'Impact Tracking', desc: 'Earn feedback and track CO₂ reduction.', icon: <BarChart3 className="w-8 h-8 text-primary" /> }
                    ].map((item, i) => (
                        <motion.div
                            key={item.step}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.15 }}
                            viewport={{ once: true }}
                            className="relative p-6 bg-surface border border-border rounded-3xl hover:border-primary/50 transition-colors"
                        >
                            <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                                {item.icon}
                            </div>
                            <h3 className="font-bold text-xl mb-3">{item.step}. {item.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Stats Section */}
            <section id="impact" className="border-t border-border bg-surface">
                <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-border">
                    {[
                        { num: '850+', label: 'Active Active Donors' },
                        { num: '320+', label: 'NGOs Connected' },
                        { num: '14,500+', label: 'Meals Delivered' },
                        { num: '12.4T', label: 'CO₂ Emissions Prevented' }
                    ].map(stat => (
                        <div key={stat.label}>
                            <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">{stat.num}</div>
                            <div className="text-sm font-medium text-primary uppercase tracking-widest">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
