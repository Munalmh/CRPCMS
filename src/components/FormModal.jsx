export default function FormModal({ isOpen, onClose, title, children }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 py-6 px-4">
            <div className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
                <div className="flex items-center justify-between px-6 py-4 bg-white border-b border-slate-200 shrink-0">
                    <h2 className="text-lg font-bold text-slate-800">{title}</h2>
                    <button
                        onClick={onClose}
                        className="text-slate-400 hover:text-slate-700 text-2xl leading-none px-2"
                        aria-label="Close"
                    >
                        ×
                    </button>
                </div>
                <div className="p-2 overflow-y-auto">{children}</div>
            </div>
        </div>
    );
}