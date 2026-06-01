import React from 'react';

type SectionLabelProps = {
  description: string;
  title: string;
};

export const SectionLabel = ({ description, title } : SectionLabelProps) => {
  return (
    <div className='flex flex-col gap-2'>
      <p className='text-primary'>{description}</p>
      <h2 className='text-4xl font-bold'>{title}</h2>
    </div>
  );
};
