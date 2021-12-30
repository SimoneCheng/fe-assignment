function InfoFeature({ image, slogan, subtitle, content, color }) {
  return (
    <>
      {image ?
        <div className="w-52 xl:w-64 lg:w-56 pb-8">
          {console.log(color)}
          <img alt={subtitle} src={require(`${image}`)} className="mx-auto w-full rounded cursor-pointer"></img>
          <div className={`mx-auto w-[0] h-[0] border-solid border-[12px] border-l-transparent border-r-transparent border-b-transparent ${color}`}></div>
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