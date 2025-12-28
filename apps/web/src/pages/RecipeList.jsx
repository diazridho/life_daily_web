import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddRecipeModal from '../components/AddRecipeModal';

function RecipeList() {
    const navigate = useNavigate();
    const [showAddModal, setShowAddModal] = useState(false);

    return (
        <div className="relative min-h-screen flex flex-col w-full overflow-x-hidden bg-background-light dark:bg-background-dark font-display text-text-main dark:text-white antialiased transition-colors duration-200">
            {/* Header */}
            <header className="sticky top-0 z-20 w-full bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-[#f1e9ea] dark:border-[#3a3a3a] px-4 py-3">
                <div className="max-w-5xl mx-auto flex items-center justify-between">
                    {/* Back Button */}
                    <button
                        onClick={() => navigate(-1)}
                        className="p-2 rounded-full hover:bg-[#f1e9ea] dark:hover:bg-[#3a3a3a] transition-colors text-text-main dark:text-white cursor-pointer"
                    >
                        <span className="material-symbols-outlined">arrow_back</span>
                    </button>
                    {/* Title */}
                    <h1 className="text-lg font-bold tracking-tight text-text-main dark:text-white uppercase">
                        My Recipes
                    </h1>
                    {/* Home Button */}
                    <button
                        onClick={() => navigate('/dashboard')}
                        className="p-2 rounded-full bg-[#f1e9ea] dark:bg-[#3a3a3a] text-text-main dark:text-white hover:bg-primary/20 transition-colors cursor-pointer"
                    >
                        <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>home</span>
                    </button>
                </div>
            </header>

            {/* Main Content Area */}
            <main className="flex-1 w-full max-w-5xl mx-auto flex flex-col px-4 sm:px-6 lg:px-8 py-6 pb-24">
                {/* Search Bar */}
                <div className="mb-6">
                    <label className="relative flex w-full items-center">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-text-muted">
                            <span className="material-symbols-outlined">search</span>
                        </div>
                        <input
                            className="w-full h-12 rounded-2xl bg-surface-light dark:bg-surface-dark border-transparent focus:border-primary focus:ring-2 focus:ring-primary/50 pl-11 pr-4 text-base text-text-main dark:text-white placeholder:text-text-muted shadow-sm transition-all"
                            placeholder="Search for pasta, cake, or salad..."
                            type="text"
                        />
                    </label>
                </div>

                {/* Category Chips */}
                <div className="mb-8">
                    <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2 mask-linear-fade">
                        {/* Active Chip */}
                        <button className="flex-shrink-0 h-9 px-5 rounded-full bg-primary text-[#191011] font-medium text-sm shadow-sm hover:brightness-105 transition-all cursor-pointer">
                            All
                        </button>
                        {/* Inactive Chips */}
                        {['Breakfast', 'Dinner', 'Diet', 'Dessert'].map((category) => (
                            <button key={category} className="flex-shrink-0 h-9 px-5 rounded-full bg-surface-light dark:bg-surface-dark border border-transparent hover:border-primary/30 text-text-main dark:text-white font-medium text-sm shadow-sm transition-all cursor-pointer">
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Recipe Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Recipe Items */}
                    <RecipeCard
                        title="Creamy Avocado Toast"
                        image="https://lh3.googleusercontent.com/aida-public/AB6AXuCmpH_rtz4JcomIovg90CCJ7yGlM8MRUQBINAITz6WRmNzMhrRIvOJRvZxK6SrT3EkOPVbVIPk0Bzz-4rn-hb83-OqKEBRhkUeiMA_hoWKD9-zYg2LdEfjk9BuifS_wuhw8YWf_3YKtza-3fEkDLzOyJg6Sdp--GxKIv-iXMVnCrqTVB0jFIqvVyLVomlFZPdbufyHitIus2_72K0q1vfzdtIn1LtZgqub0UY2ewxExi2SKFGF40ozNXNhjnD45XMC0LWG8-Tgq2ys5"
                        category="Breakfast"
                        tagColor="bg-primary/20"
                        tagTextColor="text-[#8b4b4f] dark:text-[#e8b5b9]"
                        isFavorite={false}
                    />
                    <RecipeCard
                        title="Lemon Herb Salmon"
                        image="https://lh3.googleusercontent.com/aida-public/AB6AXuA9Hr73McPPCE8wUjDM0PsbmducdWI-Es8bDx0G64dn9_ybesq7JEy3dsaWYSsRpZXlPn4vJAxskSSELgnNCjkTdCaf4Mct8Ak8ZrDLFzRtkbaYPS3Lew-kpoEFixUM3rpvmF9qbK0iUKiA8RJW-heYIRB9Iz85ITP3exQSWGsxlP9fVEYInvSQzifv1ZkRqpl28gjCze2m-XLg3nFI6R72V9rIL642iuogl_fYPg0HHERF-1feb0e-qjwhp2-zb1tid_kmP09Wwd0M"
                        category="Diet"
                        tagColor="bg-green-100 dark:bg-green-900/30"
                        tagTextColor="text-green-800 dark:text-green-300"
                        isFavorite={true}
                    />
                    <RecipeCard
                        title="Berry Smoothie Bowl"
                        image="https://lh3.googleusercontent.com/aida-public/AB6AXuDVG00XyTkNRrYUFESyXl8YmQ42Gm8QVK6OwlhpAHZksYM9_XgfMXB61TT1hhBUsxuORSUPDPLEWj23AkjIuvL_svwpB0DyRKyDKdJa-g_Q0iP5ViRwYWC80M1kd-8kV8LKX9VnMlhy2HJXqO1e-VUl_9OCeOox3W5gaMBjANOEfbx1OULSuyX1W8mxJ555UyN6s9_WC0GHu5Ko_nLYkHY-uSFHehxx9vb7CKRFUMZUXr4yfF-x66u6-VqYr6z_M2y6pUST9xMS1QLt"
                        category="Breakfast"
                        tagColor="bg-primary/20"
                        tagTextColor="text-[#8b4b4f] dark:text-[#e8b5b9]"
                        isFavorite={false}
                    />
                    <RecipeCard
                        title="Chicken Alfredo"
                        image="https://lh3.googleusercontent.com/aida-public/AB6AXuCCMBB-q1Z9iKmnzPY4P0UUiZGClWTzmY9iQtP53PcDZ9JuXH-EUkkZWnHK0MSWSVOBclEonDl9TY7pxW8TMFTeNaNqjcH9IZAxZXs-Uf6gQeEejocntAqND5Wow3cxVT6LOpp8KE_Y2D7tjmxszhLwDsXev0xXqU8BjwXos25xme2tXSmmqUQyqhPLmLplt6Ky90p6Z-NEvmL4NIloFUk__HxQaJMLVX7joDlr4VEpXmun-LEX2NuVF8qYgFscvTYbtldvS9i6NeAu"
                        category="Dinner"
                        tagColor="bg-orange-100 dark:bg-orange-900/30"
                        tagTextColor="text-orange-800 dark:text-orange-300"
                        isFavorite={false}
                    />
                    <RecipeCard
                        title="Chocolate Lava Cake"
                        image="https://lh3.googleusercontent.com/aida-public/AB6AXuAeaoklG_8cGrJ12ATnHNcFNr7GkwSDLh0Lza0zK7Wa0et-1K_ic-DT8O9BKHEc57IB0T3cACvLHQQxIDZZ02alRUGWBbYChAbO3wT2VULbHFw-eJvCxOhci5V6bhgHqpLe_4iHln9zEo6fRret5jyM-2VVS1H8TFIcOZN6dfVqQlHixJTFlJfBwoUCIIFuAJQX91-LGwSxgsnVWIueqpMviU9od6nhiSdhYAp_U6TemV5X5511QeBV_ogNjInyIHsqTWsZOm_ZHwoq"
                        category="Dessert"
                        tagColor="bg-pink-100 dark:bg-pink-900/30"
                        tagTextColor="text-pink-800 dark:text-pink-300"
                        isFavorite={true}
                    />
                    <RecipeCard
                        title="Caesar Salad"
                        image="https://lh3.googleusercontent.com/aida-public/AB6AXuCLUhN1qxtl2xKt5X9Z6aa3N3W6-s6UuCs482awsL8NZ8HeUb-nMzZcqrbXb4f6BqKlAcUA8iHoEmtibLdIpI1g5BAOqkNwzsGkU10cIrG9K8Y7HdRM4qnyn6e3-LP_96vfkgeW2rSh4qJDr8kJFdpSurP6ger9cQ07Xfk8qcnV8uSbO872gOHBjajOsFeFrKkXgBvygsKB_SKexH5szesjMG6jX5HS6bbkICrpT4DSmghuP5vnZPHJE9Xev6aWAaTK0eQLRzMznM_n"
                        category="Diet"
                        tagColor="bg-green-100 dark:bg-green-900/30"
                        tagTextColor="text-green-800 dark:text-green-300"
                        isFavorite={false}
                    />
                </div>
            </main>

            {/* Floating Action Button (FAB) */}
            <div className="fixed bottom-8 right-8 z-30">
                <button
                    onClick={() => setShowAddModal(true)}
                    aria-label="Add new recipe"
                    className="flex items-center justify-center w-14 h-14 bg-primary text-[#191011] rounded-full shadow-lg hover:shadow-xl hover:scale-105 hover:bg-[#e6aeb2] active:scale-95 transition-all duration-200 cursor-pointer"
                >
                    <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>add</span>
                </button>
            </div>

            {/* Overlay Gradient */}
            <div className="pointer-events-none fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background-light dark:from-background-dark to-transparent opacity-50 z-10"></div>

            {/* Add Recipe Modal */}
            <AddRecipeModal isOpen={showAddModal} onClose={() => setShowAddModal(false)} />
        </div>
    );
}

function RecipeCard({ title, image, category, time, tagColor, tagTextColor, isFavorite }) {
    const navigate = useNavigate();
    return (
        <div
            onClick={() => navigate('/recipes/1')}
            className="group relative flex flex-col bg-surface-light dark:bg-surface-dark rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
        >
            <div className="relative w-full aspect-[4/3] overflow-hidden">
                <div
                    className="w-full h-full bg-center bg-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url("${image}")` }}
                ></div>
                {/* Favorite Button Overlay */}
                <button className="absolute top-3 right-3 p-2 rounded-full bg-white/80 dark:bg-black/60 backdrop-blur-sm text-text-main dark:text-white hover:bg-primary hover:text-white transition-colors cursor-pointer">
                    <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                        {isFavorite ? 'favorite' : 'favorite_border'}
                    </span>
                </button>
            </div>
            <div className="p-4 flex flex-col gap-2">
                <div className="flex items-start justify-between">
                    <h3 className="text-base font-bold text-text-main dark:text-white leading-tight group-hover:text-primary transition-colors">
                        {title}
                    </h3>
                </div>
                <div className="flex items-center gap-3 mt-1">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-md ${tagColor} text-xs font-semibold ${tagTextColor}`}>
                        {category}
                    </span>
                    <div className="flex items-center text-text-muted text-xs font-medium">
                        <span className="material-symbols-outlined mr-1" style={{ fontSize: '14px' }}>schedule</span>
                        {time}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RecipeList;
