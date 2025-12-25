import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const navigate = useNavigate();
    return (
        <div className="bg-background-light dark:bg-background-dark text-text-main dark:text-white min-h-screen flex flex-col overflow-x-hidden transition-colors duration-300 font-display">
            {/* Header */}
            <header className="sticky top-0 z-50 w-full border-b border-[#f1e9ea] dark:border-[#3a2e2e] bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-6 py-4">
                <div className="max-w-[1200px] mx-auto flex items-center justify-between">
                    {/* Left: Menu & Brand */}
                    <div className="flex items-center gap-4">
                        <button className="flex items-center justify-center p-2 rounded-lg hover:bg-primary/20 text-text-main dark:text-white transition-colors">
                            <span className="material-symbols-outlined !text-[28px]">menu</span>
                        </button>
                        <div className="flex items-center gap-3">
                            <div className="size-8 text-primary">
                                <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z" fill="currentColor"></path>
                                </svg>
                            </div>
                            <h2 className="text-lg font-bold tracking-tight hidden sm:block">My Daily Lifestyle</h2>
                        </div>
                    </div>
                    {/* Right: Actions */}
                    <div className="flex gap-3">
                        <button className="relative flex items-center justify-center size-10 rounded-lg bg-surface-light dark:bg-surface-dark border border-gray-100 dark:border-gray-800 hover:bg-primary/10 transition-colors shadow-sm">
                            <span className="material-symbols-outlined text-text-main dark:text-white !text-[20px]">notifications</span>
                            <span className="absolute top-2 right-2 size-2 bg-red-400 rounded-full border border-white dark:border-surface-dark"></span>
                        </button>
                        <button className="flex items-center justify-center size-10 rounded-lg bg-surface-light dark:bg-surface-dark border border-gray-100 dark:border-gray-800 hover:bg-primary/10 transition-colors shadow-sm">
                            <span className="material-symbols-outlined text-text-main dark:text-white !text-[20px]">settings</span>
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 w-full max-w-[960px] mx-auto px-4 py-8 sm:px-6 lg:px-8 flex flex-col gap-10">
                {/* Identity / Profile Section */}
                <section className="flex flex-col items-center animate-fade-in-up">
                    {/* Avatar */}
                    <div className="relative group cursor-pointer inline-block">
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-pink-200 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-200"></div>
                        <div
                            className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-cover bg-center border-4 border-white dark:border-surface-dark shadow-lg"
                            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAXmMGHpwF1qv8EOv58bjHmzpFWid89rbgiKdYtUPsnuE0NqiqnVaZg7Ubovoav_WW2XjlEMMejexiaWsLhpTc7zZ8Xcpf4OCkp_a417Yeu_IODhH_V2cIdzPkZJ5Dzr6nVXeugqMuS5p40b_-FknHu8_uerReGF4Fvun_Vzo0COheFA8CAZ0_u9Cn5gZVMHjhuXZbvSYA-l6difWTAm3njtsi6SpnSh-ynjsU47w7FgvCVALYhvJHLJENFq1-ZT4K3ZKT8lhnzdQkx')" }}
                        ></div>
                        <div className="absolute bottom-2 right-2 bg-green-400 size-4 rounded-full border-2 border-white dark:border-surface-dark"></div>
                    </div>

                    {/* Greeting */}
                    <div className="mt-6 text-center space-y-2">
                        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-main dark:text-white">
                            Halo, Sarah!
                        </h1>
                        <p className="text-lg sm:text-xl text-primary font-medium">
                            Kamu cantik hari ini.
                        </p>
                    </div>

                    {/* Status Bar / Chips */}
                    <div className="mt-8 flex flex-wrap justify-center gap-3 w-full max-w-2xl">
                        {/* Date Chip */}
                        <div className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-white dark:bg-surface-dark shadow-sm border border-gray-100 dark:border-gray-800 hover:border-primary/50 transition-colors cursor-default">
                            <span className="material-symbols-outlined text-primary">calendar_today</span>
                            <span className="text-sm font-semibold">Mon, 24 Oct</span>
                        </div>
                        {/* Weather Chip */}
                        <div className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-white dark:bg-surface-dark shadow-sm border border-gray-100 dark:border-gray-800 hover:border-primary/50 transition-colors cursor-default">
                            <span className="material-symbols-outlined text-primary">cloud</span>
                            <span className="text-sm font-semibold">24°C Cloudy</span>
                        </div>
                        {/* Progress Chip */}
                        <div className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-white dark:bg-surface-dark shadow-sm border border-gray-100 dark:border-gray-800 hover:border-primary/50 transition-colors cursor-default">
                            <div className="relative size-5">
                                <svg className="size-full -rotate-90" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                                    <path className="text-gray-200 dark:text-gray-700" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4"></path>
                                    <path className="text-primary" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="66, 100" strokeWidth="4"></path>
                                </svg>
                            </div>
                            <span className="text-sm font-semibold">4/6 Tasks Done</span>
                        </div>
                    </div>
                </section>

                {/* Navigation Grid (2x2) */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-12">
                    {/* Recipe Card */}
                    <button
                        onClick={() => window.location.href = '/recipes'}
                        className="group relative flex flex-col items-center justify-center p-8 h-48 sm:h-56 rounded-2xl bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer"
                    >
                        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300"></div>
                        <div className="mb-4 p-4 rounded-full bg-background-light dark:bg-background-dark group-hover:bg-white dark:group-hover:bg-[#332a2a] transition-colors duration-300">
                            <span className="material-symbols-outlined text-[40px] text-text-main dark:text-white group-hover:text-primary transition-colors duration-300">skillet</span>
                        </div>
                        <h3 className="text-xl font-bold text-text-main dark:text-white">Recipes</h3>
                        <p className="text-sm text-text-sub mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">Cook something new</p>
                    </button>

                    {/* Inventory/Makeup Card */}
                    <button
                        onClick={() => navigate('/inventory')}
                        className="group relative flex flex-col items-center justify-center p-8 h-48 sm:h-56 rounded-2xl bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer"
                    >
                        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300"></div>
                        <div className="mb-4 p-4 rounded-full bg-background-light dark:bg-background-dark group-hover:bg-white dark:group-hover:bg-[#332a2a] transition-colors duration-300">
                            <span className="material-symbols-outlined text-[40px] text-text-main dark:text-white group-hover:text-primary transition-colors duration-300">brush</span>
                        </div>
                        <h3 className="text-xl font-bold text-text-main dark:text-white">Inventory</h3>
                        <p className="text-sm text-text-sub mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">Makeup & Essentials</p>
                    </button>

                    {/* Tasks Card */}
                    <button
                        onClick={() => navigate('/planner')}
                        className="group relative flex flex-col items-center justify-center p-8 h-48 sm:h-56 rounded-2xl bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer"
                    >
                        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300"></div>
                        <div className="mb-4 p-4 rounded-full bg-background-light dark:bg-background-dark group-hover:bg-white dark:group-hover:bg-[#332a2a] transition-colors duration-300">
                            <span className="material-symbols-outlined text-[40px] text-text-main dark:text-white group-hover:text-primary transition-colors duration-300">check_circle</span>
                        </div>
                        <h3 className="text-xl font-bold text-text-main dark:text-white">Daily To-Do</h3>
                        <p className="text-sm text-text-sub mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">Stay productive</p>
                    </button>

                    {/* Film Card */}
                    <button className="group relative flex flex-col items-center justify-center p-8 h-48 sm:h-56 rounded-2xl bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer">
                        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300"></div>
                        <div className="mb-4 p-4 rounded-full bg-background-light dark:bg-background-dark group-hover:bg-white dark:group-hover:bg-[#332a2a] transition-colors duration-300">
                            <span className="material-symbols-outlined text-[40px] text-text-main dark:text-white group-hover:text-primary transition-colors duration-300">movie</span>
                        </div>
                        <h3 className="text-xl font-bold text-text-main dark:text-white">Watchlist</h3>
                        <p className="text-sm text-text-sub mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">Movies & Shows</p>
                    </button>
                </section>
            </main>

            {/* Footer */}
            <footer className="w-full py-6 text-center text-sm text-text-sub opacity-60">
                <p>&copy; 2023 My Daily Lifestyle. All rights reserved.</p>
            </footer>
        </div>
    )
}

export default Dashboard
