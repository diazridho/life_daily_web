function AddTaskModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#111722]/60 backdrop-blur-sm animate-fade-in">
            <div className="relative w-full max-w-[560px] flex flex-col overflow-hidden rounded-xl bg-surface-light dark:bg-surface-dark shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 dark:border-[#324467]/30 max-h-[90vh]">
                {/* Modal Header */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 dark:border-[#324467]/30">
                    <h2 className="text-[#111722] dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">Add New Task</h2>
                    <button
                        onClick={onClose}
                        aria-label="Close modal"
                        className="flex items-center justify-center w-8 h-8 rounded-full text-[#92a4c9] hover:bg-gray-100 dark:hover:bg-[#232f48] transition-colors cursor-pointer"
                    >
                        <span className="material-symbols-outlined">close</span>
                    </button>
                </div>

                {/* Modal Body */}
                <div className="flex-1 overflow-y-auto px-6 py-6">
                    <div className="flex flex-col gap-6">
                        {/* Task Name Input */}
                        <div className="flex flex-col gap-2">
                            <label className="text-[#111722] dark:text-white text-base font-bold leading-normal" htmlFor="task-name">Add Task</label>
                            <input
                                className="flex w-full rounded-xl border border-gray-200 dark:border-[#324467] bg-white dark:bg-[#192233] text-[#111722] dark:text-white placeholder:text-gray-400 dark:placeholder:text-[#92a4c9] h-12 px-4 text-base focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-shadow"
                                id="task-name"
                                placeholder="Ketik tugas..."
                                type="text"
                            />
                        </div>

                        {/* Priority Selection */}
                        <div className="flex flex-col gap-3">
                            <label className="text-[#111722] dark:text-white text-base font-bold leading-normal">Priority</label>
                            <div className="grid grid-cols-3 gap-3">
                                <PriorityRadio label="Urgent" value="urgent" color="red" />
                                <PriorityRadio label="Medium" value="medium" color="yellow" />
                                <PriorityRadio label="Santai" value="relaxed" color="green" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Modal Footer */}
                <div className="flex items-center justify-end gap-3 px-6 py-5 border-t border-gray-100 dark:border-[#324467]/30 bg-gray-50/50 dark:bg-[#1a2233]">
                    <button
                        onClick={onClose}
                        className="flex min-w-[84px] cursor-pointer items-center justify-center rounded-xl h-10 px-5 text-gray-600 dark:text-[#92a4c9] text-sm font-bold hover:bg-gray-100 dark:hover:bg-[#232f48] transition-colors"
                    >
                        Batal
                    </button>
                    <button className="flex min-w-[84px] cursor-pointer items-center justify-center rounded-xl h-10 px-6 bg-primary text-white text-sm font-bold shadow-md shadow-primary/20 hover:bg-primary/90 transition-colors">
                        Simpan
                    </button>
                </div>
            </div>
        </div>
    );
}

function PriorityRadio({ label, value, color }) {
    const colorClasses = {
        red: "hover:border-red-500/50 has-[:checked]:border-red-500 has-[:checked]:bg-red-50 dark:has-[:checked]:bg-red-900/10 has-[:checked]:ring-red-500",
        yellow: "hover:border-yellow-500/50 has-[:checked]:border-yellow-500 has-[:checked]:bg-yellow-50 dark:has-[:checked]:bg-yellow-900/10 has-[:checked]:ring-yellow-500",
        green: "hover:border-green-500/50 has-[:checked]:border-green-500 has-[:checked]:bg-green-50 dark:has-[:checked]:bg-green-900/10 has-[:checked]:ring-green-500"
    };

    return (
        <label className={`relative flex cursor-pointer rounded-xl border border-gray-200 dark:border-[#324467] bg-white dark:bg-[#192233] p-4 shadow-sm focus:outline-none has-[:checked]:ring-1 transition-all ${colorClasses[color] || ''}`}>
            <input className="sr-only" name="priority" type="radio" value={value} />
            <span className="flex w-full items-center justify-center gap-2">
                <span className={`h-2 w-2 rounded-full bg-${color}-500`}></span>
                <span className="text-sm font-medium text-[#111722] dark:text-white">{label}</span>
            </span>
        </label>
    );
}

export default AddTaskModal;
