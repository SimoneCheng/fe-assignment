function InfoFeature({image, slogan, subtitle, content}) {
  return (
      <div className="w-full mt-10 flex-grow sm:w-1/2 md:w-1/4">
          {image && <img src={require(`${image}`)} className="mx-auto"></img>}
          <h4 className="text-gray-400 text-center mt-5">{slogan}</h4>
          <h3 className="text-1xl text-center">{subtitle}</h3>
          <p className="mt-5 px-10">{content}</p>
      </div>
  )
}

export default InfoFeature;