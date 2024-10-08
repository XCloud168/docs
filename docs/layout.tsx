import Footer from "./footerx";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="custom_fullwidth">
      {children}
      <Footer />
    </div>
  );
}
