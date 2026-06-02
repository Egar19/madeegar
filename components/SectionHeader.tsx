interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => {
  return (
    <div className='flex flex-col items-center text-center gap-3'>
      <h2 className='text-3xl font-bold text-primary md:text-4xl'>{title}</h2>
      {subtitle && (
        <p className='max-w-xl text-muted-foreground'>{subtitle}</p>
      )}
    </div>
  );
};
