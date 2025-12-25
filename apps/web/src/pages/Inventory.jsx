import { useNavigate } from 'react-router-dom';

function Inventory() {
    const navigate = useNavigate();

    return (
        <div className="bg-background-light dark:bg-background-dark text-[#1b0d0f] dark:text-[#ececec] font-display min-h-screen flex flex-col overflow-x-hidden transition-colors duration-200">
            <div className="layout-container flex h-full grow flex-col">
                <header className="sticky top-0 z-50 bg-surface-light/95 dark:bg-surface-dark/95 backdrop-blur-sm border-b border-[#f3e7e8] dark:border-[#3e2a2c] transition-colors duration-200">
                    <div className="flex items-center justify-between px-4 py-3 md:px-10 max-w-[960px] mx-auto w-full">
                        <button
                            onClick={() => navigate(-1)}
                            className="flex items-center gap-2 text-text-main-light dark:text-text-main-dark hover:text-primary transition-colors cursor-pointer"
                        >
                            <span className="material-symbols-outlined">arrow_back_ios_new</span>
                            <span className="text-sm font-medium hidden sm:block">Back</span>
                        </button>
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary">brush</span>
                            <h2 className="text-lg font-bold tracking-tight">MY VANITY</h2>
                        </div>
                        <button
                            onClick={() => navigate('/dashboard')}
                            className="flex items-center justify-center p-2 rounded-lg bg-[#f3e7e8] dark:bg-[#3e2a2c] hover:bg-[#eaddde] dark:hover:bg-[#4e3a3c] transition-colors text-text-main-light dark:text-text-main-dark cursor-pointer"
                        >
                            <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>home</span>
                        </button>
                    </div>
                </header>
                <main className="flex-1 flex flex-col items-center w-full">
                    <div className="layout-content-container flex flex-col max-w-[960px] w-full flex-1 px-4 md:px-10 py-6">
                        <nav className="mb-8">
                            <div className="flex border-b border-[#e7cfd1] dark:border-[#3e2a2c]">
                                <a className="flex flex-1 flex-col items-center justify-center border-b-[3px] border-primary pb-3 pt-2 group cursor-pointer transition-colors" href="#">
                                    <p className="text-primary text-sm font-bold tracking-[0.015em]">Products</p>
                                </a>
                            </div>
                        </nav>
                        <div className="flex justify-between items-center mb-6 px-1">
                            <p className="text-sm text-[#9a4c52] dark:text-[#d1a3a6] font-medium">12 Items Found</p>
                            <button className="flex items-center gap-1 text-sm text-primary font-medium hover:underline cursor-pointer">
                                <span>Sort by Expiry</span>
                                <span className="material-symbols-outlined text-[16px]">sort</span>
                            </button>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 pb-20">
                            <ProductCard
                                title="Ruby Woo"
                                brand="MAC Cosmetics"
                                image="https://lh3.googleusercontent.com/aida-public/AB6AXuAdHN3v_MzxfgqoBoIAwRyneAtcYkkvkuLZVQYBrww2feL_TT1d72GS6rAJNG0nae8zH_52ssupcFHnbfvicfi9i1VgSkxU2n_lfzm-gOKrDVjrebNOJAVtChZcnuIzH8WA8PfE_YK5PYJPUgE6YbfxJ3ZYJzBLi838PukrKBv7iGQhyfiEOCuCE06jnlGhawmyAZ9ABLISlFWmLyLAInHaluNm8hDIP-8juLWhrWOgDX_mHmdqDcjOzTcM1jFJEUcLTqxEh1l1Uw9d"
                                icon="edit"
                            />
                            <ProductCard
                                title="Lash Paradise"
                                brand="L'Oréal"
                                image="https://lh3.googleusercontent.com/aida-public/AB6AXuA_Zr6BV97kwgDk157DkbRQMyHCccr3jqJp7kdjbhXzLz79iyaBV2NTwEseVqSd2uWcycUpGHBWy8HIUanuoZ68KwpLePGwRqSJPZlBh8JJnckFcrbFv1skFu5Kwb0SVpbGTPQUw2nGa4lVnZLvMXWw8GyAnCyFwedxOD_AJ1jGpUA3hsGuPMR9NlFUuWh3C23AuROfcMWnp2ERm-B4JzzcZ7nhH1ciDzpGCnYHwZybVVdTYCjYL69QiC737CJbFaQYjovhkWP6BESb"
                                icon="edit"
                            />
                            <ProductCard
                                title="Pro Filt'r"
                                brand="Fenty Beauty"
                                image="https://lh3.googleusercontent.com/aida-public/AB6AXuD0z1NSo9CAcxBHkPch-HV9D7AAbRbC2cehXcKaPQx6T74Z2BJnGAV_qcSipWHm97EULLsguCHUuPyVG_L6oGsiFFLemFDNZrd5T0djqxhMbId7VvF_p_ivJ-mbIT70iZczPmbYiJCX4COfhLMBe4Y2sp2UNCCksZmb6GLhIOSw6Dy2KEhuXXHrL4XNlTlf_71oAvCnOTdK9j5Ts9jgu3WbuDLFnvYAdT2B7qGuw2fCcUGYLmXj4yEjE8Y65SszrBFFKVWZ3mgdjt5i"
                                icon="delete"
                                grayscale
                            />
                            <ProductCard
                                title="Naked Palette"
                                brand="Urban Decay"
                                image="https://lh3.googleusercontent.com/aida-public/AB6AXuC6CbTIOhlNZw1o1Y5VGqAxwpTers98ytj-6zzavRq_4--TesopHAAp74wCB90OTNaEhcToSl2z5TPYCdbOUz5UCkwXlzFx7y7T0TJJsz2XymdsZg_g6rrb-3q-SYo-2tkc2ekwwlgNwFYn1Fpv1zyfWxOgqlG9VmuouyDqdkS49SX3NUwCg2lMV2XMCSMbBI3KGkpCzcgUWjgiqVcKDBhmNL9haJpJxwv4RZwCdAanaylOe0BOC3c8sCQQPWzPWpU7lEE6n-kCVcst"
                                icon="edit"
                            />
                            <ProductCard
                                title="Orgasm Blush"
                                brand="NARS"
                                image="https://lh3.googleusercontent.com/aida-public/AB6AXuAxdWI_K3jbtsfr5nSLUaHnevLuMR9nHZyYDj2GSb3jB-o1kfX8Q0BYn6H8N6s-SzeFuOuFH-6nvdtcw-o_Mos9zGCz-mfiCGjqWSrlFe-rQdIkAh8T1DzFM9Qu-hwT6f9KbTvmeaOsN6VZIkB7yu7eqM9Z5lBH6W1N8o6zoGY5ivkkNNnrESMNMPsRk5yiBCHNoDktmXVDbomo8tuzX_-icgXBhC61mxH5f9XTocsOYmyrwhZFgTAA0eToBkUNliJzMZFIIMMs6iGr"
                                icon="edit"
                            />
                            <ProductCard
                                title="Shape Tape"
                                brand="Tarte"
                                image="https://lh3.googleusercontent.com/aida-public/AB6AXuBL2NsdeXYAh-R2fK36O5p2RFZLFqgngIkbVDbp-jRQwccmCUQuQFo659eNTefi_jPx0j-QUaeFzn8mbIdeM7GZTzZPUncDl821Iw3NIieW0pDqFJkcZayrJHzoKP_eBJqPoGn_KBKRuO6VtOGTHAAMZ50qyHygJ3w5igOrcSqYvNTXVysJ6DyyDKztKgop7oG4yyAf6Oh-ntdgP1kMxHbuFONK5nC612uoeBibz0anyUHUP7UobF8zYLuUAaNY7ojEvfQBDEKIH4Km"
                                icon="edit"
                            />
                        </div>
                    </div>
                </main>
                <div className="fixed bottom-6 right-6 md:right-10 md:bottom-10 z-50">
                    <button className="group flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/40 hover:scale-110 hover:shadow-primary/60 transition-all duration-300 cursor-pointer">
                        <span className="material-symbols-outlined text-[28px] transition-transform group-hover:rotate-90">add</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

function ProductCard({ title, brand, image, icon, grayscale }) {
    return (
        <div className="group relative flex flex-col bg-surface-light dark:bg-surface-dark rounded-xl border border-transparent hover:border-primary/20 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden cursor-pointer">
            <div className="relative w-full aspect-[4/3] bg-gray-100 dark:bg-[#3e2a2c] overflow-hidden">
                <div
                    className={`w-full h-full bg-center bg-cover transition-transform duration-500 group-hover:scale-105 ${grayscale ? 'grayscale' : ''}`}
                    style={{ backgroundImage: `url("${image}")` }}
                ></div>
            </div>
            <div className="p-4 flex flex-col gap-1">
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="text-[#1b0d0f] dark:text-[#ececec] text-lg font-bold leading-tight">{title}</h3>
                        <p className="text-[#9a4c52] dark:text-[#d1a3a6] text-sm">{brand}</p>
                    </div>
                    <span className="material-symbols-outlined text-[#9a4c52] dark:text-[#d1a3a6] group-hover:text-primary transition-colors">{icon}</span>
                </div>
            </div>
        </div>
    );
}

export default Inventory;
