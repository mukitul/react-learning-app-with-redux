// @ts-ignore
function AuthLayout({ children }) {
    return (
        <div className="h-screen bg-red-200">
            <div className="h-full w-full flex items-center justify-center flex-col">
                <div className="text-center ">
                    <div className="font-bold text-2xl">RED ON</div>
                </div>
                {children}
            </div>
        </div>
    );
}

export default AuthLayout;