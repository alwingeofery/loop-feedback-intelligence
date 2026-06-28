// Generic pagination helper for API responses and list pages.
export function createPagination(page = 1, pageSize = 20) {
  return {
    page,
    pageSize,
    skip: (page - 1) * pageSize,
    take: pageSize
  };
}

