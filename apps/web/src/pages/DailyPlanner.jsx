import { useNavigate } from 'react-router-dom';

function DailyPlanner() {
    const navigate = useNavigate();

    return (
        <div className="bg-background-light dark:bg-background-dark text-[#1b0d0f] font-display min-h-screen flex flex-col overflow-x-hidden transition-colors duration-200">
            {/* Top Navigation Bar */}
            <div className="sticky top-0 z-20 w-full bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm border-b border-[#f3e7e8] dark:border-white/10 transition-colors duration-200">
                <div className="layout-container flex justify-center w-full">
                    <div className="px-4 md:px-10 flex flex-1 justify-center">
                        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                            <header className="flex items-center justify-between whitespace-nowrap py-3">
                                {/* Back Button */}
                                <div className="flex flex-1 justify-start">
                                    <button
                                        onClick={() => navigate(-1)}
                                        className="group flex items-center gap-2 text-[#1b0d0f] dark:text-white hover:text-primary transition-colors cursor-pointer"
                                    >
                                        <span className="material-symbols-outlined text-xl">arrow_back_ios_new</span>
                                        <span className="text-sm font-medium leading-normal hidden sm:block">Back</span>
                                    </button>
                                </div>
                                {/* Title */}
                                <div className="flex items-center gap-4 text-[#1b0d0f] dark:text-white">
                                    <div className="size-6 text-primary">
                                        <span className="material-symbols-outlined fill-1">calendar_today</span>
                                    </div>
                                    <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] uppercase">MY PLANNER</h2>
                                </div>
                                {/* Home Button */}
                                <div className="flex flex-1 justify-end">
                                    <button
                                        onClick={() => navigate('/dashboard')}
                                        className="flex items-center justify-center rounded-lg size-10 bg-[#f3e7e8] dark:bg-white/10 hover:bg-primary/10 hover:text-primary text-[#1b0d0f] dark:text-white transition-all cursor-pointer"
                                    >
                                        <span className="material-symbols-outlined">home</span>
                                    </button>
                                </div>
                            </header>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col items-center px-4 md:px-10 py-6 pb-24">
                <div className="layout-content-container w-full max-w-[800px] flex flex-col gap-6">
                    {/* Date Headline */}
                    <section className="text-center pb-2 pt-4">
                        <h2 className="text-[#1b0d0f] dark:text-white tracking-tight text-[28px] md:text-3xl font-bold leading-tight px-4">Tuesday, 24 Oct</h2>
                        <p className="text-[#9a4c52] dark:text-white/60 text-sm mt-1">Let's make today productive!</p>
                    </section>
                    {/* Progress Bar */}
                    <section className="bg-white dark:bg-white/5 shadow-sm border border-[#f3e7e8] dark:border-white/5 rounded-xl p-6 transition-colors duration-200">
                        <div className="flex flex-col gap-3">
                            <div className="flex gap-6 justify-between items-end">
                                <div>
                                    <p className="text-[#1b0d0f] dark:text-white text-base font-bold leading-normal">Daily Progress</p>
                                    <p className="text-[#9a4c52] dark:text-white/60 text-sm font-normal leading-normal mt-1">3 of 8 tasks completed</p>
                                </div>
                                <p className="text-primary text-xl font-bold leading-normal">37%</p>
                            </div>
                            <div className="rounded-full bg-[#e7cfd1] dark:bg-white/20 overflow-hidden">
                                <div className="h-3 rounded-full bg-primary transition-all duration-500 ease-out" style={{ width: '37%' }}></div>
                            </div>
                        </div>
                    </section>
                    {/* Task List */}
                    <section className="flex flex-col gap-4 mt-2">
                        {/* Task Item 1 */}
                        <TaskItem
                            title="Restock Foundation & Mascara"
                            category="Makeup"
                            categoryIcon="brush"
                            priority="Urgent"
                            priorityColor="bg-[#ec1325]"
                            tagBg="bg-pink-100 dark:bg-pink-900/30"
                            tagText="text-pink-800 dark:text-pink-300"
                            priorityText="text-[#ec1325]"
                        />
                        {/* Task Item 2 */}
                        <TaskItem
                            title="Cook Lemon Garlic Chicken"
                            category="Recipe"
                            categoryIcon="restaurant_menu"
                            priority="Medium"
                            priorityColor="bg-yellow-500"
                            tagBg="bg-orange-100 dark:bg-orange-900/30"
                            tagText="text-orange-800 dark:text-orange-300"
                            priorityText="text-yellow-600 dark:text-yellow-500"
                        />
                        {/* Task Item 3 */}
                        <TaskItem
                            title="Watch new episode of Series"
                            category="Entertainment"
                            categoryIcon="movie"
                            priority="Santai"
                            priorityColor="bg-green-500"
                            tagBg="bg-purple-100 dark:bg-purple-900/30"
                            tagText="text-purple-800 dark:text-purple-300"
                            priorityText="text-green-600 dark:text-green-500"
                        />
                        {/* Task Item 4 (Completed) */}
                        <div className="group flex items-center gap-4 bg-[#fcf8f8] dark:bg-white/5 border border-transparent rounded-xl p-4 opacity-75 transition-all duration-200">
                            <div className="flex items-start gap-4 w-full">
                                <div className="flex pt-1">
                                    <input defaultChecked className="size-6 rounded-full border-2 border-[#e7cfd1] dark:border-white/30 bg-primary text-primary checked:bg-primary checked:border-primary focus:ring-0 focus:ring-offset-0 transition-colors cursor-pointer" type="checkbox" />
                                </div>
                                <div className="flex flex-col flex-1 gap-1">
                                    <p className="text-[#9a4c52] dark:text-white/50 text-base font-medium leading-normal line-clamp-1 line-through decoration-2 decoration-primary/40">Morning Yoga Session</p>
                                    <div className="flex items-center gap-2 flex-wrap grayscale opacity-70">
                                        <span className="inline-flex items-center gap-1 rounded-full bg-blue-100 dark:bg-blue-900/30 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:text-blue-300">
                                            <span className="material-symbols-outlined text-[14px]">self_improvement</span> Wellness
                                        </span>
                                        <span className="inline-flex items-center gap-1 text-xs font-medium text-yellow-600 dark:text-yellow-500">
                                            <span className="size-2 rounded-full bg-yellow-500"></span> Medium
                                        </span>
                                    </div>
                                </div>
                                <button className="shrink-0 text-[#9a4c52] dark:text-white/40 hover:text-primary transition-colors p-2 rounded-full hover:bg-[#fcf8f8] dark:hover:bg-white/10 cursor-pointer">
                                    <span className="material-symbols-outlined text-xl">edit</span>
                                </button>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            {/* Floating Action Button */}
            <div className="fixed bottom-8 right-8 z-50">
                <button className="group flex items-center justify-center size-14 rounded-full bg-primary text-white shadow-lg hover:shadow-xl hover:scale-105 hover:bg-red-600 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary/30 cursor-pointer">
                    <span className="material-symbols-outlined text-3xl group-hover:rotate-90 transition-transform duration-300">add</span>
                </button>
            </div>
        </div>
    );
}

