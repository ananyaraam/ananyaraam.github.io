const TOTAL_CHARACTERS = 30
const INNER_ANGLE = 360 / 30
const LENGTH_OF_SIDE = 1 // 1ch
const RADIUS = LENGTH_OF_SIDE /
  Math.sin(INNER_ANGLE / (180 / Math.PI))

const TextRing = (text) => {
  const CHARS = text.split('')
  const INNER_ANGLE = 360 / CHARS.length
  return (
    <span
      className="text-ring"
      style={{
        '--total': CHARS.length,
        '--radius': 1 / Math.sin(INNER_ANGLE / (180 / Math.PI))
      }}
    >
      {CHARS.map((char, index) => (
        <span style={{'--index': index }}>
          {char}
        </span>
      ))}
    </span>
  )
}
