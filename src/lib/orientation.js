export default (props) => {
  if(props.height > props.width){
    return 'portrait'
  } else {
    return 'landscape'
  }
}