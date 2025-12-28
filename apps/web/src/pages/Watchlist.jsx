import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddMovieModal from '../components/AddMovieModal';

function Watchlist() {
    const navigate = useNavigate();
    const [showAddModal, setShowAddModal] = useState(false);

    return (
        <div className="bg-background-light dark:bg-background-dark text-[#111418] dark:text-white font-display min-h-screen flex flex-col overflow-x-hidden relative transition-colors duration-200">
            {/* Header */}
            <header className="flex items-center justify-between border-b border-solid border-[#e5e7eb] dark:border-[#232f48] px-4 py-4 md:px-10 lg:px-40 bg-background-light dark:bg-background-dark z-10 shrink-0 sticky top-0 backdrop-blur-sm bg-opacity-95 dark:bg-opacity-95 transition-colors duration-200">
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center justify-center p-2 text-[#111418] dark:text-white hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-colors cursor-pointer"
                >
                    <span className="material-symbols-outlined">arrow_back</span>
                </button>
                <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">MY CINEMA</h2>
                <button
                    onClick={() => navigate('/dashboard')}
                    className="flex items-center justify-center p-2 text-[#111418] dark:text-white hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-colors cursor-pointer"
                >
                    <span className="material-symbols-outlined">home</span>
                </button>
            </header>

            {/* Main Content Area */}
            <main className="flex-1 overflow-y-auto w-full flex justify-center">
                <div className="w-full max-w-[960px] px-4 md:px-10 lg:px-0 py-6 flex flex-col gap-6">
                    {/* Search Bar */}
                    <div className="w-full">
                        <label className="flex flex-col w-full h-12">
                            <div className="flex w-full flex-1 items-stretch rounded-xl h-full shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-transparent bg-white dark:bg-[#232f48] focus-within:ring-2 focus-within:ring-primary transition-all duration-200">
                                <div className="flex items-center justify-center pl-4 pr-2 text-gray-500 dark:text-[#92a4c9]">
                                    <span className="material-symbols-outlined">search</span>
                                </div>
                                <input className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-xl border-none bg-transparent py-2 px-2 text-base text-[#111418] dark:text-white placeholder-gray-500 dark:placeholder-[#92a4c9] focus:outline-none focus:ring-0" placeholder="Search movies..." />
                            </div>
                        </label>
                    </div>

                    {/* Tabs */}
                    <div className="border-b border-gray-200 dark:border-[#324467] transition-colors duration-200">
                        <div className="flex gap-8">
                            <button className="flex flex-col items-center justify-center border-b-[3px] border-primary pb-3 px-2 transition-colors cursor-pointer">
                                <p className="text-primary text-sm font-bold leading-normal tracking-[0.015em]">Watchlist</p>
                            </button>
                            <button className="flex flex-col items-center justify-center border-b-[3px] border-transparent pb-3 px-2 text-gray-500 dark:text-[#92a4c9] hover:text-[#111418] dark:hover:text-white transition-colors cursor-pointer">
                                <p className="text-sm font-bold leading-normal tracking-[0.015em]">Sudah Tonton</p>
                            </button>
                        </div>
                    </div>

                    {/* Grid Content */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 pb-24">
                        <MovieCard
                            title="Dune: Part Two"
                            genre="Sci-Fi"
                            image="https://lh3.googleusercontent.com/aida-public/AB6AXuCQ1OIGdsLJmyx-M8TKWSE31nJbwose6pNscaopr6-TpnOW-O9_zmQCkhP54ZAwZ2m-t7NqYSgKb2Xq4j7OGga5-GuSRF54yt5L8djmY8faRI-PaQmmNbtCcSlw8poEda4EGRZywj3v6XUw83fgXvbvSYHIfU0WBZib6rg0c44QuqeWKOm-JMMvQrRYJFod9CaAI2mttrpryIniarpbgXdXr3wwo_2ndQ9ewTwnWp5ti0ecufTL4c6SuvnH-8IPWo2qHyMUqC7cvic1"
                        />
                        <MovieCard
                            title="Oppenheimer"
                            genre="Drama/History"
                            image="https://lh3.googleusercontent.com/aida-public/AB6AXuAUl28Mb0wtXWFgjkd0cyp7MeRg9_7-ermduxDwY-Sv1FuInvHMkB6uh8kPFVKA7PreSEPTMnsWeR0vaE665Bn7McpLAuKd9PDCI5BUHdGzH20iIATaUtj9s-MHXyRcxP934zIp7KTrqgsQUUCQYUBCNXbyF37SjA1uSiTkPwgJDbw_Nq-ECfEBRSEWIhCW_lN7LtFw8bxuba8qpxoSDjeLtRGZa75MoOi0nz9YKZw2MxM4zKJy6Y2tXnSCPQtJgU776wPrwfB5U3u4"
                        />
                        <MovieCard
                            title="Barbie"
                            genre="Comedy"
                            image="https://lh3.googleusercontent.com/aida-public/AB6AXuC3InW6P7CVUkzgrjXIWu7lQOabHo6L8e0R8-MDL62aO3S6uciVFMAxogq0uy-kKuB3Z0Ehzacw8fzOGmbZYpmDnwFz1M_SjALjT5kffNuleDIcifnl1rlDPuq9CRFAs80C15a2Q7-Hz_bqgSuKXzKI4ftt8YcPOfb-1ncFhgPyURoUmFUzbfVXm7wPP4CrdVIWZ2uoBUaHxLPLo8-V4LPS5zFf-ubNv8ySfMWACmYO8vDXD4OIqFUcJHxSTIijCRdzGvCe-ZyHXnw_"
                        />
                        <MovieCard
                            title="Poor Things"
                            genre="Sci-Fi/Romance"
                            image="https://lh3.googleusercontent.com/aida-public/AB6AXuA-BO6s7-B3y2jUEh5QJ8xrP_hvzuxZYtEx7kTfwcNrrIUEbN6s1mIbVvdaH5sEORIYtVCXA4z4BWadWi3E3umSa8ihqJl6NxB9hwg5-lPMQchGUON9NbQ56RzPjB56_TMfRIDODXX1Xw1micWoG9tFqVVVx_ONMHgGIGsflgsCdEL8YeXNPwlNseivpwYlNF4i6hILVlGTKSvWLNSa0fsscxjy4Rtp4-SSExsj31bkFcsmjCiQds2H3OtOp80V2LyWZ9DFfDPfxRt1"
                        />
                        <MovieCard
                            title="Interstellar"
                            genre="Sci-Fi/Adventure"
                            image="https://lh3.googleusercontent.com/aida-public/AB6AXuBtfthnIKeAphX6nuhEgo0ClKUc4RrkdXevZ4BOjaCiDTiqHQZ5u6t7R88jHZwwbVYLCy5vt7ZG90egmnwyapSYn5ptSTdci2behLjgTrgDrg2Rov72uzvI05fNRao6G5UsXTPAQyxr5wxNCyT2BVcZXrkavu4tjddFnjXdx0pHXqnP-LIs783rPIAqyDrL9QankYWX_s4YuAIFnr3SQAWgdf2K1Gevj-Bd6c8LSsZI_q6NapCJHS7NbK1yu6PaDzmSN47sZldlwA2W"
                        />
                        <MovieCard
                            title="Grand Budapest Hotel"
                            genre="Comedy/Drama"
                            image="https://lh3.googleusercontent.com/aida-public/AB6AXuAohq6pu1aKYfL2ATS7QtBpsRjJG6UD84jZs25lQm9HWp_VawOzHn-0BwkyLU_wQbxtGVEqPd_8U8sraafp2gUsNT6NMf0_Y4iei3Zt2-kK_LttWI4GVpjalFndl5nXIAxTqkWr1fAz3I7QlJmkCFxj3M-xwvDjFo8z7sxqOObZd1mEH0PYdoQErF-gkRzEsYvQIntDzLb3ITUdl4ZqZ5OCmVq9QV_QoNtQzFemjHc8qaDpWwj7zMvPeXy3KMdtWlWl_BDHCQxTZP6M"
                        />
                    </div>
                </div>
            </main>

            {/* Floating Action Button */}
            <div className="absolute bottom-8 right-8 lg:right-[calc(50%-480px+2rem)] z-50">
                <button
                    onClick={() => setShowAddModal(true)}
                    className="flex items-center justify-center size-14 rounded-full bg-primary text-white shadow-lg shadow-primary/40 hover:scale-105 transition-transform cursor-pointer"
                >
                    <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>add</span>
                </button>
            </div>

            {/* Add Movie Modal */}
            <AddMovieModal isOpen={showAddModal} onClose={() => setShowAddModal(false)} />
        </div>
    );
}

function MovieCard({ title, genre, image }) {
    return (
        <div className="group flex flex-col gap-3 p-3 rounded-xl hover:bg-black/5 dark:hover:bg-[#1a2230] transition-all cursor-pointer">
            <div
                className="w-full aspect-[2/3] bg-center bg-no-repeat bg-cover rounded-xl shadow-md group-hover:shadow-xl transition-shadow relative overflow-hidden"
                style={{ backgroundImage: `url("${image}")` }}
            >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
            </div>
            <div className="flex flex-col gap-1">
                <p className="text-[#111418] dark:text-white text-base font-bold leading-tight truncate">{title}</p>
                <p className="text-gray-500 dark:text-[#92a4c9] text-xs font-medium uppercase tracking-wide">{genre}</p>
            </div>
            <button className="mt-auto w-full py-2 bg-primary/10 hover:bg-primary text-primary hover:text-white rounded-lg text-sm font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer">
                <span className="material-symbols-outlined text-[18px]">play_circle</span>
                Tonton
            </button>
        </div>
    );
}

export default Watchlist;
