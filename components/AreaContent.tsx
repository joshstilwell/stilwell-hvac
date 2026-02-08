type AreaContentProps = {
  body: string;
};

export function AreaContent({ body }: AreaContentProps) {
  return (
    <div className="prose prose-gray max-w-none">
      <p className="text-gray-700">{body}</p>
    </div>
  );
}
