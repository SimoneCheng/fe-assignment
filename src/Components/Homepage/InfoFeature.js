function InfoFeature({image, slogan, subtitle, content}) {
  return (
      <div>
          {image && <img src={require(`${image}`)}></img>}
          <h4>{slogan}</h4>
          <h3>{subtitle}</h3>
          <p>{content}</p>
      </div>
  )
}

export default InfoFeature;