import { NavLink } from "react-router-dom";
import type { TRoute_items, TSidebar } from "../types";




const generate_dynamic_sidebar = (items: TRoute_items[], role?: string): TSidebar[] => {
 
//  console.log("user role ", role)

  return items.reduce<TSidebar[]>((acc, item) => {
    // Leaf route
    if (item.path && item.element) {
      acc.push({
        key: item.name,
        label: <NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>,
      });
    }

    // Parent with children
    if (item.children && item.children.length > 0) {
      acc.push({
        key: item.name,
        label: item.name,
        children: generate_dynamic_sidebar(item.children, role)
      });
    }

    return acc;
  }, []);
};

export default generate_dynamic_sidebar;


// item.children.map((child) => ({
        //   key: child.name,
        //   label: child.path ? (
        //     <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>
        //   ) : (
        //     child.name
        //   ),
        // })),