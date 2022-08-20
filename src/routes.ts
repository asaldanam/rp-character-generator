import { lazy } from "react";

const Character = lazy(() => import(/* webpackChunkName: "character" */ './modules/Character'))
const ItemCreator = lazy(() => import(/* webpackChunkName: "character" */ './modules/ItemCreator'))

export const routes = {
  '/character/:id': {
    component: Character
  },
  '/character': {
    component: Character
  },
  'item': {
    component: ItemCreator
  },
  'item/:seed': {
    component: ItemCreator
  }
}