export default {
  sumCount: (state) => {
   return state.cates.reduce((total, item) =>  {
      return total += item.number
    },0)
  }
}