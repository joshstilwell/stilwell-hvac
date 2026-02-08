type ServiceHeroProps = {
  heading: string;
  subheading: string;
};

export function ServiceHero({ heading, subheading }: ServiceHeroProps) {
  return (
    <div className="border-b border-gray-200 pb-8">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        {heading}
      </h1>
      <p className="mt-2 text-lg text-gray-700">{subheading}</p>
    </div>
  );
}
