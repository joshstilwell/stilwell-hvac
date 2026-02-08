type AreaContentProps = {
  body: string;
};

export function AreaContent({ body }: AreaContentProps) {
  return (
    <div className="prose prose-gray max-w-none">
      <p className="text-muted-foreground">{body}</p>
    </div>
  );
}
