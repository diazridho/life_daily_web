import { useState } from 'react';

function AddRecipeModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#111722]/60 backdrop-blur-sm animate-fade-in">
            <div className="relative w-full max-w-[560px] flex flex-col overflow-hidden rounded-xl bg-surface-light dark:bg-surface-dark shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 dark:border-[#324467]/30 max-h-[90vh]">
                {/* Modal Header */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 dark:border-[#324467]/30">
                    <h2 className="text-[#111722] dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">Add New Recipe</h2>
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
                        {/* Image Upload Section */}
                        <div className="flex flex-col gap-4">
                            <label className="text-[#111722] dark:text-white text-base font-bold leading-normal">Recipe Photo</label>

                            {/* Drag & Drop Area */}
                            <div className="flex flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed border-gray-200 dark:border-[#324467] bg-gray-50 dark:bg-[#111722]/30 px-6 py-8 transition-colors hover:border-primary/50 cursor-pointer group">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-2xl">cloud_upload</span>
                                </div>
                                <div className="flex flex-col items-center gap-1">
                                    <p className="text-[#111722] dark:text-white text-sm font-bold text-center">Upload Photo</p>
                                    <p className="text-gray-500 dark:text-[#92a4c9] text-xs font-normal text-center">SVG, PNG, JPG or GIF (max. 800x400px)</p>
                                </div>
                            </div>

                            {/* Separator */}
                            <div className="relative flex items-center">
                                <div className="flex-grow border-t border-gray-200 dark:border-[#324467]"></div>
                                <span className="flex-shrink-0 mx-4 text-gray-400 dark:text-gray-500 text-xs font-bold uppercase tracking-wider">Or</span>
                                <div className="flex-grow border-t border-gray-200 dark:border-[#324467]"></div>
                            </div>

                            {/* Image Link Input */}
                            <div className="flex flex-col gap-2">
                                <label className="text-[#111722] dark:text-white text-sm font-bold" htmlFor="image-link">Paste Image Link</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                                        <span className="material-symbols-outlined text-gray-400 text-[20px]">link</span>
                                    </div>
                                    <input
                                        className="flex w-full rounded-xl border border-gray-200 dark:border-[#324467] bg-white dark:bg-[#192233] text-[#111722] dark:text-white placeholder:text-gray-400 dark:placeholder:text-[#92a4c9] h-12 pl-11 pr-4 text-base focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-shadow"
                                        id="image-link"
                                        placeholder="https://example.com/image.jpg"
                                        type="url"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Recipe Name Input */}
                        <div className="flex flex-col gap-2">
                            <label className="text-[#111722] dark:text-white text-base font-bold leading-normal" htmlFor="recipe-name">Recipe Name</label>
                            <input
                                className="flex w-full rounded-xl border border-gray-200 dark:border-[#324467] bg-white dark:bg-[#192233] text-[#111722] dark:text-white placeholder:text-gray-400 dark:placeholder:text-[#92a4c9] h-12 px-4 text-base focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-shadow"
                                id="recipe-name"
                                placeholder="e.g. Grandma's Apple Pie"
                                type="text"
                            />
                        </div>

                        {/* Category Selection */}
                        <div className="flex flex-col gap-3">
                            <label className="text-[#111722] dark:text-white text-base font-bold leading-normal">Category</label>
                            <div className="flex flex-wrap gap-2">
                                <CategoryRadio label="Breakfast" value="breakfast" />
                                <CategoryRadio label="Dinner" value="dinner" defaultChecked />
                                <CategoryRadio label="Diet" value="diet" />
                                <CategoryRadio label="Dessert" value="dessert" />
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
                        Cancel
                    </button>
                    <button className="flex min-w-[84px] cursor-pointer items-center justify-center rounded-xl h-10 px-6 bg-primary text-white text-sm font-bold shadow-md shadow-primary/20 hover:bg-primary/90 transition-colors">
                        Add Recipe
                    </button>
                </div>
            </div>
        </div>
    );
}

function CategoryRadio({ label, value, defaultChecked }) {
    return (
        <label className="cursor-pointer">
            <input className="peer sr-only" name="category" type="radio" value={value} defaultChecked={defaultChecked} />
            <div className="rounded-lg border border-gray-200 dark:border-[#324467] bg-white dark:bg-[#192233] px-4 py-2 text-sm font-medium text-gray-600 dark:text-[#92a4c9] peer-checked:border-primary peer-checked:bg-primary peer-checked:text-white hover:bg-gray-50 dark:hover:bg-[#232f48] transition-all">
                {label}
            </div>
        </label>
    );
}

export default AddRecipeModal;
