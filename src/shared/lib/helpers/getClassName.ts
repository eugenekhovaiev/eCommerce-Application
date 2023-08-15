export default function getClassName(defaultClass: string, additionalClass: string | undefined): string {
  return additionalClass ? `${defaultClass} ${additionalClass}` : defaultClass;
}
