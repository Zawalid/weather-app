import City from './City';

export default function Cities({ type }) {
  return (
    <div className={`flex gap-3 ${type === 2 ? 'flex-wrap' : 'flex-col'}`}>
      <City name='London' time='10:00' temperature='20' type={type} />
      <City name='Rome' time='10:00' temperature='25' type={type} />
      <City name='Paris' time='10:00' temperature='21' type={type} />
      {/* <City name='Berlin' time='10:00' temperature='19' type={type} /> */}
      {/* <City name='New York' time='10:00' temperature='22' type={type} /> */}
      {/* <City name='Tokyo' time='10:00' temperature='20' type={type} /> */}
      {/* <City name='Moscow' time='10:00' temperature='20' type={type} /> */}
    </div>
  );
}
