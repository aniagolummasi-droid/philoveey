function AnalyticsCard({ label, value }) {
  return (
    <article className="analytics-card">
      <span>{label}</span>
      <strong>{value}</strong>
    </article>
  )
}

export default AnalyticsCard
