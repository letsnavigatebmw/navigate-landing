export default function HeroHeading({ children }) {
  return (
    <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-white">
      {children}
    </h1>
  )
}
