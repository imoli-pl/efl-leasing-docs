export default defineEventHandler(async (event) => {
  const nav = await queryCollectionNavigation(event, 'sdk_docs')
  return JSON.stringify(nav, null, 2)
})
