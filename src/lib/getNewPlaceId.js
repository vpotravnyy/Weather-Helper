export default function getNewPlaceId (places) {

  const maxPlaceId = places.reduce((memo, el) => {
    return el.placeID > memo ? el.placeID : memo
  }, -1)
  
  const placeIdArray = places.reduce((memo, el) => {
    memo[el.placeID] = el.placeID
    return memo
  }, Array(maxPlaceId + 2).fill(-1))
  
  let newID
  placeIdArray.some((el, i) => {
    if(el < 0) newID = i
    return el < 0
  })
  return newID
}