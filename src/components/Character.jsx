import Loading from './Loading'

const Character = ({character, loading, error, name, img}) => {
  return (
    <>
      {loading && <Loading />}
      {error && <p>{error}</p>}
      { character && (
        <>
          <h2>{name}</h2>
          <img src={img} alt={name} />
        </>
      )

      }
    </>
  )
}

export default Character