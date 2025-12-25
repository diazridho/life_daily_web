import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function RecipeDetail() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [activeTab, setActiveTab] = useState('ingredients');

    return (
        <div className="bg-background-light dark:bg-background-dark text-[#1b0d0f] dark:text-[#fcf8f8] font-display overflow-x-hidden min-h-screen flex flex-col">
            {/* TopNavBar */}
            <div className="w-full bg-[#fcf8f8] dark:bg-[#1b0d0f] border-b border-solid border-b-[#f3e7e8] dark:border-b-[#3a2e30]">
                <div className="layout-container flex justify-center w-full">
                    <div className="layout-content-container flex flex-col max-w-[960px] flex-1 px-4 sm:px-10 py-3">
                        <header className="flex items-center justify-between whitespace-nowrap">
                            <div className="flex items-center gap-8">
                                <div
                                    className="flex items-center gap-4 text-[#1b0d0f] dark:text-white cursor-pointer"
                                    onClick={() => navigate('/dashboard')}
                                >
                                    <div className="size-8 text-primary">
                                        <span className="material-symbols-outlined text-3xl">local_dining</span>
                                    </div>
                                    <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] hidden sm:block">My Daily Lifestyle</h2>
                                </div>
                                <div className="hidden md:flex items-center gap-9">
                                    <a className="text-[#1b0d0f] dark:text-[#e0dada] text-sm font-medium leading-normal hover:text-primary transition-colors cursor-pointer">Tasks</a>
                                    <a className="text-primary text-sm font-bold leading-normal cursor-pointer" onClick={() => navigate('/recipes')}>Recipes</a>
                                    <a className="text-[#1b0d0f] dark:text-[#e0dada] text-sm font-medium leading-normal hover:text-primary transition-colors cursor-pointer">Makeup</a>
                                    <a className="text-[#1b0d0f] dark:text-[#e0dada] text-sm font-medium leading-normal hover:text-primary transition-colors cursor-pointer">Entertainment</a>
                                </div>
                            </div>
                            <div className="flex flex-1 justify-end gap-4 sm:gap-8 items-center">
                                <label className="hidden sm:flex flex-col min-w-40 !h-10 max-w-64">
                                    <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                                        <div className="text-[#9a4c52] dark:text-[#d48c92] flex border-none bg-[#f3e7e8] dark:bg-[#3a2e30] items-center justify-center pl-4 rounded-l-lg border-r-0">
                                            <span className="material-symbols-outlined text-[24px]">search</span>
                                        </div>
                                        <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#1b0d0f] dark:text-white focus:outline-0 focus:ring-0 border-none bg-[#f3e7e8] dark:bg-[#3a2e30] focus:border-none h-full placeholder:text-[#9a4c52] dark:placeholder:text-[#d48c92] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal" placeholder="Search recipes..." />
                                    </div>
                                </label>
                                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 ring-2 ring-white dark:ring-[#221012]" data-alt="User profile avatar" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA6eIfzbbTCnQn2uuG9wW4Gvvj1VLsVmJ_3S-xt9GKbbNQXF8gqEaoF2iRPwIb1kdsR9KzN52W656F_bQGfxbyJV2QQFp66IvS06Dhzzs4AySiHDWJVLBKHx1ZdMk2DIAMFRG36CxvcwOEQLr0KKV1YUb7Kog9wzqzxxq12ARKpv7a88iLvIpyqa-UjX10zxqKJ2tSAVOYKShNpFac_PVuWQYuujlN0LsedE5zFekluRH2bb5t4Y1jtTzUbQ_7VfsJ1OilxUOCGXC0G")' }}></div>
                            </div>
                        </header>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <main className="flex-grow flex flex-col items-center w-full py-6 sm:py-8">
                <div className="w-full max-w-[960px] px-4 sm:px-10 flex flex-col gap-6">
                    {/* Breadcrumbs */}
                    <div className="flex flex-wrap items-center gap-2">
                        <a onClick={() => navigate('/recipes')} className="text-[#9a4c52] dark:text-[#d48c92] text-sm font-medium leading-normal hover:underline cursor-pointer">Recipes</a>
                        <span className="material-symbols-outlined text-[#9a4c52] dark:text-[#d48c92] text-sm">chevron_right</span>
                        <span className="text-[#1b0d0f] dark:text-white text-sm font-medium leading-normal">Nasi Goreng Spesial</span>
                    </div>

                    {/* Hero Section */}
                    <div className="relative w-full rounded-xl overflow-hidden shadow-lg group">
                        <div className="bg-cover bg-center h-64 sm:h-80 md:h-96 w-full transform transition-transform duration-700 group-hover:scale-105" data-alt="Delicious plate of Nasi Goreng Spesial with a fried egg on top" style={{ backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 60%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBcxYizUndiA6YMzP0PLD6KnII10sfpW_fjka--viZXF8p5byqZAD4mLc7y5UpGCemDz2wH8WgvCdR2DYkJJuxQVEat8yANjoZFQRgSPqWBTmHo2vvxdFR9OaSn11UDd23gIWnoURknRf4-iuDVYJJraSirRdshMtpVrdX8zWRj3redilBFe_8iO5ZA7C-d25DMAzbPotPntW9qRdZymDEj56MSrsynzZf37d4fiau56wIY9DN-jOlBxcsb1SaOQzIhMvZ4aOYjHvYS")' }}>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8">
                            <span className="inline-block px-3 py-1 mb-3 text-xs font-bold tracking-wide text-white uppercase bg-primary rounded-full">Breakfast</span>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-2 drop-shadow-md">Nasi Goreng Spesial</h1>
                            <div className="flex items-center gap-4 text-white/90 text-sm font-medium">
                                <div className="flex items-center gap-1">
                                    <span className="material-symbols-outlined text-lg">schedule</span>
                                    <span>15 Mins</span>
                                </div>
                                <div className="w-1 h-1 bg-white rounded-full"></div>
                                <div className="flex items-center gap-1">
                                    <span className="material-symbols-outlined text-lg">local_fire_department</span>
                                    <span>Easy</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Action Bar: Metadata & Buttons */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-[#f3e7e8] dark:border-gray-800 pb-6">
                        <div className="flex items-center gap-6 text-[#9a4c52] dark:text-[#d48c92] text-sm">
                            <div className="flex flex-col">
                                <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">Calories</span>
                                <span className="font-bold text-[#1b0d0f] dark:text-white text-base">450 Kcal</span>
                            </div>
                            <div className="w-px h-8 bg-gray-200 dark:bg-gray-700"></div>
                            <div className="flex flex-col">
                                <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">Servings</span>
                                <span className="font-bold text-[#1b0d0f] dark:text-white text-base">2 People</span>
                            </div>
                        </div>
                        <div className="flex gap-3 w-full sm:w-auto">
                            <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 h-10 px-4 bg-white dark:bg-[#3a2e30] border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-[#4a3b3d] text-[#1b0d0f] dark:text-white text-sm font-bold rounded-lg transition-colors shadow-sm cursor-pointer">
                                <span className="material-symbols-outlined text-lg">edit</span>
                                <span>Edit</span>
                            </button>
                            <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 h-10 px-4 bg-white dark:bg-[#3a2e30] border border-gray-200 dark:border-gray-700 hover:bg-red-50 dark:hover:bg-red-900/20 text-red-600 dark:text-red-400 text-sm font-bold rounded-lg transition-colors shadow-sm cursor-pointer">
                                <span className="material-symbols-outlined text-lg">delete</span>
                                <span>Hapus</span>
                            </button>
                        </div>
                    </div>

                    {/* Content Tabs */}
                    <div className="w-full">
                        {/* Tab Headers */}
                        <div className="tabs-header flex border-b border-gray-200 dark:border-gray-700 mb-8 sticky top-0 bg-background-light dark:bg-background-dark z-10 pt-2 transition-colors duration-300">
                            <button
                                onClick={() => setActiveTab('ingredients')}
                                className={`py-3 px-6 text-base font-semibold border-b-2 transition-colors flex items-center gap-2 ${activeTab === 'ingredients'
                                        ? 'text-[#ec1325] border-[#ec1325]'
                                        : 'text-gray-500 dark:text-gray-400 border-transparent hover:text-gray-700 dark:hover:text-gray-200'
                                    }`}
                            >
                                <span className="material-symbols-outlined text-xl">grocery</span>
                                Bahan-bahan
                            </button>
                            <button
                                onClick={() => setActiveTab('steps')}
                                className={`py-3 px-6 text-base font-semibold border-b-2 transition-colors flex items-center gap-2 ${activeTab === 'steps'
                                        ? 'text-[#ec1325] border-[#ec1325]'
                                        : 'text-gray-500 dark:text-gray-400 border-transparent hover:text-gray-700 dark:hover:text-gray-200'
                                    }`}
                            >
                                <span className="material-symbols-outlined text-xl">cooking</span>
                                Langkah Memasak
                            </button>
                        </div>

                        {/* Tab Contents */}
                        <div className="content-container min-h-[400px]">
                            {/* Tab 1: Ingredients */}
                            {activeTab === 'ingredients' && (
                                <div className="animate-fade-in">
                                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                        {/* List */}
                                        <div className="lg:col-span-2 space-y-4">
                                            <h3 className="text-xl font-bold mb-4 dark:text-white">Daftar Bahan</h3>
                                            <div className="bg-white dark:bg-[#2a1a1c] rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
                                                <ul className="space-y-4">
                                                    {[
                                                        "2 piring nasi putih (dingin lebih baik)",
                                                        "2 butir telur ayam",
                                                        "3 siung bawang merah, iris tipis",
                                                        "2 siung bawang putih, cincang halus",
                                                        "2 sdm kecap manis",
                                                        "1 batang daun bawang, iris"
                                                    ].map((item, idx) => (
                                                        <li key={idx} className="flex items-start gap-3 group cursor-pointer">
                                                            <input className="mt-1 w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary dark:bg-gray-800 dark:border-gray-600 cursor-pointer" type="checkbox" />
                                                            <div className="text-base text-gray-800 dark:text-gray-200 group-hover:text-primary transition-colors select-none">
                                                                {item}
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                        {/* Sidebar Action */}
                                        <div className="lg:col-span-1">
                                            <div className="sticky top-24 bg-white dark:bg-[#2a1a1c] p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
                                                <div className="mb-4">
                                                    <h4 className="font-bold text-lg mb-1 dark:text-white">Missing ingredients?</h4>
                                                    <p className="text-sm text-gray-500 dark:text-gray-400">Add everything to your daily tasks and shopping list instantly.</p>
                                                </div>
                                                <button className="w-full flex items-center justify-center gap-2 h-12 bg-primary hover:bg-red-700 text-white font-bold rounded-lg transition-all shadow-md hover:shadow-lg transform active:scale-95 cursor-pointer">
                                                    <span className="material-symbols-outlined">shopping_cart_checkout</span>
                                                    Tambah ke List Belanja
                                                </button>
                                                <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700">
                                                    <h4 className="font-bold text-md mb-2 dark:text-white">Catatan</h4>
                                                    <textarea className="w-full p-3 bg-gray-50 dark:bg-[#1b0d0f] rounded-lg border-none focus:ring-2 focus:ring-primary/50 text-sm resize-none" placeholder="Add personal notes here (e.g. less salt)..." rows="4"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Tab 2: Steps */}
                            {activeTab === 'steps' && (
                                <div className="animate-fade-in max-w-3xl">
                                    <h3 className="text-xl font-bold mb-6 dark:text-white">Instruksi Memasak</h3>
                                    <div className="space-y-8">
                                        {[
                                            {
                                                title: "Persiapan Bahan",
                                                desc: "Siapkan semua bahan. Pastikan nasi yang digunakan sudah dingin agar tidak lembek saat digoreng. Iris bawang merah dan cincang bawang putih."
                                            },
                                            {
                                                title: "Tumis Bumbu",
                                                desc: "Panaskan sedikit minyak goreng di wajan. Tumis bawang merah dan bawang putih hingga harum dan layu. Masukkan telur, buat orak-arik di sisi wajan, lalu aduk rata dengan bumbu."
                                            },
                                            {
                                                title: "Goreng Nasi",
                                                desc: "Masukkan nasi putih. Aduk rata dengan telur dan bumbu. Tambahkan kecap manis, garam, dan lada secukupnya. Aduk terus dengan api besar hingga bumbu meresap dan nasi agak kering."
                                            },
                                            {
                                                title: "Sajikan",
                                                desc: "Masukkan irisan daun bawang, aduk sebentar, lalu angkat. Sajikan nasi goreng spesial selagi hangat dengan pelengkap seperti kerupuk dan acar."
                                            }
                                        ].map((step, idx) => (
                                            <div key={idx} className="flex gap-4">
                                                <div className="flex-shrink-0 size-8 sm:size-10 bg-primary/10 dark:bg-primary/20 text-primary rounded-full flex items-center justify-center font-bold text-lg">{idx + 1}</div>
                                                <div className="space-y-2 pt-1">
                                                    <h4 className="font-bold text-lg dark:text-white">{step.title}</h4>
                                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                                        {step.desc}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-12 p-6 bg-primary/5 dark:bg-primary/10 rounded-xl flex items-center gap-4 border border-primary/20">
                                        <span className="material-symbols-outlined text-primary text-3xl">restaurant</span>
                                        <div>
                                            <h4 className="font-bold text-primary">Bon Appétit!</h4>
                                            <p className="text-sm text-gray-600 dark:text-gray-300">Don't forget to take a photo and save it to your lifestyle journal.</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default RecipeDetail;
