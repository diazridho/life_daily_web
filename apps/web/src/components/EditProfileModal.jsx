function EditProfileModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center px-4 sm:px-6 animate-fade-in font-display">
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity" onClick={onClose}></div>
            <div className="relative w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-surface-dark p-6 text-left shadow-2xl transition-all border border-gray-100 dark:border-gray-800 animate-scale-in">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-[#191011] dark:text-white">Edit Profile</h3>
                    <button
                        onClick={onClose}
                        className="text-[#8b5b5f] hover:text-primary transition-colors p-1 rounded-full hover:bg-background-light dark:hover:bg-white/5 cursor-pointer"
                    >
                        <span className="material-symbols-outlined">close</span>
                    </button>
                </div>

                <div className="space-y-6">
                    <div className="space-y-2">
                        <label className="block text-sm font-semibold text-[#191011] dark:text-gray-200">Profile photo</label>
                        <div className="flex flex-col sm:flex-row items-center gap-5 p-5 rounded-2xl bg-background-light dark:bg-[#332a2a] border border-dashed border-primary/40 group">
                            <div className="relative shrink-0">
                                <div className="size-24 rounded-full bg-cover bg-center border-4 border-white dark:border-surface-dark shadow-sm" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAXmMGHpwF1qv8EOv58bjHmzpFWid89rbgiKdYtUPsnuE0NqiqnVaZg7Ubovoav_WW2XjlEMMejexiaWsLhpTc7zZ8Xcpf4OCkp_a417Yeu_IODhH_V2cIdzPkZJ5Dzr6nVXeugqMuS5p40b_-FknHu8_uerReGF4Fvun_Vzo0COheFA8CAZ0_u9Cn5gZVMHjhuXZbvSYA-l6difWTAm3njtsi6SpnSh-ynjsU47w7FgvCVALYhvJHLJENFq1-ZT4K3ZKT8lhnzdQkx')" }}></div>

                            </div>
                            <div className="flex-1 w-full space-y-3">
                                <div className="flex gap-2">
                                    <button className="flex-1 flex items-center justify-center px-3 py-2 text-xs font-semibold text-[#191011] bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 rounded-lg hover:border-primary/50 hover:text-primary transition-colors shadow-sm gap-2 cursor-pointer">
                                        <span className="material-symbols-outlined !text-[16px]">cloud_upload</span>
                                        Upload
                                    </button>
                                </div>
                                <div className="relative">
                                    <input className="w-full pl-9 pr-3 py-2 text-xs bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-gray-400 text-[#191011] dark:text-white" placeholder="Copy image url..." type="text" />
                                    <span className="material-symbols-outlined absolute left-2.5 top-1.5 !text-[16px] text-gray-400">link</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-1.5">
                        <label className="block text-sm font-semibold text-[#191011] dark:text-gray-200">Name</label>
                        <div className="relative">
                            <input className="w-full pl-10 pr-4 py-3 bg-background-light dark:bg-[#332a2a] border-none ring-1 ring-gray-200 dark:ring-gray-700 rounded-xl focus:ring-2 focus:ring-primary/50 outline-none transition-all text-[#191011] dark:text-white font-medium" type="text" defaultValue="Sarah" />
                            <span className="material-symbols-outlined absolute left-3 top-3.5 !text-[20px] text-[#8b5b5f] opacity-50">person</span>
                        </div>
                    </div>

                    <div className="space-y-1.5">
                        <label className="block text-sm font-semibold text-[#191011] dark:text-gray-200">Bio</label>
                        <div className="relative">
                            <textarea className="w-full pl-10 pr-4 py-3 bg-background-light dark:bg-[#332a2a] border-none ring-1 ring-gray-200 dark:ring-gray-700 rounded-xl focus:ring-2 focus:ring-primary/50 outline-none transition-all text-[#191011] dark:text-white font-medium resize-none leading-relaxed" rows="3" defaultValue="Kamu cantik hari ini."></textarea>
                            <span className="material-symbols-outlined absolute left-3 top-3.5 !text-[20px] text-[#8b5b5f] opacity-50">format_quote</span>
                        </div>
                        <p className="text-xs text-[#8b5b5f] text-right">Max 50 characters</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-8 pt-2">
                    <button
                        onClick={onClose}
                        className="px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 text-[#191011] dark:text-white font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer"
                    >
                        Cancel
                    </button>
                    <button className="px-4 py-3 rounded-xl bg-primary hover:bg-primary-dark text-white font-semibold shadow-lg shadow-primary/20 transition-all transform active:scale-95 flex items-center justify-center gap-2 cursor-pointer">
                        <span>Save Changes</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default EditProfileModal;
