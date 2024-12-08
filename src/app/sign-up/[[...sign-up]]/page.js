import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Header />
      <SignUp
        appearance={{
          elements: {
            rootBox: "mx-auto",
            card: "shadow-none",
            formButtonPrimary: "!bg-indigo-500 hover:!bg-indigo-600",
            formFieldInput: "!border-2 !border-gray-200 focus:!border-indigo-500",
            footerActionLink: "!text-indigo-500",
            socialButtonsBlockButton: "!border-gray-200 hover:!border-indigo-500",
          },
          layout: {
            socialButtonsPlacement: "top",
          },
        }}
      />
    </div>
  );
}
