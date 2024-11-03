import ClipLoader from "react-spinners/ClipLoader"

type SpinnerProps = {
  loading: boolean
}

const Spinner: React.FC<SpinnerProps> = ({ loading }) => {
  const override = {
    display: 'block',
    margin: '100px auto'
  }

  return (
    <ClipLoader color='#4338ca'
                loading={loading}
                cssOverride={override}
                size={150}
    />
  )
}

export default Spinner