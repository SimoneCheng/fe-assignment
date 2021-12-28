function InfoFeature({ image, slogan, subtitle, content }) {
  return (
    <>
      {image ?
        <div className="w-52 xl:w-64 lg:w-56 pb-8">
          <img src={require(`${image}`)} className="mx-auto w-full rounded"></img>
          <h4 className="text-gray-400 text-center mt-5">{slogan}</h4>
          <h3 className="text-2xl text-center">{subtitle}</h3>
          <p className="mt-5">{content}</p>
        </div> :
        <div className="w-full px-10 flex-grow sm:w-1/2 md:w-1/4">
          <h4 className="text-gray-400 text-center mt-5">{slogan}</h4>
          <h3 className="text-2xl text-center">{subtitle}</h3>
          <p className="mt-5">{content}</p>
        </div>
      }
    </>
  )
}

export default InfoFeature;