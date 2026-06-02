import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <div className='rounded-2xl border border-border bg-card p-6 flex flex-col gap-4 hover:border-primary/50 transition-colors duration-200'>
      <div className='w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0'>
        <Icon className='w-6 h-6 text-primary' />
      </div>
      <div className='flex flex-col gap-2'>
        <h3 className='text-lg font-semibold text-foreground'>{title}</h3>
        <p className='text-sm text-muted-foreground leading-relaxed'>{description}</p>
      </div>
    </div>
  );
};