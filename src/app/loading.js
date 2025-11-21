function loading() {
    return (
        <div
            className="fixed inset-0 h-screen 
                flex items-center justify-center bg-slate-200/20 z-50 backdrop-blur-xs">
            <div className="loader"></div>
        </div>
    );
}

export default loading;