function TaskItem({ title, category, categoryIcon, priority, priorityColor, tagBg, tagText, priorityText }) {
    return (
        <div className="group flex items-center gap-4 bg-white dark:bg-white/5 border border-transparent hover:border-primary/20 shadow-sm hover:shadow-md rounded-xl p-4 transition-all duration-200 cursor-pointer">
            <div className="flex items-start gap-4 w-full">
                <div className="flex pt-1">
                    <input className="size-6 rounded-full border-2 border-[#e7cfd1] dark:border-white/30 bg-transparent text-primary checked:bg-primary checked:border-primary focus:ring-0 focus:ring-offset-0 transition-colors cursor-pointer" type="checkbox" />
                </div>
                <div className="flex flex-col flex-1 gap-1">
                    <p className="text-[#1b0d0f] dark:text-white text-base font-medium leading-normal line-clamp-1 group-hover:text-primary transition-colors">{title}</p>
                    <div className="flex items-center gap-2 flex-wrap">
                        <span className={`inline-flex items-center gap-1 rounded-full ${tagBg} px-2.5 py-0.5 text-xs font-medium ${tagText}`}>
                            <span className="material-symbols-outlined text-[14px]">{categoryIcon}</span> {category}
                        </span>
                        <span className={`inline-flex items-center gap-1 text-xs font-medium ${priorityText}`}>
                            <span className={`size-2 rounded-full ${priorityColor}`}></span> {priority}
                        </span>
                    </div>
                </div>
                <button className="shrink-0 text-[#9a4c52] dark:text-white/40 hover:text-primary transition-colors p-2 rounded-full hover:bg-[#fcf8f8] dark:hover:bg-white/10 cursor-pointer">
                    <span className="material-symbols-outlined text-xl">edit</span>
                </button>
            </div>
        </div>
    );
}

export default DailyPlanner;
