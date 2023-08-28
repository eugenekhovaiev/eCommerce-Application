export default function getFullClassName(defaultClass: string, additionalClass: string | undefined): string {
  return additionalClass ? `${defaultClass} ${additionalClass}` : defaultClass;
}
