
// this carries the heading on the dashboard import it to the dashboard layout

export default function Heading({title}: any) {
  return (
    <div>
      <h2 className='text-2xl font-semibold text-slate-50'>{title}</h2>
    </div>
  )
}
