import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      {/* Main Content */}
      <div className="flex flex-1">
        <div className="hidden lg:flex items-center justify-center bg-black w-1/2 px-12">
          <div className="max-w-md space-y-6 text-center text-primary-foreground">
            <h1 className="text-4xl font-extrabold tracking-tight">
              Welcome to Shopify
            </h1>
            <p className="text-lg font-semibold">
              The best place to shop online
            </p>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-4">
        <p className="text-sm text-cyan-500">&copy; 2025 Yash Nayan. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default AuthLayout;
