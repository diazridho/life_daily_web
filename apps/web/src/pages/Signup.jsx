import { Link, useNavigate } from 'react-router-dom';

function Signup() {
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();
        // Simulate signup and redirect to dashboard
        navigate('/dashboard');
    };

    return (
        <div className="bg-[#f8f6f6] dark:bg-[#1e1414] min-h-screen flex items-center justify-center p-4 transition-colors duration-300 font-display">
            {/* Background Pattern */}
            <div
                className="fixed inset-0 z-0 opacity-40 pointer-events-none bg-cover bg-center"
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDeKyKK7wD0uFrQ7mnrzGLMTG4isHvtPWVNwos_IbO4I0n_vxTwJcEOADjbAKVTq-2DNOfD84G4k-bDb3OpFJ7oUAV-11aZOXk3OLD_o0t7oASh8rrdOEz0m11GLJJVaHTXi_hP0jwxnB4HI3w58HFTWHei0ZF4XNdXvz2cZhItO7m7ywZtP5FreAebVvE4wKAA9UthEC3brCY2y6qkehKrZATWXvOibjn483vHgWQajAB6bFBQogt59J0-53-SfaM1TEUxyjBM8BwC')" }}
            >
            </div>

            {/* Card Container */}
            <div className="relative z-10 w-full max-w-[480px] bg-white dark:bg-[#2c2424] rounded-2xl shadow-xl overflow-hidden border border-[#f1e9ea] dark:border-[#3e3434]">
                <div className="flex flex-col items-center pt-10 pb-6 px-8 text-center">
                    <div className="size-12 bg-[#e8b5b9]/20 rounded-full flex items-center justify-center mb-4 text-[#e8b5b9] text-[#b57b7f] dark:text-[#e8b5b9]">
                        <span className="material-symbols-outlined text-3xl">spa</span>
                    </div>
                    <h1 className="text-[#191011] dark:text-white text-[28px] font-bold leading-tight tracking-tight">
                        My Daily Lifestyle
                    </h1>
                    <p className="text-[#8b5b5f] dark:text-gray-400 text-sm mt-2 font-medium">
                        Manage your tasks, recipes, and more in one place.
                    </p>
                </div>

                <div className="px-8 pb-10">
                    <form onSubmit={handleSignup} className="flex flex-col gap-5">
                        <div className="flex flex-col gap-2">
                            <label className="text-[#191011] dark:text-gray-200 text-sm font-semibold" htmlFor="fullname">Full Name</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#8b5b5f]">
                                    <span className="material-symbols-outlined text-[20px]">person</span>
                                </div>
                                <input
                                    className="w-full pl-10 pr-4 h-12 rounded-lg border border-[#e3d4d5] dark:border-[#4a3e3e] bg-[#fbf9f9] dark:bg-[#362b2b] text-[#191011] dark:text-white placeholder:text-[#8b5b5f] dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#e8b5b9]/50 focus:border-[#e8b5b9] transition-all text-sm"
                                    id="fullname"
                                    placeholder="Full Name"
                                    type="text"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-[#191011] dark:text-gray-200 text-sm font-semibold" htmlFor="email">Email</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#8b5b5f]">
                                    <span className="material-symbols-outlined text-[20px]">mail</span>
                                </div>
                                <input
                                    className="w-full pl-10 pr-4 h-12 rounded-lg border border-[#e3d4d5] dark:border-[#4a3e3e] bg-[#fbf9f9] dark:bg-[#362b2b] text-[#191011] dark:text-white placeholder:text-[#8b5b5f] dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#e8b5b9]/50 focus:border-[#e8b5b9] transition-all text-sm"
                                    id="email"
                                    placeholder="user@example.com"
                                    type="email"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-[#191011] dark:text-gray-200 text-sm font-semibold" htmlFor="password">Password</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#8b5b5f]">
                                    <span className="material-symbols-outlined text-[20px]">lock</span>
                                </div>
                                <input
                                    className="w-full pl-10 pr-4 h-12 rounded-lg border border-[#e3d4d5] dark:border-[#4a3e3e] bg-[#fbf9f9] dark:bg-[#362b2b] text-[#191011] dark:text-white placeholder:text-[#8b5b5f] dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#e8b5b9]/50 focus:border-[#e8b5b9] transition-all text-sm"
                                    id="password"
                                    placeholder="••••••••"
                                    type="password"
                                />
                            </div>
                        </div>

                        <button
                            className="mt-4 w-full h-12 rounded-lg bg-primary text-[#191011] text-base font-bold tracking-[0.015em] shadow-sm hover:bg-gradient-to-r hover:from-primary hover:to-[#e09fa5] active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                            type="submit"
                        >
                            <span>Sign Up</span>
                            <span className="material-symbols-outlined text-lg">arrow_forward</span>
                        </button>

                        <div className="text-center mt-2">
                            <p className="text-sm text-[#8b5b5f] dark:text-gray-400">
                                Already have an account?{' '}
                                <Link
                                    to="/"
                                    className="font-bold text-[#191011] dark:text-white hover:text-[#e8b5b9] underline decoration-[#e8b5b9]/50 underline-offset-4 transition-colors"
                                >
                                    Log in
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signup;
