import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <div className="max-w-[1200px] w-full px-8 relative mb-8 min-h-screen">
      {children}
    </div>
  );
}

export default Layout;
