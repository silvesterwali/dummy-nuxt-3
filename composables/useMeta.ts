export default function(totalPage:number=20){
  const page=ref<number>(1)
  const limit=ref<number>(20)
  const pageSize=ref<number>(totalPage)
  return {
    page,
    pageSize,
    limit
  }
}