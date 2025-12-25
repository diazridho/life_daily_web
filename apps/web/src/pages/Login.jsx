import { Link, useNavigate } from 'react-router-dom'

function Login() {
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // For demo purposes, just navigate to dashboard
        navigate('/dashboard');
    };

    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen flex items-center justify-center p-4 transition-colors duration-300 font-display">
            {/* Background Pattern/Image */}
            <div
                className="fixed inset-0 z-0 opacity-40 pointer-events-none bg-cover bg-center"
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDeKyKK7wD0uFrQ7mnrzGLMTG4isHvtPWVNwos_IbO4I0n_vxTwJcEOADjbAKVTq-2DNOfD84G4k-bDb3OpFJ7oUAV-11aZOXk3OLD_o0t7oASh8rrdOEz0m11GLJJVaHTXi_hP0jwxnB4HI3w58HFTWHei0ZF4XNdXvz2cZhItO7m7ywZtP5FreAebVvE4wKAA9UthEC3brCY2y6qkehKrZATWXvOibjn483vHgWQajAB6bFBQogt59J0-53-SfaM1TEUxyjBM8BwC')" }}
            ></div>

            {/* Main Card Container */}
            <div className="relative z-10 w-full max-w-[480px] bg-white dark:bg-[#2c2424] rounded-2xl shadow-xl overflow-hidden border border-[#f1e9ea] dark:border-[#3e3434]">
                {/* Header Section */}
                <div className="flex flex-col items-center pt-10 pb-6 px-8 text-center">
                    {/* Logo Icon */}
                    <div className="size-12 bg-primary/20 rounded-full flex items-center justify-center mb-4 text-primary text-[#b57b7f] dark:text-primary">
                        <span className="material-symbols-outlined text-3xl">spa</span>
                    </div>
                    <h1 className="text-text-main dark:text-white text-[28px] font-bold leading-tight tracking-tight">
                        My Daily Lifestyle
                    </h1>
                    <p className="text-text-sub dark:text-gray-400 text-sm mt-2 font-medium">
                        Manage your tasks, recipes, and more in one place.
                    </p>
                </div>

                {/* Form Section */}
                <div className="px-8 pb-10">
                    <form onSubmit={handleLogin} className="flex flex-col gap-5">
                        {/* Email Field */}
                        <div className="flex flex-col gap-2">
                            <label className="text-text-main dark:text-gray-200 text-sm font-semibold" htmlFor="email">
                                Email Address
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-text-sub">
                                    <span className="material-symbols-outlined text-[20px]">mail</span>
                                </div>
                                <input
                                    className="w-full pl-10 pr-4 h-12 rounded-lg border border-[#e3d4d5] dark:border-[#4a3e3e] bg-[#fbf9f9] dark:bg-[#362b2b] text-text-main dark:text-white placeholder:text-[#8b5b5f] dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm"
                                    id="email"
                                    placeholder="user@example.com"
                                    type="email"
                                />
                            </div>
                        </div>

                        {/* Password Field */}
                        <div className="flex flex-col gap-2">
                            <label className="text-text-main dark:text-gray-200 text-sm font-semibold" htmlFor="password">
                                Password
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-text-sub">
                                    <span className="material-symbols-outlined text-[20px]">lock</span>
                                </div>
                                <input
                                    className="w-full pl-10 pr-4 h-12 rounded-lg border border-[#e3d4d5] dark:border-[#4a3e3e] bg-[#fbf9f9] dark:bg-[#362b2b] text-text-main dark:text-white placeholder:text-[#8b5b5f] dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm"
                                    id="password"
                                    placeholder="••••••••"
                                    type="password"
                                />
                            </div>
                        </div>

                        {/* Remember Me & Forgot Password */}
                        <div className="flex items-center justify-between mt-1">
                            <label className="inline-flex items-center cursor-pointer group">
                                <input
                                    className="rounded border-[#e3d4d5] text-primary focus:ring-primary/50 bg-[#fbf9f9] dark:bg-[#362b2b] dark:border-[#4a3e3e]"
                                    type="checkbox"
                                />
                                <span className="ml-2 text-sm text-text-main dark:text-gray-300 font-medium group-hover:text-black dark:group-hover:text-white transition-colors">
                                    Remember me
                                </span>
                            </label>
                            <a
                                className="text-sm font-bold text-[#b57b7f] hover:text-primary dark:text-primary dark:hover:text-white transition-colors"
                                href="#"
                            >
                                Forgot Password?
                            </a>
                        </div>

                        {/* Login Button with Gradient Hover */}
                        <button
                            className="mt-4 w-full h-12 rounded-lg bg-primary text-[#191011] text-base font-bold tracking-[0.015em] shadow-sm hover:bg-gradient-to-r hover:from-primary hover:to-[#e09fa5] active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                            type="submit"
                        >
                            <span>Log In</span>
                            <span className="material-symbols-outlined text-lg">arrow_forward</span>
                        </button>

                        {/* Registration Link */}
                        <div className="text-center mt-2">
                            <p className="text-sm text-text-sub dark:text-gray-400">
                                Don't have an account?{' '}
                                <a
                                    className="font-bold text-text-main dark:text-white hover:text-primary underline decoration-primary/50 underline-offset-4 transition-colors"
                                    href="#"
                                >
                                    Sign Up
                                </a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
