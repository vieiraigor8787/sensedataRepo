import NextImage from 'next/image'
import PropTypes from 'prop-types'
import { useImage } from 'react-image'
import Skeleton from '@material-ui/lab/Skeleton';
import { FALLBACK_IMAGE } from '../../../constants/global'

export default function Image(props) {
  const { svg, Component, onClick, imageSrc, fallback = FALLBACK_IMAGE, variant, ...imageProps } = props
  const { src, isLoading } = useImage({
    srcList: [imageSrc, fallback],
    useSuspense: false
  })

  if (isLoading) return <Skeleton variant={variant} {...imageProps} />

  return (
    <>
     {svg ? (
        <Component onClick={onClick} />
     ) : (
        <NextImage onClick={onClick} src={src || FALLBACK_IMAGE} {...imageProps} />
     )}
    </>
  )
}

Image.propTypes = {
  svg: PropTypes.bool,
  imageSrc: PropTypes.string,
  variant: PropTypes.string,
  fallback: PropTypes.string,
  Component: PropTypes.object,
  onClick: PropTypes.func
}
