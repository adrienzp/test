const stats = [
  {
    value: "150+",
    label: "Restaurants accompagnés"
  },
  {
    value: "98%",
    label: "Clients satisfaits"
  },
  {
    value: "2M+",
    label: "Menus scannés"
  },
  {
    value: "50K+",
    label: "Réservations gérées"
  }
]

export function Stats() {
  return (
    <section className="py-16 sm:py-24 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl sm:text-5xl font-bold tracking-tight">
                {stat.value}
              </p>
              <p className="mt-2 text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
