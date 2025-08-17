import { usePuterStore } from "~/lib/puter";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { FaFileSignature } from "react-icons/fa6";

export const meta = () => ([
    { title: 'Resumate | Auth' },
    { name: 'description', content: 'Log into your account' },
]);

const Auth = () => {
    const [isLoggingIn, setIsLoggingIn] = useState(false);
    const { isLoading, auth } = usePuterStore();
    const location = useLocation();
    const next = location.search.split('next=')[1];
    const navigate = useNavigate();

    useEffect(() => {
        if (auth.isAuthenticated) navigate(next || '/');
    }, [auth.isAuthenticated, next, navigate]);

    const getButtonText = () => {
        if (isLoggingIn && isLoading) return "Signing you in...";
        if (auth.isAuthenticated) return "Log Out";
        return "Login";
    };

    const handleClick = () => {
        if (isLoading) return;
        if (auth.isAuthenticated) {
            auth.signOut();
        } else {
            setIsLoggingIn(true);
            auth.signIn();
        }
    };
    

    return (
        <main className="bg-[#F5F5F5] min-h-screen flex items-center justify-center px-4 select-none cursor-default">
            <div className="w-full max-w-sm bg-[#FFFFFF] text-black rounded-lg shadow-xl p-6 border border-[#E5E7EB]">


                {/* Header */}
                <div className="flex flex-col items-center text-center mb-8">
                    <span className="flex items-center gap-1 text-lg font-semibold">
                        <FaFileSignature />
                        Resumate
                    </span>
                    <h2 className="p-4">Welcome</h2>
                    <p className="text-sm text-[#111827]">Login with your Puter account to Continue Your Job Journey</p>
                </div>

                {/* Button */}
                <div className="space-y-4">
                    <button
                        type="button"
                        className="w-full py-3 bg-[#111111] hover:bg-[#232323] font-semibold text-[#FFFFFF] rounded-md transition"
                        onClick={handleClick}
                        disabled={isLoading}
                    >
                        {getButtonText()}
                    </button>
                </div>
            </div>
        </main>
    );
};

export default Auth;
