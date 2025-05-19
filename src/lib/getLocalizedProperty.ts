import { Property, Route, RoutePoint } from '@/types/api'

export function getLocalizedProperty(
  entity: Route | RoutePoint,
  property: 'name' | 'description' | 'audio',
  locale: string,
): string {
  // Determine the locale suffix (EN, ESP, IT)
  const localeSuffix = locale.toUpperCase()
  const localizedProperty = `${property}${localeSuffix}` as keyof typeof entity

  // Access the property and return its value
  const prop = entity[localizedProperty] as Property<string>
  return prop?.value || ''
}
