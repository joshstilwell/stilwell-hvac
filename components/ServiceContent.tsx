type ServiceContentProps = {
  body: string;
};

export function ServiceContent({ body }: ServiceContentProps) {
  return (
    <div className="prose prose-gray max-w-none">
      <p className="text-gray-700">{body}</p>
    </div>
  );
}
