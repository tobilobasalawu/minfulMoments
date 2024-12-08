import { SignUp } from "@clerk/nextjs";


export default function SignUpPage() {
  return (
    <div className="flex items-center justify-center min-h-screen font-inter">
      <SignUp
        appearance={{
          elements: {
            rootBox: "mx-auto",
            card: "shadow-none",
            formButtonPrimary: "w-[320px] h-[40px] bg-[#1814E4] text-background text-[14px] rounded-[4px] font-inter",
            formFieldInput: "!border-2 !border-gray-200 focus:!border-indigo-500 font-inter",
            footerActionLink: "!text-indigo-500 font-inter",
            socialButtonsBlockButton: "!border-gray-200 hover:!border-indigo-500 font-inter",
          },
          layout: {
            socialButtonsPlacement: "top",
          },
        }}
      />
    </div>
  );
}
