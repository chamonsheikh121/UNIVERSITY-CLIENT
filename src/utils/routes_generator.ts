import type { TFlattened_Route, TRoute_items } from "../types";

const routes_generator = (items: TRoute_items[]): TFlattened_Route[] => {
  const routes = items.reduce<TFlattened_Route[]>((acc, item) => {
    if (item?.element) {
      acc.push({
        path: item.path!,
        element: item.element,
      });
    }
    if (item.children) {
      acc.push(...routes_generator(item.children));
    }

    return acc;
  }, []);

  return routes;
};

export default routes_generator;
