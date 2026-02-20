import SignInForm from '@/components/auth/SignInForm'

export default function SignInPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-navy-deep relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-gold/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-navy-light/30 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 w-full flex justify-center px-4">
                <SignInForm />
            </div>
        </div>
    )
}
