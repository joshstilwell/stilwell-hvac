type AreaHeroProps = {
  heading: string;
  subheading: string;
};

export function AreaHero({ heading, subheading }: AreaHeroProps) {
  return (
    <div className="border-b border-border pb-8">
      <h1 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
        {heading}
      </h1>
      <p className="mt-2 text-lg text-muted-foreground">{subheading}</p>
    </div>
  );
}
