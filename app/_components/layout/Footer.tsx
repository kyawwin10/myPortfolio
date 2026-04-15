export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-grey-blue-leaf/20 py-6 sm:mt-20 sm:py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-center sm:flex-row sm:gap-6 sm:px-6 sm:text-left lg:px-8">
        <p className="max-w-md break-words text-sm leading-6 text-[#eeeeee]">
          © {year}{" "}
          <span className="inline-block font-medium text-[#c8d4e8]">
            ZinMoeKyaw_Dev
          </span>
          <span className="block sm:inline">. All rights reserved.</span>
        </p>
        <p className="max-w-xs text-xs leading-5 text-[#eeeeee]/70 sm:text-right">
          Built with{" "}
          <span className="text-[#eeeeee]">Next.js</span> &amp;{" "}
          <span className="text-[#eeeeee]">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
}
