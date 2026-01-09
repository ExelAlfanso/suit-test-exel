import api from "../lib/axios";

export async function fetchIdeas(
  page: string,
  size: string | number,
  sort: string
) {
  const res = await api.get("/ideas", {
    params: {
      "page[number]": page,
      "page[size]": size,
      sort,
      "append[]": ["small_image", "medium_image"],
    },
  });

  return res.data;
}
