const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <div className="flex justify-center mb-12">
    <h2 className="border-4 border-white px-8 py-3 text-xl font-bold tracking-[0.3em] uppercase text-white bg-black/20 backdrop-blur-sm">
      {children}
    </h2>
  </div>
);

export default SectionTitle;
