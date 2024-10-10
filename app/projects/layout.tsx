const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-full bg-black-100">
      <span className="text-black-100">.</span>
      {children}
    </div>
  );
};

export default Layout;
