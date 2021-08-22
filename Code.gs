function doGet(request) {
  let QUERY = (request.parameter) ? request.parameter : null
  let PAGE = (QUERY && QUERY.page) ? QUERY.page : 'About'
  let TEMPLATE = HtmlService.createTemplateFromFile(PAGE) ; TEMPLATE.data = QUERY
  return TEMPLATE.evaluate().setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
}