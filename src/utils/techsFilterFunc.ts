import { techIcons } from './techsIcons'

export const techsNamesFilter = (techsNames: string[]) => {
  return techsNames.filter(techName => techIcons.hasOwnProperty(techName)) as [
    keyof typeof techIcons
  ]
}
