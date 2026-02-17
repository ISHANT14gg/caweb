import Link from "next/link";
import Image from "next/image";
import { Play, TrendingUp, Users, Award, ArrowRight, ExternalLink } from "lucide-react";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

export default function AboutPage() {
    return (
        <div className="bg-white">
            {/* 1. Hero Banner - Full Width */}
            <div className="relative h-64 md:h-80 w-full overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                    alt="Team meeting"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-blue-900/70 flex flex-col justify-center items-center text-white">
                    <ScrollAnimation type="scale">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-center">About Us</h1>
                        <div className="flex gap-2 text-sm mt-4 text-gray-300 justify-center">
                            <Link href="/" className="hover:text-white">Home</Link> / <span>About</span>
                        </div>
                    </ScrollAnimation>
                </div>
            </div>

            {/* 2. "We Are Business Consultants" - Image Left, Text Right */}
            <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <ScrollAnimation direction="left">
                        <div className="relative h-[500px] w-full rounded-lg overflow-hidden shadow-xl">
                            <Image
                                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                                alt="Professional Consultant"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute bottom-10 left-10 bg-blue-900 text-white p-6 rounded-lg max-w-xs">
                                <p className="text-4xl font-bold text-orange-500 mb-1">29 <span className="text-xl">+</span></p>
                                <p className="text-sm font-medium uppercase tracking-wide">Years of Excellence</p>
                            </div>
                        </div>
                    </ScrollAnimation>

                    <ScrollAnimation direction="right">
                        <span className="text-orange-500 font-bold tracking-wider text-sm uppercase mb-2 block">About Us</span>
                        <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            We Are Business Consultants Dedicated To Driving Your Success
                        </h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Jyoti Thakur & Co. is a premier Chartered Accountancy firm offering professional services in Audit, Tax, and Advisory. We bring deep, functional expertise, but are known for our holistic perspective: we capture value across boundaries and between the silos of any organization. We have proven a multiplier effect from optimizing the sum of the parts, not just the individual pieces.
                        </p>

                        <div className="border-l-4 border-orange-500 pl-4 mb-8">
                            <p className="italic text-gray-700 font-medium">
                                &quot;Our commitment is to provide high-quality services with integrity, objectivity, and professionalism.&quot;
                            </p>
                        </div>

                        <div className="flex items-center gap-4 mb-8">
                            <Award className="h-10 w-10 text-orange-500" />
                            <div>
                                <p className="text-xl font-bold text-gray-900">29 Years Of Experience</p>
                                <p className="text-sm text-gray-500">Established in 1995, serving clients globally.</p>
                            </div>
                        </div>

                        <Link href="/contact" className="inline-flex items-center px-8 py-3 bg-orange-500 text-white font-bold rounded hover:bg-orange-600 transition-colors shadow-md">
                            Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </ScrollAnimation>
                </div>
            </section>

            {/* 3. "Core Principles" - Blue Background Section */}
            <section className="bg-blue-900 text-white py-20 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <ScrollAnimation direction="up">
                            <span className="text-orange-500 font-bold tracking-wider text-sm uppercase mb-2 block">Our Mission & Vision</span>
                            <h2 className="text-3xl md:text-4xl font-bold mb-10">Discover The Core Principles That Guide Us</h2>

                            <div className="relative h-64 w-full bg-blue-800 rounded-lg overflow-hidden flex items-center justify-center group cursor-pointer hover:bg-blue-700 transition-colors border border-blue-700">
                                {/* Video Placeholder */}
                                <div className="absolute inset-0 opacity-30">
                                    <Image src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="Video thumb" fill className="object-cover" />
                                </div>
                                <div className="bg-white rounded-full p-4 z-10 shadow-lg group-hover:scale-110 transition-transform">
                                    <Play className="h-6 w-6 text-orange-500 ml-1" />
                                </div>
                            </div>
                        </ScrollAnimation>

                        <div className="flex flex-col justify-center space-y-8">
                            <ScrollAnimation delay={0.2} type="fade">
                                <div className="bg-white/5 p-8 rounded border border-white/10 hover:border-orange-500/50 transition-colors">
                                    <TrendingUp className="h-10 w-10 text-blue-300 mb-4" />
                                    <h3 className="text-xl font-bold mb-2">Our Vision</h3>
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        To be the most trusted and respected professional services firm recognized by our clients for delivering excellence.
                                    </p>
                                </div>
                            </ScrollAnimation>
                            <ScrollAnimation delay={0.4} type="fade">
                                <div className="bg-white/5 p-8 rounded border border-white/10 hover:border-orange-500/50 transition-colors">
                                    <Users className="h-10 w-10 text-blue-300 mb-4" />
                                    <h3 className="text-xl font-bold mb-2">Our Mission</h3>
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        To provide exceptional financial and professional services while maintaining the highest levels of integrity and professionalism.
                                    </p>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>

                    {/* Stats Row */}
                    <div className="mt-20 pt-10 border-t border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                        {[
                            { val: "1500", label: "Happy Clients" },
                            { val: "1354", label: "Projects Done" },
                            { val: "97", label: "Success Rate", suffix: "%" },
                            { val: "29", label: "Years Experience" }
                        ].map((stat, i) => (
                            <ScrollAnimation key={i} delay={i * 0.1} type="scale">
                                <p className="text-4xl font-bold text-white mb-1">{stat.val} <span className="text-orange-500">{stat.suffix || "+"}</span></p>
                                <p className="text-xs uppercase tracking-widest text-gray-400">{stat.label}</p>
                            </ScrollAnimation>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. "Meet The Experts" - Team Section */}
            <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <ScrollAnimation className="lg:col-span-1" direction="right">
                        <span className="text-orange-500 font-bold tracking-wider text-sm uppercase mb-2 block">Meet The Experts</span>
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Discover Our Team Of Head Business Consultant Experts</h2>
                        <p className="text-gray-600 mb-8">
                            Our team consists of highly qualified Chartered Accountants, Company Secretaries, and Legal Experts who work together to provide comprehensive business solutions.
                        </p>
                        <Link href="/contact" className="inline-flex items-center px-6 py-3 bg-orange-500 text-white font-bold rounded hover:bg-orange-600 transition-colors shadow-md">
                            Discover Team <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </ScrollAnimation>

                    <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Expert 1 */}
                        <ScrollAnimation direction="up" delay={0.1}>
                            <div className="group relative overflow-hidden rounded-lg h-[400px] shadow-lg">
                                <Image
                                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                                    alt="Expert 1"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-blue-900 to-transparent p-6 translate-y-4 group-hover:translate-y-0 transition-transform">
                                    <p className="text-white font-bold text-lg">Aryan Singh</p>
                                    <p className="text-orange-400 text-sm">Managing Partner</p>
                                </div>
                            </div>
                        </ScrollAnimation>

                        {/* Expert 2 */}
                        <ScrollAnimation direction="up" delay={0.2}>
                            <div className="group relative overflow-hidden rounded-lg h-[400px] shadow-lg">
                                <Image
                                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                                    alt="Expert 2"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-blue-900 to-transparent p-6 translate-y-4 group-hover:translate-y-0 transition-transform">
                                    <p className="text-white font-bold text-lg">Priya Patel</p>
                                    <p className="text-orange-400 text-sm">Tax Specialist</p>
                                </div>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>

            {/* 5. CTA Section - Blue Background with Pattern */}
            <section className="bg-blue-900 py-20 relative overflow-hidden">
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full border-4 border-white/5"></div>
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full border-4 border-white/5"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <ScrollAnimation className="flex flex-col md:flex-row items-center justify-between gap-12" direction="up">
                        <div className="max-w-2xl">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Let&apos;s Discuss Your Business Goals & Schedule A Free Consultation Today
                            </h2>
                            <p className="text-blue-100 text-lg mb-8">
                                Connect with our experts to find the right financial solutions for your business growth. We are just a call away.
                            </p>
                            <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-orange-500 text-white font-bold rounded hover:bg-orange-600 transition-colors shadow-lg">
                                Get A Quote <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </div>

                        <div className="relative h-64 w-64 md:h-80 md:w-80 flex-shrink-0 bg-white/10 rounded-full backdrop-blur-sm flex items-center justify-center border border-white/20 group hover:bg-white/20 transition-colors cursor-pointer">
                            <ExternalLink className="h-16 w-16 text-white group-hover:scale-110 transition-transform" />
                        </div>
                    </ScrollAnimation>
                </div>
            </section>

            {/* Bottom Footer Area (Visual Match) */}
            <div className="bg-blue-800 py-12 border-t border-blue-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-white">
                    <div>
                        <h3 className="text-2xl font-bold mb-2">CONSULT</h3>
                        <p className="text-blue-200 text-sm max-w-xs">Expert financial advice tailored to your needs.</p>
                    </div>
                    <Link href="/contact" className="flex items-center gap-4 mt-6 md:mt-0 group cursor-pointer">
                        <p className="text-3xl font-light">Explore</p>
                        <ArrowRight className="h-8 w-8 text-black bg-white rounded-full p-2 group-hover:bg-orange-500 group-hover:text-white transition-colors" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
