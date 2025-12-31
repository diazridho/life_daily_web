import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function RecipeDetail() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [activeTab, setActiveTab] = useState('ingredients');

    return (
        <div className="bg-background-light dark:bg-background-dark text-[#1b0d0f] dark:text-[#fcf8f8] font-display overflow-x-hidden min-h-screen flex flex-col">
            <div className="w-full bg-[#fcf8f8] dark:bg-[#1b0d0f] border-b border-solid border-b-[#f3e7e8] dark:border-b-[#3a2e30]">
                <div className="layout-container flex justify-center w-full">
                    <div className="layout-content-container flex flex-col max-w-[960px] flex-1 px-4 sm:px-10 py-3">
                        <header className="flex items-center justify-between whitespace-nowrap">
                            <div className="flex items-center gap-8">
                                <div className="flex items-center gap-4 text-[#1b0d0f] dark:text-white cursor-pointer" onClick={() => navigate('/dashboard')}>
                                    <div className="size-8 text-primary">
                                        <span className="material-symbols-outlined text-3xl">local_dining</span>
                                    </div>
                                    <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] hidden sm:block">My Daily Lifestyle</h2>
                                </div>
                            </div>
                            <div className="flex flex-1 justify-end gap-4 sm:gap-8 items-center">
                                <label className="hidden sm:flex flex-col min-w-40 !h-10 max-w-64">
                                    <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                                        <div className="text-[#9a4c52] dark:text-[#d48c92] flex border-none bg-[#f3e7e8] dark:bg-[#3a2e30] items-center justify-center pl-4 rounded-l-lg border-r-0">
                                            <span className="material-symbols-outlined text-[24px]">search</span>
                                        </div>
                                        <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#1b0d0f] dark:text-white focus:outline-0 focus:ring-0 border-none bg-[#f3e7e8] dark:bg-[#3a2e30] focus:border-none h-full placeholder:text-[#9a4c52] dark:placeholder:text-[#d48c92] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal" placeholder="Search recipes..." defaultValue="" />
                                    </div>
                                </label>
                                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 ring-2 ring-white dark:ring-[#221012]" data-alt="User profile avatar" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA6eIfzbbTCnQn2uuG9wW4Gvvj1VLsVmJ_3S-xt9GKbbNQXF8gqEaoF2iRPwIb1kdsR9KzN52W656F_bQGfxbyJV2QQFp66IvS06Dhzzs4AySiHDWJVLBKHx1ZdMk2DIAMFRG36CxvcwOEQLr0KKV1YUb7Kog9wzqzxxq12ARKpv7a88iLvIpyqa-UjX10zxqKJ2tSAVOYKShNpFac_PVuWQYuujlN0LsedE5zFekluRH2bb5t4Y1jtTzUbQ_7VfsJ1OilxUOCGXC0G")' }}></div>
                            </div>
                        </header>
                    </div>
                </div>
            </div>
            <main className="flex-grow flex flex-col items-center w-full py-6 sm:py-8">
                <div className="w-full max-w-[960px] px-4 sm:px-10 flex flex-col gap-6">
                    <div className="flex flex-wrap items-center gap-2">
                        <a onClick={() => navigate('/recipes')} className="text-[#9a4c52] dark:text-[#d48c92] text-sm font-medium leading-normal hover:underline cursor-pointer">Recipes</a>
                        <span className="material-symbols-outlined text-[#9a4c52] dark:text-[#d48c92] text-sm">chevron_right</span>
                        <span className="text-[#1b0d0f] dark:text-white text-sm font-medium leading-normal">Nasi Goreng Spesial</span>
                    </div>
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
                    </div>
                    <div className="w-full">
                        <input checked={activeTab === 'ingredients'} readOnly className="hidden" id="tab-ingredients" name="recipe_tabs" type="radio" />
                        <input checked={activeTab === 'steps'} readOnly className="hidden" id="tab-steps" name="recipe_tabs" type="radio" />
                        <div className="tabs-header flex border-b border-gray-200 dark:border-gray-700 mb-8 sticky top-0 bg-background-light dark:bg-background-dark z-10 pt-2 transition-colors duration-300">
                            <label onClick={() => setActiveTab('ingredients')} className={`cursor-pointer py-3 px-6 text-base font-semibold border-b-2 transition-colors flex items-center gap-2 ${activeTab === 'ingredients' ? 'text-[#ec1325] border-[#ec1325]' : 'text-gray-500 dark:text-gray-400 border-transparent hover:text-gray-700 dark:hover:text-gray-200'}`} htmlFor="tab-ingredients">
                                <span className="material-symbols-outlined text-xl">grocery</span>
                                Bahan-bahan
                            </label>
                            <label onClick={() => setActiveTab('steps')} className={`cursor-pointer py-3 px-6 text-base font-semibold border-b-2 transition-colors flex items-center gap-2 ${activeTab === 'steps' ? 'text-[#ec1325] border-[#ec1325]' : 'text-gray-500 dark:text-gray-400 border-transparent hover:text-gray-700 dark:hover:text-gray-200'}`} htmlFor="tab-steps">
                                <span className="material-symbols-outlined text-xl">cooking</span>
                                Langkah Memasak
                            </label>
                        </div>
                        <div className="content-container min-h-[400px]">
                            {activeTab === 'ingredients' && (
                                <div className="tab-content animate-fade-in" id="content-ingredients">
                                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
                                                            <input className="custom-checkbox mt-1 w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary dark:bg-gray-800 dark:border-gray-600" type="checkbox" />
                                                            <div className="text-base text-gray-800 dark:text-gray-200 group-hover:text-primary transition-colors select-none">
                                                                {item}
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                                                <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 flex items-center gap-3">
                                                    <span className="material-symbols-outlined text-gray-400">add</span>
                                                    <input className="flex-1 bg-transparent border-none focus:ring-0 p-0 text-sm text-gray-800 dark:text-gray-200 placeholder:text-gray-400 focus:placeholder-primary/50" placeholder="Add new ingredient..." type="text" />
                                                    <button className="text-primary hover:text-red-700 font-medium text-sm transition-colors">Add</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="lg:col-span-1">
                                            <div className="sticky top-24 bg-white dark:bg-[#2a1a1c] p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
                                                <div className="flex flex-col h-full">
                                                    <h4 className="font-bold text-md mb-3 dark:text-white flex items-center gap-2">
                                                        <span className="material-symbols-outlined text-primary text-xl">sticky_note_2</span>
                                                        Catatan
                                                    </h4>
                                                    <textarea className="w-full p-3 bg-gray-50 dark:bg-[#1b0d0f] rounded-lg border-none focus:ring-2 focus:ring-primary/50 text-sm resize-none" placeholder="Add personal notes here (e.g. less salt)..." rows="6"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'steps' && (
                                <div className="tab-content animate-fade-in" id="content-steps">
                                    <div className="max-w-3xl">
                                        <h3 className="text-xl font-bold mb-6 dark:text-white">Instruksi Memasak</h3>
                                        <div className="space-y-8">
                                            {[
                                                {
                                                    step: 1,
                                                    title: "Persiapan Bahan",
                                                    desc: "Siapkan semua bahan. Pastikan nasi yang digunakan sudah dingin agar tidak lembek saat digoreng. Iris bawang merah dan cincang bawang putih."
                                                },
                                                {
                                                    step: 2,
                                                    title: "Tumis Bumbu",
                                                    desc: "Panaskan sedikit minyak goreng di wajan. Tumis bawang merah dan bawang putih hingga harum dan layu. Masukkan telur, buat orak-arik di sisi wajan, lalu aduk rata dengan bumbu."
                                                },
                                                {
                                                    step: 3,
                                                    title: "Goreng Nasi",
                                                    desc: "Masukkan nasi putih. Aduk rata dengan telur dan bumbu. Tambahkan kecap manis, garam, dan lada secukupnya. Aduk terus dengan api besar hingga bumbu meresap dan nasi agak kering."
                                                },
                                                {
                                                    step: 4,
                                                    title: "Sajikan",
                                                    desc: "Masukkan irisan daun bawang, aduk sebentar, lalu angkat. Sajikan nasi goreng spesial selagi hangat dengan pelengkap seperti kerupuk dan acar."
                                                }
                                            ].map((item) => (
                                                <div key={item.step} className="flex gap-4">
                                                    <div className="flex-shrink-0 size-8 sm:size-10 bg-primary/10 dark:bg-primary/20 text-primary rounded-full flex items-center justify-center font-bold text-lg">{item.step}</div>
                                                    <div className="space-y-2 pt-1">
                                                        <h4 className="font-bold text-lg dark:text-white">{item.title}</h4>
                                                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                                            {item.desc}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="mt-8 p-6 bg-gray-50 dark:bg-[#1b0d0f] rounded-xl border-2 border-dashed border-gray-200 dark:border-gray-700 hover:border-primary/50 transition-colors group">
                                            <h4 className="font-bold text-gray-500 dark:text-gray-400 mb-4 flex items-center gap-2 group-hover:text-primary transition-colors">
                                                <span className="material-symbols-outlined">add_circle</span> Add New Step
                                            </h4>
                                            <div className="space-y-4">
                                                <div>
                                                    <label className="sr-only">Step Title</label>
                                                    <input className="w-full rounded-lg border-gray-200 dark:border-gray-700 bg-white dark:bg-[#2a1a1c] font-bold text-gray-800 dark:text-white placeholder:font-normal placeholder:text-gray-400 text-sm focus:border-primary focus:ring-primary shadow-sm" placeholder="Step Title (e.g. Garnish)" type="text" />
                                                </div>
                                                <div>
                                                    <label className="sr-only">Step Narration</label>
                                                    <textarea className="w-full rounded-lg border-gray-200 dark:border-gray-700 bg-white dark:bg-[#2a1a1c] text-gray-600 dark:text-gray-300 text-sm focus:border-primary focus:ring-primary resize-none placeholder:text-gray-400 shadow-sm" placeholder="Step narration or description..." rows="3"></textarea>
                                                </div>
                                                <div className="flex justify-end">
                                                    <button className="px-4 py-2 bg-primary text-white text-sm font-bold rounded-lg shadow-sm hover:bg-red-700 transition-colors">Save Step</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-12 p-6 bg-primary/5 dark:bg-primary/10 rounded-xl flex items-center gap-4 border border-primary/20">
                                            <span className="material-symbols-outlined text-primary text-3xl">restaurant</span>
                                            <div>
                                                <h4 className="font-bold text-primary">Bon Appétit!</h4>
                                                <p className="text-sm text-gray-600 dark:text-gray-300">Don't forget to take a photo and save it to your lifestyle journal.</p>
                                            </div>
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
