import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EduFlow School ERP | The Future of School Management",
  description: 
    "Streamline your school operations with EduFlow's comprehensive ERP solution. Manage students, teachers, attendance, and more with ease.",
  keywords: [
    "school erp",
    "school management system",
    "student management",
    "attendance tracking",
    "education software",
    "school administration",
  ],
  authors: [{ name: "EduFlow" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://edufow-erp.vercel.app",
    siteName: "EduFlow School ERP",
    title: "EduFlow School ERP | The Future of School Management",
    description: 
      "Streamline your school operations with EduFlow's comprehensive ERP solution.",
  },
  twitter: {
    card: "summary_large_image",
    title: "EduFlow School ERP | The Future of School Management",
    description: 
      "Streamline your school operations with EduFlow's comprehensive ERP solution.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}
