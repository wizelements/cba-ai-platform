export const TechGrid = () => (
  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
    {['Next.js', 'Tailwind CSS', 'Stripe', 'OpenAI', 'Firebase', 'Supabase', 'Prisma', 'TypeScript'].map(tech => (
      <div key={tech} className="bg-gray-800 text-white py-2 px-4 rounded text-center">{tech}</div>
    ))}
  </div>
);