import Navbar from "@/components/layout/Navbar";

type Props = {
  children: React.ReactNode;
};

export default function AuthLayout({ children }: Props) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
