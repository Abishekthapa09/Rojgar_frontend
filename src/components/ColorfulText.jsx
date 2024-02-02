export default function ColorfulText({bg_color, color, padding, fontSize, fontWeight, borderRadius, text}) {

  return (
    <span style={{backgroundColor:`${bg_color}`, color:`${color}`, fontSize: `${fontSize}rem`, fontWeight: `${fontWeight}`, borderRadius: `${borderRadius}px`, padding: `${padding}`}}>
        {text}
    </span>
  )
}