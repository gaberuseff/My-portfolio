function loading() {
    return (
        <div
            className="fixed inset-0 w-screen h-screen flex items-center justify-center bg-slate-200/30 z-[100] backdrop-blur-sm"
        >
            <div className="loader"></div>
        </div>
    )
}

export default loading
